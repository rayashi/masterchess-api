const BoardProcessor = require("../BoardProcessor/BoardProcessor");

class KnightProcessor extends BoardProcessor {

  getSecondTurnMoves() {
    if(!this.validateCell(this.cell)){
      throw `Sorry, ${this.cell} is not a valid board position in Chess`
    }
    const firstTurnMoves = this.getPossibleMovesByCell(this.cell);
    this.secondTurnMoves = this.getPossibleMovesByCells(firstTurnMoves, this.getPossibleMovesByCell.bind(this));
    return this.secondTurnMoves;
  }

  getPossibleMovesByCell(cell){
    if(!this.validateCell(cell)){
      throw `Sorry, ${cell} is not a valid board position in Chess`
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

}

module.exports = KnightProcessor;