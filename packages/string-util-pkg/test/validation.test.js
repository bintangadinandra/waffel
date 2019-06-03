const assert = require('assert');
const {isRequired, isEmail} = require('../src')

describe('Validation', () => {
  describe('isRequired', function() {
    it(`should return false when value is one of null, [], '', or undefined`, function() {
      assert.equal(isRequired(''), false)
      assert.equal(isRequired([]), false)
      assert.equal(isRequired(null), false)
      assert.equal(isRequired(), false)
      assert.equal(isRequired('some value'), true)
      assert.equal(isRequired(0), true)
    })
  })

  describe('isEmail', function() {
    it(`should return true when format is email`, function() {
      assert.equal(isEmail('bintangadinandra@gmail.com'), true)
      assert.equal(isEmail('b@g.'), false)
      assert.equal(isEmail('b'), false)
    })
  })
})