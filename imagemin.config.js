// imagemin.config.js - Simplified version
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// File extensions to process
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

/**
 * Optimize images using sharp instead of imagemin plugins
 */
async function optimizeImages() {
  try {
    console.log('Starting image optimization (using sharp)...');
    
    // Get the source directory
    const sourceDir = path.join(__dirname, '_site/assets');
    
    // Get all files in the source directory
    const files = await fs.readdir(sourceDir);
    let optimizedCount = 0;
    
    // Process each file
    for (const file of files) {
      try {
        const filePath = path.join(sourceDir, file);
        const fileInfo = await fs.stat(filePath);
        const ext = path.extname(file).toLowerCase();
        
        // Skip directories and non-image files or already WebP files
        if (fileInfo.isDirectory() || !imageExtensions.includes(ext)) {
          continue;
        }
        
        const fileNameWithoutExt = path.parse(file).name;
        const outputPath = path.join(sourceDir, `${fileNameWithoutExt}.webp`);
        
        // Optimize with sharp
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Optimized: ${file} → ${fileNameWithoutExt}.webp`);
        optimizedCount++;
      } catch (err) {
        console.warn(`Warning: Couldn't optimize ${file}:`, err.message);
      }
    }
    
    console.log(`Successfully optimized ${optimizedCount} images to WebP format`);
  } catch (err) {
    console.error('Error in image optimization:', err);
  }
}

// Run the function
optimizeImages();

// Run the function
optimizeImages();
