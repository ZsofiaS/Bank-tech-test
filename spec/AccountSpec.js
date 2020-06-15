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
    it('returns an object with transaction details', function() {
      let account = new Account();
      spyOn(Date, 'now').and.returnValue(1592226530185);
      expect(account.makeDeposit(1000)).toEqual({date: "15/06/2020", credit: 1000, debit: "", balance: 1000})
    })
  })
  describe('#makeWithdrawal', function() {
    it('withdraws given amount from account', function() {
      let account = new Account();
      account.makeDeposit(1000);
      account.makeWithdrawal(500);
      expect(account.balance).toEqual(500);
    })
    it('saves transaction details', function() {
      let account = new Account();
      spyOn(Date, 'now').and.returnValue(1592226530185);
      account.makeDeposit(1000);
      account.makeWithdrawal(500);
      expect(account.transactions).toContain({date: "15/06/2020", credit: "", debit: 500, balance: 500});
    })
  })
  describe('#printStatement', function() {
    it('prints the account statement', function() {
      let account = new Account();
      spyOn(Date, 'now').and.returnValue(1592226530185);
      account.makeDeposit(1000);
      expect(account.printStatement()).toEqual("date || credit || debit || balance \n15/06/2020 || 1000 ||  || 1000\n");
    })
  })
})
