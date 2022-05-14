import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

// avoid data creation
vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

it("should execute the writeData function", () => {
  const data = "Some dummy data for this demo app";
  const filename = "data.txt";
  writeData(data, filename);

  //return expect(writeData(data, filename)).resolves.toBeUndefined();
  //expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(filename, data);
});
