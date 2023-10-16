export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    static createFrom(dateString, quantityString, valueString) {
        const regularExpression = /-/g;
        const date = new Date(dateString.replace(regularExpression, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
    get amount() {
        return this.quantity * this.value;
    }
}
