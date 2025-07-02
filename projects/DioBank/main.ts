// create account
// get account balance
// deposit funds in account
// withdraw funds from account
// close account
// transfer funds between accounts

import { Account } from "./account";

const account1 = new Account({ ownerName: "Eugênio Jefferson", balance: 1000 });
const account2 = new Account({ ownerName: "John Doe" });

console.log(`\nBalance from account 2 before deposit: $${account2.getBalance()}`);
account2.deposit(500);
console.log(`Balance from account 2 after deposit: $${account2.getBalance()}`);

console.log(`\nBalance from account 1 before withdrawal: $${account1.getBalance()}`);
account1.withdraw(800);
console.log(`Balance from account 1 after withdrawal: $${account1.getBalance()}\n`);

account1.transferFunds(account2, 200);
console.log(`\nBalance from account 1 after transfer: $${account1.getBalance()}`);
console.log(`Balance from account 2 after transfer: $${account2.getBalance()}\n`);

account1.close();
console.log(`Account 1 active status after closing: ${account1.isActive()}`);
