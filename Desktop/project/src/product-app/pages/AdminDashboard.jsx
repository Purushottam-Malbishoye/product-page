import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import GlassCard from '../components/shared/GlassCard';
import { TrendingUp, Mail, Users, Calendar, Clock } from 'lucide-react';

const AdminDashboard = () => {
  const [timeFilter, setTimeFilter] = useState('all');

  const stats = {
    today: { campaignsRunning: 5, emailsSent: 1234, usersOnboarded: 3 },
    thisMonth: { campaignsRunning: 15, emailsSent: 45678, usersOnboarded: 12 },
    allTime: { campaignsRunning: 42, emailsSent: 234567, usersOnboarded: 48 }
  };

  const currentStats = stats[timeFilter === 'today' ? 'today' : timeFilter === 'month' ? 'thisMonth' : 'allTime'];

  const pendingRequests = [
    {
      id: 1,
      campaignName: 'Q1 Enterprise Outreach',
      clientName: 'Acme Corp',
      requestedDate: '2024-01-10',
      status: 'Pending'
    },
    {
      id: 2,
      campaignName: 'Product Launch Series',
      clientName: 'TechStart Inc',
      requestedDate: '2024-01-09',
      status: 'Pending'
    }
  ];

  const allCampaigns = [
    {
      id: 1,
      name: 'B2B Lead Generation',
      client: 'Enterprise Solutions LLC',
      status: 'Active',
      emailsSent: 5432,
      date: '2024-01-05'
    },
    {
      id: 2,
      name: 'SaaS Onboarding Campaign',
      client: 'CloudTech Systems',
      status: 'Active',
      emailsSent: 3210,
      date: '2024-01-03'
    },
    {
      id: 3,
      name: 'Customer Retention Drive',
      client: 'DataFlow Inc',
      status: 'Completed',
      emailsSent: 8765,
      date: '2023-12-28'
    },
    {
      id: 4,
      name: 'Holiday Promotion',
      client: 'Retail Solutions Co',
      status: 'Paused',
      emailsSent: 2100,
      date: '2023-12-20'
    }
  ];

  const [campaignFilter, setCampaignFilter] = useState('all');
  const [dateSort, setDateSort] = useState('desc');

  const filteredCampaigns = allCampaigns
    .filter(campaign => campaignFilter === 'all' || campaign.status.toLowerCase() === campaignFilter)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateSort === 'desc' ? dateB - dateA : dateA - dateB;
    });

  const statsCards = [
    {
      title: 'Campaigns Running',
      value: currentStats.campaignsRunning,
      icon: TrendingUp,
      color: 'from-blue-500/100 to-blue-500/60'
    },
    {
      title: 'Emails Sent',
      value: currentStats.emailsSent.toLocaleString(),
      icon: Mail,
      color: 'from-emerald-500/100 to-emerald-500/60'
    },
    {
      title: 'Users Onboarded',
      value: currentStats.usersOnboarded,
      icon: Users,
      color: 'from-purple-500 to-purple-500/80'
    }
  ];

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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="glass rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              <option value="today">Today</option>
              <option value="month">This Month</option>
              <option value="all">All Time</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {statsCards.map((card, index) => {
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Pending Campaign Requests</h2>
            {pendingRequests.length === 0 ? (
              <GlassCard>
                <p className="text-gray-400 text-center py-8">No campaign requests yet</p>
              </GlassCard>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pendingRequests.map((request) => (
                  <GlassCard key={request.id}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{request.campaignName}</h3>
                        <p className="text-gray-400 text-sm">{request.clientName}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        {request.status}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(request.requestedDate).toLocaleDateString()}
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">All Campaigns</h2>
              <div className="flex gap-4">
                <select
                  value={campaignFilter}
                  onChange={(e) => setCampaignFilter(e.target.value)}
                  className="glass rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="paused">Paused</option>
                </select>
                <select
                  value={dateSort}
                  onChange={(e) => setDateSort(e.target.value)}
                  className="glass rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <option value="desc">Newest First</option>
                  <option value="asc">Oldest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredCampaigns.map((campaign) => (
                <GlassCard key={campaign.id}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold text-lg">{campaign.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'Active'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : campaign.status === 'Completed'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{campaign.client}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {campaign.emailsSent.toLocaleString()} emails sent
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {new Date(campaign.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
