import * as WebSocket from 'ws';
import { Notification } from './Notification';

export class WSConnectionManager {
  private static instance = new WSConnectionManager();
  private connection = new Map<string, Array<WebSocket>>();

  private constructor() {}

  public static getInstance() {
    return WSConnectionManager.instance;
  }

  public notifyAllByURL(url: string, notification: Notification) {
    const collection = this.connection.get(url);

    if (collection) {
      collection.forEach(connection => connection.send(notification.getMessage()));
    }
  }

  public add(url: string, connection: WebSocket) {
    const collection = this.connection.get(url);

    if (collection) {
      collection.push(connection);
    } else {
      this.connection.set(url, [connection]);
    }
  }

  public remove(url: string, inactiveConnection: WebSocket) {
    const collection = this.connection.get(url);

    if (collection) {
      const activeConnections = collection.filter(connection => connection !== inactiveConnection);

      this.connection.set(url, activeConnections);
    }
  }
}
