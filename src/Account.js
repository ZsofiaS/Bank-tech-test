'use strict';

class Account {
  constructor( trans = new Transaction()) {
    this.balance = 0;
    this.transactions = [];
    this.trans = trans;
  }
  makeDeposit(amount) {
    this.balance += amount;
    let record = this.trans.recordDeposit(amount, this.balance)
    this.transactions.unshift(record);
  }
  makeWithdrawal(amount) {
    this.balance -= amount;
    let record = this.trans.recordWithdrawal(amount, this.balance)
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
