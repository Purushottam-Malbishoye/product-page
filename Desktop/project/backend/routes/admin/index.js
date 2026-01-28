const express = require('express');
const router = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const paAuthRoutes = require('./auth');
const usersRoutes = require('./users');
const campaignsRoutes = require('./campaigns');
const sendersRoutes = require('./senders');

router.use(adminAuth);
router.use('/auth', paAuthRoutes);
router.use('/users', usersRoutes);
router.use('/campaigns', campaignsRoutes);
router.use('/senders', sendersRoutes);

// Test PA endpoint
router.get('/test', adminAuth, (req, res) => {
  res.json({ 
    message: 'PA Dashboard access granted!',
    user: req.user,
    isPlatformAdmin: req.isPlatformAdmin 
  });
});

module.exports = router;
