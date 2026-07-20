# Deployment Guide: Next.js Website on Ubuntu VPS

This guide provides step-by-step instructions to host and deploy the **Buildnest Website** on an Ubuntu VPS under the domain **buildnest-website.advait.website**.

---

## 1. Domain & DNS Setup

Before configuring the server, point your domain to your VPS:
1. Log into your Domain Registrar or DNS provider (e.g., Cloudflare, Namecheap, GoDaddy).
2. Add an **A Record** pointing to your VPS IP:
   - **Type:** `A`
   - **Name:** `buildnest-website` (which results in `buildnest-website.advait.website`)
   - **Value:** `YOUR_VPS_PUBLIC_IP_ADDRESS`
   - **TTL:** Auto or 3600

---

## 2. Server Installation & Configuration

SSH into your Ubuntu VPS:
```bash
ssh ubuntu@YOUR_VPS_PUBLIC_IP_ADDRESS
```

### Update System Packages
```bash
sudo apt update && sudo apt upgrade -y
```

### Install Node.js (Node.js 20.x or 22.x)
Next.js 16 requires Node.js v20.0.0 or later. Install it using the NodeSource distribution:
```bash
# Download and install NodeSource Node.js 20 GPG key and repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node -v
npm -v
```

### Install Nginx, Git, and Certbot
```bash
sudo apt install -y nginx git certbot python3-certbot-nginx
```

### Install PM2 (Process Manager) Globally
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

# Clone repository (replace with your git URL)
git clone https://github.com/advaitkhangar01/Buildnest-Website.git /var/www/buildnest-website

# Navigate to the directory
cd /var/www/buildnest-website
```

*(Note: If your repository is private, you may need to generate an SSH key on your VPS with `ssh-keygen -t ed25519` and add it to your GitHub account under Settings -> SSH and GPG keys.)*

---

## 4. Install Dependencies & Perform Initial Build

Next.js requires development dependencies (like TypeScript and TailwindCSS) to build. We install everything first, build the project, and then start the application.
```bash
# Install dependencies
npm install

# Build the Next.js application
npm run build
```

---

## 5. Configure Nginx Reverse Proxy

Nginx acts as a reverse proxy, accepting external traffic on ports 80/443 and routing it to the internal Next.js server on port 3001.

1. Copy the template Nginx configuration:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/buildnest-website
   ```

2. Link the configuration to enable it:
   ```bash
   sudo ln -s /etc/nginx/sites-available/buildnest-website /etc/nginx/sites-enabled/
   ```

3. (Optional) Remove the default Nginx configurations if not needed:
   ```bash
   sudo rm -f /etc/nginx/sites-enabled/default
   ```

4. Verify the Nginx syntax is correct:
   ```bash
   sudo nginx -t
   ```

5. Restart Nginx to apply changes:
   ```bash
   sudo systemctl restart nginx
   ```

---

## 6. Secure the Site with SSL (Let's Encrypt)

Certbot will automatically verify ownership of the domain, request a free SSL certificate from Let's Encrypt, and automatically configure Nginx to use SSL.

Run the following command:
```bash
sudo certbot --nginx -d buildnest-website.advait.website
```

- Enter your email address when prompted.
- Accept the terms of service.
- Choose whether or not to share your email.
- Select the option to automatically redirect HTTP traffic to HTTPS (option `2: Redirect` if prompted, though our Nginx configuration already has redirect logic).

Certbot will update `/etc/nginx/sites-available/buildnest-website` automatically to point to your new SSL certificate files.

---

## 7. Run Application with PM2

Start the Next.js production server in the background and configure PM2 to automatically restart the application on server reboot.

1. Start the server using the PM2 ecosystem configuration:
   ```bash
   pm2 start ecosystem.config.js
   ```

2. Generate and configure the PM2 startup script:
   ```bash
   pm2 startup
   ```
   *This command outputs a specific `sudoenv` command. Copy and paste that command into your terminal and run it.*

3. Save the current process list so it loads on startup:
   ```bash
   pm2 save
   ```

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

This will run git pull, install any new dependencies, run `npm run build`, and reload PM2 automatically. Logs for the deployment will be stored in `deployment.log`.

---

## 9. Useful Commands

### PM2 Process Management
- **List processes:** `pm2 list`
- **View logs:** `pm2 logs buildnest-website`
- **Restart application:** `pm2 restart buildnest-website`
- **Stop application:** `pm2 stop buildnest-website`

### Nginx Management
- **Restart Nginx:** `sudo systemctl restart nginx`
- **Nginx status:** `sudo systemctl status nginx`
- **Check access logs:** `tail -f /var/log/nginx/access.log`
- **Check error logs:** `tail -f /var/log/nginx/error.log`
