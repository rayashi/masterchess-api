const routes = require("express").Router();

const KnightMoves = require("./controllers/KnightMoves");

routes.post("/knight-moves", (...args) => KnightMoves.getMoves(...args) );

module.exports = routes;