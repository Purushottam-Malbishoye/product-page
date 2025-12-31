import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import { Play, Pause, TrendingUp } from 'lucide-react';

const CampaignsList = ({ campaigns }) => {
  return (
    <div className="grid gap-6">
      {campaigns?.map((campaign, index) => (
        <motion.div
          key={campaign._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    campaign.status === 'active' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {campaign.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Contacted</p>
                    <p className="text-2xl font-bold text-white">{campaign.stats?.contacted || 0}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Engaged</p>
                    <p className="text-2xl font-bold text-primary-teal">{campaign.stats?.engaged || 0}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Positive</p>
                    <p className="text-2xl font-bold text-primary-pink">{campaign.stats?.positive || 0}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Meetings</p>
                    <p className="text-2xl font-bold text-primary-blue">{campaign.stats?.meetingsBooked || 0}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  className="glass rounded-xl p-3 text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {campaign.status === 'active' ? <Pause /> : <Play />}
                </motion.button>
                <motion.button
                  className="glass rounded-xl p-3 text-primary-teal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TrendingUp />
                </motion.button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
};

export default CampaignsList;
