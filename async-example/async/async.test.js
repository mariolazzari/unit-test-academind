import { it, expect } from "vitest";
import { generateToken } from "./async-example.js";

// Callbacks: done -> once test is done! (use try catch to avoid timeout)
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
