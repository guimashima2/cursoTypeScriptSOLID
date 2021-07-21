import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shoppingCart.ts';

const carr = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(carr, message, persistency);

carr.addItem(new Product('banana', 2.032));
carr.addItem(new Product('banana2', 4.032));
carr.addItem(new Product('banana3', 6.072));

console.log(carr.items);
console.log(carr.total());
order.checkout();

console.log(carr.items);
