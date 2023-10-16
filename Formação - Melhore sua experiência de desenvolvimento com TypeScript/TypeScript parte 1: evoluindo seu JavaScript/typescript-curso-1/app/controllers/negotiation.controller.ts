import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();

  constructor() {
    this.inputDate = document.querySelector('#date');
    this.inputQuantity = document.querySelector('#quantity');
    this.inputValue = document.querySelector('#value');
  }

  add(): void {
    const negotiation = this.createNegotiation();
    this.negotiations.add(negotiation);
    this.cleanForm();
  }

  createNegotiation(): Negotiation {
    const regularExpression = /-/g;
    const date = new Date(this.inputDate.value.replace(regularExpression, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, quantity, value);
  }

  cleanForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }
}
