# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio files ready

## Method 1: Simple Direct Deployment (Recommended)

This method deploys the source files directly without a build step.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `your-username.github.io`)
5. Make it **Public**
6. Do NOT initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Prepare Your Files

Make sure these three files are in your project folder:
- `index.html`
- `style.css`
- `script.js`

### Step 3: Initialize Git and Push

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add index.html style.css script.js

# Commit your files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/ (root)"
6. Click "Save"

### Step 5: Access Your Website

Your site will be available at:
- `https://YOUR-USERNAME.github.io/REPO-NAME/` (for regular repos)
- `https://YOUR-USERNAME.github.io/` (if repo is named `YOUR-USERNAME.github.io`)

**Note**: It may take a few minutes for the site to become available.

## Method 2: Using Vite Build (Advanced)

This method uses Vite's build process for optimized production files.

### Step 1: Update vite.config.js

Create or update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/REPO-NAME/', // Replace with your repo name
  build: {
    outDir: 'dist'
  }
})
```

If your repo is `username.github.io`, use:
```javascript
base: '/'
```

### Step 2: Build the Project

```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Step 3: Deploy dist Folder

**Option A: Using gh-pages package**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

**Option B: Manual deployment**

```bash
# Build
npm run build

# Navigate to dist
cd dist

# Initialize git
git init
git add -A
git commit -m 'Deploy'

# Push to gh-pages branch
git push -f https://github.com/YOUR-USERNAME/REPO-NAME.git main:gh-pages

# Go back
cd ..
```

### Step 4: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Select "gh-pages" branch
3. Select "/ (root)" folder
4. Save

## Method 3: GitHub Actions (Automated)

This automatically deploys when you push changes.

### Step 1: Create Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

### Step 2: Push Workflow

```bash
git add .github/workflows/deploy.yml
git commit -m "Add deployment workflow"
git push
```

### Step 3: Configure GitHub Pages

1. Go to Settings → Pages
2. Select "gh-pages" branch
3. Select "/ (root)" folder
4. Save

Now every push to main will automatically deploy!

## Custom Domain Setup (Optional)

### Step 1: Add CNAME File

Create a file named `CNAME` in your repository root:

```
yourdomain.com
```

Or for a subdomain:
```
portfolio.yourdomain.com
```

### Step 2: Configure DNS

Add these DNS records at your domain provider:

For apex domain (yourdomain.com):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

For subdomain (portfolio.yourdomain.com):
```
Type: CNAME
Name: portfolio
Value: YOUR-USERNAME.github.io
```

### Step 3: Enable in GitHub

1. Go to Settings → Pages
2. Enter your custom domain
3. Wait for DNS check to complete
4. Enable "Enforce HTTPS"

## Troubleshooting

### Site Not Loading

1. **Check branch**: Ensure correct branch is selected in Settings → Pages
2. **Wait**: Initial deployment can take 10-15 minutes
3. **Check Actions**: Go to "Actions" tab to see build status
4. **Clear cache**: Try accessing in incognito/private mode

### CSS/JS Not Loading

1. **Check paths**: Ensure all file paths are relative (no leading `/`)
2. **Check base**: If using Vite build, ensure `base` in config matches repo name
3. **Case sensitive**: GitHub Pages is case-sensitive (use lowercase)

### 404 Errors

1. **Check file names**: Must be exact match (case-sensitive)
2. **Check base URL**: Update `base` in vite.config.js
3. **Check repository name**: Must match the URL path

### Images Not Showing

1. Use relative paths: `./image.jpg` not `/image.jpg`
2. Check file extensions match exactly
3. Ensure images are committed to repository

## Updating Your Site

After making changes:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

If using Method 1: Changes appear automatically
If using Method 2: Run `npm run deploy` again
If using Method 3: Push triggers automatic deployment

## Performance Tips

1. **Optimize images**: Compress images before uploading
2. **Minimize CSS**: Use Vite build for minified CSS
3. **Enable caching**: GitHub Pages automatically caches assets
4. **Use CDN**: Font Awesome is already loaded from CDN

## Security Best Practices

1. Never commit sensitive data (API keys, passwords)
2. Use environment variables for any secrets
3. Enable HTTPS in GitHub Pages settings
4. Keep dependencies updated

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## Need Help?

1. Check GitHub Actions logs for build errors
2. Verify all file paths are correct
3. Ensure repository is public (or has GitHub Pro for private repos)
4. Check GitHub Status page for platform issues

---

**Quick Command Reference**

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Updates
git add .
git commit -m "Update message"
git push

# Build (if using Vite)
npm run build

# Deploy (if using gh-pages package)
npm run deploy
```

Good luck with your deployment!