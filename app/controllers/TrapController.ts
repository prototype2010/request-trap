import { Controller } from './utils/Controller';
import express from 'express';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { RequestFactory } from '../database/entities/Request/RequestFactory';

export class TrapController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }

  async proceed(): Promise<void> {
    const trap = await super.initTrap();

    const requestInfo = RequestFactory.create(this.req, trap._id);
    const newRequest = new HttpRequestInfo(requestInfo);
    const resp = await newRequest.save();

    this.emit('incomingRequest', JSON.stringify(resp));

    this.res.json(resp);
  }
}
