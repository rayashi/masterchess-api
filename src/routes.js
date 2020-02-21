const routes = require("express").Router();

const knightService = require("./app/Services/KnightService/KnightService");
const KnightMovesController = require("./app/Controllers/KnightMovesController");
const getAllHistoryController = require("./app/Controllers/GetAllHistoryController");

const knightMovesController = new KnightMovesController(knightService);

routes.post("/knight-moves", (...args) => knightMovesController.handleRequest(...args) );
routes.get("/history", (...args) => getAllHistoryController.handleRequest(...args) );

module.exports = routes;