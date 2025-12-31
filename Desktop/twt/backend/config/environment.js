export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  manyreach: {
    apiKey: process.env.MANYREACH_API_KEY,
    apiUrl: process.env.MANYREACH_API_URL
  },
  n8n: {
    webhookUrl: process.env.N8N_WEBHOOK_URL,
    apiKey: process.env.N8N_API_KEY
  }
};
