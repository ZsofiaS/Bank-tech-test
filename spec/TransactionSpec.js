'use strict';

describe('Transaction', function() {
  it('has a credit of 0', function() {
    let trans = new Transaction();
    expect(trans.credit).toEqual(0);
  })
  it('has a debit of 0', function() {
    let trans = new Transaction();
    expect(trans.debit).toEqual(0);
  })
})
