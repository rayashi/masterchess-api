
# Masterchess API

Masterchess API works as an engine to preview moves in the Chess game. The first version just gets all cells where the Knight can move in exactly 2 turns. The API was built using [node](https://nodejs.org).

The frontend web application is up and running [here](https://masterchess-web.herokuapp.com)

You can find the project of the frontend web application [here](https://github.com/rayashi/masterchess).

This API is live here: https://masterchess-api.herokuapp.com

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

* `/history` - Get all moves history

## Running locally

After cloning the project just go to the project folder and:

Create a file `.env` with the content `DB_DIALECT=sqlite`

Run the command:

```yarn``` or ```npm install```

and

```yarn dev``` or ```npm run dev```

## Running automated tests

```yarn test``` or ```npm run test```

## Project structure

* `/__tests__` - Integration tests
* `/src` - All application codes
* `/src/app/BoardProcessor` - BoardProcessor is the base class for rules that apply in the Chess board, like cell validation, moving forwards and backwards, etc.
* `/src/app/KnightProcessor` - Is a class that inherits BoardProcessor, and it knows all about the Knight moves and rules
* `/src/app/HistoryProcessor` - Gets all moves history from the PostgreSQL database
* `/src/app/models` - Models to interact with the database
* `/src/controllers` - Each controller is responsible for handling the network requests
* `./src/app.js` - Instantiate the [express](https://expressjs.com/) application with its middlewares
* `./src/routes.js` - Creates the routes and instantiate its handlers
* `./src/server.js` - Starts the server

## The algorithm to find the knight moves

The first step of the algorithm is to validate whether the cell position coming from the request is a valid one. Then it gets the moves of the first turn running the `getPossibleMovesByCell` method, and finally, it runs the same for each result of the first turn calling `getPossibleMovesByCells`. The `getPossibleMovesByCell` method consists of getting all valid moves in all possibles directions(`upRight`, `upLeft`, `rightUp`, `rightDown`, `downRight`, `downLeft`, `leftUp`, `leftDown`).

## Framework and library versions

This project was tested using the following dependencies versions:

* `node` = 13.7.0
* `jest` = 25.1.0 and supertest = 25.1.0 and  - For testing
* `nodemon` = 2.0.2 - To run local server
* `express` = express - Webframework for Node.js
* `dotenv` = 4.17.1 - Loads environment variables from a .env
* `sequelize` = 5.21.3" - ORM
* `pg` = 7.17.1 - PostgeSQL connector
* `sequelize-cli` = 5.5.1 - The Sequelize Command Line Interface - migration

