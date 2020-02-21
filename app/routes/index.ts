import { Router } from 'express';
import { HomePageController } from '../controllers/HomePageController';
import { TrapController } from '../controllers/TrapController';
import { RequestsController } from '../controllers/RequestsController';

const router = Router();

router.all('/favicon.ico', function(req, res) {
  res.status(404);
  res.end();
});

router.get('/', function(req, res) {
  return new HomePageController(req, res).index();
});

router.get('/:trap_id/requests', function(req, res) {
  return new RequestsController(req, res).index();
});

router.all(['/:trap_id/*', '/:trap_id'], async function(req, res) {
  await new TrapController(req, res).proceed();
});

export { router };
