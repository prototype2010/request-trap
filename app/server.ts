import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { PORT } from '../config';

import { router } from './routes';
import { DBConnection } from './database/DBConnection';
import { RequestNotifier } from './websockets/RequestNotifier';
import { TEST_ENV } from '../config';

const app = express();

app.use(router);
app.set('views', './app/views');
app.set('view engine', 'pug');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  RequestNotifier.wsConnection = ws;
});

(async function(): Promise<void> {
  await DBConnection.connect();
})();

if (!TEST_ENV) {
  server.listen(PORT);
}

export { app };
