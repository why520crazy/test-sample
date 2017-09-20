const assert = require('assert');
const util = require('./util');

describe('util', () => {
  it('should return hello when the value is hello', function () {
    assert.equal('hello', util.trim('hello'));
  });
  it('should return hello when the value is space', function () {
    assert.equal('hello', util.trim('hello '));
  });

  it('should return null when the value is null', function () {
    assert.equal(null, util.trim(null));
  });

  it('should return object when the value is object', function () {
    assert.deepEqual({id: 1}, util.trim({id: 1}));
  });

  it('should generateObjectId', function () {
    const objectId = util.generateObjectId();
    assert.deepEqual(24, objectId.toString().length);
  });
});