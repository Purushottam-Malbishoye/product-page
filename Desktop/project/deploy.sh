#!/bin/bash

# LUCI Application Deployment Script
# This script helps deploy the application to various platforms

set -e

echo "🚀 LUCI Deployment Helper"
echo "========================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
fi

# Run build
echo -e "${BLUE}🔨 Building application...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed. Please fix errors and try again.${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}Build completed successfully!${NC}"
echo ""
echo "Choose your deployment platform:"
echo "1) Netlify"
echo "2) Vercel"
echo "3) Manual (just build, I'll deploy myself)"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}🌐 Deploying to Netlify...${NC}"

        if ! command -v netlify &> /dev/null; then
            echo -e "${YELLOW}Netlify CLI not found. Installing...${NC}"
            npm install -g netlify-cli
        fi

        echo "Logging into Netlify..."
        netlify login

        echo "Deploying to production..."
        netlify deploy --prod --dir=dist

        echo -e "${GREEN}✅ Deployment to Netlify complete!${NC}"
        ;;

    2)
        echo ""
        echo -e "${BLUE}🌐 Deploying to Vercel...${NC}"

        if ! command -v vercel &> /dev/null; then
            echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
            npm install -g vercel
        fi

        echo "Logging into Vercel..."
        vercel login

        echo "Deploying to production..."
        vercel --prod

        echo -e "${GREEN}✅ Deployment to Vercel complete!${NC}"
        ;;

    3)
        echo ""
        echo -e "${GREEN}✅ Build complete!${NC}"
        echo ""
        echo "Your production build is in the 'dist' folder."
        echo "Upload this folder to your hosting provider."
        ;;

    *)
        echo -e "${RED}Invalid choice. Exiting.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${BLUE}📝 Next steps:${NC}"
echo "1. Set up environment variables on your hosting platform"
echo "2. Test your deployed application"
echo "3. Set up a custom domain (optional)"
echo ""
echo -e "${GREEN}🎉 Happy launching!${NC}"
