import * as mongoose from 'mongoose';

const HTTPRequestSchema = new mongoose.Schema({
  headers: Object,
  cookies: Object,
  ip: String,
  method: String,
  httpSchema: String,
  query: Object,
  params: Object,
  url: Object,
  trapId: String,
  date: Number,
});

export const HttpRequestInfo = mongoose.model('HttpRequestInfo', HTTPRequestSchema);
