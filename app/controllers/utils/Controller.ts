import express from 'express';
import { Trap } from '../../database/entities/Trap/TrapModel';

export abstract class Controller {
  protected constructor(
    protected req: express.Request,
    protected res: express.Response,
    protected trapId = req.params.trap_id,
  ) {}

  async initTrap(): Promise<void> {
    await Trap.findByIdAndUpdate(this.trapId, { id: this.trapId }, { upsert: true });
  }

  abstract async proceed(): Promise<any>;
}
