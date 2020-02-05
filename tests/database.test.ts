import 'jest';
import request from 'supertest';

import { app } from '../app/server';
import { HttpRequestInfo } from '../app/database/entities/Request/HttpRequestInfoModel';
import { Trap } from '../app/database/entities/Trap/TrapModel';

describe('Database', () => {
  beforeAll(async () => {
    await HttpRequestInfo.remove({});
    await Trap.remove({});
  });

  afterAll(async () => {
    await HttpRequestInfo.remove({});
    await Trap.remove({});
  });

  describe('Trap', () => {
    it('Trap route should return 200 for qweasd', async () => {
      const trapId = 'qweasd';
      await request(app).get(`/${trapId}`);

      const dbRow = await Trap.findOne({ id: trapId });

      expect(dbRow?.id).toBe(trapId);
    });

    it('There should be only one entry', async () => {
      const trapId = 'qweasd7777';
      await request(app).get(`/${trapId}`);

      const dbRows = await Trap.find({ id: trapId });
      expect(dbRows.length).toBe(1);
    });

    it('There should be one trap on multiple requests', async () => {
      const trapId = 'qweasd8888';
      await request(app).get(`/${trapId}`);
      await request(app).post(`/${trapId}`);
      await request(app).put(`/${trapId}`);
      await request(app).head(`/${trapId}`);

      const dbRows = await Trap.find({ id: trapId });
      expect(dbRows.length).toBe(1);
    });
  });

  describe('Requests', () => {
    it('One request creates one entry', async () => {
      const trapId = 'fuckyou8888c';
      await request(app).get(`/${trapId}`);

      const trap = await Trap.findOne({ id: trapId });
      const dbRow = (await HttpRequestInfo.findOne({ trapId: trap!._id })) as any;

      expect(dbRow.params.trap_id).toBe(trapId);
      expect(`${dbRow.trapId}`).toBe(`${trap!._id}`);
    });

    it('Two same request creates two entries', async () => {
      const trapId = 'boristhecactus';
      await request(app).get(`/${trapId}`);
      await request(app).get(`/${trapId}`);

      const trap = await Trap.findOne({ id: trapId });
      const dbRows = await HttpRequestInfo.find({ trapId: trap!._id });

      expect(dbRows.length).toBe(2);
    });

    it('Two different request creates two entries', async () => {
      const trapId = 'aloe';
      await request(app).get(`/${trapId}/${trapId}/${trapId}`);
      await request(app).get(`/${trapId}`);

      const trap = await Trap.findOne({ id: trapId });
      const dbRows = await HttpRequestInfo.find({ trapId: trap!._id });

      expect(dbRows.length).toBe(2);
    });
  });
});
