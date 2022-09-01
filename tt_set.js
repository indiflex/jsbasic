const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect = (arr1, arr2) => {
	const [a, b] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
	return new Set(a.filter(a => b.includes(a)));
};
console.log(intersect(A, B)); // 1, 3, 5
console.log(intersect(A, C)); // 3, 4

console.log('----------------------');
const diff = (arr1, arr2) => {
	return new Set(arr1.filter(a => !arr2.includes(a)));
};
console.log(diff(A, B)); // 2, 4
console.log(diff(B, A)); // 22, 44
console.log(diff(A, C)); // 1, 2, 5
console.log(diff(B, C)); // 1, 22, 44, 5

console.log('----------------------');
const union = (arr1, arr2) => {
	return new Set([...arr1, ...arr2]);
};
console.log(union(A, B)); // 1, 2, 3, 4, 5, 22, 44
console.log(union(A, C)); // 1, 2, 3, 4, 5, 11, 222, 555

const D = [1, 2, 3];
const E = [1, 3];
const isSuperset = (arr1, arr2) => arr2.every(a => arr1.includes(a));
console.log(isSuperset(D, E));
console.log(isSuperset(E, D));

/* ------------------------------------- choi
const intersect = (x, y) => {
	const setX = new Set(x);
	const newSet = new Set();
	new Set(y).forEach(item => {
		if (setX.has(item)) newSet.add(item);
	});
	return newSet;
};
const diff = (x, y) => {
	const setX = new Set(x);
	y.forEach(item => {
		if (setX.has(item)) setX.delete(item);
	});
	return setX;
};
*/
