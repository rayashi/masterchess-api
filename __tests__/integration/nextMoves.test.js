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

  it("should get all the possibilites moves of the second turn", async () => {   
    const response = await request(app)
      .post("/next-moves")
      .send({
        cell: "C4"
      });
      
    expect(response.status).toBe(200);
    expect(response.body).toContain("E8");
    expect(response.body).toContain("C8");
    expect(response.body).toContain("F7");
    expect(response.body).toContain("F5");
    expect(response.body).toContain("E4");
    expect(response.body).toContain("C4");
    expect(response.body).toContain("B7");
    expect(response.body).toContain("B5");
    expect(response.body).toContain("A8");
    expect(response.body).toContain("D7");
    expect(response.body).toContain("D5");
    expect(response.body).toContain("A4");
    expect(response.body).toContain("G6");
    expect(response.body).toContain("G4");
    expect(response.body).toContain("F3");
    expect(response.body).toContain("D3");
    expect(response.body).toContain("C6");
    expect(response.body).toContain("G2");
    expect(response.body).toContain("F1");
    expect(response.body).toContain("D1");
    expect(response.body).toContain("C2");
    expect(response.body).toContain("B3");
    expect(response.body).toContain("B1");
    expect(response.body).toHaveLength(23);
  });

});
