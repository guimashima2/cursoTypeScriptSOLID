import { orderStatus } from './interfaces/orderStatus';
import { CustomerOrderProtocol } from './interfaces/customerProtocol';
import { ShoppingCartProtocol } from './interfaces/shoppingCartProtocol';
import { MessageProtocol } from './interfaces/messagingProtocol';
import { PersistencyProtocol } from './interfaces/persistencyProtocol';

export class Order {
  private _orderStatus: orderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrderProtocol,
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
    this.persistency.saveOrder(this.cart.totalWithDiscount());
    this.cart.clearCart();
    console.log(
      'cliente e: ' + this.customer.getIDN() + ' ' + this.customer.getName(),
    );
  }
}
