import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
