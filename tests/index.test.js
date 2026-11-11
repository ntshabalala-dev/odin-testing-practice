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

describe.only("calculator", () => {
	it("Add two numbers", () => {
		expect(calc.add(2, 3)).toBe(5);
	});
});
