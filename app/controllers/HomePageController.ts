import express from 'express';
import { Controller } from './utils/Controller';

export class HomePageController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }

  async proceed(): Promise<any> {
    return this.res.end('/ homepage');
  }
}
