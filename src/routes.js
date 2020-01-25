const routes = require("express").Router();

const NextMovesController = require("./controllers/NextMovesController");

routes.post("/next-moves", (...args) => NextMovesController.getNextMoves(...args) );

module.exports = routes;