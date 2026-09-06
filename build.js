// 정적 사이트를 build/ 와 dist/ 로 복사합니다.
// Cloudflare Pages 등에서 "npm run build" 를 실행해도 그대로 배포되도록 하기 위한 스크립트입니다.
const fs = require('fs');
const path = require('path');
const FILES = ['index.html', 'robots.txt', 'sitemap.xml', 'llms.txt', 'assets'];
for (const out of ['build', 'dist']) {
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  for (const f of FILES) {
    if (!fs.existsSync(f)) continue;
    fs.cpSync(f, path.join(out, f), { recursive: true });
  }
  console.log('copied ->', out);
}
