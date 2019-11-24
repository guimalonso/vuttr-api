const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../src/app');
const factory = require('../factories');
const removeAllTools = require('../util/removeAllTools');

describe('Tool', () => {
  beforeEach(async () => {
    await removeAllTools();
  });

  afterAll(async () => {
    await mongoose.disconnect();
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
    const tools = await factory.attrsMany('Tool', 10);

    for (let index in tools) {
      await request(app)
        .post('/tools')
        .send(tools[index]);
    }

    const response = await request(app).get('/tools');

    expect(response.body).toHaveLength(10);
  });

  it('should be able to search for tools by title', async () => {
    const tool = await factory.attrs('Tool');
    const title = tool.title;

    await request(app)
      .post('/tools')
      .send(tool);

    const response = await request(app)
      .get('/tools')
      .query({ tag: title });

    const result = response.body[0];

    expect(result.title).toBe(title);
  });

  it('should be able to search for tools by description', async () => {
    const tool = await factory.attrs('Tool');
    const description = tool.description;

    await request(app)
      .post('/tools')
      .send(tool);

    const response = await request(app)
      .get('/tools')
      .query({ tag: description });

    const result = response.body[0];

    expect(result.description).toBe(description);
  });

  it('should be able to search for tools by tag', async () => {
    const tool = await factory.attrs('Tool');
    const tag = tool.tags[0];

    await request(app)
      .post('/tools')
      .send(tool);

    const response = await request(app)
      .get('/tools')
      .query({ tag: tag });

    const result = response.body[0];

    expect(result.tags).toContain(tag);
  });

  it('should search for tools only by tag when indicated', async () => {
    const tool = await factory.attrs('Tool');
    const tag = tool.title;

    await request(app)
      .post('/tools')
      .send(tool);

    const response = await request(app)
      .get('/tools')
      .query({ tag: tag, tagSearch: 1 });

    expect(response.body).toHaveLength(0);
  });

  it('should be able to remove a tool', async () => {
    const tool = await factory.attrs('Tool');

    const postResponse = await request(app)
      .post('/tools')
      .send(tool);

    const { _id } = postResponse.body;

    const response = await request(app)
      .delete(`/tools/${_id}`)
      .send();

    expect(response.status).toBe(204);
  });

  it('should not be able to remove a tool that does not exist', async () => {
    const tool = await factory.attrs('Tool');

    const postResponse = await request(app)
      .post('/tools')
      .send(tool);

    const { _id } = postResponse.body;

    await request(app)
      .delete(`/tools/${_id}`)
      .send();

    const response = await request(app)
      .delete(`/tools/${_id}`)
      .send();

    expect(response.status).toBe(400);
  });
});