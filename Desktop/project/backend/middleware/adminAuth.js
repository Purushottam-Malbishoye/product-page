const adminAuth = (req, res, next) => {
  // For now: simple company domain check
  // Later: company domain + OTP verification + PA table lookup
  if (!req.user?.email?.endsWith(`@${process.env.COMPANY_DOMAIN}`)) {
    return res.status(403).json({ 
      error: `Access denied. Company domain required (@${process.env.COMPANY_DOMAIN})` 
    });
  }

  req.isPlatformAdmin = true;
  next();
};

module.exports = adminAuth;
