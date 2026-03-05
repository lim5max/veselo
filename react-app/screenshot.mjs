import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.evaluate(() => {
  document.querySelectorAll('.sr').forEach(el => el.classList.add('vis'));
});
await page.waitForTimeout(1000);
await page.screenshot({ path: 'screenshot-full.png', fullPage: true });

// Check computed styles on main container
const debug = await page.evaluate(() => {
  const hero = document.querySelector('section');
  const container = hero?.querySelector('.max-w-\\[1240px\\]');
  if (!container) return 'No container found with max-w-[1240px]';
  const cs = getComputedStyle(container);
  return {
    maxWidth: cs.maxWidth,
    marginLeft: cs.marginLeft,
    marginRight: cs.marginRight,
    paddingLeft: cs.paddingLeft,
    paddingRight: cs.paddingRight,
    width: cs.width,
  };
});
console.log('Container debug:', JSON.stringify(debug, null, 2));

await browser.close();
