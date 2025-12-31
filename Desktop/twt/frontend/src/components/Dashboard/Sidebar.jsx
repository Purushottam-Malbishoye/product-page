import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Megaphone, MessageSquare, Mail, ShieldCheck } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Megaphone, label: 'Campaigns', path: '/campaigns' },
    { icon: MessageSquare, label: 'Chats', path: '/chats' },
    { icon: Mail, label: 'Emails', path: '/emails' },
    { icon: ShieldCheck, label: 'Super Admin', path: '/admin' }
  ];

  return (
    <div className="w-64 glass-strong h-screen fixed left-0 top-0 p-6">
      <div className="mb-12 ml-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-orange to-purple-500/100 bg-clip-text text-transparent">
          Lucy AI
        </h1>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <motion.button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-brand-purple to-purple-800 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
