import request from "supertest";
import { app } from "./app";

describe("products", () => {
  it("should list products", async () => {
    const response = await request(app).get("/products");

    /* Podemos passar mais de um expect */
    expect(response.statusCode).toBe(200);
  });
});
