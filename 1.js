const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.segmentfault.com');
  await page.screenshot({path: 'sf.png'});
  await browser.close();
})();