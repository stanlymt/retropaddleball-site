#!/usr/bin/env zsh
# build.sh - A simplified build script for the Retro Paddle Ball website

# Fail on any error
set -e

echo "Starting the build process..."

# Clean existing build
echo "Cleaning previous build..."
rm -rf _site

# Ensure CSS directory exists
echo "Creating CSS directory..."
mkdir -p _site/css

# Set production environment
export NODE_ENV=production

# Build CSS with Tailwind
echo "Building CSS with Tailwind..."
npx tailwindcss -i ./src/css/tailwind.css -o ./_site/css/tailwind.css --minify

# Build the site with Eleventy
echo "Building site with Eleventy..."
npx @11ty/eleventy

# Create responsive images
echo "Generating responsive images..."
node generate-responsive-images.js

# Optimize images
echo "Optimizing images..."
node imagemin.config.js

echo "Build completed successfully!"
