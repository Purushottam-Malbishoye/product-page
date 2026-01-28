const express = require('express');
const router = express.Router();
const n8nService = require('../../services/n8nService');
const { supabaseService } = require('../../config/supabase');

router.get('/pending', async (req, res) => {
  try {
    // PA sees ALL pending campaigns across ALL orgs
    const { data, error } = await supabaseService
      .from('campaign_requests')
      .select(`
        *,
        orgs!inner(name),
        profiles!created_by(name)
      `)
      .eq('status', 'requested')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({
      pending_campaigns: data || [],
      count: data?.length || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:campaignId/approve', async (req, res) => {
  try {
    const { campaignId } = req.params;
    const { assign_senders } = req.body; // Array of sender IDs

    // Update campaign status
    const { data: campaign, error } = await supabaseService
      .from('campaign_requests')
      .update({ 
        status: 'approved',
        approved_by: req.user?.email || 'PA',
        sender_ids: assign_senders,
        updated_at: new Date().toISOString()
      })
      .eq('id', campaignId)
      .select()
      .single();

    if (error) throw error;

    // Trigger n8n workflow
    await n8nService.triggerCampaignApproved(campaignId, campaign.org_id);

    res.json({
      message: 'Campaign approved! n8n workflow triggered.',
      campaign
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
