# Safe Deployment Guide: Next.js Website on Shared Ubuntu VPS (Port 3012)

This guide provides step-by-step instructions to host and deploy the **Buildnest Website** on a shared Ubuntu VPS under the domain **buildnest-website.advait.website** without impacting any existing websites (`advait.website`, `aquasaver`, or `w4y`).

---

## 1. Domain & DNS Setup

Before configuring the server, point your domain to your VPS:
1. Log into your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy).
2. Add an **A Record** pointing to your VPS IP:
   - **Type:** `A`
   - **Name:** `buildnest-website` (which results in `buildnest-website.advait.website`)
   - **Value:** `168.231.102.17`
   - **TTL:** Auto or 3600

---

## 2. Server Installation & Pre-Checks

SSH into your Ubuntu VPS:
```bash
ssh advait@168.231.102.17
```

### Check Port 3012 Availability
This project is configured to run on **Port 3012** to prevent conflicts with `aquasaver` (port 3000) and `w4y` (port 3001).
Verify that Port 3012 is free:
```bash
sudo ss -tulpn | grep :3012
```
*If this command returns no output, Port 3012 is free and safe to use.*

---

## 3. Clone and Initialize the Repository

Create a directory for the website and clone the code:
```bash
# Navigate to /var/www
cd /var/www

# Clone repository into 'buildnest-website'
git clone https://github.com/advaitkhangar01/Buildnest-Website.git buildnest-website

# Navigate to the directory
cd buildnest-website
```

---

## 4. Install Dependencies & Build

```bash
# Install dependencies
npm install

# Build the Next.js application
npm run build
```

---

## 5. Configure Nginx Reverse Proxy (IPv4 Only)

Nginx acts as a reverse proxy, routing traffic to port 3012.

1. Copy the template Nginx configuration:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/buildnest-website
   ```

2. Link the configuration to enable it:
   ```bash
   sudo ln -s /etc/nginx/sites-available/buildnest-website /etc/nginx/sites-enabled/
   ```

3. Verify the Nginx syntax is correct:
   ```bash
   sudo nginx -t
   ```
   *Should report "syntax is ok" and "test is successful".*

4. Reload Nginx (safe reload, does not drop active connections to your other websites):
   ```bash
   sudo systemctl reload nginx
   ```

---

## 6. Secure the Site with SSL (Let's Encrypt)

Certbot will automatically verify domain ownership and configure SSL.

Run the following command:
```bash
sudo certbot --nginx -d buildnest-website.advait.website
```

- If prompted to reinstall or renew existing certificate, choose **1** (Reinstall).
- Certbot will inject the SSL certificate into `/etc/nginx/sites-available/buildnest-website` without affecting other sites.

---

## 7. Run Application with PM2

Start the Next.js production server on Port 3012 in the background.

1. Start the server using PM2:
   ```bash
   pm2 start ecosystem.config.js
   ```

2. Save the PM2 process list:
   ```bash
   pm2 save
   ```

---

## 8. Automating Future Deployments

For subsequent updates, run:
```bash
chmod +x deploy.sh && ./deploy.sh
```

---

## 9. Useful PM2 Commands

- **List active apps:** `pm2 list`
- **View logs:** `pm2 logs buildnest-website`
- **Restart application:** `pm2 restart buildnest-website`
- **Stop application:** `pm2 stop buildnest-website`
