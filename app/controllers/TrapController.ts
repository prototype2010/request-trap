import { Controller } from './utils/Controller';
import express from 'express';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { RequestFactory } from '../database/entities/Request/RequestFactory';
import { RequestNotifierI } from '../websockets/RequestNotifier';
import { Notification } from '../websockets/Notification';

export class TrapController extends Controller {
  constructor(req: express.Request, res: express.Response, notifier: RequestNotifierI) {
    super(req, res, notifier);
  }

  async proceed(): Promise<void> {
    const trap = await super.initTrap();

    const requestInfo = RequestFactory.create(this.req, trap._id);
    const newRequest = new HttpRequestInfo(requestInfo);
    const resp = await newRequest.save();

    super.notify(new Notification(resp));

    this.res.json(resp);
  }
}
