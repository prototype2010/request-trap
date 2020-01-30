export const enum NOTIFICATION_TYPES {
  INFO = 'info',
  INCOMING_REQUEST = 'incomingRequest',
}

export class Notification {
  constructor(private _messageType: NOTIFICATION_TYPES, private _message: any) {}

  public getMessage(): string {
    return JSON.stringify({
      type: this._messageType,
      message: this._message,
    });
  }
}
