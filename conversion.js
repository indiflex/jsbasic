const n = 100;
let s1 = n.toString();
let s2 = n + '';

console.log(s1, typeof s1, s2, typeof s2);

const binary = n.toString(2);
console.log(binary, n.toString(8), n.toString(16));
console.log(parseInt(binary, 2), parseFloat('3.2cm'), Number('3.2cm'));

const n1 = Number(s1); // String()
const n2 = new Number(s1); // new String()
console.log(n1, n2, typeof n1, typeof n2);

const x = 5;
console.log(typeof x, typeof !!x, typeof !!undefined); // True, False --> Truthy, Falsy

const d1 = Date();
const d2 = new Date(); // typeof & .valueOf()
console.log(d1, d2, typeof d1, typeof d2);
console.log(d1.valueOf(), d2.valueOf());

console.log('sss' + 2, 'sss' + { id: 1 }); // 병합연산자
const u = { id: 1, name: 'hong' };
console.log(u.toString());

r = x + '30'; // 병합 연산자
q = x * '30'; // 산술 연산자
console.log(r, typeof r, q, typeof q); // ?

const T = true,
	F = false;
let xx = 1;
console.log(T || xx++, F || xx++, xx); // ?
console.log(T && xx++, F && xx++, xx); // ?

function fx(x = 0) {
	// return x * 0.1;
	return (x || 0) * 0.1;
}

let a = 0b1010,
	b = 0b1100; // cf. 8진수(0o), 16진수(0x)
console.log(a & b, a | b, a ^ b, ~b); // 10진수 출력. 2진수로 출력하세요.

console.log((a & b).toString(2));

console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

console.log(Math.round(0.234, 2), (0.234).toFixed(2));

const f = -2.345;
console.log(Math.trunc(f), Math.floor(f), f.toFixed(1));

console.log(
	0.1 + 0.2,
	0.1 + 0.2 === 0.3,
	Math.abs(0.1 + 0.2) - 0.3 < Number.EPSILON
);

console.log(2.4 % 1, 2.4 % 1 === 0.4, parseFloat(2.2e-16), 0.1 * 0.2);
console.log(0.21354 + 0.1);
console.log('---------------------------- ');

function addFloat(a, b, len) {
	const po = Math.pow(10, len);
	const t = a * po; // 정수화
	const q = b * po;
	// return (t - (t - parseInt(t)) + q - (q - parseInt(q))) / po;
	return (Math.trunc(t) + Math.trunc(q)) / po;
} // 0.1 ~ 999999.99999

console.log(addFloat(0.14, 0.28, 3));

console.log('---------------------------- ');
// for (let i = 0.1; i < 1; i = (i * 10 + 0.1 * 10) / 10) {
for (let i = 0.1; i < 1; i = addFloat(i, 0.1, 2)) {
	// console.log(i, i.toFixed(1));
	console.log(i);
}

console.log('---------------------------- ');
console.log(0.14 * 100, (0.14 * 100 + 0.28 * 100) / 100);

console.log('---------------------------- ');

function toValidFloat(a, b, length) {
	const po = Math.pow(10, length);
	console.log(f, po);
	return (a * po + b * po) / po;
}
// console.log(toValidFloat(0.234, 3));
console.log(0.21354 + 0.1, toValidFloat(0.21354, 0.1, 5));
const P5 = 100000;
console.log(0.21354 + 0.1, (0.21354 * P5 + 0.1 * P5) / P5);

const bi = 12120000n;

const user = { id: 1, name: 'hong', age: 29 }; // object
// let { id, name: nm, addr } = user; // id = 1, name = 'hong', addr = undefined, age = ?
// console.log(id, nm, addr);

let id, age;
({ id, age } = user); // Error!  ⇒⇒⇒ ({id, name} = u);  // OK!
console.log(id, age);

let xxx = 1,
	yyy = 2;
let tmp = xxx;
xxx = yyy;
yyy = tmp;
console.log(xxx, yyy);

[xxx, yyy] = [yyy, xxx];
console.log(xxx, yyy);

console.log('name' in user, user);
delete user.name;
console.log('name' in user, user);

for (let prop in u) console.log(prop); // key property
console.log(user.hasOwnProperty('age'));

const arr = [1, 2, 3];
for (let a of arr) console.log(a); // iterable only
