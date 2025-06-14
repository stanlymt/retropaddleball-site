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

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080` with hot reloading enabled.

### Building

Build the site for production:
```bash
npm run build
```

The built site will be in the `_site` directory.

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

## 📄 License

This project is licensed under the MIT License.
