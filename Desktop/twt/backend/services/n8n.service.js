import axios from 'axios';
import { config } from '../config/environment.js';

class N8nService {
  constructor() {
    this.webhookUrl = config.n8n.webhookUrl;
    this.apiKey = config.n8n.apiKey;
  }

  async analyzeSentiment(data) {
    try {
      const response = await axios.post(
        `${this.webhookUrl}/sentiment-analysis`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': this.apiKey
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('n8n Sentiment Analysis Error:', error.message);
      throw new Error('Failed to analyze sentiment');
    }
  }

  async getSentimentData(campaignId) {
    try {
      const response = await axios.get(
        `${this.webhookUrl}/sentiment-data/${campaignId}`,
        {
          headers: {
            'X-API-Key': this.apiKey
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('n8n Get Sentiment Error:', error.message);
      // Return default values if n8n is not available
      return {
        engaged: 0,
        positive: 0,
        neutral: 0,
        negative: 0
      };
    }
  }

  processSentimentWebhook(webhookData) {
    // Process incoming webhook data from n8n
    return {
      campaignId: webhookData.campaignId,
      engaged: webhookData.engaged || 0,
      positive: webhookData.positive || 0,
      sentiment: webhookData.sentiment || 'neutral',
      timestamp: new Date()
    };
  }
}

export default new N8nService();
