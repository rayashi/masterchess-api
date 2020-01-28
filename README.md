
# Masterchess API

Masterchess API works as an engine to preview moves in the Chess game. The first version just gets all cells where the Knight can move in exactly 2 turns. The API was built using [node](https://nodejs.org).

You can find the frontend web application [here](https://github.com/rayashi/masterchess).

The API is up and running here: https://masterchess-api.herokuapp.com

## Endpoints

* POST `/knight-moves` -  Gets all cells where the Knight can move in exactly 2 turns. It expects a valid `cell` position (Algebraic notation like D4, A5, H8, A1, ...) in the request body:

Example request:

```json
{
  "cell": "C4"
}
```

Response:

```json
[
  "E8",
  "C8",
  "F7",
  "F5",
  "E4",
  "C4",
  "B7",
  "B5",
  "A8",
  "D7",
  "D5",
  "A4",
  "G6",
  "G4",
  "F3",
  "D3",
  "C6",
  "G2",
  "F1",
  "D1",
  "C2",
  "B3",
  "B1"
]
```

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
* `./routes.js` - Create the routes and instantiate its handlers
* `./server.js` - Start the server

## The algorithm to find the knight moves

The first step of the algorithm is to validate whether the cell position coming from the request is a valid one. Then it gets the moves of the first turn running the `getPossibleMovesByCell` method, and finally, it runs the same for each result of the first turn calling `getPossibleMovesByCells`. The `getPossibleMovesByCell` method consist in getting all valid moves in all possibles directions(`upRight`, `upLeft`, `rightUp`, `rightDown`, `downRight`, `downLeft`, `leftUp`, `leftDown`).

## Framework and library versions

This project was tested using the following dependencies versions:

* node = 13.7.0
* jest = 25.1.0 and supertest = 25.1.0 and  - For testing
* nodemon = 2.0.2 - To run local server
* express = express - Webframework for Node.js
* dotenv = 8.2.0 - Loads environment variables from a .env
