const { supabaseAnon } = require('../config/supabase');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    // Get JWT from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify JWT with Supabase anon client (extracts user info)
    const { data: { user }, error } = await supabaseAnon.auth.getUser(token);
    
    if (error || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Attach user to request
    req.user = {
      id: user.user.id,           // Supabase auth.users.id
      email: user.user.email,
      email_confirmed_at: user.user.email_confirmed_at
    };

    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ error: 'Auth failed' });
  }
};

module.exports = auth;
