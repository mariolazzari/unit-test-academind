import { describe, it, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber", () => {
  it("shout convert string to number", () => {
    // arrange
    const str = "1";
    // act
    const result = transformToNumber(str);
    // assert
    expect(result).toBeTypeOf("number");
  });

  it("it should return NaN if non numeric argument passed", () => {
    // arrange
    const arg1 = "arg";
    const arg2 = {};
    // act
    const res1 = transformToNumber(arg1);
    const res2 = transformToNumber(arg2);
    // assert
    expect(res1).toBeNaN();
    expect(res2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of numbers from an array of strings", () => {
    // arrange
    const arr = ["1", "2", "3"];
    // act
    const result = cleanNumbers(arr);
    // assert
    expect(result[0]).toBeTypeOf("number");
  });

  it("should throws an error on empty string", () => {
    // arrange
    const arr = ["1", "", "3"];
    // act
    const result = () => cleanNumbers(arr);
    // assert
    expect(result).toThrow();
  });

  it("should by [1,2] if ['1','2'] passed", () => {
    // arrange
    const arr = ["1", "2"];
    // act
    const result = cleanNumbers(arr);
    // assert
    // expect(result).toBe([1, 2]); -> failed due Object.is equality
    expect(result).toEqual([1, 2]);
  });
});
