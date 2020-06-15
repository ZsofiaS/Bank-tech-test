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
  describe('#makeWithdrawal', function() {
    it('withdraws given amount from account', function() {
      let account = new Account();
      account.makeDeposit(1000);
      account.makeWithdrawal(500);
      expect(account.balance).toEqual(500);
    })
  })
  describe('#printStatement', function() {
    it('prints the account statement', function() {
      let account = new Account();
      account.makeDeposit(1000);
      expect(account.printStatement()).toEqual("|| credit || debit || balance \n|| 1000 || || 1000");
    })
  })
})
