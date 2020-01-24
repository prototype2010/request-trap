import express from 'express';
import { router } from './routes';

export const app = express();

app.use(router);

app.listen(3000, () => `listening 3000`);
