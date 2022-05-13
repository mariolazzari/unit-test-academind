import { it, expect } from "vitest";
import writeData from "./io";

it("should execute the writeData function", () => {
  const data = "Some dummy data for this demo app";
  const filename = "data.txt";

  return expect(writeData(data, filename)).resolves.toBeUndefined();
});
