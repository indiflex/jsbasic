const keyPair2 = (arr, n) => {
	for (let i = 0; i < arr.length; i += 1) {
		for (let j = 0; j < arr.length; j += 1) {
			if (arr[i] + arr[j] === n) return [i, j];
		}
	}
}; // O(n^2)

const keyPair = (arr, n) => {
	// n = 9
	// index: 0, 1, 2, 3, 4
	// value: 1, 2, 3, 4, 5
	// diff : 8, 7, 6, 5, 4
	// diffI: {8:0, 7:1, 6:2, 5:3, 4:4}

	/*  n=5   [1, 2, 3, 4, 5]
     i:     0   1  2  3
     val:   1   2  3  4
     diff:  4   3  2  1
     {4:0, 3:1}
  */
	const diffIdx = {};
	for (let i = 0; i < arr.length; i += 1) {
		const val = arr[i]; // 1 2 3 4 5
		const diff = n - val; // 6
		console.log(i, val, diff, diffIdx[diff], diffIdx);
		// if (diffIdx[val] || diffIdx[val] === 0) {
		if (diffIdx.hasOwnProperty(val)) {
			return [diffIdx[val], i];
		} else {
			diffIdx[diff] = i;
		}
	}
}; // O(LogN)

console.log(keyPair([1, 2, 3, 7, 5], 6)); // [3, 4]
// {5:0, 4:1, 3:2, 2:1, 1:0}

console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]

console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]
