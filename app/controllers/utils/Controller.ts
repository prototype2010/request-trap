import express from 'express';
import { RequestNotifierI } from '../../websockets/RequestNotifier';
import { Notification } from '../../websockets/Notification';

export abstract class Controller {
  public constructor(
    protected req: express.Request,
    protected res: express.Response,
    private requestNotifier: RequestNotifierI,
  ) {}

  protected notify(notification: Notification): void {
    this.requestNotifier.notify(notification);
  }
}
