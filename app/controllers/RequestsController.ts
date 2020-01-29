import { Controller } from './utils/Controller';
import express from 'express';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';

export class RequestsController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }

  async get() {
    const trap = await super.initTrap();

    const trappedRequests = await HttpRequestInfo.find({ trapId: trap._id });

    this.res.json(trappedRequests);
  }
}
