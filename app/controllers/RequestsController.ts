import express from 'express';

import { Controller } from './utils/Controller';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { RequestNotifierI } from '../websockets/RequestNotifier';

export class RequestsController extends Controller {
  constructor(req: express.Request, res: express.Response, notifier: RequestNotifierI) {
    super(req, res, notifier);
  }

  async get(): Promise<void> {
    const { _id } = await super.initTrap();

    const trappedRequests = await HttpRequestInfo.find({ trapId: _id });

    this.res.render('requests', { requests: trappedRequests, trapId: _id });
  }
}
