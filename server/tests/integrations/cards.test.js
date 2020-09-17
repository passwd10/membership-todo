const request = require('supertest');

const app = require('../../app');

let cookie;

describe('/cards', () => {
  beforeAll(async(done) => {
    const { headers } = await request(app).post('/signIn').send({ userId: 'test', userPassword: 'test' });
    cookie = headers['set-cookie'];
    done();
  });

  // describe('GET', () => {
  //   beforeEach(async(done) => {
  //     await request(app).post('/cards').set('Cookie', cookie);
  //     done();
  //   });

  //   it('returns all cards', async () => {
  //     const { body, statusCode } = await request(app).get('/cards').set('Cookie', cookie);
  //     expect(statusCode).toBe(200);
  //     expect(body).toEqual({ cards: [{ cardId: 1, cardContent: 'Todo' }] });
  //   });

  //   afterEach(async(done) => {
  //     await request(app).delete('/cards/all').set('Cookie', cookie);
  //     done();
  //   });
  // });

  // describe('POST', () => {
  //   it('returns cards', async() => {
  //     const { statusCode } = await request(app).post('/cards/new').set('Cookie', cookie).send({ boardId: 1, cardContent: '알고리즘 공부하기' });
  //     expect(statusCode).toBe(200);
  //   });

  // afterEach(async(done) => {
  //   await request(app).delete('/cards/all').set('Cookie', cookie);
  //   done();
  // });
  // });

  // describe('PUT /', () => {
  //   beforeEach(async(done) => {
  //     await request(app).post('/cards').set('Cookie', cookie).send({ cardContent: 'Todo' });
  //     done();
  //   });

  //   it('returns 200 status', async () => {
  //     const { statusCode } = await request(app).put('/cards').set('Cookie', cookie).send({ cardId: 1, cardContent: 'Done' });
  //     expect(statusCode).toBe(200);
  //   });

  //   afterEach(async(done) => {
  //     await request(app).delete('/cards/all').set('Cookie', cookie);
  //     done();
  //   });
  // });

  describe('DELETE /', () => {
    it('returns 200 status', async () => {
      const { statusCode } = await request(app).delete('/cards').set('Cookie', cookie).send({ cardId: 82, boardId: 1 });
      expect(statusCode).toBe(200);
    });
  });

  // describe('DELETE /all', () => {
  //   beforeEach(async(done) => {
  //     await request(app).post('/cards').set('Cookie', cookie).send({ cardContent: 'Todo' });
  //     done();
  //   });

  //   it('returns 200 status', async () => {
  //     const { statusCode } = await request(app).delete('/cards/all').set('Cookie', cookie);
  //     expect(statusCode).toBe(200);
  //   });
  // });

});

