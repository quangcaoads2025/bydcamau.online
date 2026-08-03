import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(new URL('..', import.meta.url).pathname);
const errors = [];
const warnings = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(root);
const htmlFiles = files.filter(path => extname(path) === '.html');
const jsFiles = files.filter(path => extname(path) === '.js');
const localAssetPattern = /(?:src|href|poster|data-fallback)=["'](\/assets\/[^"'#?]+)(?:[?#][^"']*)?["']/g;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, 'utf8');
  const relativeName = htmlFile.slice(root.length + 1);
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) errors.push(`${relativeName}: ID bị trùng: ${[...new Set(duplicateIds)].join(', ')}`);

  if (html.includes('/assets/js/components.js') && !html.includes('/assets/js/core.js')) {
    errors.push(`${relativeName}: thiếu core.js trước components.js.`);
  }

  const coreIndex = html.indexOf('/assets/js/core.js');
  const componentIndex = html.indexOf('/assets/js/components.js');
  if (coreIndex >= 0 && componentIndex >= 0 && coreIndex > componentIndex) {
    errors.push(`${relativeName}: core.js phải tải trước components.js.`);
  }

  for (const match of html.matchAll(localAssetPattern)) {
    const assetPath = normalize(join(root, match[1].replace(/^\//, '')));
    if (!existsSync(assetPath)) errors.push(`${relativeName}: thiếu tài nguyên ${match[1]}`);
  }
}

for (const jsFile of jsFiles) {
  const result = spawnSync(process.execPath, ['--check', jsFile], { encoding: 'utf8' });
  if (result.status !== 0) errors.push(`${jsFile.slice(root.length + 1)}: ${result.stderr.trim()}`);
}

const stylesheet = readFileSync(join(root, 'assets/css/styles.css'), 'utf8');
let depth = 0;
for (const character of stylesheet.replace(/\/\*[\s\S]*?\*\//g, '')) {
  if (character === '{') depth += 1;
  if (character === '}') depth -= 1;
  if (depth < 0) break;
}
if (depth !== 0) errors.push(`assets/css/styles.css: ngoặc khối CSS không cân bằng (${depth}).`);

if (existsSync(join(root, 'assets/js/data.js'))) warnings.push('assets/js/data.js vẫn tồn tại dù không được sử dụng.');

console.log(`Đã kiểm tra ${htmlFiles.length} tệp HTML, ${jsFiles.length} tệp JavaScript và stylesheet chính.`);
for (const warning of warnings) console.warn(`CẢNH BÁO: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`LỖI: ${error}`);
  process.exit(1);
}
console.log('KẾT QUẢ: Không phát hiện lỗi cấu trúc hoặc tài nguyên nội bộ bị thiếu.');
