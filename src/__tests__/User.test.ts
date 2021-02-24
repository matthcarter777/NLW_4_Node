import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Users",() => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able create a new user", async() => {
    const response = await request(app).post("/users").send({
      name: "User Exemple",
      email: "user@exemple.com"
    });

    expect(response).toBe(response);
  });

  it("should not be able to create a user with exists email", async() => {
    const response = await request(app).post("/users").send({
      name: "User Exemple",
      email: "user@exemple.com"
    });

    expect(response.status).toBe(400);
  });

});