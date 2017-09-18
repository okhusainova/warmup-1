function makes10(a, b) {
    if (a === 10 || b === 10 || (a + b) === 10) {
        return true;
    }
    return false;

    // А можно так:
    // return (a === 10 || b === 10 || (a + b) === 10);
}

// Тесты
const assert = require('assert');

assert.equal(makes10(9, 10), true);
assert.equal(makes10(9, 9), false);
assert.equal(makes10(1, 9), true);
assert.equal(makes10(10, 1), true);
assert.equal(makes10(10, 10), true);
assert.equal(makes10(8, 2), true);
assert.equal(makes10(8, 3), false);
assert.equal(makes10(10, 42), true);
assert.equal(makes10(12, -2), true);
