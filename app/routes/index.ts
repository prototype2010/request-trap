import { Router } from 'express';
import * as mongoose from 'mongoose';

const router = Router();

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

router.get('/', async function(req, res) {
  const fluffy = new Kitten({ name: 'fluffy' });

  await fluffy.save();

  res.send('Birds home page');
});

router.get('/:trap_id', async function(req, res) {
  const { headers, cookies, ip, method, secure, query, params, url} = req;

  // const kit = await Kitten.findOne({ name: 'fluffy' });
  // res.send(kit);

  res.send({
    HEADERS: headers,
    COOKIES: cookies,
    IP: ip,
    // date: Date.now(),
    METHOD : method,
    SECURE : secure,
    QUERY : query,
    PARAMS : params,
    url
  });
});

router.all('/:trap_id/requests', function(req, res) {
  res.send('view all requests here ');
});

export { router };
