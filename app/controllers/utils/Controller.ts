import express from 'express';

export abstract class Controller {
  public constructor(
    protected req: express.Request,
    protected res: express.Response,
  ) {}
}
