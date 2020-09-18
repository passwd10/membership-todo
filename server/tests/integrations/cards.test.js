const request = require('supertest');

const app = require('../../app');

let cookie;

describe('/cards', () => {
  beforeAll(async(done) => {
    const { headers } = await request(app).post('/signIn').send({ userId: 'test', userPassword: 'test' });
    cookie = headers['set-cookie'];
    await request(app).post('/boards').set('Cookie', cookie).send({ boardTitle: 'Todo' });
    done();
  });

  afterAll(async(done) => {
    await request(app).delete('/boards').set('Cookie', cookie).send({ boardId: 1 });
    done();
  });

  describe('GET /', () => {
    let newCardId;

    beforeEach(async(done) => {
      const { body } = await request(app)
        .post('/cards/new')
        .set('Cookie', cookie)
        .send({ boardId: 1, cardContent: '알고리즘 공부하기' });

      newCardId = body.cardId;
      done();
    });

    afterEach(async(done) => {
      await request(app)
        .delete('/cards')
        .set('Cookie', cookie)
        .send({ cardId: newCardId, boardId: 1 });
      done();
    });

    it('returns all cards', async () => {
      const { body, statusCode } = await request(app).get('/cards').set('Cookie', cookie);
      expect(statusCode).toBe(200);
      expect(body).toEqual({ cards: [{ cardId: newCardId, cardContent: '알고리즘 공부하기', boardId: 1, priority: 0 }] });
    });
  });

  describe('POST /', () => {
    let newCardId;

    afterEach(async(done) => {
      await request(app)
        .delete('/cards')
        .set('Cookie', cookie)
        .send({ cardId: newCardId, boardId: 1 });
      done();
    });

    it('returns cards', async() => {
      const { statusCode, body } = await request(app).post('/cards/new').set('Cookie', cookie).send({ boardId: 1, cardContent: '알고리즘 공부하기' });
      newCardId = body.cardId;

      expect(statusCode).toBe(200);
      expect(body).toEqual({ cardId: newCardId });
    });
  });

  describe('DELETE /', () => {
    let newCardId;

    beforeEach(async(done) => {
      const { body } = await request(app)
        .post('/cards/new')
        .set('Cookie', cookie)
        .send({ boardId: 1, cardContent: '알고리즘 공부하기' });

      newCardId = body.cardId;
      done();
    });

    it('returns 200 status', async () => {
      const { statusCode } = await request(app).delete('/cards').set('Cookie', cookie).send({ cardId: newCardId, boardId: 1 });
      expect(statusCode).toBe(200);
    });
  });

  describe('PUT /', () => {
    let newCardId;

    beforeEach(async(done) => {
      const { body } = await request(app)
        .post('/cards/new')
        .set('Cookie', cookie)
        .send({ boardId: 1, cardContent: '알고리즘 공부하기' });

      newCardId = body.cardId;
      done();
    });

    afterEach(async(done) => {
      await request(app)
        .delete('/cards')
        .set('Cookie', cookie)
        .send({ cardId: newCardId, boardId: 1 });
      done();
    });

    it('returns 200 status', async () => {
      const { statusCode } = await request(app).put('/cards').set('Cookie', cookie).send({ cardId: newCardId, cardContent: 'Done' });
      const { body } = await request(app).get('/cards').set('Cookie', cookie);

      expect(body).toEqual({ cards: [{ cardId: newCardId, cardContent: 'Done', boardId: 1, priority: 0 }] });
      expect(statusCode).toBe(200);
    });
  });
});

