const routes = require("express").Router();

const knightProcessor = require("./app/KnightProcessor/KnightProcessor");
const KnightMovesController = require("./app/controllers/KnightMovesController");
const getAllHistoryController = require("./app/controllers/GetAllHistoryController");

const knightMovesController = new KnightMovesController(knightProcessor);

routes.post("/knight-moves", (...args) => knightMovesController.handleRequest(...args) );
routes.get("/history", (...args) => getAllHistoryController.handleRequest(...args) );

module.exports = routes;