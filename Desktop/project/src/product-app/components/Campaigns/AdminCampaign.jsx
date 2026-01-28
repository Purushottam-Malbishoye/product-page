import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../shared/GlassCard';
import AnimatedButton from '../shared/AnimatedButton';
import { CheckCircle, XCircle, Clock, Play, Pause, TrendingUp } from 'lucide-react';

const MOCK_PENDING_REQUESTS = [
  {
    id: 'req-1',
    clientName: 'TechCorp Solutions',
    clientEmail: 'john@techcorp.com',
    campaignName: 'Q1 Outreach Campaign',
    requestedAt: '2024-01-10T10:30:00Z',
    targetCount: 500,
    industry: 'SaaS',
  },
  {
    id: 'req-2',
    clientName: 'DataFlow Inc',
    clientEmail: 'sarah@dataflow.com',
    campaignName: 'Enterprise Lead Gen',
    requestedAt: '2024-01-11T14:20:00Z',
    targetCount: 1000,
    industry: 'Data Analytics',
  },
];

const MOCK_ALL_CAMPAIGNS = [
  {
    _id: 'camp-1',
    name: 'TechCorp Q1 Campaign',
    status: 'active',
    clientName: 'TechCorp Solutions',
    stats: {
      contacted: 450,
      engaged: 180,
      positive: 65,
      meetingsBooked: 32,
    },
  },
  {
    _id: 'camp-2',
    name: 'HealthTech Outreach',
    status: 'active',
    clientName: 'MedTech Innovations',
    stats: {
      contacted: 320,
      engaged: 128,
      positive: 48,
      meetingsBooked: 24,
    },
  },
  {
    _id: 'camp-3',
    name: 'FinServ Lead Gen',
    status: 'paused',
    clientName: 'Capital Partners LLC',
    stats: {
      contacted: 200,
      engaged: 85,
      positive: 30,
      meetingsBooked: 15,
    },
  },
];

const AdminCampaign = () => {
  const [pendingRequests, setPendingRequests] = useState(MOCK_PENDING_REQUESTS);
  const [allCampaigns] = useState(MOCK_ALL_CAMPAIGNS);

  const handleApprove = (requestId) => {
    setPendingRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const handleReject = (requestId) => {
    setPendingRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Pending Campaign Requests</h2>

        {pendingRequests.length === 0 ? (
          <GlassCard>
            <div className="text-center py-8">
              <Clock className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400">No campaign requests yet</p>
            </div>
          </GlassCard>
        ) : (
          <div className="grid gap-6">
            {pendingRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-white">{request.campaignName}</h3>
                        <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400">
                          Pending Review
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-6 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Client</p>
                          <p className="text-white font-semibold">{request.clientName}</p>
                          <p className="text-gray-500 text-xs">{request.clientEmail}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Industry</p>
                          <p className="text-white font-semibold">{request.industry}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Target Count</p>
                          <p className="text-white font-semibold">{request.targetCount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Requested</p>
                          <p className="text-white font-semibold">{formatDate(request.requestedAt)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 ml-6">
                      <AnimatedButton
                        variant="success"
                        onClick={() => handleApprove(request.id)}
                      >
                        <CheckCircle className="w-5 h-5 inline mr-2" />
                        Approve
                      </AnimatedButton>
                      <AnimatedButton
                        variant="danger"
                        onClick={() => handleReject(request.id)}
                      >
                        <XCircle className="w-5 h-5 inline mr-2" />
                        Reject
                      </AnimatedButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">All Campaigns</h2>
        <div className="grid gap-6">
          {allCampaigns.map((campaign, index) => (
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

                    <p className="text-gray-400 text-sm mb-4">Client: {campaign.clientName}</p>

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
      </div>
    </div>
  );
};

export default AdminCampaign;
