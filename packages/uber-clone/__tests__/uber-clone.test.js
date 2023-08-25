'use strict';

const uberClone = require('..');
const assert = require('assert').strict;

assert.strictEqual(uberClone(), 'Hello from uberClone');
console.info('uberClone tests passed');
