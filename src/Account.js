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
      debit: null,
      balance: this.balance
    }
    this.transactions.push(trans);
    return trans;
  }
  makeWithdrawal(amount) {
    this.balance -= amount;
  }
  printStatement() {
    let header = "|| credit || debit || balance \n";
    let details = `|| ${this.transactions[0].credit} || || ${this.balance}`
    return header + details
  }
}
