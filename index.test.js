import { strict as assert } from 'assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should return 3 for 1 + 2', () => {
    assert.equal(sum(1, 2), 3)
  })
})

describe('sumDec', () => {
  it('should return 4.5 for 1 + 3.5', () => {
    assert.equal(sum(1, 3.5), 4.5)
  })
})

describe('sumWithNegativeInput', () => {
  it('should return 0 for 1 + -1', () => {
    assert.equal(sum(1, -1), 0)
  })
})
