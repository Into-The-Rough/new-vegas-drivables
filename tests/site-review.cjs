const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const base = (process.env.SITE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');

(async () => {
  const browser = await chromium.launch({headless:true, executablePath:process.env.BROWSER_EXECUTABLE, args:['--no-sandbox']});
  try {
    const context = await browser.newContext({viewport:{width:1440,height:1000}});
    await context.route('https://static.cloudflareinsights.com/**', route => route.fulfill({body:'', contentType:'text/javascript'}));
    const page = await context.newPage();
    const errors = [];
    const videoRequests = [];
    page.on('pageerror', error => errors.push(String(error)));
    page.on('request', request => { if (request.url().endsWith('gameplay-preview.mp4')) videoRequests.push(request.url()); });
    await page.goto(base);
    assert.equal(videoRequests.length, 0, 'video waits for a click');
    await page.locator('.home-actions [data-play-gameplay]').click();
    await page.waitForFunction(() => document.querySelector('video').currentTime > 0);
    assert.ok(videoRequests.length > 0);
    assert.equal(await page.locator('video').evaluate(el => Math.round(el.duration)), 32);
    await page.locator('.primary-nav a[data-page="vehicles"]').click();
    assert.equal(await page.locator('video').evaluate(el => el.paused), true);
    await page.getByRole('button', {name:'Reading font'}).click();
    for (const filename of ['index.html','vehicles.html','locations.html','sounds.html','faq.html','about.html','credits.html','modders.html']) {
      await page.goto(base + '/' + filename);
      assert.match(await page.locator('body').evaluate(el => getComputedStyle(el).fontFamily), /Arial/);
      assert.match(await page.locator('h1').first().evaluate(el => getComputedStyle(el).fontFamily), /Monofonto/);
      assert.equal(await page.getByRole('button', {name:'Reading font'}).getAttribute('aria-pressed'), 'true');
      assert.ok(await page.locator('meta[name="description"]').getAttribute('content'));
      assert.match(await page.locator('meta[property="og:image"]').getAttribute('content'), /^https:\/\/into-the-rough\.github\.io\/new-vegas-drivables\/assets\/monster-truck\.jpg$/);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://into-the-rough.github.io/new-vegas-drivables/' + (filename === 'index.html' ? '' : filename));
    }
    await page.getByRole('button', {name:'Reading font'}).click();
    await page.goto(base + '/#driving');
    await page.locator('#control-device').selectOption('keyboard');
    for (const ride of await page.locator('#control-ride option').evaluateAll(options => options.map(o => o.value))) {
      await page.locator('#control-ride').selectOption(ride);
      assert.equal(await page.locator('.keyboard-diagram').isVisible(), true);
      assert.doesNotMatch(await page.locator('#control-rows').textContent(), /undefined|D-pad|Left stick|Right stick/);
      assert.ok(await page.locator('#control-rows kbd').filter({hasText:/^E$/}).count());
    }
    await page.locator('#control-ride').selectOption('car');
    const row = action => page.locator('#control-rows li').filter({has:page.locator('strong', {hasText:action})});
    assert.equal(await row('Handbrake').locator('kbd').textContent(), 'Left Alt');
    assert.equal(await row('Boost, where fitted').locator('kbd').textContent(), 'Left Shift');
    await page.locator('#control-weapon').check();
    assert.equal(await row('Fire weapon').locator('kbd').textContent(), 'Left mouse');
    await page.locator('#control-ride').selectOption('plane');
    assert.equal(await row('Landing gear').locator('kbd').textContent(), 'N');
    assert.equal(await row('Cruise hold').locator('kbd').textContent(), 'Numpad 5');
    await page.screenshot({path:'artifacts/keyboard-desktop.png', fullPage:false});
    await page.locator('.section-nav:visible a[href="#start"]').click();
    assert.ok((await page.locator('#installation').boundingBox()).y < (await page.locator('.first-ride').boundingBox()).y);
    await page.goto(base + '/#stunts');
    await page.locator('#stunt-device').selectOption('keyboard');
    await page.locator('#stunt-filters').getByRole('button', {name:'All', exact:true}).click();
    assert.equal(await page.locator('[data-pad-stunt] kbd').count() > 15, true);
    assert.doesNotMatch(await page.locator('#stunts').textContent(), /undefined/);
    assert.deepEqual(await page.locator('[data-pad-stunt="Skateboard/Kickflip"] kbd').allTextContents(), ['Left Shift','Space']);
    await page.goto(base + '/#ride=v-000c3b');
    assert.match(await page.locator('#discovery-detail').textContent(), /Volare/);
    await page.locator('#spoilers').uncheck();
    assert.doesNotMatch(await page.locator('#discovery-detail').textContent(), /Volare|Nellis/);
    assert.match(await page.locator('#map-scope').textContent(), /map only/);
    await page.reload();
    assert.doesNotMatch(await page.locator('#discovery-detail').textContent(), /Volare|Nellis/);
    for (const width of [390,360]) {
      await page.setViewportSize({width, height:844});
      await page.goto(base + '/#driving');
      await page.getByRole('button', {name:'Reading font'}).click();
      await page.locator('#control-device').selectOption('keyboard');
      await page.locator('#control-ride').selectOption('vtol');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'keyboard guide fits a phone');
      await page.screenshot({path:`artifacts/keyboard-${width}.png`, fullPage:false});
    }
    await context.addInitScript(() => {Storage.prototype.getItem = Storage.prototype.setItem = () => {throw new Error('storage disabled');};});
    await page.goto(base);
    await page.getByRole('button', {name:'Reading font'}).click();
    assert.match(await page.locator('body').evaluate(el => getComputedStyle(el).fontFamily), /Arial/);
    assert.deepEqual(errors, []);
    console.log('Review checks passed: metadata, reading font, keyboard rides and stunts, installation order, map scope and phone layouts.');
  } finally { await browser.close(); }
})();
