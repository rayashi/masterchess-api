class KnightMovesController {
  constructor(KnightProcessor){
    this.KnightProcessor = KnightProcessor;
  }

  async handleRequest(req, res) {
    const cell = req.body.cell;
    let knightProcessor = new this.KnightProcessor(cell);

    try {  
      knightProcessor.getSecondTurnMoves(cell);
      knightProcessor.saveHistory();
    } catch(error) {
      res.status(400);
      return res.send({error});
    }
    
    return res.json(knightProcessor.secondTurnMoves);
  }
}


module.exports = KnightMovesController;