# Development Tips for Retro Paddle Ball Website

## Avoiding Browser Cache Issues

When developing and testing the website, browser caching can sometimes cause issues where updates don't appear immediately. Here are some strategies to avoid this:

### During Development

1. **Use Hard Refresh**: 
   - Chrome/Firefox: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - This bypasses cache for the current page

2. **Use Private/Incognito Mode**:
   - Private windows don't use cached data
   - Good for testing "fresh visitor" experience

3. **Disable Cache in DevTools**:
   - Open Developer Tools (F12)
   - Go to Network tab
   - Check "Disable cache" checkbox
   - Keep DevTools open while testing

4. **Clear Browser Data**:
   - Chrome: Settings > Privacy and Security > Clear browsing data
   - Select "Cached images and files"

### For Production

The website includes cache-busting strategies:

1. **Query Parameters**: CSS and JS files include version timestamps
2. **Proper Cache Headers**: Different cache durations for different file types
3. **Service Worker**: Handles cache updates intelligently

## Testing Checklist

Before considering a feature "broken":

1. **Hard refresh the page** (`Ctrl+Shift+R` / `Cmd+Shift+R`)
2. **Check in private/incognito mode**
3. **Clear cache and reload**
4. **Check browser console** for JavaScript errors
5. **Test in a different browser**

## Component-Specific Testing

### Scroll-to-Top Button
- Should appear when scrolling down 300px
- Should be visible on the right side of the screen
- Should be a blue circular button with an arrow

### Tawk.to Chat Widget
- Loads after 3 seconds OR when user scrolls 200px
- Appears as a chat bubble (usually bottom-right)
- May be blocked by ad blockers - test with ad blocker disabled

### Service Worker
- Check in DevTools > Application > Service Workers
- Should show as "Activated and is running"

## Performance Testing

After making changes, test with:

1. **Lighthouse** (in Chrome DevTools)
2. **PageSpeed Insights** (https://pagespeed.web.dev/)
3. **WebPageTest** (https://www.webpagetest.org/)

## Deployment Notes

When deploying to production:

1. Run `./build.sh` or `npm run build:production`
2. Test the `_site` directory contents
3. Ensure all assets are properly optimized
4. Check that cache headers are working correctly

### GitHub Actions Deployment

The site deploys automatically via GitHub Actions when you push to the `main` branch. The workflow:

1. **Uses Node.js 22** - Required for Eleventy v3 compatibility
2. **Checks Node.js version** - Ensures compatibility before building
3. **Updates browserslist database** - Eliminates outdated browser data warnings
4. **Runs production build** - Includes all optimizations and image processing
5. **Deploys to GitHub Pages** - Automatic deployment with proper artifact handling

### Troubleshooting GitHub Actions

If the workflow fails:

1. **Check Node.js version**: Workflow uses Node.js 22+
2. **Review build logs**: Look for specific error messages
3. **Test locally**: Run `npm run build:production` to reproduce issues
4. **Check dependencies**: Ensure all npm packages are compatible

### Environment Variables

The following secrets need to be set in GitHub repository settings:

- `CLOUDFLARE_ANALYTICS_TOKEN` - For Cloudflare Web Analytics (optional)
