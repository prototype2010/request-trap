import * as mongoose from 'mongoose';

export const MongooseHTTPRequestSchema = new mongoose.Schema({
  headers: Object,
  cookies: Object,
  ip: String,
  method: String,
  httpSchema: String,
  query: Object,
  params: Object,
  url: Object,
  trapId: String,
  trapName: String,
  date: Number,
});
