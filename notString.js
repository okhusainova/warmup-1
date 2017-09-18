function notString(str) {
    if (str.startsWith('not')) { // Клево! Не знал про такой метод.
        return str;
    }
    return 'not ' + str;
}

const assert = require('assert');
assert.equal(notString('candy'), 'not candy');
assert.equal(notString('x'), 'not x');
assert.equal(notString('not bad'), 'not bad');
assert.equal(notString('bad'), 'not bad');
assert.equal(notString('not'), 'not');
assert.equal(notString('is not'), 'not is not');
assert.equal(notString('no'), 'not no');
