import { orderStatus } from './interfaces/orderStatus';
import { Message } from '../services/message';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shoppingCart.ts';

export class Order {
  private _orderStatus: orderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): string {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Empty Cart');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage('Order received');
    this.persistency.saveOrder(this.cart.total());
    this.cart.clearCart();
  }
}
