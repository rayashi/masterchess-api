
# Masterchess API

Masterchess API works as an engine to preview moves in the Chess game. The first version just get all cells where the Knight can move in exactly 2 turns. The API was built using [node](https://nodejs.org).

You can find the frontend web application [here](https://github.com/rayashi/masterchess).

## Running locally

After cloning the project just go to the project folder and run:

```yarn``` or ```npm install```
```yarn dev``` or ```npm run dev```

## Running automated tests

```yarn test``` or ```npm run test```

## Project structure

* `/__tests__` - Integration tests
* `/src` - All application codes
* `/src/BoardProcessor` - BoardProcessor is the base class for rules that apply in the Chess board, like cell validation, move forward and backward, etc.
* `/src/KnightProcessor` - Is a class that inherit BoardProcessor, and it knows all about the Knight moves and rules
* `/controllers` - Each controller is responsible for handle network requests
* `./app.js` - Instantiate the [express](https://expressjs.com/) application with its middlewares
* `./routes.js` - Create the routes and instatiate its handlers
* `./server.js` - Start the server


## Framework and library versions

This project was tested using the following dependencies versions:

* node = 13.7.0
* jest = 25.1.0 and supertest = 25.1.0 and  - For testing
* nodemon = 2.0.2 - To run local server
* express = express - Webframework for Node.js
* dotenv = 8.2.0 - Loads environment variables from a .env