#!/bin/bash

# Build Verification Script for Retro Paddle Ball Website
# This script verifies the site builds correctly and checks for common issues

echo "🚀 Starting build verification..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf _site

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the site
echo "🔨 Building site..."
npm run build

# Check if build succeeded
if [ ! -d "_site" ]; then
    echo "❌ Build failed - _site directory not created"
    exit 1
fi

# Check for essential files
echo "🔍 Checking for essential files..."

ESSENTIAL_FILES=(
    "_site/index.html"
    "_site/about/index.html"
    "_site/support/index.html"
    "_site/privacy/index.html"
    "_site/404.html"
    "_site/assets/hero.webp"
    "_site/assets/icon.webp"
    "_site/robots.txt"
    "_site/sitemap.xml"
    "_site/manifest.json"
    "_site/.nojekyll"
)

for file in "${ESSENTIAL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing essential file: $file"
        exit 1
    else
        echo "✅ Found: $file"
    fi
done

# Check HTML validity (basic check)
echo "🔍 Basic HTML validation..."
if ! grep -q "<!DOCTYPE html>" _site/index.html; then
    echo "❌ index.html missing DOCTYPE"
    exit 1
fi

if ! grep -q "<title>" _site/index.html; then
    echo "❌ index.html missing title tag"
    exit 1
fi

echo "✅ All checks passed!"
echo "🌐 Site built successfully and ready for deployment"

# Optional: Start local server for manual testing
read -p "🤔 Start local server for testing? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌍 Starting local server..."
    npx eleventy --serve
fi
