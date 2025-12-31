import manyreachService from '../services/manyreach.service.js';
import analyticsService from '../services/analytics.service.js';
import Campaign from '../models/campaign.model.js';

export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ userId: req.user._id });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    const analytics = await analyticsService.getCampaignAnalytics(
      campaign.manyreachCampaignId
    );

    res.json({ ...campaign.toObject(), analytics });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCampaign = async (req, res) => {
  try {
    const { name, manyreachCampaignId } = req.body;

    const campaign = await Campaign.create({
      userId: req.user._id,
      name,
      manyreachCampaignId
    });

    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const syncCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    const stats = await manyreachService.getCampaignStats(
      campaign.manyreachCampaignId
    );

    campaign.stats = {
      ...stats,
      lastSync: new Date()
    };

    await campaign.save();
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
