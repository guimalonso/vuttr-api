# VUTTR

VUTTR (Very Useful Tools to Remember) is an application that allows data visualization and registration of useful tools for different purposes. This project has the API constructed for the app, as well as the integration tests and the required files to run the API using a Docker container.

## Platforms and Libraries

The main tools used for the construction of this API were:
+ Node.js (https://nodejs.org/)
+ Express (https://expressjs.com/)
+ MongoDB (https://www.mongodb.com/)
+ Mongoose (https://mongoosejs.com/)
+ Jest (https://jestjs.io/)

## Running Instructions

To install the application you need to ensure that you have Docker installed and running in your machine.

+ Clone the repository in your machine.
+ Access the directory where the source code is located and run the following command to start the application:
```
docker-compose up
```

Once you have followed these instructions you will be able to make requests on the API
using the endpoint "http://localhost:3000/[ROUTE]" and an API client of your choice (like Postman or Insomnia). See the [API documentation] (https://vuttrapi3.docs.apiary.io/#) for more details.

To run the tests, use the command:
```
docker-compose run --rm server npm test
```
