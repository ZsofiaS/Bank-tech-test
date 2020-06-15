'use strict';

class Transaction {
  constructor() {
    this.credit = 0;
    this.debit = 0;
  }
  recordDeposit(amount, balance) {
    let record = {
      date: this._formatDate(),
      credit: this._formatAmount(amount),
      debit: "",
      balance: this._formatAmount(balance)
    }
    return record;
  }
  recordWithdrawal(amount, balance) {
    let record = {
      date: this._formatDate(),
      credit: "",
      debit: this._formatAmount(amount),
      balance: this._formatAmount(balance)
    }
    return record;
  }
  _formatDate() {
    return new Date(Date.now()).toLocaleDateString();
  }
  _formatAmount(amount) {
    return amount.toFixed(2);
  }
}
