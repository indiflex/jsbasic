const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const sums = [];
for (let i = 0; i < arr.length; i += 1) {
	sums[i] = (i === 0 ? 0 : sums[i - 1]) + arr[i];
}
console.log(sums);

const rangeSum = (start, end) => {
	// return arr.reduce((s, a, i) => (i >= start && i <= end ? s + a : s), 0);
	// console.log(start, end, '==>', sums[end] - (sums[start - 1] || 0));
	const from = start <= 0 ? 0 : sums[start - 1];
	const to = sums[end >= sums.length ? sums.length - 1 : end];
	console.log(start, end, '==>', to - from);
};

rangeSum(2, 5); // 19 <-- 4, 2, 5, 8
rangeSum(3, 5); // 15
rangeSum(0, 4); // 15
rangeSum(1, 4); // 14
rangeSum(5, 8); // 30
rangeSum(6, 8); // 22
rangeSum(2, 8); // 41
rangeSum(4, 4); // 5
