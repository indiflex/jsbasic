console.log('Hello World!!!!!');

var a = 1;
var b = a + 10;

let s = 'xxxxx'; // &100
let S = new String('xxxxx'); // &200 - &300 -
let N = Number(200);

s = 'yyyyy'; // &101
S = { id: 5, name: 'Hong' }; // &200 - &302
N = Number(300);

s1 = new String('xx');
s2 = 'xx';
console.log(s1 == s2, s1 === s2, typeof s1, typeof s2, NaN === NaN, isNaN(NaN));

console.log(s, S);

let a2 = 5;

class _Dog {}

const d = new _Dog();

// const $btn = document.getElementById('#btn1');
const f1 = function () {
	console.log('this is f1');
};

var j = { id: 2, f: function () {} };

function f() {}

const x = `My name is ${S}`;
console.log(x);

const sy1 = Symbol('sy');
const sy2 = Symbol('sy');
console.log(sy1, sy1 === sy2, sy1.description === sy2.description);

const b1 = 1;
const b2 = Boolean(1);
console.log(b1, b2, !b1, !!b1, !b2);

var x5;
console.log(x5);

let u = 'hong'; // primitive
u.age = 30; // error? No! (: 오브젝트 강제형변환)
console.log(u.age, typeof u); // ?

u = 7;
console.log(u); // ?

let i;
console.log(i);
// let i = 1; // error! why?

var x7;
console.log(x7);
x7 = 1;
// var x7 = 1; // no error! why?

console.log(x11); // (가)
console.log(y11); // (나)
// var x11 = y11 = 10 * 20;
var x11 = 11;
var y11 = 12;
console.log(x11, y11);

console.log(x21);
x21 = 1;
y21 = 2;
