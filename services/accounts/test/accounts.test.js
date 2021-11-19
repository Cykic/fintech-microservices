/* eslint-disable no-undef */
/* eslint-disable node/no-unpublished-require */
const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const server = require('../server');

const app = require('../app');

describe('Tour Routes', () => {
  it('Should get all route', async () => (done) => {
    chai
      .request(server)
      .get('/api/v1/accounts')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('Should return 404', async () => {
    const res = await request(app).get('*');
    expect(res.statusCode).toEqual(404);
  });
});
