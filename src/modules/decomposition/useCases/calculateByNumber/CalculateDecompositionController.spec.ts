import request from "supertest";

import { app } from "../../../../app";

describe("Calculate number decomposition Controller", () => {
  it("should be able to calculate a number", async () => {
    const response = await request(app).post("/decomposition").send({
      numberToBeDecompose: 45,
    });

    expect(response.status).toBe(200);
  });

  it("should not be able to calculate a non numeric parameter", async () => {
    const response = await request(app).post("/decomposition").send({
      numberToBeDecompose: "IAmTestingHere",
    });

    const expectedResponse = {
      errors: [
        {
          value: "IAmTestingHere",
          msg: "Number to be decompose must be numeric!",
          param: "numberToBeDecompose",
          location: "body",
        },
        {
          value: "IAmTestingHere",
          msg: "Number to be decompose must be integer",
          param: "numberToBeDecompose",
          location: "body",
        },
      ],
    };

    expect(response.body).toEqual(expectedResponse);
  });

  it("should not be able to calculate a negative number", async () => {
    const response = await request(app).post("/decomposition").send({
      numberToBeDecompose: -45,
    });

    const expectedResponse = {
      statusCode: 400,
      message: "Number to be decompose must be positive",
    };

    expect(response.body).toEqual(expectedResponse);
  });

  it("should not be able to calculate a fractional number", async () => {
    const response = await request(app).post("/decomposition").send({
      numberToBeDecompose: 4.5,
    });

    const expectedResponse = {
      errors: [
        {
          value: 4.5,
          msg: "Number to be decompose must be integer",
          param: "numberToBeDecompose",
          location: "body",
        },
      ],
    };

    expect(response.body).toEqual(expectedResponse);
  });
});
