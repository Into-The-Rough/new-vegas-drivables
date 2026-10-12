const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = (process.env.SITE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');

(async () => {
  const browser = await chromium.launch({headless: true,
    ...(process.env.BROWSER_EXECUTABLE ? {executablePath: process.env.BROWSER_EXECUTABLE} : {}), args: ['--no-sandbox']});
  try {
    const context = await browser.newContext({viewport: {width: 1440, height: 1100}, permissions: ['clipboard-read', 'clipboard-write']});
    await context.route('https://static.cloudflareinsights.com/**', route => route.fulfill({body: '', contentType: 'text/javascript'}));
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    page.on('response', response => { if (response.status() >= 400) errors.push(response.url()); });
    await page.goto(base, {waitUntil: 'networkidle'});
    await page.locator('.primary-nav a[href="modders.html"]').click();
    await page.waitForURL('**/modders.html');
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('.primary-nav [aria-current="page"]').textContent(), 'Modders');
    assert.equal(await page.locator('.command-entry').count(), 63);
    await page.locator('#command-search').fill('fuel');
    assert.ok(await page.locator('.command-entry:visible').count() < 63);
    assert.equal(await page.locator('#DrvGetFuel').isVisible(), true);
    await page.locator('#command-category').selectOption('Horses');
    assert.equal(await page.locator('#command-empty').isVisible(), true);
    await page.locator('#command-reset').click();
    await page.locator('#command-category').selectOption('Horses');
    await page.locator('#command-conditions').check();
    const filtered = await page.locator('.command-entry:visible').evaluateAll(entries => entries.map(e => [e.dataset.group, e.dataset.condition]));
    assert.ok(filtered.length > 0);
    assert.ok(filtered.every(([group, condition]) => group === 'Horses' && condition === 'true'));
    await page.evaluate(() => { location.hash = 'DrvSetFuel'; });
    await page.waitForFunction(() => document.querySelector('#DrvSetFuel').open);
    assert.equal(await page.locator('#DrvSetFuel').isVisible(), true);
    assert.equal(await page.locator('#command-category').inputValue(), '');
    await page.locator('#DrvSetFuel [data-copy]').first().click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'DrvSetFuel <value> [vehicle]');
    await page.reload({waitUntil: 'networkidle'});
    assert.equal(await page.locator('#DrvSetFuel').getAttribute('open'), '');
    fs.mkdirSync('artifacts/modders', {recursive: true});
    await page.screenshot({path: 'artifacts/modders/command-desktop.png'});
    await page.goto(base + '/modders.html#components', {waitUntil: 'networkidle'});
    await page.locator('.component-image a[href="#wheels"]').click();
    await page.waitForURL('**/modders.html#wheels');
    assert.ok(await page.locator('#wheels').isVisible());
    await page.setViewportSize({width: 390, height: 844});
    for (const anchor of ['components', 'first-car', 'DrvGetVehicleUseFailure', 'events']) {
      await page.goto(base + '/modders.html#' + anchor, {waitUntil: 'networkidle'});
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), anchor + ' overflow');
      await page.screenshot({path: `artifacts/modders/mobile-${anchor}.png`});
    }
    const file = await context.newPage();
    await file.goto('file://' + path.resolve('public/modders.html') + '#DrvGetFuel');
    assert.equal(await file.locator('#DrvGetFuel').getAttribute('open'), '');
    await file.locator('#command-search').fill('no-such-command');
    assert.equal(await file.locator('#command-empty').isVisible(), true);
    await file.locator('#command-reset').click();
    assert.equal(await file.locator('.command-entry:visible').count(), 63);
    const plain = await browser.newContext({javaScriptEnabled: false});
    const nojs = await plain.newPage();
    await nojs.goto(base + '/modders.html');
    await nojs.locator('#DrvGetFuel summary').click();
    assert.equal(await nojs.locator('#DrvGetFuel .command-body').isVisible(), true);
    assert.equal(await nojs.locator('.command-controls').isVisible(), false);
    assert.deepEqual(errors, []);
    console.log('Modders guide passed: 63 commands, combined filters, deep links, clipboard, component links, mobile, local files and no-JavaScript reading.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
