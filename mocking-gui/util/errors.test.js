import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError class", () => {
  it("Should initialize with the correct properties", () => {
    const status = 1;
    const message = "Test message";
    const data = { key: "value" };

    const error = new HttpError(status, message, data);
    expect(error.statusCode).toBe(status);
    expect(error.message).toBe(message);
    expect(error.data).toBe(data);
  });

  it("Should be ubdefined if no data provided", () => {
    const error = new HttpError(1, "Test message");
    expect(error.data).toBeUndefined();
  });
});

describe("ValidationError class", () => {
  it("Should initialize with the provided message", () => {
    const message = "Test message";

    const error = new ValidationError(message);
    expect(error.message).toBe(message);
  });
});
