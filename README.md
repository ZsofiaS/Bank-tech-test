# Bank tech test

This is a practice tech test I did during Week 10 at Makers Academy.

The goal is to produce high quality code while practicing OO desing and TDD skills.

I used Javascript and Jasmine for testing.

## Specification

#### Requirements
* You should be able to interact with your code via a REPL like IRB or the JavaScript console
* Deposits, withdrawal
* Account statement (date, amount, balance) printing
* Data can be kept in memory (it doesn't need to be stored to a database or anything)

#### Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2012
- And a deposit of 2000 on 13-01-2012
- And a withdrawal of 500 on 14-01-2012
- When she prints her bank statement
- Then she would see:

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## How to use

## Domain Model
![domain model](images/class.PNG)

## Flow diagram
![flow diagram](images/flow.PNG)
