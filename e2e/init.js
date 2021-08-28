const detox = require('detox');
const adapter = require('detox/runners/mocha/adapter');
const {before, after, beforeEach, afterEach} = require('mocha');

before(async () => {
  await detox.init();
});

beforeEach(async function () {
  await adapter.beforeEach(this);
});

afterEach(async function () {
  await adapter.afterEach(this);
});

after(async () => {
  await detox.cleanup();
});
