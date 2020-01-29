import { EventEmitter } from 'events';
import * as WebSocket from 'ws';

export class RequestNotifier extends EventEmitter {
  constructor(private _wsConnection?: WebSocket) {
    super();
  }

  notify(e: Event) {
    console.log('## e ', e);

    if (this._wsConnection) {
      this._wsConnection.send(e);
    }
  }

  initListener() {
    this.addListener('incomingRequest', e => this.notify(e));
  }

  set wsConnection(value: WebSocket) {
    this._wsConnection = value;
  }
}
