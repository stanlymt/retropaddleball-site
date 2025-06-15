#!/usr/bin/env node

// Check Node.js version compatibility
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.substring(1).split('.')[0]);

console.log(`Current Node.js version: ${nodeVersion}`);

if (majorVersion < 22) {
  console.warn(`⚠️  Warning: Node.js ${nodeVersion} detected. Eleventy v3 works best with Node.js 22+`);
  console.log('Attempting to use experimental require flag...');
  
  // Set experimental flag if needed
  if (!process.env.NODE_OPTIONS) {
    process.env.NODE_OPTIONS = '--experimental-require-module';
  }
} else {
  console.log(`✅ Node.js ${nodeVersion} is compatible with Eleventy v3`);
}

process.exit(0);
