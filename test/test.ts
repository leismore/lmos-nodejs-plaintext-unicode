/**
 * This is a fake test, which always passes.
 */

import assert                   from 'node:assert/strict';
import test                     from 'node:test';

test('Fake test', () => {
    assert.strictEqual(1 + 1, 2);
});
