import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect x="5" y="5" width="90" height="90" rx="18" fill="url(#logoGradient)"/>

      <text
        x="50"
        y="72"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        FS
      </text>
    </svg>
  );
};

export default Logo;
