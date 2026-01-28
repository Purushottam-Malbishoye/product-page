import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import GlassCard from '../components/shared/GlassCard';
import { Mail, Send, Eye, Reply } from 'lucide-react';
import api from '../services/api';

const Emails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await api.get('/emails');
      setEmails(response.data);
    } catch (error) {
      console.error('Failed to fetch emails:', error);
    } finally {
      setLoading(false);
    }
  };

  const mockEmails = [
    {
      id: 1,
      subject: 'Introduction to Our AI Outreach Platform',
      recipient: 'john@example.com',
      status: 'sent',
      sentAt: '2025-12-19T10:30:00',
      opened: true,
      replied: false
    },
    {
      id: 2,
      subject: 'Follow-up: Demo Invitation',
      recipient: 'sarah@company.com',
      status: 'sent',
      sentAt: '2025-12-19T09:15:00',
      opened: true,
      replied: true
    },
    {
      id: 3,
      subject: 'Quick Question About Your Outbound Strategy',
      recipient: 'mike@business.io',
      status: 'scheduled',
      sentAt: '2025-12-19T15:00:00',
      opened: false,
      replied: false
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
        >
          <h1 className="text-3xl font-bold text-white mb-8">Email Communications</h1>

          <div className="grid gap-4">
            {mockEmails.map((email, index) => (
              <motion.div
                key={email.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-3 rounded-xl ${
                        email.status === 'sent' 
                          ? 'bg-primary-teal/20 text-primary-teal'
                          : 'bg-primary-blue/20 text-primary-blue'
                      }`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{email.subject}</h3>
                        <p className="text-gray-400 text-sm">To: {email.recipient}</p>
                      </div>

                      <div className="flex gap-6 text-sm">
                        {email.opened && (
                          <div className="flex items-center gap-2 text-primary-teal">
                            <Eye className="w-4 h-4" />
                            Opened
                          </div>
                        )}
                        {email.replied && (
                          <div className="flex items-center gap-2 text-red-500">
                            <Reply className="w-4 h-4" />
                            Replied
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-gray-400">
                          <Send className="w-4 h-4" />
                          {email.status}
                           - 
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-400 text-sm">
                      {new Date(email.sentAt).toLocaleString()}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Emails;
