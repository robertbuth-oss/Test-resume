// This script converts all figma:asset imports to /assets/ paths

const fs = require('fs');
const path = require('path');

function convertFigmaAssets(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const updatedContent = content.replace(/figma:asset\/([^\s]+)/g, '/assets/$1');
    fs.writeFileSync(filePath, updatedContent);
}

const directoryPath = path.join(__dirname, 'src'); // Adjust this path as needed

fs.readdir(directoryPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.endsWith('.ts')) {
            convertFigmaAssets(path.join(directoryPath, file));
        }
    });
});
