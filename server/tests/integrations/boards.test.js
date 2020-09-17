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
  });
  // describe('GET', () => {
  //   it('returns all boards', async () => {
  //     const { body, statusCode } = await request(app).get('/boards');

  //     expect(statusCode).toBe(200);
  //     expect(body).toEqual({
  //       boards: [
  //         {
  //           boardId: 1,
  //           boardTitle: 'Todo',
  //         },
  //       ],
  //     },
  //     );
  //   });
  // });


  // describe('PUT /', () => {
  //   it('returns 200 status', async () => {
  //     const { statusCode } = await request(app).put('/boards').send({ boardId: 1 });

  //     expect(statusCode).toBe(200);
  //   });
  // });


  // describe('DELETE /', () => {
  //   it('returns 200 status', async () => {
  //     const { statusCode } = await request(app).delete('/boards').send({ boardId: 1 });

  //     expect(statusCode).toBe(200);
  //   });
  // });

});

