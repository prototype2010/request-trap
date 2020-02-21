import express from 'express';
import { Notification } from '../../websockets/Notification';
import { WSConnectionManager } from '../../websockets/WSConnectionManager';

export abstract class Controller {
  public constructor(
    protected req: express.Request,
    protected res: express.Response,
    private requestNotifier: WSConnectionManager,
  ) {}

  protected notify(notification: Notification): void {
    this.requestNotifier.notifyAllByURL(this.req.params.trap_id, notification);
  }
}
