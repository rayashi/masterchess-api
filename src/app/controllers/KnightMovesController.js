class KnightMovesController {
  constructor(Knight){
    this.Knight = Knight;
  }

  async handleRequest(req, res) {
    const cell = req.body.cell;
    let knight = new this.Knight(cell);

    try {  
      knight.getSecondTurnMoves();
      knight.saveHistory();
    } catch(error) {
      res.status(400);
      return res.send({error});
    }
    
    return res.json(knight.secondTurnMoves);
  }
}


module.exports = KnightMovesController;