const arr = [1, 4, 9];

const calc = (arr, cb) => {
	const result = [];
	for (let a of arr) {
		result.push(cb(a));
	}

	return result;
};

const powSqrtByForOf = arr => {
	// if (!Array.isArray(arr) || !arr.every(a => Number.isInteger(a)))
	if (!Array.isArray(arr) || arr.some(a => !Number.isInteger(a)))
		throw new Error('정수 배열만 허용됩니다!');

	const arrPow = calc(arr, a => a ** 2);
	const arrSqrt = calc(arr, Math.sqrt);

	return [arrPow, arrSqrt];
};

const powSqrtByForOf2 = arr => {
	const arrPow = [];
	const arrSqrt = [];
	for (let a of arr) {
		arrPow.push(a ** 2);
		arrSqrt.push(Math.sqrt(a));
	}

	return [arrPow, arrSqrt];
};

const powSqrtByForEach = arr => {
	const arrPow = Array(arr.length).fill(0);
	const arrSqrt = [];
	arr.forEach((a, i) => {
		arrPow[i] = a ** 2;
		arrSqrt[i] = Math.sqrt(a);
	});

	return [arrPow, arrSqrt];
};

const powSqrtByMap = arr => [
	[...arr.map(a => a ** 2)],
	[...arr.map(Math.sqrt)],
];

powSqrtByForOf(['a']);
console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]
