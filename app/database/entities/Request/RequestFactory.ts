import express from 'express';
import { RequestBulkExtractor } from './RequestExtractorConfig';

export class RequestFactory {
  static create(req: express.Request, trapId: string) {
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
