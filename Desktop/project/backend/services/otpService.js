const nodemailer = require('nodemailer');
const crypto = require('crypto');

// In-memory OTP store (use Redis in production)
const otpStore = new Map();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email service
  auth: {
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASS
  }
});

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
};

const sendOTP = async (email) => {
  const otp = generateOTP();
  const expires = Date.now() + 5 * 60 * 1000; // 5 minutes
  
  otpStore.set(email, { otp, expires });
  
  await transporter.sendMail({
    from: process.env.EMAIL_SERVICE_USER,
    to: email,
    subject: 'FirstScience PA Login OTP',
    text: `Your OTP is: ${otp} (expires in 5 minutes)`
  });
  
  return true;
};

const verifyOTP = (email, otp) => {
  const stored = otpStore.get(email);
  if (!stored || stored.expires < Date.now()) {
    return false;
  }
  return stored.otp === otp;
};

module.exports = { sendOTP, verifyOTP };
