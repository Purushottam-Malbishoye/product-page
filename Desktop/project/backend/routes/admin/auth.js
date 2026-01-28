const express = require('express');
const router = express.Router();
// const adminAuth = require('../../middleware/adminAuth');
const { sendOTP, verifyOTP } = require('../../services/otpService');

router.post('/otp-send', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Must be company domain
    if (!email.endsWith(`@${process.env.COMPANY_DOMAIN}`)) {
      return res.status(400).json({ 
        error: `Company email required (@${process.env.COMPANY_DOMAIN})` 
      });
    }

    const sent = await sendOTP(email);
    if (sent) {
      res.json({ message: 'OTP sent to your email' });
    } else {
      res.status(500).json({ error: 'Failed to send OTP' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/otp-verify', async (req, res) => {
  try {
    const { email, otp } = req.body;
    
    if (!verifyOTP(email, otp)) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    // Generate custom JWT for PA session (or use Supabase)
    const jwtToken = generatePAToken(email);
    
    res.json({ 
      message: 'PA login successful',
      token: jwtToken,
      dashboard: true 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Simple JWT for PA (in production use proper JWT lib)
function generatePAToken(email) {
  const token = `${email}-${Date.now()}`;
  return Buffer.from(token).toString('base64');
}

module.exports = router;
