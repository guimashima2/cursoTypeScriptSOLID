import { MessageProtocol } from '../classes/interfaces/messagingProtocol';

export class Message implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
