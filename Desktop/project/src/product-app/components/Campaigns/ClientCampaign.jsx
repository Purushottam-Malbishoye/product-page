import React, { useEffect, useState } from 'react';
import CampaignsList from './CampaignsList';
import CampaignWizard from './CampaignWizard';
import AnimatedButton from '../shared/AnimatedButton';
import { Plus } from 'lucide-react';
import api from '../../services/api';

// 🎬 DEMO: Hardcoded dummy campaigns for client presentation
const DEMO_CAMPAIGNS = [
  {
    id: 'demo-1',
    _id: 'demo-1',
    name: 'Q1 2024 Enterprise Outreach',
    status: 'running',
    dataset_source: 'own_csv',
    created_at: '2024-01-15T10:30:00Z',
    created_by: 'Demo User',
    stats: {
      contacted: 1247,
      engaged: 523,
      positive: 187,
      meetingsBooked: 19
    },
    audience_targeting: {
      target_segment: ['Enterprise'],
      industries: ['Technology', 'SaaS'],
      geography: ['North America'],
      company_size: ['1000+']
    }
  },
  {
    id: 'demo-2',
    _id: 'demo-2',
    name: 'SaaS Startup Lead Generation',
    status: 'running',
    dataset_source: 'ai_sdr',
    created_at: '2024-01-18T14:20:00Z',
    created_by: 'Demo User',
    stats: {
      contacted: 856,
      engaged: 342,
      positive: 128,
      meetingsBooked: 12
    },
    audience_targeting: {
      target_segment: ['SMB', 'Mid-Market'],
      industries: ['Software', 'Technology'],
      geography: ['United States'],
      company_size: ['50-200']
    }
  },
  {
    id: 'demo-3',
    _id: 'demo-3',
    name: 'Healthcare Decision Makers Campaign',
    status: 'created',
    dataset_source: 'own_csv',
    created_at: '2024-01-20T09:15:00Z',
    created_by: 'Demo User',
    stats: {
      contacted: 423,
      engaged: 156,
      positive: 64,
      meetingsBooked: 7
    },
    audience_targeting: {
      target_segment: ['Enterprise'],
      industries: ['Healthcare', 'Medical Devices'],
      geography: ['United States'],
      company_size: ['500-1000']
    }
  }
];

const ClientCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statusTabs = [
    { value: 'all', label: 'All' },
    { value: 'requested', label: 'Requested' },
    { value: 'created', label: 'Created' },
    { value: 'running', label: 'Running' },
    { value: 'paused', label: 'Paused' },
    { value: 'stopped', label: 'Stopped' }
  ];

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await api.get('/campaigns');
      const apiCampaigns = response.data.campaigns || response.data || [];
      // 🎬 DEMO: Merge API campaigns with demo campaigns
      setCampaigns([...DEMO_CAMPAIGNS, ...apiCampaigns]);
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
      // 🎬 DEMO: If API fails, show demo campaigns only
      setCampaigns(DEMO_CAMPAIGNS);
    } finally {
      setLoading(false);
    }
  };

  const handleWizardSuccess = (newCampaignData) => {
    // 🎬 DEMO: Immediately show the new campaign at the top of the list
    if (newCampaignData) {
      const newCampaign = {
        id: `campaign-${Date.now()}`,
        _id: `campaign-${Date.now()}`,
        name: newCampaignData.name,
        status: 'created',
        dataset_source: newCampaignData.dataset_source,
        created_at: new Date().toISOString(),
        created_by: 'You',
        stats: {
          contacted: 0,
          engaged: 0,
          positive: 0,
          meetingsBooked: 0
        },
        audience_targeting: newCampaignData.audienceTargeting || {}
      };

      // Add new campaign to the top of the list
      setCampaigns(prev => [newCampaign, ...prev]);
    }

    // 🎬 DEMO: Don't fetch from API - just show the new campaign immediately
    // fetchCampaigns(); // Commented out for demo to prevent overriding the new campaign
  };

  const filteredCampaigns = selectedStatus === 'all'
    ? campaigns
    : campaigns.filter(campaign => campaign.status === selectedStatus || (!campaign.status && selectedStatus === 'pending'));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Campaigns</h1>
        <AnimatedButton variant="primary" onClick={() => setWizardOpen(true)}>
          <Plus className="w-5 h-5 inline mr-2" />
          Create New Campaign
        </AnimatedButton>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {statusTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedStatus(tab.value)}
            className={`px-6 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${selectedStatus === tab.value
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-white text-center py-12">Loading campaigns...</div>
      ) : filteredCampaigns.length > 0 ? (
        <CampaignsList campaigns={filteredCampaigns} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg mb-4">
            {selectedStatus === 'all' ? 'No campaigns yet' : `No ${selectedStatus} campaigns`}
          </p>
          {selectedStatus === 'all' && (
            <AnimatedButton variant="primary" onClick={() => setWizardOpen(true)}>
              Create Your First Campaign
            </AnimatedButton>
          )}
        </div>
      )}

      <CampaignWizard
        isOpen={wizardOpen}
        onClose={() => setWizardOpen(false)}
        onSuccess={handleWizardSuccess}
      />
    </div>
  );
};

export default ClientCampaign;
