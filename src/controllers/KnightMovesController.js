class KnightMovesController {
  constructor(knightProcessor){
    this.knightProcessor = knightProcessor;
  }

  async handleRequest(req, res) {
    const cell = req.body.cell;
    let secondTurnMoves = [];

    try {
       secondTurnMoves = this.knightProcessor.getSecondTurnMoves(cell);
    } catch(error) {
      res.status(400);
      return res.send({error});
    }
    
    return res.json(secondTurnMoves);
  }
}


module.exports = KnightMovesController;