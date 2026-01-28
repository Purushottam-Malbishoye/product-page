import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Campaigns from './pages/Campaigns';
import Emails from './pages/Emails';
import ProfileCreation from './pages/ProfileCreation';
import OrgAdmin from './pages/OrgAdmin';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import api from './services/api';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [profileComplete, setProfileComplete] = useState(false);

  useEffect(() => {
    const checkProfile = async () => {
      if (!user) {
        setChecking(false);
        return;
      }

      if (location.pathname === '/profile-setup') {
        setChecking(false);
        return;
      }

      try {
        const response = await api.get('/profile/check-completion');
        setProfileComplete(response.data.isComplete);

        if (!response.data.isComplete && location.pathname !== '/profile-setup') {
          navigate('/profile-setup');
        }
      } catch (error) {
        console.error('Failed to check profile:', error);
      } finally {
        setChecking(false);
      }
    };

    checkProfile();
  }, [user, navigate, location.pathname]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[#070A10] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return children;
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/ai-sdr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile-setup"
            element={
              <PrivateRoute>
                <ProfileCreation />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/campaigns"
            element={
              <PrivateRoute>
                <Campaigns />
              </PrivateRoute>
            }
          />
          <Route
            path="/emails"
            element={
              <PrivateRoute>
                <Emails />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <OrgAdmin />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
