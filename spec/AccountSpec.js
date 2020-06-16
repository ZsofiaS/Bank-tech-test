'use strict';

describe('Account', function() {
  let account;
  let double;

  beforeEach(function() {
    double = jasmine.createSpyObj('transaction', ['recordDeposit', 'recordWithdrawal']);
    double.recordDeposit.and.returnValue({
      date: "15/06/2020",
      credit: "1000.00",
      debit: "",
      balance: "1000.00"
    })
    double.recordWithdrawal.and.returnValue({
      date: "15/06/2020",
      credit: "",
      debit: "500.00",
      balance: "500.00"
    })
    account = new Account(double);
    spyOn(Date, 'now').and.returnValue(1592226530185);
  })
  it('has a balance', function() {
    expect(account.balance).toEqual(0);
  })
  it('has a list of transactions that is empty at start', function() {
    expect(account.transactions.length).toEqual(0);
  })

  describe('#makeDeposit', function() {
    beforeEach(function() {
      account.makeDeposit(1000);
    })
    it('deposits given amount to account', function() {
      expect(double.recordDeposit).toHaveBeenCalledWith(1000, 1000);
      expect(account.balance).toEqual(1000);
    })
    it('saves transaction details', function() {
      expect(account.transactions).toContain({
        date: "15/06/2020",
        credit: "1000.00",
        debit: "",
        balance: "1000.00"});
    })
  })

  describe('#makeWithdrawal', function() {
    beforeEach(function() {
      account.makeDeposit(1000);
      account.makeWithdrawal(500);
    })
    it('withdraws given amount from account', function() {
      expect(double.recordDeposit).toHaveBeenCalledWith(1000, 1000);
      expect(double.recordWithdrawal).toHaveBeenCalledWith(500, 500);
      expect(account.balance).toEqual(500);
    })
    it('saves transaction details', function() {
      expect(account.transactions).toContain({
        date: "15/06/2020",
        credit: "",
        debit: "500.00",
        balance: "500.00"});
    })
  })

  describe('#printStatement', function() {
    beforeEach(function() {
      account.makeDeposit(1000);
    })
    it('prints the transaction', function() {
      expect(account.printStatement()).toEqual(
        "date || credit || debit || balance \n15/06/2020 || 1000.00 ||  || 1000.00\n"
      );
    })
    it('prints account statement', function() {
      account.makeWithdrawal(500);
      expect(account.printStatement()).toEqual(
        "date || credit || debit || balance \n15/06/2020 ||  || 500.00 || 500.00\n15/06/2020 || 1000.00 ||  || 1000.00\n"
      );
    })
  })
})
