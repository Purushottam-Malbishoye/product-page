// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js';

// export const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.replace('Bearer ', '');
    
//     if (!token) {
//       return res.status(401).json({ error: 'Authentication required' });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.userId).select('-password');
    
//     if (!user) {
//       return res.status(401).json({ error: 'User not found' });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };

// export const authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ error: 'Access denied' });
//     }
//     next();
//   };
// };


// TEMP DEMO VERSION – no real auth

export const authenticate = (req, res, next) => {
  // Pretend a user is always logged in
  req.user = {
    _id: 'demo-user-id',
    name: 'Demo User',
    email: 'demo@example.com',
    role: 'user'
  };
  next();
};

export const authorize = () => (req, res, next) => next();
