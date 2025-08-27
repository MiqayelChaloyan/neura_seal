# GoDaddy Deployment Guide for Neura Seal React App

## Prerequisites
- GoDaddy hosting account with cPanel access
- Node.js installed on your local machine

## Step 1: Build Your Application

```bash
# Install dependencies (if not already done)
npm install

# Build the application
npm run build

# Or use the deploy script
npm run deploy
```

This will create a `dist` folder with your built application.

## Step 2: Access GoDaddy cPanel

1. Log in to your GoDaddy account
2. Go to your hosting dashboard
3. Click on "cPanel" or "Web Hosting Control Panel"

## Step 3: Upload Files

### Option A: Using File Manager
1. In cPanel, click on "File Manager"
2. Navigate to `public_html` folder (or your domain's root directory)
3. Delete any existing files (backup if needed)
4. Upload all contents from your local `dist` folder to `public_html`

### Option B: Using FTP
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your GoDaddy server using:
   - Host: Your domain or server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (default)
3. Navigate to `public_html` folder
4. Upload all contents from your local `dist` folder

## Step 4: Verify .htaccess

Ensure the `.htaccess` file is uploaded to your root directory. This file handles:
- React Router routing
- Compression
- Caching headers

## Step 5: Test Your Application

1. Visit your domain in a browser
2. Test all routes to ensure they work properly
3. Check that assets (images, CSS, JS) load correctly

## Troubleshooting

### 404 Errors on Routes
- Ensure `.htaccess` file is uploaded
- Check that mod_rewrite is enabled on your hosting
- Verify file permissions (644 for files, 755 for folders)

### Assets Not Loading
- Check that all files from `dist` folder are uploaded
- Verify file paths in browser developer tools
- Ensure no caching issues

### Performance Issues
- Enable Gzip compression in cPanel
- Set appropriate cache headers
- Optimize images before building

## File Structure After Upload

Your `public_html` folder should contain:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── [other build files]
```

## Maintenance

- Always backup your current deployment before updating
- Test locally before deploying
- Monitor your application's performance and errors
- Keep your dependencies updated

## Support

If you encounter issues:
1. Check GoDaddy's hosting status
2. Review cPanel error logs
3. Contact GoDaddy support for server-related issues
4. Check browser console for client-side errors
