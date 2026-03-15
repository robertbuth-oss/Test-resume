#!/usr/bin/env node

/**
 * Pre-deployment checklist script
 * Verifies that the project is ready for production deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking if project is production-ready...\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

let allChecksPassed = true;
const warnings = [];
const errors = [];

// Check 1: Package.json exists
console.log('✓ Checking package.json...');
if (!fs.existsSync('./package.json')) {
  errors.push('package.json not found');
  allChecksPassed = false;
} else {
  console.log('  ✅ package.json exists\n');
}

// Check 2: Node modules installed
console.log('✓ Checking node_modules...');
if (!fs.existsSync('./node_modules')) {
  warnings.push('node_modules not found - Run: npm install');
  console.log('  ⚠️  node_modules missing - Run: npm install\n');
} else {
  console.log('  ✅ Dependencies installed\n');
}

// Check 3: Figma asset imports
console.log('✓ Checking for figma:asset imports...');
const filesToCheck = [
  './src/app/components/ExecutiveCV.tsx',
  './src/app/components/PortfolioWithEffects.tsx',
  './src/imports/Cv1RobertButh.tsx',
  './src/imports/Cv2RobertButh.tsx',
  './src/imports/Cv3RobertButh.tsx',
  './src/imports/PortfolioRobertButh032026.tsx',
];

let figmaAssetsFound = 0;
filesToCheck.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/figma:asset/g);
    if (matches) {
      figmaAssetsFound += matches.length;
    }
  }
});

if (figmaAssetsFound > 0) {
  errors.push(`${figmaAssetsFound} figma:asset imports found - These will NOT work in production!`);
  console.log(`  ❌ Found ${figmaAssetsFound} figma:asset imports`);
  console.log('     → Run: npm run prepare-production');
  console.log('     → See: FIGMA_ASSET_EXPORT_GUIDE.md\n');
  allChecksPassed = false;
} else {
  console.log('  ✅ No figma:asset imports found\n');
}

// Check 4: Public/assets folder
console.log('✓ Checking /public/assets folder...');
if (!fs.existsSync('./public')) {
  warnings.push('/public folder not found - Create it if you have assets');
  console.log('  ⚠️  /public folder missing\n');
} else if (!fs.existsSync('./public/assets')) {
  warnings.push('/public/assets folder not found - Create it if you have images');
  console.log('  ⚠️  /public/assets folder missing\n');
} else {
  const assets = fs.readdirSync('./public/assets');
  console.log(`  ✅ /public/assets exists (${assets.length} files)\n`);
  
  if (assets.length === 0) {
    warnings.push('No assets found in /public/assets - Add your images');
  }
}

// Check 5: Vercel.json
console.log('✓ Checking vercel.json...');
if (!fs.existsSync('./vercel.json')) {
  warnings.push('vercel.json not found - Deployment config missing');
  console.log('  ⚠️  vercel.json missing\n');
} else {
  console.log('  ✅ vercel.json exists\n');
}

// Check 6: .gitignore
console.log('✓ Checking .gitignore...');
if (!fs.existsSync('./.gitignore')) {
  warnings.push('.gitignore not found - You might commit node_modules!');
  console.log('  ⚠️  .gitignore missing\n');
} else {
  const gitignore = fs.readFileSync('./.gitignore', 'utf8');
  if (!gitignore.includes('node_modules')) {
    warnings.push('.gitignore does not exclude node_modules');
    console.log('  ⚠️  node_modules not in .gitignore\n');
  } else {
    console.log('  ✅ .gitignore configured\n');
  }
}

// Check 7: Build configuration
console.log('✓ Checking build scripts...');
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
if (!pkg.scripts || !pkg.scripts.build) {
  errors.push('No build script found in package.json');
  console.log('  ❌ Build script missing\n');
  allChecksPassed = false;
} else {
  console.log('  ✅ Build script configured\n');
}

// Check 8: Main component files
console.log('✓ Checking main component files...');
const requiredFiles = [
  './src/app/App.tsx',
  './src/app/main.tsx',
  './src/app/components/ExecutiveCV.tsx',
  './src/app/components/PortfolioWithEffects.tsx',
];

let missingFiles = 0;
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    errors.push(`Required file missing: ${file}`);
    missingFiles++;
  }
});

if (missingFiles > 0) {
  console.log(`  ❌ ${missingFiles} required files missing\n`);
  allChecksPassed = false;
} else {
  console.log('  ✅ All main components exist\n');
}

// Summary
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (allChecksPassed && warnings.length === 0) {
  console.log('✅ ALL CHECKS PASSED! 🎉\n');
  console.log('Your project is production-ready!\n');
  console.log('Next steps:');
  console.log('  1. npm run build');
  console.log('  2. npm run preview');
  console.log('  3. git add .');
  console.log('  4. git commit -m "Ready for deployment"');
  console.log('  5. git push\n');
} else {
  if (errors.length > 0) {
    console.log('❌ CRITICAL ERRORS:\n');
    errors.forEach(err => console.log(`   • ${err}`));
    console.log('\n   → Fix these before deployment!\n');
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:\n');
    warnings.forEach(warn => console.log(`   • ${warn}`));
    console.log('\n   → These might cause issues in production\n');
  }
  
  console.log('📚 For help, see:');
  console.log('   • README_EXPORT.md');
  console.log('   • FIGMA_ASSET_EXPORT_GUIDE.md');
  console.log('   • DEPLOYMENT.md\n');
}

process.exit(allChecksPassed ? 0 : 1);
