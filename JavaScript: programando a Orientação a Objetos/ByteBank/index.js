import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822211109);

const client1CheckingAccount = new CheckingAccount(1001, client1);
const client2CheckingAccount = new CheckingAccount(102, client2);

client1CheckingAccount.deposit(500);

let amount = 200;
client1CheckingAccount.transfer(amount, client2CheckingAccount);

console.log(CheckingAccount.checkingAccountNumber);