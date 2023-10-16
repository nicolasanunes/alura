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

  get amount(): number {
    return this.quantity * this.value;
  }
}
