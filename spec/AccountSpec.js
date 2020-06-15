'use strict';

describe('Account', function() {
  it('has a balance', function() {
    let account = new Account();
    expect(account.balance).toEqual(0);
  })
  it('has a list of transactions that is empty at start', function() {
    let account = new Account();
    expect(account.transactions.length).toEqual(0);
  })
})
