class ShoppingCart {
  constructor() {
    this.items = [];
    this.subtotal = null;
    this.freight = null;
    this.total = null;
  }

  add(item) {
    this.items.push(item);
  }

  addFreight(valor) {
    this.freight = valor;
  }

  total() {
    this.subtotal = this.items.reduce((acum, item) => acum + item.itemTotalValue(), 0);
    return this.subtotal + this.freight;
  }

  endPurchase() {
    if (this.items.length === 0) {
      throw new Error('Carrinho de compras vazio');
    }

    this.total = this.total();

    return {
      subtotal: this.subtotal,
      freight: this.freight,
      total: this.total,
    };
  }
}

export default ShoppingCart;
