const express = require('express');
const multer = require('multer');
const router = express.Router();
const { supabaseService } = require('../../config/supabase');
const { parseSendersCSV } = require('../../services/csvService');
const n8nService = require('../../services/n8nService');

// Memory storage for CSV (small files only)
const upload = multer({ storage: multer.memoryStorage() });

router.get('/warmup', async (req, res) => {
  try {
    const { data, error } = await supabaseService
      .from('senders')
      .select('*')
      .eq('status', 'warmup')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    // Add warmup days calculation
    const today = new Date();
    const sendersWithDays = data.map(sender => ({
      ...sender,
      warmup_days: Math.floor((today - new Date(sender.created_at)) / (1000 * 60 * 60 * 24))
    }));

    res.json({
      warmup_senders: sendersWithDays,
      ready_for_check: sendersWithDays.filter(s => s.warmup_days >= 6)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/upload', upload.single('csv'), async (req, res) => {
  try {
    const { org_id } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ error: 'CSV file required' });
    }

    const { senders, count } = await parseSendersCSV(req.file.buffer, org_id);
    
    // Bulk insert senders
    const { data, error } = await supabaseService
      .from('senders')
      .insert(senders);

    if (error) throw error;

    // Trigger n8n warmup workflow
    await n8nService.triggerSenderWarmup(org_id, senders.map(s => s.email));

    res.json({
      message: `Uploaded ${count} senders. Warmup workflow triggered.`,
      count,
      org_id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:senderId/health', async (req, res) => {
  try {
    const { senderId } = req.params;
    const { health } = req.body;
    
    const { data, error } = await supabaseService
      .from('senders')
      .update({ 
        health,
        status: health >= 90 ? 'free' : 'warmup',
        updated_at: new Date().toISOString()
      })
      .eq('id', senderId)
      .select()
      .single();

    if (error) throw error;

    res.json({
      message: `Sender health updated to ${health}%`,
      sender: data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
