import express from 'express';

import { Controller } from './utils/Controller';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { RequestFactory } from '../database/entities/Request/RequestFactory';
import { RequestNotifierI } from '../websockets/RequestNotifier';
import { Notification, NOTIFICATION_TYPES } from '../websockets/Notification';

export class TrapController extends Controller {
  constructor(req: express.Request, res: express.Response, notifier: RequestNotifierI) {
    super(req, res, notifier);
  }

  async proceed(): Promise<void> {
    const trap = await super.initTrap();

    const requestInfo = RequestFactory.create(this.req, trap._id);

    const mongooseModel = new HttpRequestInfo(requestInfo);
    const savedRequest = await mongooseModel.save();

    super.notify(new Notification(NOTIFICATION_TYPES.INCOMING_REQUEST, savedRequest));

    this.res.status(200);
    this.res.end();
  }
}
