const knightProcessor = require("../KnightProcessor");

describe("KnightProcessor", () => {

  it("should throw exception for invalid cell", async () => { 
    expect(() => knightProcessor.getPossibleMovesByCells("H10")).toThrow();
    expect(() => knightProcessor.getPossibleMovesByCell("K10")).toThrow();
  });

  
  it("should get all the possibilites moves of the second turn", async () => {   
    const possibilites = knightProcessor.getSecondTurnMoves("C4");
    expect(possibilites).toContain("E8");
    expect(possibilites).toContain("C8");
    expect(possibilites).toContain("F7");
    expect(possibilites).toContain("F5");
    expect(possibilites).toContain("E4");
    expect(possibilites).toContain("C4");
    expect(possibilites).toContain("B7");
    expect(possibilites).toContain("B5");
    expect(possibilites).toContain("A8");
    expect(possibilites).toContain("D7");
    expect(possibilites).toContain("D5");
    expect(possibilites).toContain("A4");
    expect(possibilites).toContain("G6");
    expect(possibilites).toContain("G4");
    expect(possibilites).toContain("F3");
    expect(possibilites).toContain("D3");
    expect(possibilites).toContain("C6");
    expect(possibilites).toContain("G2");
    expect(possibilites).toContain("F1");
    expect(possibilites).toContain("D1");
    expect(possibilites).toContain("C2");
    expect(possibilites).toContain("B3");
    expect(possibilites).toContain("B1");
    expect(possibilites).toHaveLength(23);
  });

});
