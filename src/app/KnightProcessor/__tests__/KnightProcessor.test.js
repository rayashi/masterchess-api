const KnightProcessor = require("../KnightProcessor");
const { History } = require("../../models");

describe("KnightProcessor", () => {

  it("should throw exception for invalid cell", async () => { 
    let knightProcessor = new KnightProcessor("H10");
    expect(() => knightProcessor.getPossibleMovesByCells()).toThrow();
    expect(() => knightProcessor.getPossibleMovesByCell()).toThrow();
  });

  
  it("should get all the possibilities moves of the second turn", async () => {   
    let knightProcessor = new KnightProcessor("C4");
    let possibilities = knightProcessor.getSecondTurnMoves();
    expect(possibilities).toContain("E8");
    expect(possibilities).toContain("C8");
    expect(possibilities).toContain("F7");
    expect(possibilities).toContain("F5");
    expect(possibilities).toContain("E4");
    expect(possibilities).toContain("C4");
    expect(possibilities).toContain("B7");
    expect(possibilities).toContain("B5");
    expect(possibilities).toContain("A8");
    expect(possibilities).toContain("D7");
    expect(possibilities).toContain("D5");
    expect(possibilities).toContain("A4");
    expect(possibilities).toContain("G6");
    expect(possibilities).toContain("G4");
    expect(possibilities).toContain("F3");
    expect(possibilities).toContain("D3");
    expect(possibilities).toContain("C6");
    expect(possibilities).toContain("G2");
    expect(possibilities).toContain("F1");
    expect(possibilities).toContain("D1");
    expect(possibilities).toContain("C2");
    expect(possibilities).toContain("B3");
    expect(possibilities).toContain("B1");
    expect(possibilities).toHaveLength(23);
  });

  it("should throw exception for invalid cell", async () => { 
    let knightProcessor = new KnightProcessor("C5");
    knightProcessor.getSecondTurnMoves();
    knightProcessor.saveHistory();
    const histories = await History.findAll();
    expect(histories.length).toBeGreaterThan(0);
  });

});
