import { DaysOfWeek } from "../enums/daysofweek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message.view.js";
import { NegotiationsView } from "../views/negotitations.view.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negotiationsView', true);
  private messageView = new MessageView('#messageView');

  constructor() {
    this.inputDate = document.querySelector('#date') as HTMLInputElement;
    this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement;
    this.inputValue = document.querySelector('#value') as HTMLInputElement;
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = Negotiation.createFrom(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value,
    );
    if(!this.businessDay(negotiation.date)) {
      this.messageView.update('Apenas negociações em dias úteis são aceitas!');
      return;
    }
    this.negotiations.add(negotiation);
    this.cleanForm();
    this.updateView();
  }

  private businessDay(date: Date) {
    return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
  }

  private cleanForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update('Negociação adicionada com sucesso!');
  }
}
