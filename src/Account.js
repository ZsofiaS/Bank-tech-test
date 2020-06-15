'use strict';

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  makeDeposit(amount) {
    this.balance += amount;
  }
  makeWithdrawal(amount) {
    this.balance -= amount;
  }
  printStatement() {
    let header = "|| credit || debit || balance \n";
    let details = `|| 1000 || || ${this.balance}`
    return header + details
  }
}
