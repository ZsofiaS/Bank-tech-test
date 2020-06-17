"use strict";

class Account {
  constructor( transaction = new Transaction()) {
    this.transactions = [];
    this.transaction = transaction;
  }
  makeDeposit(amount) {
    let record = this.transaction.recordDeposit(amount, this._getBalance());
    this.transactions.push(record);
  }
  makeWithdrawal(amount) {
    let record = this.transaction.recordWithdrawal(amount, this._getBalance());
    this.transactions.push(record);
  }
  printStatement() {
    let header = "date || credit || debit || balance \n";
    return header + this._showAllTransactions();
  }
  _showAllTransactions() {
    let listOfTransactions = "";
    this.transactions.reverse().forEach((item) => {
      listOfTransactions = listOfTransactions + `${item.date} || ${item.credit} || ${item.debit} || ${item.balance}\n`;
    });
    return listOfTransactions;
  }
  _getBalance() {
    let numberOfTransactions = this.transactions.length;
    if (numberOfTransactions === 0 ) {
      return 0;
    }
    return Number(this.transactions[numberOfTransactions - 1].balance);
  }
}
