// import React, { createContext, useState, useContext, useEffect } from 'react';
// import api from '../services/api';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       fetchUser();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const response = await api.get('/auth/me');
//       setUser(response.data.user);
//     } catch (error) {
//       localStorage.removeItem('token');
//       delete api.defaults.headers.common['Authorization'];
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     const response = await api.post('/auth/login', { email, password });
//     const { user, token } = response.data;
//     localStorage.setItem('token', token);
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     setUser(user);
//     return user;
//   };

//   const register = async (name, email, password) => {
//     const response = await api.post('/auth/register', { name, email, password });
//     const { user, token } = response.data;
//     localStorage.setItem('token', token);
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     setUser(user);
//     return user;
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     delete api.defaults.headers.common['Authorization'];
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// DEMO
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const ADMIN_DOMAIN = "adminDomain.com";

const isAdminEmail = (email) => {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain === ADMIN_DOMAIN.toLowerCase();
};

export const AuthProvider = ({ children }) => {
  // Start as "logged out"
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // DEMO: no API call, just set a fake user
    const role = isAdminEmail(email) ? 'admin' : 'user';
    const demoUser = {
      id: role === 'admin' ? 'demo-admin-id' : 'demo-user-id',
      name: role === 'admin' ? 'Admin User' : 'Demo User',
      email,
      role,
    };
    setUser(demoUser);
    return demoUser;
  };

  const register = async (name, email, password) => {
    // DEMO: behave same as login
    const role = isAdminEmail(email) ? 'admin' : 'user';
    const demoUser = {
      id: role === 'admin' ? 'demo-admin-id' : 'demo-user-id',
      name: name || (role === 'admin' ? 'Admin User' : 'Demo User'),
      email,
      role,
    };
    setUser(demoUser);
    return demoUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
