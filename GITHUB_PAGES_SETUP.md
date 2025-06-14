# GitHub Pages Setup Guide

This guide will help you deploy your Eleventy website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. The repository should be public (or you need GitHub Pro for private repos)

## Setup Steps

### 1. Repository Structure
Ensure your repository has this structure:
```
your-repo/
├── retropaddleball-site/          # Your Eleventy site
│   ├── .github/workflows/deploy.yml  # GitHub Actions workflow
│   ├── src/                       # Source files
│   ├── package.json              # Dependencies
│   └── .eleventy.js              # Eleventy config
└── (other project files)
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (in the repository, not your account)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to the main branch

### 3. Configure the Workflow

The workflow in `.github/workflows/deploy.yml` is already configured for a subfolder setup. It will:
- Trigger on pushes to `main` branch when files in `retropaddleball-site/` change
- Install Node.js and dependencies
- Build the Eleventy site
- Deploy to GitHub Pages

### 4. Custom Domain (Optional)

If you have a custom domain:

1. Update `src/CNAME` with your domain name:
   ```
   yourdomain.com
   ```

2. In your DNS provider, add a CNAME record:
   ```
   CNAME    www    yourusername.github.io
   ```

3. In GitHub repository settings > Pages, add your custom domain

### 5. Testing Your Deployment

1. Push your changes to the main branch
2. Go to **Actions** tab in your GitHub repository
3. Watch the deployment workflow run
4. Once complete, visit your site at:
   - `https://yourusername.github.io/your-repo-name` (default)
   - `https://yourdomain.com` (if using custom domain)

## Troubleshooting

### Build Fails
- Check the Actions log for error messages
- Ensure `package.json` and `package-lock.json` are committed
- Verify all referenced assets exist in `src/assets/`

### 404 Errors
- Check that `src/.nojekyll` exists and is being copied
- Verify asset paths start with `/` (e.g., `/assets/image.png`)
- Ensure the repository name matches your expected URL path

### Workflow Not Triggering
- Ensure the workflow file is in `.github/workflows/deploy.yml`
- Check that changes are being made to files in `retropaddleball-site/`
- Verify the branch name matches what's specified in the workflow

### Assets Not Loading
- Check that assets are in `src/assets/` directory
- Verify `.eleventy.js` includes `addPassthroughCopy("src/assets")`
- Ensure asset paths in HTML/Markdown start with `/assets/`

## Local Development

Test your site locally before pushing:

```bash
cd retropaddleball-site
npm install
npm run dev
```

Visit `http://localhost:8080` to preview your site.

## Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Minimize Dependencies**: Keep `package.json` lean
3. **Use CDN**: External libraries like Tailwind CSS via CDN
4. **Enable Caching**: GitHub Pages automatically caches static assets

## Security

- Never commit sensitive data (API keys, passwords)
- Use environment variables for sensitive configuration
- Keep dependencies updated: `npm audit` and `npm update`

## Monitoring

- Check GitHub Actions for build status
- Monitor site performance with tools like PageSpeed Insights
- Set up uptime monitoring for production sites
