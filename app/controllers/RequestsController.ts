import { Controller } from './utils/Controller';
import express from 'express';

export class RequestsController extends Controller {
  constructor(req: express.Request, res: express.Response) {
    super(req, res);
  }

  async proceed(): Promise<any> {
    return undefined;
  }
}

// POST /posts
// GET /posts/:id
// GET /posts
// PUT|PATCH /posts/:id
