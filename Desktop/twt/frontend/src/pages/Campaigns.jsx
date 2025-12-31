import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import CampaignsList from '../components/Campaigns/CampaignsList';
import AnimatedButton from '../components/shared/AnimatedButton';
import { Plus } from 'lucide-react';
import api from '../services/api';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await api.get('/campaigns');
      setCampaigns(response.data);
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />
      
      <div className="ml-64 pt-24 px-8 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Campaigns</h1>
            <AnimatedButton variant="primary">
              <Plus className="w-5 h-5 inline mr-2" />
              New Campaign
            </AnimatedButton>
          </div>

          {loading ? (
            <div className="text-white text-center py-12">Loading campaigns...</div>
          ) : campaigns.length > 0 ? (
            <CampaignsList campaigns={campaigns} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No campaigns yet</p>
              <AnimatedButton variant="primary">
                Create Your First Campaign
              </AnimatedButton>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Campaigns;
