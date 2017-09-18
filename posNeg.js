function posNeg(a, b, negative) {
    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        return !negative;
    }

    if (negative && a < 0 && b < 0) {
        return true;
    }

    return false;

    // Многовато ретурнов. Проверку можно написать проще.
}

const assert = require('assert');

assert.equal(posNeg(1, -1, false), true);
assert.equal(posNeg(-1, 1, false), true);
assert.equal(posNeg(-4, -5, true), true);
assert.equal(posNeg(-4, -5, false), false);
assert.equal(posNeg(-4, 5, false), true);
assert.equal(posNeg(-4, 5, true), false);
assert.equal(posNeg(1, 1, false), false);
assert.equal(posNeg(-1, -1, false), false);
assert.equal(posNeg(1, -1, true), false);
assert.equal(posNeg(-1, 1, true), false);
assert.equal(posNeg(1, 1, true), false);
assert.equal(posNeg(-1, -1, true), true);
assert.equal(posNeg(5, -5, false), true);
assert.equal(posNeg(-6, 6, false), true);
assert.equal(posNeg(-5, -6, false), false);
assert.equal(posNeg(-2, -1, false), false);
assert.equal(posNeg(1, 2, false), false);
assert.equal(posNeg(-5, 6, true), false);
assert.equal(posNeg(-5, -5, true), true);
