'use strict';

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  makeDeposit(amount) {
    this.balance =+ amount;
  }
  makeWithdrawal(amount) {
    console.log(this.balance);
    this.balance = this.balance - amount;

  }
}
