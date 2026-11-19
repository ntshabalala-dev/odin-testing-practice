import caesar from "../caesar";
import calc from "../calculator";
import { reverse } from "../reverse";

describe("reverse", () => {
	// Positive test cases
	it("Reverse a string", () => {
		expect(reverse("hello")).toBe("olleh");
	});

	it("Multi word string", () => {
		expect(reverse("Hello World")).toBe("dlroW olleH");
	});

	it("Single character", () => {
		expect("a").toBe("a");
	});

	it("Mixed case word", () => {
		expect(reverse("JavaScript")).toBe("tpircSavaJ");
	});

	it("Alphanumeric string", () => {
		expect(reverse("123JohnDoe")).toBe("eoDnhoJ321");
	});

	it("Punctuation & symbols string", () => {
		expect(reverse("123@JohnDoe!")).toBe("!eoDnhoJ@321");
	});

	// Exceptions
	it("Throws error if not string", () => {
		expect(() => reverse(undefined)).toThrow(TypeError);

		expect(() => reverse(null)).toThrow(TypeError);
	});
});

describe("calculator", () => {
	// positive test cases
	it("Add two numbers", () => {
		expect(calc.add(2, 3)).toBe(5);
	});
	it("Subtract two numbers", () => {
		expect(calc.subtract(6, 3)).toBe(3);
	});
	it("Multiply two numbers", () => {
		expect(calc.multiply(2, 3)).toBe(6);
	});
	it("Divide two numbers", () => {
		expect(calc.divide(10, 5)).toBe(2);
	});

	// Floating point numbers
	it("Add two float numbers", () => {
		expect(calc.add(0.1, 0.2)).toBe(0.3);
	});
	it("Subtract two float numbers", () => {
		expect(calc.subtract(0.3, 0.1)).toBe(0.2);
	});

	it("Multiply two float numbers", () => {
		expect(calc.multiply(2.5, 3.3)).toBe(8.25);
	});

	it("Divide two float numbers", () => {
		expect(calc.divide(2.5, 3, 3)).toBe(0.8);
	});

	// Errors
	it("Cannot divide by zero", () => {
		expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
	});
});

describe("Caesar Shift Cipher", () => {
	it("test 1", () => {
		expect(caesar("hello")).toBe("hello");
	});
});
