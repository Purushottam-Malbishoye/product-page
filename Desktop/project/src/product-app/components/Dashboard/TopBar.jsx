import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, Bell, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="glass-strong h-20 fixed top-0 right-0 left-64 px-8 flex items-center justify-between z-10">
      <div>
        <h2 className="text-2xl font-bold text-white">
          {user?.role === 'admin' ? 'Welcome Admin' : `Welcome back, ${user?.name}`}
        </h2>
        {/* <p className="text-gray-400 text-sm">Here's what's happening with your campaigns</p> */}
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          className="glass rounded-xl p-3 text-gray-400 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bell className="w-5 h-5" />
        </motion.button>

        <motion.button
          className="glass rounded-xl p-3 text-gray-400 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <User className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-xl text-white font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </motion.button>
      </div>
    </div>
  );
};

export default TopBar;
