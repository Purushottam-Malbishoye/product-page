import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import { ChevronDown, User, Calendar } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../../services/api';

const CampaignsList = ({ campaigns }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [campaignSenders, setCampaignSenders] = useState({});

  const toggleExpand = async (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      if (!campaignSenders[id]) {
        await fetchCampaignSenders(id);
      }
    }
  };

  const fetchCampaignSenders = async (campaignId) => {
    try {
      const response = await api.get(`/senders/campaign/${campaignId}`);
      setCampaignSenders(prev => ({
        ...prev,
        [campaignId]: response.data.senders || []
      }));
    } catch (error) {
      console.error('Failed to fetch campaign senders:', error);
      setCampaignSenders(prev => ({
        ...prev,
        [campaignId]: []
      }));
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      requested: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      created: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      running: 'bg-green-500/20 text-green-400 border-green-500/30',
      paused: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      stopped: 'bg-red-500/20 text-red-400 border-red-500/30',
      pending: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    };
    return colors[status] || colors.pending;
  };

  const getEngagementLineData = (campaign) => {
    return [
      { name: 'Week 1', contacted: 120, engaged: 45, positive: 12, meetings: 5 },
      { name: 'Week 2', contacted: 250, engaged: 98, positive: 28, meetings: 11 },
      { name: 'Week 3', contacted: 380, engaged: 152, positive: 45, meetings: 18 },
      { name: 'Week 4', contacted: campaign.stats?.contacted || 500, engaged: campaign.stats?.engaged || 200, positive: campaign.stats?.positive || 60, meetings: campaign.stats?.meetingsBooked || 24 }
    ];
  };

  const getEngagementPieData = (campaign) => {
    const stats = campaign.stats || {};
    const contacted = stats.contacted || 500;
    const engaged = stats.engaged || 200;
    const positive = stats.positive || 60;
    const meetings = stats.meetingsBooked || 24;

    return [
      { name: 'Contacted', value: contacted, color: '#ffffff' },
      { name: 'Engaged', value: engaged, color: '#00D9FF' },
      { name: 'Positive', value: positive, color: '#FF006E' },
      { name: 'Meetings', value: meetings, color: '#8B5CF6' }
    ];
  };

  return (
    <div className="space-y-4">
      {campaigns?.map((campaign, index) => {
        const isExpanded = expandedId === campaign._id || expandedId === campaign.id;

        return (
          <motion.div
            key={campaign._id || campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard className="overflow-hidden">
              <button
                onClick={() => toggleExpand(campaign.id || campaign._id)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4 flex-1">
                    <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(campaign.status)}`}>
                      {campaign.status || 'pending'}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6 border-t border-white/10 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-gray-300">
                            <Calendar className="w-5 h-5 text-primary-teal" />
                            <div>
                              <p className="text-sm text-gray-400">Start Date</p>
                              <p className="text-white font-medium">
                                {campaign.created_at ? new Date(campaign.created_at).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                }) : 'N/A'}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-gray-300">
                            <User className="w-5 h-5 text-primary-pink" />
                            <div>
                              <p className="text-sm text-gray-400">Created By</p>
                              <p className="text-white font-medium">{campaign.created_by || 'User'}</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <p className="text-sm text-gray-400 mb-3">Senders Assigned</p>
                            <div className="max-h-32 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                              {campaignSenders[campaign.id || campaign._id] && campaignSenders[campaign.id || campaign._id].length > 0 ? (
                                campaignSenders[campaign.id || campaign._id].map((sender, idx) => (
                                  <div
                                    key={idx}
                                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                                  >
                                    <div className="font-medium">{sender.name}</div>
                                    <div className="text-xs text-gray-500">{sender.email}</div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-gray-500 text-sm">No senders assigned yet</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-400 mb-3">Campaign Stats</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                              <p className="text-gray-400 text-xs mb-1">Contacted</p>
                              <p className="text-2xl font-bold text-white">{campaign.stats?.contacted || 0}</p>
                            </div>
                            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                              <p className="text-gray-400 text-xs mb-1">Engaged</p>
                              <p className="text-2xl font-bold text-primary-teal">{campaign.stats?.engaged || 0}</p>
                            </div>
                            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                              <p className="text-gray-400 text-xs mb-1">Positive</p>
                              <p className="text-2xl font-bold text-primary-pink">{campaign.stats?.positive || 0}</p>
                            </div>
                            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                              <p className="text-gray-400 text-xs mb-1">Meetings</p>
                              <p className="text-2xl font-bold text-primary-blue">{campaign.stats?.meetingsBooked || 0}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <h4 className="text-white font-medium mb-4">Engagement Over Time</h4>
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={getEngagementLineData(campaign)}>
                              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                              <XAxis dataKey="name" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                              <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: 'rgba(0,0,0,0.8)',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  borderRadius: '8px'
                                }}
                              />
                              <Legend />
                              <Line type="monotone" dataKey="contacted" stroke="#ffffff" strokeWidth={2} />
                              <Line type="monotone" dataKey="engaged" stroke="#00D9FF" strokeWidth={2} />
                              <Line type="monotone" dataKey="positive" stroke="#FF006E" strokeWidth={2} />
                              <Line type="monotone" dataKey="meetings" stroke="#8B5CF6" strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <h4 className="text-white font-medium mb-4">Engagement Distribution</h4>
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Pie
                                data={getEngagementPieData(campaign)}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {getEngagementPieData(campaign).map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: 'rgba(0,0,0,0.8)',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  borderRadius: '8px'
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CampaignsList;
