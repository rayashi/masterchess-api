const BoardService = require("../BoardService");
const boardService = new BoardService();

describe("Board  Unit tests", () => {

  it("should validade board cells", async () => { 
    expect(boardService.validateCell("C4")).toBeTruthy();
    expect(boardService.validateCell("B7")).toBeTruthy();
    expect(boardService.validateCell("K7")).toBeFalsy();
    expect(boardService.validateCell("&7")).toBeFalsy();
    expect(boardService.validateCell("A9")).toBeFalsy();
    expect(boardService.validateCell("B10")).toBeFalsy();
  });

  it("should sum and subtract letters", async () => { 
    expect(boardService.sumLetter("A", 1)).toBe("B");
    expect(boardService.sumLetter("C", 2)).toBe("E");
    expect(boardService.subtractLetter("D", 1)).toBe("C");
    expect(boardService.subtractLetter("F", 2)).toBe("D");
  });

});
