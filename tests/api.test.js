const request = require('supertest');


const app = require('../src/app');


// Testing get all /task

it('Should return a prime number', done => {
    request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
})