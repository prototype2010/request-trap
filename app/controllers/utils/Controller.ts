import express from 'express';

export class Controller {
  constructor(private req: express.Request, private res: express.Response) {}
}
