import express from 'express';
import n8nService from '../services/n8n.service.js';
import Campaign from '../models/campaign.model.js';

const router = express.Router();

// n8n sentiment analysis webhook
router.post('/n8n/sentiment', async (req, res) => {
  try {
    const data = n8nService.processSentimentWebhook(req.body);
    
    // Update campaign stats with sentiment data
    await Campaign.findOneAndUpdate(
      { manyreachCampaignId: data.campaignId },
      {
        $set: {
          'stats.engaged': data.engaged,
          'stats.positive': data.positive,
          'stats.lastSync': data.timestamp
        }
      }
    );

    res.json({ success: true, message: 'Sentiment data received' });
  } catch (error) {
    console.error('Webhook Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Manyreach webhook (for real-time updates)
router.post('/manyreach/events', async (req, res) => {
  try {
    const { event, campaignId, data } = req.body;

    console.log('Manyreach Event:', event, campaignId);

    // Handle different event types
    switch (event) {
      case 'reply_received':
      case 'meeting_booked':
      case 'prospect_contacted':
        // Trigger sentiment analysis via n8n
        await n8nService.analyzeSentiment(data);
        break;
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Manyreach Webhook Error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
