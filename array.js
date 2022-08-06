const a = [1, 2, 5, 3],
	obj = {};
// for (const [key, value] of Object.entries(a)) obj[key] = value;
// Array.prototype.push.apply(obj, a);
Array.prototype.push.call(obj, ...a);

console.log(a.sort());
console.log(a);
console.log(obj);
console.log(a, a.length);
a.length = 3;
console.log(a, a.length, a[1]);
a.map(_a => console.log(_a));
// console.log('abc'.indexOf('b'));

const a2 = [1, 'abc', { id: 1, name: 'Hong' }];
console.log(a2); // a2[1] a2[2]: & 2200

console.dir(a2.toString());
const a3 = Array(3); //new Array(3) ⇔
const a4 = [, , ,];
console.log(a3);
console.log(a4);

const ar2 = Array(5).fill(1);
console.log('11=', ar2);
ar2.fill('X');
console.log("ar2.fill('X')=", ar2);
ar2.fill('Y', 1);
console.log("ar2.fill('Y', 1)=", ar2);

ar2.fill('Z', 2, 4);
console.log("ar2.fill('Z', 2, 4)=", ar2);

ar2.fill(0, -4, -1);
console.log('ar2.fill(0, -4, -1)=', ar2);

console.log('----------------------------------------');
const arr = [1, 2, 3];
const ar3 = Array.from(arr);
const ar444 = [...arr];
ar3[2] = 33;
ar444[2] = 333333;
console.log(arr, ar3, ar444);

const ar4 = Array.from([...arr, 4, 5]);
ar444.push(4);
ar444.push(5);
console.log(ar4, ar444);

const ar44 = Array.from({ length: 5 }, (_, i) => {
	console.log(i, '=', _);
	return i + 1;
});
console.log(ar44, ar44.keys());

console.log('[...Array(5)]=', [...Array(5)]);
const ar55 = [...Array(5)].map((a, i) => {
	console.log(i, '=>', a);
	return i + 1;
});
console.log(ar55);
console.log(ar55.push(10), ar55);
console.log(ar55.pop(), ar55);
console.log(ar55);
console.log(ar55.unshift(99), ar55);
console.log(ar55.shift(), ar55);

const queue = [];
queue.unshift(1); // q = [1, ...queue]
console.log('11=', queue);
queue.unshift(2, 3); // [2,3, ...queue]
console.log('22=', queue);
const curr = queue.pop();
console.log(curr, queue);
console.log(queue.shift());
console.log(queue);
