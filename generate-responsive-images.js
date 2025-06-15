const sharp = require('sharp');
const fs = require('fs/promises');
const path = require('path');

// Source image directory
const sourceDir = path.join(__dirname, 'src/assets');
// Output directory
const outputDir = path.join(__dirname, '_site/assets');

// Sizes for responsive images - only generate what we need
const sizes = [640, 1280];

/**
 * Generate responsive image variants
 */
async function generateResponsiveImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true }).catch(() => {});
    
    // Get all image files in source directory
    const files = await fs.readdir(sourceDir);
    
    // Process each file
    for (const file of files) {
      const filePath = path.join(sourceDir, file);
      
      try {
        const fileInfo = await fs.stat(filePath);
        
        // Skip directories
        if (fileInfo.isDirectory()) continue;
        
        // Only process images
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
        
        // Make sure original file is copied
        try {
          await fs.copyFile(filePath, path.join(outputDir, file));
          console.log(`Copied original ${file}`);
        } catch (err) {
          console.warn(`Warning: Couldn't copy original ${file}:`, err.message);
        }
        
        // For each size, create a responsive version
        for (const size of sizes) {
          const fileName = path.parse(file).name;
          const newFileName = `${fileName}-${size}${ext}`;
          const outputPath = path.join(outputDir, newFileName);
          
          console.log(`Processing ${file} to ${size}px width...`);
          
          try {
            await sharp(filePath)
              .resize({
                width: size,
                withoutEnlargement: true,
                fit: 'inside'
              })
              .toFile(outputPath);
              
            console.log(`Created ${newFileName}`);
          } catch (err) {
            console.warn(`Warning: Error resizing ${file} to ${size}px:`, err.message);
          }
        }
      } catch (err) {
        console.warn(`Warning: Skipping file ${file}:`, err.message);
      }
    }
    
    console.log('Responsive image generation complete!');
  } catch (err) {
    console.error('Error generating responsive images:', err);
    // Don't exit with error to prevent build failure
  }
}

// Run the function
generateResponsiveImages();
