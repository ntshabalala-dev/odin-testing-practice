export function reverse(str) {
	if (typeof str !== "string") {
		throw new TypeError("Not a string");
	}

	return str.split("").reverse().join("");
}
