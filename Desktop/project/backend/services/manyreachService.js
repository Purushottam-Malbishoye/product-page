const axios = require('axios');

class ManyreachService {
  constructor() {
    this.apiKey = process.env.MANYREACH_API_KEY;
    this.baseUrl = 'https://api.manyreach.com/api/v2';
    this.headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  // Get campaign analytics for org
  async getCampaignStats(orgId) {
    try {
      const response = await axios.get(`${this.baseUrl}/campaigns`, { 
        headers: this.headers,
        params: { org_id: orgId }
      });
      
      return {
        total_sent: response.data.total_sent || 0,
        engagement_rate: response.data.engagement_rate || 0,
        positive_replies: response.data.positive || 0,
        meetings_booked: response.data.meetings || 0,
        spam_rate: response.data.spam || 0
      };
    } catch (error) {
      console.error('Manyreach stats error:', error.response?.data || error.message);
      return null;
    }
  }

  // Get email threads for campaign
  async getEmailThreads(campaignId, limit = 50) {
    try {
      const response = await axios.get(`${this.baseUrl}/threads`, {
        headers: this.headers,
        params: { 
          campaign_id: campaignId,
          limit
        }
      });
      
      return response.data.threads || [];
    } catch (error) {
      console.error('Manyreach threads error:', error.response?.data || error.message);
      return [];
    }
  }

  // Create campaign in Manyreach (when PA approves)
  async createCampaign(campaignData) {
    try {
      const response = await axios.post(`${this.baseUrl}/campaigns`, {
        ...campaignData,
        senders: campaignData.sender_ids
      }, { headers: this.headers });
      
      return response.data;
    } catch (error) {
      console.error('Manyreach create error:', error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = new ManyreachService();
