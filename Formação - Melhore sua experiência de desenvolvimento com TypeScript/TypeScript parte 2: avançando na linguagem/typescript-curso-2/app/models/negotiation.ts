export class Negotiation {

  constructor(
    private _date: Date, 
    public readonly quantity: number, 
    public readonly value: number
  ) {}

  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  public static createFrom(dateString: string, quantityString: string, valueString: string): Negotiation {
    const regularExpression = /-/g;
    const date = new Date(dateString.replace(regularExpression, ','));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    return new Negotiation(date, quantity, value);
  }

  get amount(): number {
    return this.quantity * this.value;
  }
}
