import * as mongoose from 'mongoose';

const httpRequestSchema = {
  headers: Object,
  cookies: Object,
  ip: String,
  method: String,
  schema: String,
  query: Object,
  params: Object,
  url: Object,
};

export type HttpRequestSchema = typeof httpRequestSchema;

const HttpRequestSchema = new mongoose.Schema(httpRequestSchema);

export const HttpRequestInfo = mongoose.model('HttpRequestInfo', HttpRequestSchema);
