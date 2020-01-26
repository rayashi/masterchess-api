class BoardProcessor {

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

}

module.exports = BoardProcessor;