const request = require('supertest');

const app = require('../../app');

describe('/signIn', () => {
  describe('POST with correct id and password', () => {
    it('returns 200 status code and true', async () => {
      const { body, statusCode } = await request(app).post('/signIn').send({ userId: 'test', userPassword: 'test' });

      expect(statusCode).toBe(200);
      expect(body).toBe(true);
    });
  });

  describe('POST with incorrect id or password', () => {
    it('returns 404 status code and false', async () => {
      const { body, statusCode } = await request(app).post('/signIn').send({ userId: 'test', userPassword: 'test1' });

      expect(statusCode).toBe(404);
      expect(body).toBe(false);
    }, 3000);
  });

});

