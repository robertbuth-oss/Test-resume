#!/usr/bin/env node

/**
 * Script to prepare Figma Make project for production deployment
 * Converts all figma:asset imports to /assets/ paths
 * 
 * Usage:
 *   node scripts/prepare-for-production.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing project for production...\n');

// Files that contain figma:asset imports
const filesToConvert = [
  './src/app/components/ExecutiveCV.tsx',
  './src/app/components/PortfolioWithEffects.tsx',
  './src/imports/Cv1RobertButh.tsx',
  './src/imports/Cv2RobertButh.tsx',
  './src/imports/Cv3RobertButh.tsx',
  './src/imports/PortfolioRobertButh032026.tsx',
];

// Mapping of figma asset hashes to meaningful names
const assetMapping = {
  // Profile images
  'd2659b2eeec5d33485b7a2ad209b74e42f82312f.png': 'robert-profile.png',
  'a924348516d25cd2b3a92595a116952b4f250d57.png': 'placeholder-1.png',
  
  // Portfolio images - Character Illustrations
  '1a71b3f6f9d7abb2fa768454418e4fcd56106e0d.png': 'character-illustration-3.png',
  '335815d20f246b1c0bd597d0d2e5eb4475143c0c.png': 'character-illustration-1.png',
  '0d860fcd7d373edcc11595833f6e30b4b70b77e0.png': 'character-illustration-2.png',
  
  // Graffiti/Art
  'a519f9aaabd5a0d8ecacc67e8d0728c93fe4a263.png': 'graffiti-eskimo.png',
  'bb21ce0ca64a9ec3410eaa80560569ea6aee4cff.png': 'graffiti-kase.png',
  'f92372dfa668346f0a813ce449bd643a0d8b7823.png': 'graffiti-style-wars.png',
  'e062c6ae001336332126590bd9d18c2c11e2895c.png': 'graffiti-diageo.png',
  '5316100aaa3f9dd71c3c936956b8735428d4d5c4.png': 'graffiti-swame.png',
  '11f95f2792572f96bfc53cec548d933de6597543.png': 'graffiti-diageo-2.png',
  
  // Montblanc
  '49d36471c254a746e2704837089a4f5a077cd018.png': 'montblanc-mailing.png',
  'ef9183b764021c0d5c3b12c13fd6d1089194b111.png': 'montblanc-logo.png',
  'b4685a1046675e433a769ddee9264377cdd0ee55.png': 'montblanc-campaign-1.png',
  '10ea75ec5b7406a7af2d0f7f5ef45201b34e6345.png': 'montblanc-campaign-2.png',
  'd31a74a55b67bf5b5d53497c5f11d717070ea24b.png': 'montblanc-campaign-3.png',
  '4a54e1c1e41e7fcaecd786d13a25e2bb28083479.png': 'montblanc-campaign-4.png',
  
  // Yello Strom
  'f960673fa7e89a11c5d3878ff0d441c054845743.png': 'yello-stromsparmesser.png',
  '9fcf6a36fd8165edca4e48ced0d57fd825caa44e.png': 'yello-image-14.png',
  '6033a48235dc47b43f2f071302b08c37a820f0e2.png': 'yello-image-40.png',
  '894e6d6db32dcffd869667328dcb80d4a78bf720.png': 'yello-app-okosystem.png',
  '12bc1cb505caca14f3828dfbbbf9cefdca627bfb.png': 'yello-strom-logo.png',
  'b214b8dd4fd2ce57564157ba947afc2dc1425165.png': 'yello-image-39.png',
  'ba09ac2bc1828e39d67eead4b9bef7dd94d85b62.png': 'yello-image-38.png',
  '68c34d09d39976fcfe5e544cd69c876a185d97e6.png': 'yello-image-78.png',
  
  // Gambuu
  '33903d3f0e3db200117d2f79448dd1807fa58b8f.png': 'gambuu-design-1.png',
  '86316201806593c1a1b85abfb1d260130dd80824.png': 'gambuu-design-2.png',
  '528f0abe40b6f8eaedb828e4e3dd0e66889d012d.png': 'gambuu-design-18.png',
  '564114c59b897fa0b36ec2f71bec4d51eb072954.png': 'gambuu-design-7.png',
  'ae08f51524282ed2594f8658d9c180d03682306c.png': 'gambuu-design-13.png',
  
  // Union Investment
  'b3648476ff8b46eacd1ec00906214f1febfed781.png': 'union-screenshot-1.png',
  '8061da1320e6ae5af613a5c074d51ce3f9da840c.png': 'union-screenshot-2.png',
  'ff3334bfebcf5832019c053e3ef4fc764a2e5bf7.png': 'union-screenshot-3.png',
  '706c1da7a0558fd53a80d9a39c812ad4211cbbf5.png': 'union-image-77.png',
  '8df9cb3ec14c7472696b6fba4b3ef3ae16458454.png': 'union-screenshot-4.png',
  'd63bc8db3ade84ab204baa2c41f1b8eb0354605c.png': 'union-image-26.png',
  
  // PagePlace
  '1dc149d23ac09487929db7b7d6d55deaca11702b.png': 'pageplace-logo.png',
  'a48359614ed61bdaf1f358434f40c84b5bdd6d34.png': 'pageplace-ice-1.png',
  'd0457b97946c00180c6d41a6c99e5d76d321c5b4.png': 'pageplace-cocktail.png',
  '0ac57fca153e9011841a726fb4a085bc04340f98.png': 'pageplace-epos.png',
  'ba0a34771b10f54c4c85f3ea926672734c730032.png': 'pageplace-screenshot-1.png',
  'b3f6ef71d66543434afec2f34467d1835306e9a6.png': 'pageplace-screenshot-2.png',
  'ef4c395751ca8ba58eace9caaff2d18bc334cc2e.png': 'pageplace-image-48.png',
  '43ef3de454263d076f6907c50ee3db4ac735fd29.png': 'pageplace-image-74.png',
  '25e0d382e2b410942bdb797cb2c9cca39f91b195.png': 'pageplace-image-75.png',
  '80908da73424fcbc41e2ca5fe69bdcf85b69fcf0.png': 'pageplace-screenshot-3.png',
};

let totalConverted = 0;
let filesChanged = 0;

filesToConvert.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileChanged = false;
  let conversions = 0;

  // Find all figma:asset imports
  const regex = /import\s+(\w+)\s+from\s+"figma:asset\/([a-f0-9]+\.\w+)";/g;
  const matches = [...content.matchAll(regex)];

  if (matches.length === 0) {
    console.log(`✅ ${filePath} - No figma:asset imports found`);
    return;
  }

  matches.forEach(match => {
    const [fullMatch, varName, assetFile] = match;
    const newFileName = assetMapping[assetFile] || assetFile;
    
    // Replace import statement with const declaration
    const newStatement = `const ${varName} = "/assets/${newFileName}";`;
    content = content.replace(fullMatch, newStatement);
    
    conversions++;
    totalConverted++;
    fileChanged = true;

    console.log(`  📝 ${varName}: ${assetFile} → /assets/${newFileName}`);
  });

  if (fileChanged) {
    fs.writeFileSync(filePath, content);
    filesChanged++;
    console.log(`✅ ${filePath} - Converted ${conversions} asset(s)\n`);
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log(`🎉 Conversion complete!`);
console.log(`   Files modified: ${filesChanged}`);
console.log(`   Assets converted: ${totalConverted}\n`);

if (totalConverted > 0) {
  console.log('⚠️  IMPORTANT: Next steps:\n');
  console.log('1. Export all images from Figma Make');
  console.log('2. Create /public/assets/ folder');
  console.log('3. Copy all images to /public/assets/');
  console.log('4. Rename images according to the mapping above');
  console.log('5. Run: npm run build');
  console.log('6. Run: npm run preview');
  console.log('7. Test all images load correctly\n');
  console.log('Then you\'re ready to deploy! 🚀\n');
} else {
  console.log('✅ No figma:asset imports found. Project is ready!\n');
}
