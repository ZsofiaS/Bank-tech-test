'use strict';

describe('Transaction', function() {
  let trans = new Transaction();
  
  describe('#recordDeposit', function() {
    it('returns an object with transaction details', function() {
      spyOn(Date, 'now').and.returnValue(1592226530185);
      expect(trans.recordDeposit(1000, 1000)).toEqual({date: "15/06/2020", credit: "1000.00", debit: "", balance: "1000.00"})
    })
  })
  describe('#recordWithdrawal', function() {
    it('returns an object with transaction details', function() {
      spyOn(Date, 'now').and.returnValue(1592226530185);
      expect(trans.recordWithdrawal(500, 500)).toEqual({date: "15/06/2020", credit: "", debit: "500.00", balance: "500.00"})
    })
  })
})
