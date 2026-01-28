const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const checkPaidStatus = require('../middleware/checkPaidStatus');
const { supabaseService } = require('../config/supabase');

router.post('/request', auth, checkPaidStatus, async (req, res) => {
  try {
    const userId = req.user.id;
    const orgId = req.user.org_id;
    
    if (!orgId) {
      return res.status(400).json({ error: 'Complete profile first' });
    }

    const campaignData = {
      org_id: orgId,
      name: req.body.name,
      data_source: req.body.data_source || 'upload',
      csv_file_url: req.body.csv_file_url,
      apollo_url: req.body.apollo_url,
      industries: req.body.industries || [],
      departments: req.body.departments || [],
      personas: req.body.personas || [],
      prospects_count: req.body.prospects_count || 0,
      created_by: userId,
      status: 'requested' // OA creates → PA must approve
    };

    const { data, error } = await supabaseService
      .from('campaign_requests')
      .insert(campaignData)
      .select()
      .single();

    if (error) throw error;

    res.json({ 
      message: 'Campaign created! You will be notified when Senders are warmed up.',
      campaign: data 
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', auth, checkPaidStatus, async (req, res) => {
  try {
    const { data, error } = await supabaseService
      .from('campaign_requests')
      .select(`
        *,
        profiles!created_by(name)
      `)
      .eq('org_id', req.user.org_id);

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
