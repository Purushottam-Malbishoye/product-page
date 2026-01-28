const { supabaseService } = require('../config/supabase');

const checkPaidStatus = async (req, res, next) => {
  try {
    const userEmail = req.user.email;

    // Check pre_approved_users table (PA sets this manually)
    const { data: preApproved, error } = await supabaseService
      .from('pre_approved_users')
      .select('is_paid, signed_up, total_credits')
      .eq('work_email', userEmail)
      .single();

    // No pre-approved record = unpaid casual user
    if (!preApproved || !preApproved.is_paid) {
      // Frontend will catch this and redirect to demo video page (NO error for user)
      return res.status(403).json({ 
        access: 'demo_only'  // Frontend: if response.access === 'demo_only' → redirect to demo
      });
    }

    // AUTO-UPDATE: If profile exists → mark as signed_up = true
    const { data: profile } = await supabaseService
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .single();

    if (profile && !preApproved.signed_up) {
      // Profile completed → auto-update signed_up status
      await supabaseService
        .from('pre_approved_users')
        .update({ 
          signed_up: true, 
          user_id: userId, 
          updated_at: new Date().toISOString() 
        })
        .eq('work_email', userEmail);
      
      preApproved.signed_up = true;
    }

    // Paid + signed_up = full access
      req.user.isPaid = true;
      req.user.credits = preApproved.total_credits || 0;
      req.user.signed_up = preApproved.signed_up;
      
      next();
    
    } catch (error) {
    console.error('Paid status check error:', error);
    // Even on error, return demo access (don't block completely)
    return res.status(403).json({ access: 'demo_only' });
  }
  
};

module.exports = checkPaidStatus;
