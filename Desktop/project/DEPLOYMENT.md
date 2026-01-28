# Deployment Guide

This application is ready to be deployed to production. Below are instructions for deploying to popular hosting platforms.

## Prerequisites

Before deploying, ensure you have:
- ✅ A Supabase project with the database schema applied
- ✅ Environment variables configured (see Environment Variables section below)
- ✅ A working build (`npm run build` passes without errors)

## Environment Variables

Your deployment platform needs these environment variables:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Backend API (if deploying separately)
VITE_API_URL=your_backend_api_url
```

Get these values from your Supabase project settings:
1. Go to https://app.supabase.com
2. Select your project
3. Go to Settings > API
4. Copy the Project URL and anon/public key

## Deployment Options

### Option 1: Deploy to Netlify (Recommended)

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via Netlify Website**:
   - Go to https://app.netlify.com
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Add environment variables in Site settings > Environment variables
   - Click "Deploy site"

3. **Deploy via CLI**:
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Option 2: Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Website**:
   - Go to https://vercel.com
   - Click "Add New" > "Project"
   - Import your Git repository
   - Vercel will auto-detect the Vite framework
   - Add environment variables in Project Settings > Environment Variables
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel login
   vercel
   vercel --prod
   ```

### Option 3: Deploy to Custom Server

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure your web server** to:
   - Serve the `dist` folder as the document root
   - Redirect all routes to `index.html` for SPA routing
   - Set appropriate security headers

Example Nginx configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

## Backend Deployment

The backend (Express server) needs to be deployed separately:

### Deploy Backend to Railway/Render/Heroku

1. Create a new service on your chosen platform
2. Connect your Git repository
3. Set the root directory to `backend`
4. Configure environment variables (see backend/.env.example)
5. Deploy

### Backend Environment Variables

```bash
# Database
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# JWT
JWT_SECRET=your_random_secret_key

# Server
PORT=3000
NODE_ENV=production

# External Services (if applicable)
MANYREACH_API_KEY=your_manyreach_api_key
N8N_WEBHOOK_URL=your_n8n_webhook_url
```

## Post-Deployment Checklist

After deploying, verify:
- [ ] Frontend loads correctly
- [ ] Environment variables are set properly
- [ ] Database connection works
- [ ] Authentication flow works (sign up, login, logout)
- [ ] Campaign creation works
- [ ] File uploads work
- [ ] API endpoints respond correctly
- [ ] Edge functions are deployed (if using Supabase Edge Functions)

## Supabase Edge Functions

Deploy edge functions separately:

```bash
# Using the MCP tool in this environment
# Or manually via Supabase CLI:
supabase functions deploy send-contact-email
```

## Troubleshooting

### Build fails
- Check Node version (requires Node 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run typecheck`

### Environment variables not working
- Ensure they're prefixed with `VITE_` for frontend variables
- Restart the deployment after adding variables
- Check the build logs for any errors

### API calls failing
- Verify `VITE_API_URL` is set correctly
- Check CORS settings on your backend
- Verify Supabase RLS policies are configured

### Routes not working (404 on refresh)
- Ensure SPA redirects are configured (_redirects file or server config)
- Check that all routes redirect to index.html

## Support

For issues with:
- **Supabase**: https://supabase.com/docs
- **Netlify**: https://docs.netlify.com
- **Vercel**: https://vercel.com/docs
- **Application**: Check the repository issues or contact your development team
