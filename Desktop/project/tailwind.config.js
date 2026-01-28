/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#F6B1CE',
          blue: '#1581BF',
          teal: '#3DB6B1',
          violet: '#7d18e2',
          green: '#1fd41fff'
        },
        brand: {
          white: '#eaeaea',
          black: '#040404ff',
          orange: '#F25912',
          purple: '#bc13fe',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1)', opacity: '0.6' },
        },
      },
      animation: {
        breath: 'breath 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
