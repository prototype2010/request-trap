import express from 'express';
import { RequestBulkExtractor } from './RequestExtractorConfig';
import { HTTPRequestInfo } from './HttpRequestInfoModel';

export type httpType = 'https' | 'http';

export interface RequestFactoryInfo {
  httpSchema: httpType;
  date: number;
  trapId: string;
}

export class RequestFactory {
  static create(req: express.Request, trapId: string): HTTPRequestInfo & RequestFactoryInfo {
    const requestInfo = RequestBulkExtractor.extract(req);
    const httpSchema = req.secure ? 'https' : 'http';

    return {
      ...requestInfo,
      httpSchema,
      trapId,
      date: Date.now(),
    };
  }
}
