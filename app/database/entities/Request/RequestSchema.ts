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

export const HttpRequestInfo = new mongoose.Schema(httpRequestSchema);
