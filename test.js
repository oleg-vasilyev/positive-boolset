const assert = require('assert');
const getPositiveKeysOfBoolset = require('./src/index.js');

const array1 = ['C', true, 'R', false,'O', true, 'D', true, 'E', true, 'P', false];
const array2 = ['C', false, 'R', false,'O', false, 'D', false, 'E', false, 'P', false];


it('should return correct array', () => {
    assert.deepEqual(getPositiveKeysOfBoolset(array1), ['C', 'O', 'D', 'E']);
});

it('should return empty set if there is no positive value in boolset', () => {
    assert.deepEqual(getPositiveKeysOfBoolset(array2), []);
});
