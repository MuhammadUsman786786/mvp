const {device, element, by} = require('detox');
const {beforeEach} = require('mocha');

describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
