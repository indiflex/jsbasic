import { rand } from './utils/math-utils.js';
console.log(rand(1, 10));
console.log(rand(0, 9));
console.log(rand(100, 200));

const obj = {};
// for (var i = 0; i < 1_000_000_000; i++) {
for (var i = 0; i < 1_000_000; i++) {
	const r = rand(1, 100);
	obj[r] = (obj[r] ?? 0) + 1;
}

// console.log(Object.entries(obj));
const entries = Object.entries(obj);
entries.sort((a, b) => b[1] - a[1]);
console.log(entries, entries[0][1] - entries[99][1]);
