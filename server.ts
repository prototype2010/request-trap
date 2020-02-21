import express from 'express';
import * as http from 'http';
import socketIO from 'socket.io';

import { PORT } from './config';
import { router } from './app/routes';
import { DBConnection } from './app/database/DBConnection';
import { TEST_ENV } from './config';

const app = express();

app.use(router);
app.set('views', './app/views');
app.set('view engine', 'pug');

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', function(socket) {
  const { trapName } = socket.request._query;

  socket.join(trapName);
});

(async function(): Promise<void> {
  await DBConnection.connect();
})();

if (!TEST_ENV) {
  server.listen(PORT);
}

export { app, io };
