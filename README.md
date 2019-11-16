# VUTTR

VUTTR (Very Useful Tools to Remember) is an application that allows data visualization and registration about useful tools for different purposes. This project has the API constructed for the app.

## Platforms and Libraries

The VUTTR API was constructed using the following platforms and libraries:

+ Node.js
+ Yarn
+ Express
+ MongoDB
+ Mongoose
+ DotENV
+ JsonWebToken (JWT)
+ Bcrypt
+ Nodemon

## Install Instructions

To install the application you need to ensure that you have Node.js and Yarn (or npm) installed and an instance of MongoDB running in your machine. After these requirements are matched, follow the instructions below:

+ Clone the repository in your machine.
+ Access the application where the source code is located and run the "yarn" command (or "npm install" if you are using npm) to get the dependencies.
+ Rename the file ".env.example"to ".env".
+ Run the "yarn start" (or "npm run start") command to start the application.

Once you have followed these instructions you will be able to make requests on the application
using the endpoint "http://localhost:3000/[ROUTE]" and an API client of your choice (like Postman or Insomnia). See the API documentation on vuttr-api.md for more details.

