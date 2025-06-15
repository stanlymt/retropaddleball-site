# Retro Paddle Ball Website

This is the official website for Retro Paddle Ball, built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository
2. Navigate to the website directory:
   ```bash
   cd retropaddleball-site
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy `.env.example` to `.env` and add your environment variables:
   ```bash
   cp .env.example .env
   ```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080` with hot reloading enabled.

### Building

Build the site for production:
```bash
# Using the build script (recommended)
./build.sh

# Or using npm if you prefer
npm run build:production
```

This will:
1. Clean the output directory
2. Build CSS with Tailwind in production mode (purged, minified)
3. Build the Eleventy site with HTML minification
4. Generate responsive image variants for different devices
5. Optimize all images for web

The built site will be in the `_site` directory.

### Troubleshooting Build Issues

If you encounter build errors:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. If image processing fails, you may need to install libvips:
   ```bash
   # On macOS with Homebrew
   brew install vips
   
   # On Ubuntu/Debian
   sudo apt-get install libvips-dev
   ```

3. Try building with specific steps to isolate issues:
   ```bash
   # Clean first
   npm run clean
   
   # Build CSS only
   npm run build:css
   
   # Build Eleventy only
   npx @11ty/eleventy
   
   # Generate responsive images
   node generate-responsive-images.js
   
   # Optimize images
   node imagemin.config.js
   ```

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

## 📁 Project Structure

```
retropaddleball-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── assets/                 # Images, videos, static files
│   ├── layouts/                # Nunjucks templates
│   ├── pages/                  # Additional pages
│   ├── about.md               # About page
│   ├── index.md               # Homepage
│   ├── privacy.md             # Privacy policy
│   └── support.md             # Support page
├── .eleventy.js               # Eleventy configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Node.js dependencies
└── README.md                  # This file
```

## 🛠️ Technologies Used

- **Eleventy** - Static site generator
- **Nunjucks** - Templating engine
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Hosting

## 🎨 Tailwind CSS

This project uses Tailwind CSS for styling:

- Tailwind CSS is processed during build through PostCSS
- The main Tailwind file is in `src/css/tailwind.css`
- Configuration is in `tailwind.config.js` 
- Tailwind Typography plugin is used for basic text styling

**Important:** Do not use the CDN version in production. The proper build system is already set up to compile Tailwind CSS.

## 📝 Content Management

- Pages are written in Markdown with front matter
- Layouts use Nunjucks templating
- Assets are automatically copied from `src/assets/` to the built site
- The site uses responsive design with Tailwind CSS

## 🔧 Configuration

The main configuration is in `.eleventy.js`, which sets up:
- Input/output directories
- Asset copying
- Date filters
- Markdown processing with Nunjucks

## � Environment Variables

The website uses environment variables to handle sensitive information securely. These are managed in different ways depending on the environment:

- **Development**: Uses a local `.env` file (copy from `.env.example`)
- **Production**: Uses GitHub Secrets for the deployment workflow

Required environment variables:
- `CLOUDFLARE_ANALYTICS_TOKEN`: Token for Cloudflare Web Analytics

To set up in GitHub:
1. Go to your repository settings
2. Navigate to Secrets and Variables > Actions
3. Add a new repository secret named `CLOUDFLARE_ANALYTICS_TOKEN`
4. Paste your Cloudflare Analytics token value

## ### Browser Compatibility

This site is built with modern browsers in mind and does not support Internet Explorer. We use:

- Modern CSS features
- Custom properties
- Flexbox and Grid layout
- ES6+ JavaScript features

The browserslist configuration excludes IE support to prevent generating deprecated vendor prefixes.

## �📄 License

This project is licensed under the MIT License.
