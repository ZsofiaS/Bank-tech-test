'use strict';

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  makeDeposit(amount) {
    this.balance += amount;
    let trans = {
      date: this._formatDate(),
      credit: amount,
      debit: "",
      balance: this.balance
    }
    this.transactions.unshift(trans);
    return trans;
  }
  makeWithdrawal(amount) {
    this.balance -= amount;
    let trans = {
      date: this._formatDate(),
      credit: "",
      debit: amount,
      balance: this.balance
    }
    this.transactions.unshift(trans);
  }
  printStatement() {
    let header = "date || credit || debit || balance \n";
    let details = ""
    this.transactions.forEach((item, i) => {
      details = details + `${item.date} || ${item.credit} || ${item.debit} || ${item.balance}\n`
    });

    return header + details
  }
  _formatDate() {
    return new Date(Date.now()).toLocaleDateString();
  }

}
