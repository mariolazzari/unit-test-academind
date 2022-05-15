import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("Validation", () => {
  it("Should throws error on empty string", () => {
    const testInput = "";
    const validateFn = () => validateNotEmpty(testInput, "Test message");
    expect(validateFn).toThrow();
  });

  it("Should throws error on blanks", () => {
    const testInput = "     ";
    const validateFn = () => validateNotEmpty(testInput, "Test message");
    expect(validateFn).toThrow();
  });

  it("Should provide expected error message", () => {
    const testInput = "";
    const errorMsg = "Test message";

    const validateFn = () => validateNotEmpty(testInput, errorMsg);
    expect(validateFn).toThrow(errorMsg);
  });
});
