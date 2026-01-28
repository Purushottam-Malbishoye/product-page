import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AdminCampaign from './AdminCampaign';
import ClientCampaign from './ClientCampaign';

const CampaignContainer = () => {
  const { user } = useAuth();

  if (user?.role === 'admin') {
    return <AdminCampaign />;
  }

  return <ClientCampaign />;
};

export default CampaignContainer;
