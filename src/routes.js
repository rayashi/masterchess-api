const routes = require("express").Router();

const knightProcessor = require("./app/KnightProcessor/KnightProcessor");
const KnightMovesController = require("./app/controllers/KnightMovesController");


const knightMovesController = new KnightMovesController(knightProcessor);
routes.post("/knight-moves", (...args) => knightMovesController.handleRequest(...args) );

module.exports = routes;