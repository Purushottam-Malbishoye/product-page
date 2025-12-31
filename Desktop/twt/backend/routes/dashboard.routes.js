// import express from 'express';
// import { getDashboardStats, getFunnelData } from '../controllers/dashboard.controller.js';
// import { authenticate } from '../middleware/auth.middleware.js';

// const router = express.Router();

// router.use(authenticate);

// router.get('/stats', getDashboardStats);
// router.get('/funnel', getFunnelData);

// export default router;


import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.get('/stats', (req, res) => {
  res.json({
    meetingsBooked: 102,
    positiveReplies: 225,
    contacted: 2868,
    overallEngagementRate: 31.14,
    funnel: [
      {
        stage: 'Total Prospects',
        prospects: 3577,
        conversionRate: '--',
        insight: 'Your total addressable audience.'
      },
      {
        stage: 'Contacted',
        prospects: 2868,
        conversionRate: '80.18 %',
        insight: 'Growing Activation Rate of Campaigns'
      },
      {
        stage: 'Engaged',
        prospects: 719,
        conversionRate: '25.07 %',
        insight: 'Your Prospects are engaging with your campaigns'
      },
      {
        stage: 'Positive / Interested',
        prospects: 225,
        conversionRate: '31.29 %',
        insight: 'How many people are interested in your offering'
      },
      {
        stage: 'Meetings Booked',
        prospects: 102,
        conversionRate: '45.33 %',
        insight: 'How many calls were scheduled'
      }
    ]
  });
});

export default router;
