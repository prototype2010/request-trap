import express from 'express';
import { Controller } from './utils/Controller';
import { RequestNotifierI } from '../websockets/RequestNotifier';

export class HomePageController extends Controller {
  constructor(req: express.Request, res: express.Response, notifier: RequestNotifierI) {
    super(req, res, notifier);
  }

  get(): void {
    return this.res.render('index');
  }
}
