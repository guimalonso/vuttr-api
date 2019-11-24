const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');

describe('Route', () => {
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should return error 404 when trying to make a request to an unknown route',
    async () => {
      const response = await request(app).get('/test').send();

      expect(response.status).toBe(404);
    }
  );
});