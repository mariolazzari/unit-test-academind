import { describe, it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example.js";

// Callbacks: done -> once test is done! (use try catch to avoid timeout)

describe("generateToken()", () => {
  it("should generate a token", done => {
    // arrange
    const mail = "mario.lazzari@gmail.com";
    // act
    generateToken(mail, (_err, token) => {
      try {
        // assert
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should generate a token", () => {
    // arrange
    const mail = "mario.lazzar@gmail.com";
    // act
    expect(generateTokenPromise(mail)).resolves.toBeDefined();
  });

  it("should generate a token (async)", async () => {
    // arrange
    const mail = "mario.lazzari@gmail";
    // act
    const res = await expect(generateTokenPromise(mail));
    // assert
    expect(res).toBeDefined();
  });

  /*
  it("should reject if mail is not valid", () => {
    // arrange
    const mail = null;
    // act
    expect(generateTokenPromise(mail)).rejects.toThrow();
  });
  */
});
