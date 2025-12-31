import axios from 'axios';
import { config } from '../config/environment.js';

class ManyreachService {
  constructor() {
    this.client = axios.create({
      baseURL: config.manyreach.apiUrl,
      headers: {
        'Authorization': `Bearer ${config.manyreach.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async getCampaigns() {
    try {
      const response = await this.client.get('/campaigns');
      return response.data;
    } catch (error) {
      console.error('Manyreach API Error:', error.message);
      throw new Error('Failed to fetch campaigns from Manyreach');
    }
  }

  async getCampaignStats(campaignId) {
    try {
      const response = await this.client.get(`/campaigns/${campaignId}/stats`);
      return response.data;
    } catch (error) {
      console.error('Manyreach Stats Error:', error.message);
      throw new Error('Failed to fetch campaign statistics');
    }
  }

  async getProspects(campaignId) {
    try {
      const response = await this.client.get(`/campaigns/${campaignId}/prospects`);
      return response.data;
    } catch (error) {
      console.error('Manyreach Prospects Error:', error.message);
      throw new Error('Failed to fetch prospects');
    }
  }

  async getAccountStats() {
    try {
      // Aggregate stats across all campaigns
      const campaigns = await this.getCampaigns();
      
      let totalProspects = 0;
      let contacted = 0;
      let meetingsBooked = 0;
      let positiveReplies = 0;

      for (const campaign of campaigns) {
        const stats = await this.getCampaignStats(campaign.id);
        totalProspects += stats.totalProspects || 0;
        contacted += stats.contacted || 0;
        meetingsBooked += stats.meetingsBooked || 0;
        positiveReplies += stats.positiveReplies || 0;
      }

      return {
        totalProspects,
        contacted,
        meetingsBooked,
        positiveReplies,
        engagementRate: contacted > 0 ? ((positiveReplies / contacted) * 100).toFixed(2) : 0
      };
    } catch (error) {
      console.error('Account Stats Error:', error.message);
      throw error;
    }
  }

  async getEmails(campaignId, filters = {}) {
    try {
      const params = new URLSearchParams(filters);
      const response = await this.client.get(`/campaigns/${campaignId}/emails?${params}`);
      return response.data;
    } catch (error) {
      console.error('Manyreach Emails Error:', error.message);
      throw new Error('Failed to fetch emails');
    }
  }
}

export default new ManyreachService();
