import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import { Users, Settings, FileText, Activity } from 'lucide-react';
import api from '../services/api';

const OrgAdmin = () => {
  const [profile, setProfile] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const profileRes = await api.get('/profile');
      setProfile(profileRes.data.profile);
    } catch (error) {
      console.error('Failed to fetch org data:', error);
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
          <h1 className="text-3xl font-bold text-white mb-8">Organization Admin</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Users, label: 'Team Members', value: '1', color: 'blue' },
              { icon: Settings, label: 'Settings', value: 'Manage', color: 'purple' },
              { icon: FileText, label: 'Datasets', value: uploads.length, color: 'orange' },
              { icon: Activity, label: 'ManyReach', value: 'Connected', color: 'green' }
            ].map((stat, index) => (
              <div key={index} className="glass-strong rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-brand-orange" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {profile && (
            <div className="glass-strong rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Organization Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white">{profile.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Industry</p>
                  <p className="text-white">{profile.industry || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Designation</p>
                  <p className="text-white">{profile.designation}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Marketing Budget</p>
                  <p className="text-white">{profile.marketing_budget}</p>
                </div>
              </div>
            </div>
          )}

          <div className="glass-strong rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <p className="text-gray-400">No recent activity to display</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrgAdmin;
