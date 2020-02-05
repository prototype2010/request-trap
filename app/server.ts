import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { PORT } from '../config';

import { router } from './routes';
import { DBConnection } from './database/DBConnection';
import { TEST_ENV } from '../config';
import { WSConnectionManager } from './websockets/WSConnectionManager';

const app = express();

app.use(router);
app.set('views', './app/views');
app.set('view engine', 'pug');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const wsConnectionManager = WSConnectionManager.getInstance();

wss.on('connection', (ws: WebSocket, req: express.Request) => {
  const [, trapID] = req.url.split('/');

  wsConnectionManager.add(trapID, ws);

  ws.addEventListener('close', () => {
    wsConnectionManager.remove(trapID, ws);
  });
});

(async function(): Promise<void> {
  await DBConnection.connect();
})();

if (!TEST_ENV) {
  server.listen(PORT);
}

export { app };
