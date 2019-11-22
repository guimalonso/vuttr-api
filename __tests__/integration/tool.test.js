const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factories');
const dropCollection = require('../util/dropCollection');

describe('Tool', () => {
  beforeEach(async () => {
    await dropCollection();
  });

  it('should be able to register', async () => {
    let tool = await factory.attrs('Tool');

    const response = await request(app)
      .post('/tools')
      .send(tool);

    expect(response.body).toHaveProperty('_id');
  });

  it('should not be able to register without a title', async () => {
    let tool = await factory.attrs('Tool');
    tool.title = '';

    const response = await request(app)
      .post('/tools')
      .send(tool);

    expect(response.status).toBe(400);
  });

  it('should not be able to register with duplicated title', async () => {
    const tool = await factory.attrs('Tool');

    await request(app)
      .post('/tools')
      .send(tool);

    const response = await request(app)
      .post('/tools')
      .send(tool);

    expect(response.status).toBe(400);
  });

  it('should not be able to register without a link', async () => {
    let tool = await factory.attrs('Tool');
    tool.link = '';

    const response = await request(app)
      .post('/tools')
      .send(tool);

    expect(response.status).toBe(400);
  });

  it('should not be able to register without a description', async () => {
    let tool = await factory.attrs('Tool');
    tool.description = '';

    const response = await request(app)
      .post('/tools')
      .send(tool);

    expect(response.status).toBe(400);
  });

  it('should be able to register without tags', async () => {
    let tool = await factory.attrs('Tool');
    tool.tags = [];

    const response = await request(app)
      .post('/tools')
      .send(tool);

    expect(response.status).toBe(201);
  });

  it('should be able to list all tools', async () => {

  });

  it('should be able to search for tools by title', async () => {

  });

  it('should be able to search for tools by description', async () => {

  });

  it('should be able to search for tools by tag', async () => {

  });

  it('should be able to remove a tool', async () => {
    const response = await request(app)
      .post('/tools')
      .send(tool);

    const { _id } = response.data;

    const response = await request(app)
      .delete(`/tools/${_id}`)
      .send();

    expect(response.status).toBe(204);
  });

  it('should not be able to remove a tool that does not exist', async () => {
    const _id = 'aaaaaaaaaaaa';

    const response = await request(app)
      .delete(`/tools/${_id}`)
      .send();

    expect(response.status).toBe(400);
  });
});