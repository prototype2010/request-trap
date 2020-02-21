import 'jest';
import request from 'supertest';

import { app } from '../server';

describe('Routes', () => {
  it('index route', async () => {
    const response = await request(app).get('/');

    expect(response.text).toMatchSnapshot();
  });

  describe('Trap request routes', () => {
    it('Trap route should return 200 for qweasd', async () => {
      const response = await request(app).get('/qweasd');

      expect(response.status).toBe(200);
      expect(response.text).toBe('');
    });
    it('Trap route should return 200 for qweasd twice', async () => {
      const response = await request(app).get('/qweasd');

      expect(response.status).toBe(200);
      expect(response.text).toBe('');
    });
    it('Trap route should return 200 for numeric route', async () => {
      const response = await request(app).get('/1111');

      expect(response.status).toBe(200);
      expect(response.text).toBe('');
    });
    it('Trap route should return 200 for complex route', async () => {
      const response = await request(app).get('/qweasd/11111');

      expect(response.status).toBe(200);
      expect(response.text).toBe('');
    });
    it('Trap route should return 200 for complex query route qweasd', async () => {
      const response = await request(app).get('/qweasd?a=1');

      expect(response.status).toBe(200);
      expect(response.text).toBe('');
    });
  });

  describe('Requests table should return 200 for all made requests', () => {
    it('Requests route should return 200 for qweasd twice', async () => {
      const response = await request(app).get('/qweasd/requests');

      expect(response.status).toBe(200);
    });
    it('Requests route should return 200 for numeric route', async () => {
      const response = await request(app).get('/1111/requests');

      expect(response.status).toBe(200);
    });
    it('Requests route should return 200 for complex route', async () => {
      const response = await request(app).get('/qweasd/requests');

      expect(response.status).toBe(200);
    });
    it('Requests route should return 200 for complex query route qweasd', async () => {
      const response = await request(app).get('/notExistingYetTrap/requests?a=1');

      expect(response.status).toBe(200);
    });
  });
});
