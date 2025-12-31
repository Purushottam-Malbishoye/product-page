import express from 'express';
import {
  getCampaigns,
  getCampaignById,
  createCampaign,
  syncCampaign
} from '../controllers/campaigns.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getCampaigns);
router.post('/', createCampaign);
router.get('/:id', getCampaignById);
router.post('/:id/sync', syncCampaign);

export default router;
