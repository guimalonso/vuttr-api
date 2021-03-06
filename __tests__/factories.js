const faker = require('faker');
const { factory } = require('factory-girl');
const Tool = require('../src/models/Tool');

factory.define('Tool', Tool, () => ({
  title: faker.name.title(),
  link: faker.internet.url(),
  description: faker.lorem.paragraph(1),
  tags: faker.random.words(faker.random.number(10)).split(' ')
}));

module.exports = factory;