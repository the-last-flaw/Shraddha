const sharp = require('sharp');
const fs = require('fs');

// Create icon buffers from SVG
const svgBuffer = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="30" fill="#fefdf8"/>
  <text x="96" y="110" font-family="serif" font-size="80" font-weight="bold" text-anchor="middle" fill="#8b4513">💌</text>
  <text x="96" y="160" font-family="serif" font-size="20" text-anchor="middle" fill="#daa520">Open When</text>
</svg>
`);

async function generateIcons() {
  try {
    // Generate 192x192 icon
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile('public/icon-192.png');

    // Generate 512x512 icon  
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile('public/icon-512.png');

    console.log('Icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();