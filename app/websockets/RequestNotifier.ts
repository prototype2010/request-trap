import * as WebSocket from 'ws';
import { Notification } from './Notification';

export interface RequestNotifierI {
  notify: (notification: Notification) => void;
}

export class RequestNotifier {
  private static _wsConnection?: WebSocket;

  private constructor() {}

  public static notify(notification: Notification): void {
    if (RequestNotifier._wsConnection) {
      RequestNotifier._wsConnection.send(notification.getMessage());
    }
  }

  public static set wsConnection(value: WebSocket) {
    this._wsConnection = value;
  }
}
