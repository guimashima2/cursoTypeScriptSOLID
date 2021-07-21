import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart.ts';
import { PercentDiscount } from './classes/discount';

const fiftyDiscount = new PercentDiscount(0);
const carr = new ShoppingCart(fiftyDiscount);
const message = new Message();
const persistency = new Persistency();
const order = new Order(carr, message, persistency);

carr.addItem(new Product('banana', 2.032));
carr.addItem(new Product('banana2', 4.032));
carr.addItem(new Product('banana3', 6.072));

console.log(carr.items);
console.log(carr.totalWithDiscount());
order.checkout();

console.log(carr.items);
