type Product = { name: string; price: number };

export class ShoppingCartLegacy {
  private readonly _items: Product[] = [];
  private _orderStatus: 'open' | 'closed' = 'open';

  get items(): Readonly<Product[]> {
    return this._items;
  }
  get orderStatus(): string {
    return this._orderStatus;
  }
  addItem(product: Product): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  total(): number {
    return +this._items
      .reduce((sum, value) => (sum += value.price), 0)
      .toFixed(2);
  }
  sendMessage(msg: string): void {
    console.log(msg);
  }
  saveOrder(): void {
    console.log(`Order saved with success. Price: ${this.total()}`);
  }
  clearCart(): void {
    this._items.length = 0;
    console.log('Cleaning cart');
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('Empty Cart');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage('Order received');
    this.saveOrder();
    this.clearCart();
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const carr = new ShoppingCartLegacy();
carr.addItem({ name: 'banana', price: 2.032 });
carr.addItem({ name: 'banana2', price: 4.034 });
carr.addItem({ name: 'banana3', price: 6.057 });

console.log(carr.items);
console.log(carr.total());
carr.checkout();

console.log(carr.items);
