const { expect } = require("@jest/globals")
const product = require("../lib/product")
const square = require("../lib/square")
const sum = require("../lib/sum")


test("", () => {
    expect(product(3, 4)).toBe(12)
});

test("", () => {
    expect(square(3)).toBe(9)
});
test("", () => {
    expect(sum(3)).toBe(9)
});