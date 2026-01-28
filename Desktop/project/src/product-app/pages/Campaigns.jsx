import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import CampaignContainer from '../components/Campaigns/CampaignContainer';

const Campaigns = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopBar />

      <div className="ml-64 pt-24 px-8 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CampaignContainer />
        </motion.div>
      </div>
    </div>
  );
};

export default Campaigns;
