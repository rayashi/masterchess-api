const { History } = require("../../Models");

class BoardService {
  
  constructor(cell){
    this.cell = cell;
    this.secondTurnMoves = null;
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

  getPossibleMovesByCells(cells, getPossibleMovesByCell){
    let moves = [];
    cells.map(cell => {
      moves = [...moves, ...getPossibleMovesByCell(cell)];
    });
    return [...new Set(moves)];
  }

  saveHistory(){
    if(!this.secondTurnMoves){
      throw "secondTurnMoves is null";
    }
    
    History.create({
      cell: this.cell,
      moves: this.secondTurnMoves.toString(),
    });
  }

}

module.exports = BoardService;