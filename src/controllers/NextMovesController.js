class NextMovesController {

  async getNextMoves(req, res) {
    const cell = req.body.cell;
    if(!this.validateCell(cell)){
      res.status(400);
      return res.send({error: `Sorry, ${cell} is not a valid board position in Chess`});
    }

    const firstTurnMoves = this.getPossibleMovesByCell(cell);
    const secondTurnMoves = this.getPossibleMovesByCells(firstTurnMoves);
    return res.json(secondTurnMoves);
  }

  getPossibleMovesByCells(cells){
    let moves = [];
    cells.map(cell => {
      moves = [...moves, ...this.getPossibleMovesByCell(cell)];
    });
    return [...new Set(moves)];
  }

  getPossibleMovesByCell(cell){
    if(!this.validateCell(cell)){
      return [];
    }
  
    let moves = [];
    const column = cell[0];
    const row = parseInt(cell[1]);
  
    const upRight = `${this.sumLetter(column, 1)}${row + 2}`;
    const upLeft = `${this.subtractLetter(column, 1)}${row + 2}`;
    const rightUp = `${this.sumLetter(column, 2)}${row + 1}`;
    const rightDown = `${this.sumLetter(column, 2)}${row - 1}`;
    const downRight = `${this.sumLetter(column, 1)}${row - 2}`;
    const downLeft = `${this.subtractLetter(column, 1)}${row - 2}`;
    const leftUp = `${this.subtractLetter(column, 2)}${row + 1}`;
    const leftDown = `${this.subtractLetter(column, 2)}${row - 1}`;
  
    this.validateCell(upRight) && moves.push(upRight);
    this.validateCell(upLeft) && moves.push(upLeft);
    this.validateCell(rightUp) && moves.push(rightUp);
    this.validateCell(rightDown) && moves.push(rightDown);
    this.validateCell(downRight) && moves.push(downRight);
    this.validateCell(downLeft) && moves.push(downLeft);
    this.validateCell(leftUp) && moves.push(leftUp);
    this.validateCell(leftDown) && moves.push(leftDown);

    return moves;
  }

  sumLetter(letter, moves){
    return String.fromCharCode(letter.charCodeAt(0) + moves);
  }

  subtractLetter(letter, moves){
    return String.fromCharCode(letter.charCodeAt(0) - moves);
  }

  validateCell(cell){ 
    return /^[A-H][1-8]$/.test(cell);
  }

}

module.exports = new NextMovesController();