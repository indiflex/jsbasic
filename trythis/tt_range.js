import { range, assertEqual as assertArray } from '../utils/array-utils.js';

assertArray(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArray(range(1, 10, 2), [1, 3, 5, 7, 9]);

assertArray(range(5, 5), [5]);
assertArray(range(5, 5, 1), [5]);
assertArray(range(0, 0), [0]);
assertArray(range(0), [0]);
assertArray(range(0, 0, 5), [0]);
assertArray(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArray(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
assertArray(range(10, 1, -2), [10, 8, 6, 4, 2]);
assertArray(range(10, 1, -3), [10, 7, 4, 1]);
assertArray(range(5), [1, 2, 3, 4, 5]);
assertArray(
	range(100),
	Array.from({ length: 100 }, (_, i) => i + 1)
);
assertArray(range(-5), [-5, -4, -3, -2, -1]);
assertArray(range(5, 5, 0), [5]);
assertArray(range(5, 5, -1), [5]);
assertArray(range(5, 1, 1), []);
assertArray(range(1, 5, -1), []);
assertArray(range(1, 5, 6), [1]);
assertArray(range(2, 1, -5), [2]);
assertArray(range(0, -1, -5), [0]);
assertArray(range(0, -1, 0), [0]);
assertArray(range(0, 5), [0, 1, 2, 3, 4, 5]);
// return;
assertArray(range(0, -1), [0, -1]);
assertArray(range(0, -3), [0, -1, -2, -3]);
assertArray(range(-3, 0), [-3, -2, -1, 0]);

console.log('The End!!!!!!!');
