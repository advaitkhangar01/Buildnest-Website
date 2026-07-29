# Safe Deployment & Domain Migration Guide: Next.js Website on Shared Ubuntu VPS (Port 3012)

This guide provides step-by-step instructions to host and deploy the **Buildnest Website** on a shared Ubuntu VPS under the primary domain **`buildnestnagpur.com`** (and `www.buildnestnagpur.com`) without impacting any existing websites (`advait.website`, `aquasaver`, or `w4y`).

---

## 1. Domain & DNS Setup

Before updating the server, point your domain `buildnestnagpur.com` to your VPS IP:
1. Log into your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy).
2. Add **A Records** pointing to your VPS IP:
   - **Type:** `A` | **Name:** `@` (or `buildnestnagpur.com`) | **Value:** `168.231.102.17`
   - **Type:** `A` | **Name:** `www` | **Value:** `168.231.102.17`
   - **TTL:** Auto or 3600

---

## 2. Server SSH Login & Port Verification

SSH into your Ubuntu VPS:
```bash
ssh advait@168.231.102.17
```

### Check Port 3012 Availability
This project runs on **Port 3012** to prevent conflicts with `aquasaver` (port 3000) and `w4y` (port 3001).
Verify that Port 3012 is running the Buildnest app:
```bash
sudo ss -tulpn | grep :3012
```

---

## 3. Pull Latest Code & Execute Deploy Script

Navigate to the project directory on your VPS:
```bash
cd /var/www/buildnest-website

# Grant execution rights and run deployment script
chmod +x deploy.sh
./deploy.sh
```

The `./deploy.sh` script automatically:
1. Pulls the latest code from GitHub.
2. Installs production dependencies (`npm ci`).
3. Builds the Next.js application (`npm run build`).
4. Performs a zero-downtime reload via PM2 (`pm2 reload ecosystem.config.js`).
5. Validates and reloads Nginx safely.

---

## 4. Configure Nginx Reverse Proxy for buildnestnagpur.com

1. Copy the updated Nginx configuration:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/buildnestnagpur
   ```

2. Enable the new site configuration:
   ```bash
   sudo ln -sf /etc/nginx/sites-available/buildnestnagpur /etc/nginx/sites-enabled/
   ```

3. (Optional) Remove legacy config symlink if previously enabled:
   ```bash
   sudo rm -f /etc/nginx/sites-enabled/buildnest-website
   ```

4. Verify Nginx configuration syntax:
   ```bash
   sudo nginx -t
   ```
   *Should report "syntax is ok" and "test is successful".*

5. Reload Nginx (zero downtime, does not drop active connections to other websites):
   ```bash
   sudo systemctl reload nginx
   ```

---

## 5. Secure New Domain with SSL (Let's Encrypt Certbot)

Run Certbot to issue SSL certificates for `buildnestnagpur.com` and `www.buildnestnagpur.com`:

```bash
sudo certbot --nginx -d buildnestnagpur.com -d www.buildnestnagpur.com
```

- Follow the interactive prompt to confirm certificate issuance.
- Certbot will inject the SSL configuration automatically into `/etc/nginx/sites-available/buildnestnagpur`.

---

## 6. PM2 Process Management Commands

- **List active apps:** `pm2 list`
- **View logs:** `pm2 logs buildnest-website`
- **Reload application (zero downtime):** `pm2 reload buildnest-website`
- **Restart application:** `pm2 restart buildnest-website`
- **Stop application:** `pm2 stop buildnest-website`

