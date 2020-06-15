'use strict';

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  makeDeposit(amount) {
    this.balance =+ amount;
  }
}
