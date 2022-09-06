const arr = [1, 2, 3, 4, 5];

/*
 → 배열의 각 요소를 제곱
 → 배열 각 요소의 제곱근
 → 배열의 각 요소를 세제곱
 */

const pow = a => a ** 2;
const pow3 = a => a ** 3;

const calc = (arr, cb) => {
	const result = [];
	for (let a of arr) {
		result.push(cb(a));
	}

	return result;
};

// const a1 = arr.reduce((s, a) => s + a);
// console.log('a1 =', a1);
const ax = [pow, Math.sqrt, pow3].reduce((ret, fn) => calc(ret, fn), arr);
console.log(ax);

const ax2 = [pow, Math.sqrt, pow3].reduce(
	(ret, fn) => ret.map(a => fn(a)),
	arr
);
console.log(ax2);
