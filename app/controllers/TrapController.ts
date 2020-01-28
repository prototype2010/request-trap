import { Controller } from './utils/Controller';
import express from 'express';
import { RequestBulkExtractor } from '../database/entities/Request/RequestExtractorConfig';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';

export class TrapController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }

  async proceed(): Promise<any> {
    await super.initTrap();
    const requestInfo = RequestBulkExtractor.extract(super.req);

    const newRequest = new HttpRequestInfo({
      ...requestInfo,
      date: Date.now(),
      trapId: super.trapId,
    });

    const resp = await newRequest.save();

    this.res.end(resp);
  }
}
