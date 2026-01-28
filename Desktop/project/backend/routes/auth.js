const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const checkPaidStatus = require('../middleware/checkPaidStatus');
const { supabaseService } = require('../config/supabase');

router.post('/signup', async (req, res) => {
  try {
    const { email, password, work_email } = req.body;

    // Validate work email (no gmail/yahoo/etc)
    const invalidDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    if (invalidDomains.some(domain => work_email.endsWith(domain))) {
      return res.status(400).json({ 
        error: 'Work email required. Consumer domains not allowed.' 
      });
    }

    // Check pre_approved_users BEFORE allowing signup
    const { data: preApproved } = await supabaseService
      .from('pre_approved_users')
      .select('is_paid')
      .eq('work_email', work_email)
      .single();

    if (!preApproved?.is_paid) {
      return res.status(403).json({ access: 'demo_only' });
    }

    // Frontend handles Supabase signup + redirect to profile
    res.json({ 
      message: 'Pre-approved. Complete profile creation.',
      isPaid: true 
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/profile-complete', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const profileData = req.body;

    // Create org for OA
    const { data: org, error: orgError } = await supabaseService
      .from('orgs')
      .insert({
        name: profileData.company_name,
        org_admin_id: userId
      })
      .select()
      .single();

    if (orgError) throw orgError;

    // Create profile + link to org
    const { error: profileError } = await supabaseService
      .from('profiles')
      .insert({
        id: userId,
        org_id: org.id,
        ...profileData,
        role: 'org_admin'
      });

    if (profileError) throw profileError;

    // Auto-update signed_up status
    await supabaseService
      .from('pre_approved_users')
      .update({ 
        signed_up: true, 
        user_id: userId 
      })
      .eq('work_email', req.user.email);

    res.json({ 
      message: 'Profile created! Redirect to dashboard.',
      org_id: org.id 
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/status', auth, checkPaidStatus, (req, res) => {
  res.json({ 
    isPaid: req.user.isPaid,
    isSignedUp: req.user.isSignedUp,
    credits: req.user.credits,
    org_id: req.user.org_id 
  });
});

module.exports = router;
