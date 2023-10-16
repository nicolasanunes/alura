import { Client } from "./Client.js";

export class CheckingAccount {
    static checkingAccountNumber = 0;
    agency;
    _client;

    set client(newValue) {
        if(newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    constructor(agency, client) {
        this.agency = agency;
        this.client = client;
        CheckingAccount.checkingAccountNumber += 1;
    }

    // #balance
    _balance = 0;
    
    withdrawn(amount) {
        if(this._balance >= amount) {
            this._balance -= amount;
            return amount;
        }
    }

    deposit(amount) {
        if(amount <= 0) return;
        this._balance += amount;
    }

    transfer(amount, checkingAccount) {
        checkingAccount.city = "São Paulo";
        const withdrawnAmount = this.withdrawn(amount);
        checkingAccount.deposit(withdrawnAmount);
    }
}