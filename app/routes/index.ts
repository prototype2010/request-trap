import { Router } from 'express';

const router = Router();

router.get('/', function(req, res) {
  res.send('Birds home page');
});

router.get('/:trap_id', function(req, res) {
  res.send('capture requests from here');
});

router.all('/:trap_id/requests', function(req, res) {
  res.send('view all requests here ');
});

export { router };
