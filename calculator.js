import * as _ from "radashi";

const calc = {
	add: (a, b) => {
		let rawResult = a + b;
		if (_.isFloat(a) || _.isFloat(b)) {
			rawResult = +rawResult.toFixed(1);
		}
		return rawResult;
	},
	subtract: (a, b) => {
		let rawResult = a - b;
		if (_.isFloat(a) || _.isFloat(b)) {
			rawResult = +rawResult.toFixed(1);
		}
		return rawResult;
	},
	multiply: (a, b) => {
		const rawResult = a * b;
		return rawResult;
	},
	divide: (a, b) => {
		if (b == 0) throw new TypeError("Cannot divide by zero");

		let rawResult = a / b;
		if (_.isFloat(a) || _.isFloat(b)) {
			rawResult = +rawResult.toFixed(1);
		}
		return rawResult;
	},
};

// const floatHelper = (a, b, rawResult) => {
// 	const containsFloat = _.isFloat(a) || _.isFloat(b);
// 	return containsFloat ? +rawResult.toFixed(1) : null;
// };

export default calc;
