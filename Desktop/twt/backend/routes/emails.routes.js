import express from 'express';
import { getEmails, getEmailById } from '../controllers/emails.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getEmails);
router.get('/:id', getEmailById);

export default router;
