import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = resolve(new URL('..', import.meta.url).pathname);
const errors = [];
const warnings = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const filePath = join(directory, name);
    return statSync(filePath).isDirectory() ? walk(filePath) : [filePath];
  });
}

function checkCssBraces(relativePath) {
  const fullPath = join(root, relativePath);
  if (!existsSync(fullPath)) {
    errors.push(`${relativePath}: không tồn tại.`);
    return;
  }
  const css = readFileSync(fullPath, 'utf8');
  let depth = 0;
  for (const character of css.replace(/\/\*[\s\S]*?\*\//g, '')) {
    if (character === '{') depth += 1;
    if (character === '}') depth -= 1;
    if (depth < 0) break;
  }
  if (depth !== 0) errors.push(`${relativePath}: ngoặc khối CSS không cân bằng (${depth}).`);
}

const files = walk(root);
const htmlFiles = files.filter(filePath => extname(filePath) === '.html');
const jsFiles = files.filter(filePath => extname(filePath) === '.js');
const localAssetPattern = /(?:src|href|poster|data-fallback)=["'](\/assets\/[^"'#?]+)(?:[?#][^"']*)?["']/g;
const sourceSetPattern = /(?:srcset|imagesrcset)=["']([^"']+)["']/g;
const localScriptPattern = /<script\b([^>]*?)\bsrc=["'](\/assets\/js\/[^"']+)["']([^>]*)><\/script>/gi;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, 'utf8');
  const relativeName = htmlFile.slice(root.length + 1);
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) errors.push(`${relativeName}: ID bị trùng: ${[...new Set(duplicateIds)].join(', ')}`);

  if (/<style\b/i.test(html) || /\sstyle\s*=/i.test(html)) {
    errors.push(`${relativeName}: còn CSS nội tuyến; hãy chuyển vào stylesheet chính.`);
  }

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

  for (const match of html.matchAll(sourceSetPattern)) {
    for (const candidate of match[1].split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      if (!url.startsWith('/assets/')) continue;
      const assetPath = normalize(join(root, url.split(/[?#]/)[0].replace(/^\//, '')));
      if (!existsSync(assetPath)) errors.push(`${relativeName}: thiếu ứng viên ảnh ${url}`);
    }
  }

  for (const match of html.matchAll(localScriptPattern)) {
    const attrs = `${match[1]} ${match[3]}`;
    const source = match[2];
    const filePath = join(root, source.split('?')[0].replace(/^\//, ''));
    if (!existsSync(filePath)) continue;
    const integrity = attrs.match(/\bintegrity=["']sha256-([^"']+)["']/i)?.[1];
    const digest = createHash('sha256').update(readFileSync(filePath)).digest('base64');
    if (!integrity) errors.push(`${relativeName}: script ${source} thiếu SRI.`);
    else if (integrity !== digest) errors.push(`${relativeName}: SRI không khớp với ${source}.`);
  }
}

for (const jsFile of jsFiles) {
  const result = spawnSync(process.execPath, ['--check', jsFile], { encoding: 'utf8' });
  if (result.status !== 0) errors.push(`${jsFile.slice(root.length + 1)}: ${result.stderr.trim()}`);
}

checkCssBraces('assets/css/styles.css');
checkCssBraces('assets/css/styles.min.css');

const headers = readFileSync(join(root, '_headers'), 'utf8');
for (const required of [
  'Strict-Transport-Security:',
  'Cross-Origin-Opener-Policy: same-origin',
  'Content-Security-Policy:',
  "require-trusted-types-for 'script'"
]) {
  if (!headers.includes(required)) errors.push(`_headers: thiếu ${required}`);
}
if (/unsafe-inline/i.test(headers)) errors.push('_headers: CSP vẫn còn unsafe-inline.');

if (existsSync(join(root, 'assets/js/data.js'))) warnings.push('assets/js/data.js vẫn tồn tại dù không được sử dụng.');

console.log(`Đã kiểm tra ${htmlFiles.length} tệp HTML, ${jsFiles.length} tệp JavaScript, SRI, CSP và 2 stylesheet.`);
for (const warning of warnings) console.warn(`CẢNH BÁO: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`LỖI: ${error}`);
  process.exit(1);
}
console.log('KẾT QUẢ: Không phát hiện lỗi cấu trúc, bảo mật hoặc tài nguyên nội bộ bị thiếu.');
