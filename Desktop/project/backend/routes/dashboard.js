const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const checkPaidStatus = require('../middleware/checkPaidStatus');
const manyreachService = require('../services/manyreachService');

router.get('/analytics', auth, checkPaidStatus, async (req, res) => {
  try {
    const stats = await manyreachService.getCampaignStats(req.user.org_id);
    
    if (!stats) {
      return res.json({
        total_sent: 0,
        engagement_rate: 0,
        positive_replies: 0,
        meetings_booked: 0,
        spam_rate: 0
      });
    }

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Analytics fetch failed' });
  }
});

router.get('/threads/:campaignId', auth, checkPaidStatus, async (req, res) => {
  try {
    const threads = await manyreachService.getEmailThreads(
      req.params.campaignId, 
      100
    );
    
    res.json({ threads });
  } catch (error) {
    res.status(500).json({ error: 'Threads fetch failed' });
  }
});

module.exports = router;
