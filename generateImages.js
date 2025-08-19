// generateImages.js
const fs = require('fs');
const path = require('path');

// đường dẫn tới folder images
const dir = path.join(__dirname, 'src/images');
const files = fs.readdirSync(dir);

// lọc chỉ lấy ảnh
const imageFiles = files.filter(f => /\.(jpg|jpeg|png|gif|jfif)$/i.test(f));

// sinh code JS
const output = `const images = [\n${imageFiles.map(f => `  "images/${f}"`).join(',\n')}\n];\n\nexport default images;\n`;

// ghi ra file src/images.js
fs.writeFileSync(path.join(__dirname, 'src/images.js'), output);

console.log("✅ Đã tạo src/images.js");
