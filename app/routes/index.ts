import { Router } from 'express';
import { DBConnection } from '../database/DBConnection';
import * as mongoose from 'mongoose';

const router = Router();

router.get('/', async function(req, res) {
  const kittySchema = new mongoose.Schema({
    name: String,
  });


  const connection = DBConnection.getInstance();

  const Kitten = mongoose.model('Kitten', kittySchema);

  var fluffy = new Kitten({ name: 'fluffy' });

  await fluffy.save()

  res.send('Birds home page');
});

router.get('/:trap_id', function(req, res) {
  res.send('capture requests from here');
});

router.all('/:trap_id/requests', function(req, res) {
  res.send('view all requests here ');
});

export { router };
