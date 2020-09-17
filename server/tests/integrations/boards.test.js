const request = require('supertest');

const app = require('../../app');

let cookie;

describe('/boards', () => {
  beforeAll(async(done) => {
    const { headers } = await request(app).post('/signIn').send({ userId: 'test', userPassword: 'test' });
    cookie = headers['set-cookie'];
    done();
  });

  describe('POST', () => {
    it('returns boardId', async() => {
      const { body, statusCode } = await request(app).post('/boards').set('Cookie', cookie).send({ boardTitle: 'Todo' });
      expect(statusCode).toBe(200);
      expect(body).toEqual({ boardId: 1 });
    });

    afterEach(async(done) => {
      await request(app).delete('/boards/all').set('Cookie', cookie);
      done();
    });
  });

  describe('GET', () => {
    beforeEach(async(done) => {
      await request(app).post('/boards').set('Cookie', cookie).send({ boardTitle: 'Todo' });
      done();
    });

    it('returns all boards', async () => {
      const { body, statusCode } = await request(app).get('/boards').set('Cookie', cookie);
      expect(statusCode).toBe(200);
      expect(body).toEqual({ boards: [{ boardId: 1, boardTitle: 'Todo' }] });
    });

    afterEach(async(done) => {
      await request(app).delete('/boards/all').set('Cookie', cookie);
      done();
    });
  });

  describe('PUT /', () => {
    beforeEach(async(done) => {
      await request(app).post('/boards').set('Cookie', cookie).send({ boardTitle: 'Todo' });
      done();
    });

    it('returns 200 status', async () => {
      const { statusCode } = await request(app).put('/boards').set('Cookie', cookie).send({ boardId: 1, boardTitle: 'Done' });
      expect(statusCode).toBe(200);
    });

    afterEach(async(done) => {
      await request(app).delete('/boards/all').set('Cookie', cookie);
      done();
    });
  });

  describe('DELETE /', () => {
    beforeEach(async(done) => {
      await request(app).post('/boards').set('Cookie', cookie).send({ boardTitle: 'Todo' });
      done();
    });

    it('returns 200 status', async () => {
      const { statusCode } = await request(app).delete('/boards').set('Cookie', cookie).send({ boardId: 1 });
      expect(statusCode).toBe(200);
    });
  });

  describe('DELETE /all', () => {
    beforeEach(async(done) => {
      await request(app).post('/boards').set('Cookie', cookie).send({ boardTitle: 'Todo' });
      done();
    });

    it('returns 200 status', async () => {
      const { statusCode } = await request(app).delete('/boards/all').set('Cookie', cookie);
      expect(statusCode).toBe(200);
    });
  });

});

