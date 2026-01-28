# LUCI - AI SDR Campaign Management Platform

A modern web application for managing AI-powered Sales Development Representative (SDR) campaigns with advanced audience targeting capabilities.

## Features

- **Campaign Management**: Create and manage email outreach campaigns
- **Advanced Targeting**: Target by industry, department, persona, geography, and company size
- **Multiple Data Sources**: Upload your own CSV or use AI SDR database
- **Email Templates**: Choose from pre-built templates optimized for different scenarios
- **Analytics Dashboard**: Track campaign performance and metrics
- **Team Collaboration**: Manage campaigns across organizations

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Recharts** for data visualization
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **Supabase** for database and authentication
- **PostgreSQL** with Row Level Security

### Deployment
- **Netlify** or **Vercel** for frontend
- **Supabase Edge Functions** for serverless functions
- **Railway/Render** for backend API (optional)

## Quick Start

### Prerequisites
- Node.js 18+ installed
- A Supabase account
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── product-app/         # Product application
│   │   ├── components/      # Product-specific components
│   │   ├── pages/           # Application pages
│   │   ├── services/        # API services
│   │   ├── contexts/        # React contexts
│   │   └── config/          # Configuration files
│   ├── lib/                 # Shared utilities
│   ├── hooks/               # Custom React hooks
│   └── index.css            # Global styles
├── backend/                 # Express backend (optional)
│   ├── controllers/         # Request handlers
│   ├── models/              # Data models
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   └── middleware/          # Express middleware
├── supabase/
│   ├── migrations/          # Database migrations
│   └── functions/           # Edge functions
└── public/                  # Static assets
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Database Migrations

The application uses Supabase for database management. All migrations are in `supabase/migrations/`.

Key tables:
- `users` - User accounts
- `organizations` - Business organizations
- `campaigns` - Campaign data with v177 audience targeting
- `dataset_uploads` - CSV upload tracking
- `automation_requests` - Campaign automation queue
- `team_members` - Organization membership

### Campaign Wizard Fields (v177 Integration)

The Create Campaign wizard includes:

**Required Fields:**
- Campaign Name
- Database Source (Own CSV or AI SDR)

**Optional Advanced Targeting:**
- Target Segment (B2B, B2C, B2B2C)
- Industries (18 options)
- Department & Persona Targeting
- Industry & Persona Targeting
- Geography (30+ locations)
- Company Size (8 ranges)
- Email Template (5 pre-built templates)

All v177 fields are backward compatible - existing campaigns continue to work without these fields.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Netlify

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

## Environment Variables

### Frontend (.env)
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_API_URL=your_backend_url (optional)
```

### Backend (backend/.env)
```bash
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_jwt_secret
PORT=3000
NODE_ENV=production
```

## Security

- All tables have Row Level Security (RLS) enabled
- JWT-based authentication
- Secure password hashing
- CORS protection
- XSS protection headers
- Input validation and sanitization

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Support

For issues or questions:
- Check existing GitHub issues
- Review the documentation
- Contact the development team

## License

Proprietary - All rights reserved

---

Built with ❤️ using React, TypeScript, and Supabase
