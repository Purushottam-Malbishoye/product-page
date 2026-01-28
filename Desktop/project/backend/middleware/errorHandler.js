const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  
  // Auth errors
  if (err.name === 'AuthApiError') {
    return res.status(401).json({ error: 'Auth failed' });
  }
  
  // Default error
  res.status(err.status || 500).json({ 
    error: err.message || 'Something went wrong!' 
  });
};

module.exports = errorHandler;
