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
  describe('#makeDeposit', function() {
    it('deposits given amount to account', function() {
      let account = new Account();
      account.makeDeposit(1000);
      expect(account.balance).toEqual(1000);
    })
  })
})
