import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

import { router } from './routes';
import { DBConnection } from './database/DBConnection';
import { RequestNotifier } from './websockets/RequestNotifier';

export const app = express();

app.use(router);
app.set('views', './app/views');
app.set('view engine', 'pug');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const notifier = new RequestNotifier();

notifier.initListener();

setInterval(() => {
  notifier.emit('incomingRequest', JSON.stringify({ test: 'test' }));
}, 1000);

wss.on('connection', (ws: WebSocket) => {
  notifier.wsConnection = ws;

  ws.send('Hi there, I am a WebSocket server');
});

server.listen(3000, async () => {
  await DBConnection.connect();
  console.log(`listening to port 3000`);
});
