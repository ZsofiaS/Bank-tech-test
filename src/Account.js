"use strict";

class Account {
  constructor( transaction = new Transaction()) {
    this.balance = 0;
    this.transactions = [];
    this.transaction = transaction;
  }
  makeDeposit(amount) {
    this.balance += amount;
    let record = this.transaction.recordDeposit(amount, this.balance);
    this.transactions.unshift(record);
  }
  makeWithdrawal(amount) {
    this.balance -= amount;
    let record = this.transaction.recordWithdrawal(amount, this.balance);
    this.transactions.unshift(record);
  }
  printStatement() {
    let header = "date || credit || debit || balance \n";
    return header + this._showAllTransactions();
  }
  _formatDate() {
    return new Date(Date.now()).toLocaleDateString();
  }
  _formatAmount(amount) {
    return amount.toFixed(2);
  }
  _showAllTransactions() {
    let listOfTransactions = "";
    this.transactions.forEach((item) => {
      listOfTransactions = listOfTransactions + `${item.date} || ${item.credit} || ${item.debit} || ${item.balance}\n`;
    });
    return listOfTransactions;
  }
}
