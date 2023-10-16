import ShoppingCart from './shoppingCart.js';
import Item from './item';

const shoppingCart = new shoppingCart();

shoppingCart.add(new Item('Maçã', 1, 3));
shoppingCart.add(new Item('Banana', 1.4, 5));
shoppingCart.add(new Item('Melancia', 2, 1));
shoppingCart.add(new Item('Uva', 4.3, 2));
shoppingCart.add(new Item('Açaí', 3, 5));

shoppingCart.addFreight(15);

shoppingCart.total();

shoppingCart.endPurchase();

console.log(shoppingCart);
