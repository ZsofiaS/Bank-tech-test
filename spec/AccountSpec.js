'use strict';

describe('Account', function() {
  it('has a balance', function() {
    let account = new Account();
    expect(account.balance).toEqual(0);
  })
})
