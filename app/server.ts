import express from 'express';
import { router } from './routes';
import { DBConnection } from './database/DBConnection';

export const app = express();

app.use(router);
app.set('views', './app/views')
app.set('view engine', 'pug');

app.listen(3000, async () => {
  await DBConnection.connect();
  console.log(`listening to port 3000`);
});
