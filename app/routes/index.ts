import { Router } from 'express';
import { HomePageController } from '../controllers/HomePageController';
import { TrapController } from '../controllers/TrapController';
import { RequestsController } from '../controllers/RequestsController';
import { RequestNotifier } from '../websockets/RequestNotifier';

const router = Router();

router.get('/', function(req, res) {
  return new HomePageController(req, res, RequestNotifier).index();
});

router.get('/:trap_id/requests', function(req, res) {
  return new RequestsController(req, res, RequestNotifier).index();
});

router.all(['/:trap_id/*', '/:trap_id'], async function(req, res) {
  await new TrapController(req, res, RequestNotifier).proceed();
});

export { router };
