import { it, expect } from "vitest";
import { add } from "./math";

it("should add all numbers of an array", () => {
  // arrange
  const numbers = [1, 2, 3, 4, 5];
  // act
  const result = add(numbers);
  // assert
  const expected = numbers.reduce((acc, curr) => acc + curr, 0);
  expect(result).toBe(expected);
});

it("should yeald NaN if at least one non number is present", () => {
  // arrange
  const numbers = [1, 2, "a", 4, 5];
  // act
  const result = add(numbers);
  // assert
  expect(result).toBeNaN();
});

it("should add all string number", () => {
  // arrange
  const numbers = ["1", "2", "3", "4", "5"];
  // act
  const result = add(numbers);
  // assert
  const expected = numbers.reduce((acc, curr) => +acc + +curr, 0);
  expect(result).toBe(expected);
});
