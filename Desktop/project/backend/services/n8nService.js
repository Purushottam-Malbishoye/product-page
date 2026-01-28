const axios = require('axios');

class N8nService {
  constructor() {
    this.baseUrl = process.env.N8N_WEBHOOK_URL;
  }

  async triggerCampaignApproved(campaignId, orgId) {
    try {
      await axios.post(`${this.baseUrl}/campaign-approved`, {
        campaign_id: campaignId,
        org_id: orgId,
        timestamp: new Date().toISOString()
      });
      return true;
    } catch (error) {
      console.error('n8n trigger failed:', error.message);
      return false;
    }
  }

  async triggerSenderWarmup(orgId, senderEmails) {
    try {
      await axios.post(`${this.baseUrl}/senders-warmup`, {
        org_id: orgId,
        senders: senderEmails,
        timestamp: new Date().toISOString()
      });
      return true;
    } catch (error) {
      console.error('n8n warmup trigger failed:', error.message);
      return false;
    }
  }
}

module.exports = new N8nService();
