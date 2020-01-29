import { Router } from 'express';
import { HomePageController } from '../controllers/HomePageController';
import { TrapController } from '../controllers/TrapController';
import { RequestsController } from '../controllers/RequestsController';

const router = Router();

router.get('/', async function(req, res) {
  return new HomePageController(req, res).proceed();
});

router.all('/:trap_id', async function(req, res) {
  await new TrapController(req, res).proceed();
});

router.get('/:trap_id/requests', function(req, res) {
  return new RequestsController(req, res).get();
});

export { router };
