import manyreachService from '../services/manyreach.service.js';
import Campaign from '../models/campaign.model.js';

export const getEmails = async (req, res) => {
  try {
    const { campaignId, status, page = 1, limit = 50 } = req.query;

    let manyreachCampaignId;

    if (campaignId) {
      const campaign = await Campaign.findOne({
        _id: campaignId,
        userId: req.user._id
      });

      if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }

      manyreachCampaignId = campaign.manyreachCampaignId;
    }

    const emails = await manyreachService.getEmails(manyreachCampaignId, {
      status,
      page,
      limit
    });

    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEmailById = async (req, res) => {
  try {
    // Implementation for fetching individual email details
    res.json({ message: 'Email details endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
