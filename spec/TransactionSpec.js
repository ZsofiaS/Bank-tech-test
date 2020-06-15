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
  describe('#makeDeposit', function() {
    it('returns an object with transaction details', function() {
      let trans = new Transaction();
      spyOn(Date, 'now').and.returnValue(1592226530185);
      expect(trans.makeDeposit(1000, 0)).toEqual({date: "15/06/2020", credit: "1000.00", debit: "", balance: "1000.00"})
    })
  })
  describe('#makeWithdrawal', function() {
    it('returns an object with transaction details', function() {
      let trans = new Transaction();
      spyOn(Date, 'now').and.returnValue(1592226530185);
      expect(trans.makeWithdrawal(500, 1000)).toEqual({date: "15/06/2020", credit: "", debit: "500.00", balance: "500.00"})
    })
  })
})
