import express from 'express';
import { Trap } from '../../database/entities/Trap/TrapModel';
import { RequestNotifierI } from '../../websockets/RequestNotifier';
import { Notification } from '../../websockets/Notification';

export abstract class Controller {
  protected trapId = '';

  protected constructor(
    protected req: express.Request,
    protected res: express.Response,
    private requestNotifier: RequestNotifierI,
  ) {
    this.trapId = req.params.trap_id;
  }

  protected async initTrap(): Promise<any> {
    return Trap.findOneAndUpdate(
      { id: this.trapId },
      {
        $setOnInsert: { id: this.trapId },
      },
      {
        new: true,
        upsert: true,
      },
    );
  }

  protected notify(notification: Notification): void {
    this.requestNotifier.notify(notification);
  }
}
