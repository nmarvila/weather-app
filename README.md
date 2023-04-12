# Simple Weather API

## Features

- Obtain current weather information by location
- Obtain current weather information by zipcode

## Endpoints

Obtain current weather information by location:
<pre><code>curl -X 'GET' \
    'http://localhost:3000/weather?location=Rio de Janeiro'
</code></pre>

Obtain current weather information by zipcode:
<pre><code>curl -X 'GET' \
    'http://localhost:3000/weather?zipcode=22031000'
</code></pre>

## Libraries and Tools

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)
- [SuperTest](https://www.npmjs.com/package/supertest)

### Motivation for the choices

The combination Node.js + Express was chosen for this project because, as the Express framework's own documentation states, it is a fast, unopinionated and minimalistic framework. As such, it allows for more freedom in configuration and customization and allows coding skills to really shine on the project.

The other libraries (axios, Jest, SuperTest) were chosen because they are some of the most relevant in their respective fields in the JavaScript community.

## Tests

- Clone the repository to your machine
- Open a terminal in the containing folder of the project
- Run the command `node app.js` to run the application

After this the API should be running on the address `http://localhost:3000`. To test it, you can use your preferred tool for making HTTP requests ([curl](https://curl.se/), [Postman](https://www.postman.com/), etc).

### Unit Tests

To run the test suite, follow the steps below after the cloning of the repository and the execution of the application's containers:

- Open a terminal in the containing folder of the project
- Run the command `npm test`