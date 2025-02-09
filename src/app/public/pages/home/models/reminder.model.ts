import {Client} from './client.model';

export class Reminder {
  id!: number;
  message!: string;
  lastDigitOfRuc!: number;
  client!: Client;

  constructor(message: string, lastDigitOfRuc: number, client: Client) {
    this.message = message;
    this.lastDigitOfRuc = lastDigitOfRuc;
    this.client = client;
  }
}
