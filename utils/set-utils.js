const intersect = (arr1, arr2) => {
	const [a, b] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
	return new Set(a.filter(a => b.includes(a)));
};

const differ = (arr1, arr2) => {
	return new Set(arr1.filter(a => !arr2.includes(a)));
};

const union = (arr1, arr2) => {
	return new Set([...arr1, ...arr2]);
};

const isSuperset = (arr1, arr2) => arr2.every(a => arr1.includes(a));

export { intersect, union, differ, isSuperset };
