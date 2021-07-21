export abstract class Discount {
  constructor(public discount: number) {}

  abstract calculate(value: number): number;
}

export class PercentDiscount extends Discount {
  calculate(price: number): number {
    if (this.discount === 0) return price;
    return price - price * this.discount;
  }
}
