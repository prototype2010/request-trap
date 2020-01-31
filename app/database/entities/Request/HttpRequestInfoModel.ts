import * as mongoose from 'mongoose';
import { MongooseHTTPRequestSchema } from './RequestSchema';
import { IndexedObject } from '../../../../types';

export interface HTTPRequestInfo {
  headers: IndexedObject<any>;
  cookies: IndexedObject<any>;
  ip: string;
  method: string;
  httpSchema: string;
  query: IndexedObject<any>;
  params: IndexedObject<any>;
  url: string;
  trapId: string;
  trapName: string;
}

export const HttpRequestInfo = mongoose.model('HttpRequestInfo', MongooseHTTPRequestSchema);
