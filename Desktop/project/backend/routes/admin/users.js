const express = require('express');
const router = express.Router();
const { supabaseService } = require('../../config/supabase');

router.get('/', async (req, res) => {
  try {
    // PA sees ALL pre-approved users + their signup status
    const { data: preApprovedUsers, error: preError } = await supabaseService
      .from('pre_approved_users')
      .select('*, profiles!user_id(name, org_id), orgs!inner(name)');

    if (preError) throw preError;

    res.json({
      pre_approved_users: preApprovedUsers,
      message: 'All pre-approved users loaded'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/pre-approve', async (req, res) => {
  try {
    const { work_email, total_credits } = req.body;

    const { data, error } = await supabaseService
      .from('pre_approved_users')
      .insert({
        work_email,
        is_paid: true,
        total_credits,
        approved_by: req.user?.email || 'PA',
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    res.json({
      message: `Pre-approved ${work_email} with ${total_credits} credits`,
      user: data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
