import express from 'express';
import { RequestBulkExtractor } from './RequestExtractorConfig';
import { HTTPRequestInfo } from './HttpRequestInfoModel';

export type httpType = 'https' | 'http';

export interface RequestFactoryInfo {
  httpSchema: httpType;
  date: number;
  trapId: string;
  trapName: string;
}

export class RequestFactory {
  static create(req: express.Request, trapId: string): HTTPRequestInfo & RequestFactoryInfo {
    const requestInfoParams = RequestBulkExtractor.extract(req);
    const httpSchema = req.secure ? 'https' : 'http';

    return {
      ...requestInfoParams,
      httpSchema,
      trapId,
      trapName: req.params.trap_id,
      date: Date.now(),
    };
  }
}
