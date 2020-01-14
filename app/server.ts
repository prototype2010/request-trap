import express from 'express';
import { Application } from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import path from 'path';
import { router } from './routes';

export const app = express();

app.use(router);

app.listen(3000, () => `listening 3000`);
