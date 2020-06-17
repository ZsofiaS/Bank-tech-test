'use strict';

class Transaction {
  constructor() {
  }
  recordDeposit(amount, balance) {
    let record = this._createRecord(balance);
    record.credit = this._formatAmount(amount);
    record.balance = this._formatAmount(balance + amount)
    return record;
  }
  recordWithdrawal(amount, balance) {
    let record = this._createRecord(balance);
    record.debit = this._formatAmount(amount);
    record.balance = this._formatAmount(balance - amount)
    return record;
  }
  _formatDate() {
    return new Date(Date.now()).toLocaleDateString();
  }
  _formatAmount(amount) {
    return amount.toFixed(2);
  }
  _createRecord(balance) {
    let record = {
      date: this._formatDate(),
      credit: "",
      debit: "",
      balance: this._formatAmount(balance)
    }
    return record;
  }
}
