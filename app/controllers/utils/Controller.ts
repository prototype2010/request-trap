import express from 'express';
import { Trap } from '../../database/entities/Trap/TrapModel';
import { EventEmitter } from 'events';

export abstract class Controller extends EventEmitter {
  protected constructor(
    protected req: express.Request,
    protected res: express.Response,
    protected trapId = req.params.trap_id,
  ) {
    super();
  }

  async initTrap(): Promise<any> {
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
}
