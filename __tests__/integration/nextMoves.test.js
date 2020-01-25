const request = require("supertest");
const app = require("../../src/app");

describe("Knight Moves", () => {

  it("shoudl return error for invalid cells", async () => { 
    const response = await request(app)
      .post("/next-moves")
      .send({
        cell: "C10"
      });
      expect(response.status).toBe(400);
  });

  it("should get all the possibilites moves of the first turn", async () => {   
    const response = await request(app)
      .post("/next-moves")
      .send({
        cell: "C4"
      });
    expect(response.status).toBe(200);
    expect(response.body).toContain("D6");
    expect(response.body).toContain("B6");
    expect(response.body).toContain("E5");
    expect(response.body).toContain("E3");
    expect(response.body).toContain("D2");
    expect(response.body).toContain("B2");
    expect(response.body).toContain("A5");
    expect(response.body).toContain("A3");
  });

  it("should get the possibilites moves of the first turn without cells outside the board", async () => {   
    const response = await request(app)
      .post("/next-moves")
      .send({
        cell: "H6"
      });
    expect(response.status).toBe(200);
    expect(response.body).toContain("G8");
    expect(response.body).toContain("G4");
    expect(response.body).toContain("F7");
    expect(response.body).toContain("F5");
    expect(response.body).toHaveLength(4);
  });

});
