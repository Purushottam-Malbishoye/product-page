const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const checkPaidStatus = require('../middleware/checkPaidStatus');
const { supabaseService } = require('../config/supabase');

router.get('/', auth, checkPaidStatus, async (req, res) => {
  try {
    const { data, error } = await supabaseService
      .from('profiles')
      .select(`
        *,
        orgs!inner(name)
      `)
      .eq('id', req.user.id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
