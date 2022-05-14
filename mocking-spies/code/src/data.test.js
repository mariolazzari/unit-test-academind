import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execut logFn if provided", () => {
    // Arrange
    const logger = vi.fn();
    // Act
    generateReportData(logger);
    // expect
    expect(logger).toBeCalled();
  });
});
