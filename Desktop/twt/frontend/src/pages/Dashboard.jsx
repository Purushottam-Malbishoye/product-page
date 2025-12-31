import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import StatsCards from '../components/Dashboard/StatsCards';
import FunnelTable from '../components/Dashboard/FunnelTable';
import api from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await api.get('/dashboard/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="text-white text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      
      <div className="ml-64 pt-24 px-8 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white mb-8">Account Wide Campaign Performance</h1>
          
          <StatsCards stats={stats} />
          <FunnelTable funnel={stats?.funnel} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
