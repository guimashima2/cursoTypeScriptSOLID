import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart.ts';
import { FiftyPercentDiscount, TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessageProtocol } from './classes/interfaces/messagingProtocol';

const Discount = new FiftyPercentDiscount();
const carr = new ShoppingCart(Discount);
const message = new Message();
const persistency = new Persistency();
const indCus = new IndividualCustomer('shima', 'shima', 'cpfshima');
const entCus = new EnterpriseCustomer('shima', 'cnpj shima');

class MessageMock implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log('message do mock e sai da classe Message');
  }
}
const mesMock = new MessageMock();

const order = new Order(carr, mesMock, persistency, entCus);

carr.addItem(new Product('banana', 2.032));
carr.addItem(new Product('banana2', 4.032));
carr.addItem(new Product('banana3', 6.072));

console.log(carr.items);
console.log(carr.totalWithDiscount());
order.checkout();

console.log(carr.items);
