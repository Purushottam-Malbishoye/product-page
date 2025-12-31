import manyreachService from './manyreach.service.js';
import n8nService from './n8n.service.js';
import Campaign from '../models/campaign.model.js';

class AnalyticsService {
  async getDashboardStats(userId) {
    try {
      // Fetch data from Manyreach
      const manyreachStats = await manyreachService.getAccountStats();
      
      // Fetch sentiment data from n8n (aggregated across campaigns)
      const campaigns = await Campaign.find({ userId });
      let totalEngaged = 0;
      let totalPositive = 0;

      for (const campaign of campaigns) {
        if (campaign.manyreachCampaignId) {
          const sentimentData = await n8nService.getSentimentData(campaign.manyreachCampaignId);
          totalEngaged += sentimentData.engaged || 0;
          totalPositive += sentimentData.positive || 0;
        }
      }

      // Combine and calculate metrics
      const stats = {
        meetingsBooked: manyreachStats.meetingsBooked,
        positiveReplies: totalPositive,
        contacted: manyreachStats.contacted,
        overallEngagementRate: manyreachStats.contacted > 0 
          ? ((totalEngaged / manyreachStats.contacted) * 100).toFixed(2)
          : 0,
        funnel: this.calculateFunnelBreakdown(manyreachStats, totalEngaged, totalPositive)
      };

      return stats;
    } catch (error) {
      console.error('Analytics Error:', error.message);
      throw error;
    }
  }

  calculateFunnelBreakdown(manyreachStats, engaged, positive) {
    const totalProspects = manyreachStats.totalProspects;
    const contacted = manyreachStats.contacted;
    const meetingsBooked = manyreachStats.meetingsBooked;

    return [
      {
        stage: 'Total Prospects',
        prospects: totalProspects,
        conversionRate: '--',
        insight: 'Your total addressable audience.'
      },
      {
        stage: 'Contacted',
        prospects: contacted,
        conversionRate: totalProspects > 0 
          ? `${((contacted / totalProspects) * 100).toFixed(2)} %`
          : '0 %',
        insight: 'Growing Activation Rate of Campaigns'
      },
      {
        stage: 'Engaged',
        prospects: engaged,
        conversionRate: contacted > 0
          ? `${((engaged / contacted) * 100).toFixed(2)} %`
          : '0 %',
        insight: 'Your Prospects are engaging with your campaigns'
      },
      {
        stage: 'Positive / Interested',
        prospects: positive,
        conversionRate: engaged > 0
          ? `${((positive / engaged) * 100).toFixed(2)} %`
          : '0 %',
        insight: 'How many people are interested in your offering'
      },
      {
        stage: 'Meetings Booked',
        prospects: meetingsBooked,
        conversionRate: positive > 0
          ? `${((meetingsBooked / positive) * 100).toFixed(2)} %`
          : '0 %',
        insight: 'How many calls were scheduled'
      }
    ];
  }

  async getCampaignAnalytics(campaignId) {
    try {
      const [manyreachStats, sentimentData] = await Promise.all([
        manyreachService.getCampaignStats(campaignId),
        n8nService.getSentimentData(campaignId)
      ]);

      return {
        ...manyreachStats,
        sentiment: sentimentData
      };
    } catch (error) {
      console.error('Campaign Analytics Error:', error.message);
      throw error;
    }
  }
}

export default new AnalyticsService();
