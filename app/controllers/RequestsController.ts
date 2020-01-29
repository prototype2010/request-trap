import { Controller } from './utils/Controller';
import express from 'express';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';

export class RequestsController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }

  async get(): Promise<void> {
    const { _id } = await super.initTrap();

    const trappedRequests = await HttpRequestInfo.find({ trapId: _id });

    this.res.render('requests', { requests: trappedRequests, trapId: _id });
  }
}
