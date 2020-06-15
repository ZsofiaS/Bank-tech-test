'use strict';

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  makeDeposit(amount, trans = new Transaction()) {
    let record = trans.recordDeposit(amount, this.balance)
    this.balance += amount;
    this.transactions.unshift(record);
  }
  makeWithdrawal(amount, trans = new Transaction()) {
    let record = trans.recordWithdrawal(amount, this.balance)
    this.balance -= amount;
    this.transactions.unshift(record);
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
  _formatAmount(amount) {
    return amount.toFixed(2);
  }
}
