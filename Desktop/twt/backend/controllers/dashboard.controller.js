import analyticsService from '../services/analytics.service.js';

export const getDashboardStats = async (req, res) => {
  try {
    const stats = await analyticsService.getDashboardStats(req.user._id);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFunnelData = async (req, res) => {
  try {
    const stats = await analyticsService.getDashboardStats(req.user._id);
    res.json({ funnel: stats.funnel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
