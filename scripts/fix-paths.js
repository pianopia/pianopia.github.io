const fs = require('fs');
const path = require('path');
const glob = require('glob');

// docsディレクトリのパス
const docsDir = path.join(__dirname, '..', 'docs');

// HTMLファイルを検索
const htmlFiles = glob.sync(`${docsDir}/**/*.html`);

// パスを修正する関数
function fixPaths(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // _next/static へのパスを static に変更
  const fixedContent = content.replace(/\/_next\/static\//g, '/static/');
  
  fs.writeFileSync(filePath, fixedContent);
  console.log(`Fixed paths in: ${filePath}`);
}

// すべてのHTMLファイルを処理
htmlFiles.forEach(fixPaths);

console.log('All paths fixed successfully!'); 