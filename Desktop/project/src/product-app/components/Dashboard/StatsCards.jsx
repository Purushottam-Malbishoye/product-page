import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import { Calendar, ThumbsUp, TrendingUp, Users } from 'lucide-react';

const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: 'Meetings Booked',
      value: stats?.meetingsBooked || 0,
      icon: Calendar,
      color: 'from-blue-500/100 to-blue-500/60'
    },
    {
      title: 'Positive Replies',
      value: stats?.positiveReplies || 0,
      icon: ThumbsUp,
      color: 'from-emerald-500/100 to-emerald-500/60'
    },
    {
      title: 'Overall Engagement Rate',
      value: `${stats?.overallEngagementRate || 0}%`,
      icon: TrendingUp,
      color: 'from-red-500/100 to-red-500/80'
    },
    {
      title: 'Contacted',
      value: stats?.contacted || 0,
      icon: Users,
      color: 'from-purple-500 to-purple-500/80'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard hover={false}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-gray-400 text-sm mb-2">{card.title}</h3>
              <p className="text-3xl font-bold text-white">{card.value}</p>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;
