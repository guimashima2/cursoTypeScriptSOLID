import { PersistencyProtocol } from '../classes/interfaces/persistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(total: number): void {
    console.log(`Order saved with success. Price: ${total}`);
  }
}
