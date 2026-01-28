import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../shared/GlassCard';

const FunnelTable = ({ funnel }) => {
  return (
    <GlassCard hover={false}>
      <h2 className="text-2xl font-bold text-white mb-6">Outbound Funnel Breakdown</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-gray-400 font-semibold">FUNNEL STAGE</th>
              <th className="text-left py-4 px-4 text-gray-400 font-semibold">PROSPECTS</th>
              <th className="text-left py-4 px-4 text-gray-400 font-semibold">CONVERSION RATE</th>
              <th className="text-left py-4 px-4 text-gray-400 font-semibold">INSIGHTS</th>
            </tr>
          </thead>
          <tbody>
            {funnel?.map((stage, index) => (
              <motion.tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 px-4 text-white font-medium">{stage.stage}</td>
                <td className="py-4 px-4 text-white text-lg font-semibold">{stage.prospects}</td>
                <td className="py-4 px-4">
                  <span className={`${
                    stage.conversionRate === '--' 
                      ? 'text-gray-400' 
                      : 'text-primary-teal font-semibold'
                  }`}>
                    {stage.conversionRate}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-400">{stage.insight}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default FunnelTable;
