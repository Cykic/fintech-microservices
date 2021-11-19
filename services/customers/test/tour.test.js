/* eslint-disable no-undef */
/* eslint-disable node/no-unpublished-require */
const request = require('supertest');

const app = require('../app');

describe('Tour Routes', () => {
  it('Should get all route', async () => {
    const res = await request(app).get('/api/v1/customers');
    expect(res.statusCode).toEqual(200);
  });

  it('Should return 404', async () => {
    const res = await request(app).get('*');
    expect(res.statusCode).toEqual(404);
  });
});
