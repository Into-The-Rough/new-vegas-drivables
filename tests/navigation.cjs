const assert = require('node:assert/strict');

const parents = {
  'Catalogue': 'Vehicles', 'Placements': 'Vehicles', 'Sound': 'Vehicles',
  'Start here': 'Guides', 'Controls': 'Guides', 'Fuel & repairs': 'Guides', 'Horse guide': 'Guides',
  'Races': 'Activities', 'Stunts': 'Activities', 'New locations': 'Activities',
};

async function navigate(page, label) {
  if (label === 'Driving') label = 'Controls';
  const parent = parents[label];
  if (!parent) return page.locator('.primary-nav').getByRole('link', {name: label, exact: true}).click();
  const target = page.locator('.section-nav').getByRole('link', {name: label, exact: true});
  if (!await target.isVisible()) await page.locator('.primary-nav').getByRole('link', {name: parent, exact: true}).click();
  await target.click();
}

async function checkHierarchy(page) {
  assert.deepEqual(await page.locator('.primary-nav a').allTextContents(), ['Home', 'Vehicles', 'Guides', 'Activities', 'Modders', 'FAQ']);
  const current = await page.locator('.site-navigation').getAttribute('data-current-page');
  const group = ['vehicles', 'placements', 'sounds'].includes(current) ? 'Vehicles'
    : ['start', 'driving', 'manual', 'horses'].includes(current) ? 'Guides'
    : ['races', 'stunts', 'worlds'].includes(current) ? 'Activities' : null;
  const children = group ? Object.keys(parents).filter(name => parents[name] === group) : [];
  assert.deepEqual(await page.locator('.section-nav:visible a').allTextContents(), children);
  if (group) assert.equal(await page.locator('.primary-nav [aria-current]').textContent(), group);
}

module.exports = {navigate, checkHierarchy};
