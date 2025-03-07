const fs = require('fs');
const path = require('path');

// docsディレクトリのパス
const outDir = path.join(__dirname, '..', 'docs');

// index.htmlを読み込む
const indexPath = path.join(outDir, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// 404.htmlを作成
const notFoundPath = path.join(outDir, '404.html');
fs.writeFileSync(notFoundPath, indexContent);

console.log('404.html created successfully!'); 