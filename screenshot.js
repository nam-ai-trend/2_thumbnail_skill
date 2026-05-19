import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const filename = process.argv[2] || 'thumbnail.png';
const dirname = path.dirname(filename);

// 폴더가 없으면 생성 (outputs/폴더명 등)
if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto('http://localhost:5173');
  
  // 렌더링이 완료될 때까지 2초간 대기
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await page.screenshot({ path: filename });
  await browser.close();
  console.log(`Screenshot saved to ${filename}`);
})();
