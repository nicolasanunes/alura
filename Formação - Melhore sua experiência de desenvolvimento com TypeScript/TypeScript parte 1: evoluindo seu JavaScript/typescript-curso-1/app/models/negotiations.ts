import { Negotiation } from "./negotiation";

export class Negotiations {
  private negotiations: Array<Negotiation> = [];

  add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  list(): ReadonlyArray<Negotiation> {
    return this.negotiations;
  }
}

const negotiations = new Negotiations();
negotiations.list().forEach(n => {
  n.value
});