#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define directories/variables
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$APP_DIR/deployment.log"

# Redirect stdout and stderr to a log file, and also print to console
exec > >(tee -i "$LOG_FILE") 2>&1

echo "=========================================="
echo "Deployment started at: $(date)"
echo "App directory: $APP_DIR"
echo "=========================================="

cd "$APP_DIR"

# 1. Pull latest changes
echo "Pulling latest changes from git..."
git pull

# 2. Install dependencies
echo "Installing dependencies..."
npm ci

# 3. Build project
echo "Building the application..."
npm run build

# 4. Reload PM2 process
echo "Reloading application in PM2..."
if pm2 describe buildnest-website > /dev/null 2>&1; then
    echo "PM2 process exists, performing zero-downtime reload..."
    pm2 reload ecosystem.config.js --env production
else
    echo "PM2 process not found, starting a new instance..."
    pm2 start ecosystem.config.js --env production
fi

# 5. Save PM2 list
echo "Saving PM2 process list..."
pm2 save

echo "=========================================="
echo "Deployment completed successfully at: $(date)"
echo "=========================================="
