import * as mongoose from 'mongoose';
import { MongooseHTTPRequestSchema } from './RequestSchema';

export interface HTTPRequestInfo {
  headers: object;
  cookies: object;
  ip: string;
  method: string;
  httpSchema: string;
  query: object;
  params: object;
  url: object;
}

export const HttpRequestInfo = mongoose.model('HttpRequestInfo', MongooseHTTPRequestSchema);