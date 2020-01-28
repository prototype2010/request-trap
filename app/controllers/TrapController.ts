import { Controller } from './utils/Controller';
import express from 'express';

export class TrapController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }
}
