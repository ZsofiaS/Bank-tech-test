'use strict';

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  makeDeposit(amount) {
    this.balance += amount;
    let trans = {
      credit: amount,
      debit: "",
      balance: this.balance
    }
    this.transactions.push(trans);
    return trans;
  }
  makeWithdrawal(amount) {
    this.balance -= amount;
    let trans = {
      credit: "",
      debit: amount,
      balance: this.balance
    }
    this.transactions.push(trans);
  }
  printStatement() {
    let header = "|| credit || debit || balance \n";
    let details = ""
    this.transactions.forEach((item, i) => {
      details = details + `|| ${item.credit} || ${item.debit} || ${this.balance}`
    });

    return header + details
  }
}
