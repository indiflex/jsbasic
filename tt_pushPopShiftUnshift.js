const push = (arr, ...args) => [...arr, ...args];
const pop = (arr, cnt = 1) => arr.filter((_, i) => i < arr.length - cnt);

const shift = (arr, cnt = 1) => arr.filter((_, i) => i >= cnt);
const unshift = (arr, ...args) => [...args, ...arr];

const arr = [1, 2, 3, 4];
console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr)); // [1, 2, 3]
console.log(pop(arr, 2)); // 2개 팝! ⇒ [1, 2]
console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(arr); // [1, 2, 3, 4]

console.log('===========================================');

const deleteArray = (arr, start, end = arr.length) => {
	// const isLeft = x => x >= start && x < end;
	// return arr.filter((_, i) => !isLeft(i));

	// return arr.filter((_, i) => i < start || i >= end);
	const isDeleteRange = x => x < start || x >= end;
	return arr.filter((_, i) => isDeleteRange(i));
};
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]

const users = [
	{ id: 1, name: 'Hong' },
	{ id: 2, name: 'Kim' },
	{ id: 3, name: 'Lee' },
];

const deleteObjectArray = (arr, keyOrIndex, value) => {
	// if (typeof keyOrIndex === 'number')
	// 	return arr.filter((_, i) => i !== keyOrIndex);
	// else return arr.filter(obj => obj[keyOrIndex] !== value);

	const isDeleteByIndex = typeof keyOrIndex === 'number';
	return arr.filter((obj, i) =>
		isDeleteByIndex ? i !== keyOrIndex : obj[keyOrIndex] !== value
	);
};

console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, 'id', 2)); // Hong, Lee
console.log(deleteObjectArray(users, 'name', 'Lee')); // Hong, Kim
