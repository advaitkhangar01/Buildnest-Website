# Safe Deployment Guide: Next.js Website on Shared Ubuntu VPS

This guide provides step-by-step instructions to host and deploy the **Buildnest Website** on a shared Ubuntu VPS under the domain **buildnest-website.advait.website** without impacting any existing websites or web applications.

---

## 1. Domain & DNS Setup

Before configuring the server, point your domain to your VPS:
1. Log into your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy).
2. Add an **A Record** pointing to your VPS IP:
   - **Type:** `A`
   - **Name:** `buildnest-website` (which results in `buildnest-website.advait.website`)
   - **Value:** `YOUR_VPS_PUBLIC_IP_ADDRESS`
   - **TTL:** Auto or 3600

---

## 2. Server Installation & Configuration (If not already installed)

SSH into your Ubuntu VPS:
```bash
ssh ubuntu@YOUR_VPS_PUBLIC_IP_ADDRESS
```

### Check Port 3001 Availability
Since port 3000 is already in use by another web application on your VPS, this project is configured to run on **Port 3001**.
Verify that Port 3001 is currently free:
```bash
sudo ss -tulpn | grep :3001
```
*If this command returns no output, Port 3001 is free and safe to use.*

### Install PM2 (Process Manager) Globally
Check if PM2 is already installed:
```bash
pm2 -v
```
*If it is not installed, install it globally:*
```bash
sudo npm install -g pm2
```

---

## 3. Clone and Initialize the Repository

Create a directory for the website and clone the code:
```bash
# Create directory and set ownership to current user
sudo mkdir -p /var/www/buildnest-website
sudo chown -R $USER:$USER /var/www/buildnest-website

# Clone repository
git clone https://github.com/advaitkhangar01/Buildnest-Website.git /var/www/buildnest-website

# Navigate to the directory
cd /var/www/buildnest-website
```

---

## 4. Install Dependencies & Perform Initial Build

Next.js requires development dependencies to build.
```bash
# Install dependencies
npm install

# Build the Next.js application
npm run build
```

---

## 5. Configure Nginx Reverse Proxy (HTTP-Only First)

Nginx acts as a reverse proxy, routing traffic to port 3001. We use a safe HTTP-only (Port 80) configuration first. Certbot will then read this configuration and automatically add the SSL directives to match your system-wide SSL setup.

1. Copy the template Nginx configuration:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/buildnest-website
   ```

2. Link the configuration to enable it:
   ```bash
   sudo ln -s /etc/nginx/sites-available/buildnest-website /etc/nginx/sites-enabled/
   ```

3. **DO NOT** delete any other configuration files in `/etc/nginx/sites-enabled/`!

4. Verify the Nginx syntax is correct:
   ```bash
   sudo nginx -t
   ```
   *This command should say "syntax is ok" and "test is successful".*

5. Reload Nginx (safe reload, does not drop active connections to your other websites):
   ```bash
   sudo systemctl reload nginx
   ```

---

## 6. Secure the Site with SSL (Let's Encrypt)

Certbot will automatically verify ownership of the domain, request a free SSL certificate from Let's Encrypt, and automatically configure Nginx to use SSL using the exact same cipher and protocol configurations as your other websites.

Run the following command:
```bash
sudo certbot --nginx -d buildnest-website.advait.website
```

- Enter your email address and accept terms if prompted.
- Choose whether to redirect HTTP traffic to HTTPS (recommended).
- Certbot will automatically inject the SSL certificates into `/etc/nginx/sites-available/buildnest-website`.

---

## 7. Run Application with PM2

Start the Next.js production server in the background.

1. Start the server using the PM2 ecosystem configuration:
   ```bash
   pm2 start ecosystem.config.js
   ```

2. Save the current process list so it persists after reboots:
   ```bash
   pm2 save
   ```
   *(Note: You only need to run `pm2 startup` if PM2 has never been configured on this VPS before. Since you already have live apps running, PM2 startup is already active!)*

---

## 8. Automating Future Deployments

For subsequent updates, a `deploy.sh` script is provided to automate pulling changes, building the website, and restarting PM2 with zero downtime.

1. Ensure the deployment script has executable permissions:
   ```bash
   chmod +x deploy.sh
   ```

2. To deploy new updates, simply run:
   ```bash
   ./deploy.sh
   ```

This will run git pull, install new dependencies, run `npm run build`, and reload PM2 automatically. Logs for the deployment will be stored in `deployment.log`.

---

## 9. Useful PM2 Commands

- **List active apps:** `pm2 list`
- **View logs:** `pm2 logs buildnest-website`
- **Restart application:** `pm2 restart buildnest-website`
- **Stop application:** `pm2 stop buildnest-website`
