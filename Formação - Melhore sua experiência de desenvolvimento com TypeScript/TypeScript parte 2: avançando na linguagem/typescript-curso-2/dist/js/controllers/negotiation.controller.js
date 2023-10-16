import { DaysOfWeek } from "../enums/daysofweek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message.view.js";
import { NegotiationsView } from "../views/negotitations.view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView', true);
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.businessDay(negotiation.date)) {
            this.messageView.update('Apenas negociações em dias úteis são aceitas!');
            return;
        }
        this.negotiations.add(negotiation);
        this.cleanForm();
        this.updateView();
    }
    businessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
