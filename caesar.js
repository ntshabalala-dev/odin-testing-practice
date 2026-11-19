export default function caesar(str, key = 0) {
	return "hello";
}

const createAlphabet = (key) => {
	const alphabetSize = 26;
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	if (key > alphabetSize) {
		key = key % alphabetSize;
	}

	const deleted = uppercase.splice(0, key);
	return [...uppercase, ...deleted];
};
