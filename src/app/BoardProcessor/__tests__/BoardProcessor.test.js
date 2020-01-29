const BoardProcessor = require("../BoardProcessor");
const boardProcessor = new BoardProcessor();

describe("Board Processor Unit tests", () => {

  it("should validade board cells", async () => { 
    expect(boardProcessor.validateCell("C4")).toBeTruthy();
    expect(boardProcessor.validateCell("B7")).toBeTruthy();
    expect(boardProcessor.validateCell("K7")).toBeFalsy();
    expect(boardProcessor.validateCell("&7")).toBeFalsy();
    expect(boardProcessor.validateCell("A9")).toBeFalsy();
    expect(boardProcessor.validateCell("B10")).toBeFalsy();
  });

  it("should sum and subtract letters", async () => { 
    expect(boardProcessor.sumLetter("A", 1)).toBe("B");
    expect(boardProcessor.sumLetter("C", 2)).toBe("E");
    expect(boardProcessor.subtractLetter("D", 1)).toBe("C");
    expect(boardProcessor.subtractLetter("F", 2)).toBe("D");
  });

});
