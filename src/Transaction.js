'use strict';

class Transaction {
  constructor() {
    this.credit = 0;
    this.debit = 0;
  }
  makeDeposit(amount, balance) {
    balance += amount;
    let trans = {
      date: this._formatDate(),
      credit: this._formatAmount(amount),
      debit: "",
      balance: this._formatAmount(balance)
    }
    return trans;
  }
  makeWithdrawal(amount, balance) {
    balance -= amount;
    let trans = {
      date: this._formatDate(),
      credit: "",
      debit: this._formatAmount(amount),
      balance: this._formatAmount(balance)
    }
    return trans;
  }
  _formatDate() {
    return new Date(Date.now()).toLocaleDateString();
  }
  _formatAmount(amount) {
    return amount.toFixed(2);
  }
}
