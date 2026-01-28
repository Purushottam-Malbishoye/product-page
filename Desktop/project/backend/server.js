require('dotenv').config();
const express = require('express');
const cors = require('cors');

const config = require('./config/supabase'); 
const errorHandler = require('./middleware/errorHandler'); // errorHandler name is also different

const authRoutes = require('./routes/auth'); // auth name is different
const profileRoutes = require('./routes/profile'); // profile doesnt exist yet
const campaignsRoutes = require('./routes/campaigns'); // check name
const adminRoutes = require('./routes/admin'); // admin doesnt exist yet
const { supabaseAnon, supabaseService } = require('./config/supabase');
const auth = require('./middleware/auth');
const adminAuth = require('./middleware/adminAuth');
const checkPaidStatus = require('./middleware/checkPaidStatus');
const campaignsRoutes = require('./routes/campaigns');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-bolt-app-url'], // Add your Bolt/Bolt staging URLs
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/campaigns', campaignsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/campaigns', campaignsRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/api/test-supabase', async (req, res) => {
  try {
    // Test anon client (public tables only)
    const { data: publicData, error: publicError } = await supabaseAnon
      .from('profiles') // Will fail if table doesn't exist yet
      .select('count')
      .single();

    // Test service client (bypasses RLS)
    const { data: adminData, error: adminError } = await supabaseService
      .from('profiles')
      .select('count')
      .single();

    res.json({
      anon: publicData || publicError,
      service: adminData || adminError,
      warning: 'Service key works even without tables!'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/test-auth', auth, (req, res) => {
  res.json({ 
    message: 'Auth middleware works!',
    user: req.user 
  });
});

app.get('/api/test-paid', auth, checkPaidStatus, (req, res) => {
  res.json({ 
    message: 'Paid status check works!',
    user: {
      isPaid: req.user.isPaid,
      credits: req.user.credits,
      org_id: req.user.org_id
    }
  });
});

app.get('/api/test-admin', auth, adminAuth, (req, res) => {
  res.json({ message: 'Admin access granted!' });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
