let i = 0;
{
	let j = 'sdfsadfdsafd';
	console.log('dffdfdf');
}

console.log(i);

function f() {
	let i = 1;
	{
		let i = 2;
		console.log(i);
	}
	console.log(i);
}

f();

console.log('----------------');

var gg = 1;
let bb = 2;
function f1() {
	var gg = 11;
	let bb = 22;
	console.log('f1>', gg, bb); // gg, bb? 11, 22
	f2(); // callable? Yes (: 함수도 hoisting)
}

function f2() {
	console.log('f2>', gg, bb); // ? 1, 2
}

f1();

console.log('----------------');
function varFn() {
	var v = 1;
	{
		var v = 2;
		var vv = 3;
		console.log(v, vv);
	}
	console.log(v, vv); // 2, 3
}

varFn();

function letFn() {
	let l = 1;
	{
		let l = 2;
		let ll = 3;
		console.log(l, ll); // 2, 3
	}
	console.log(l); // 1
}
letFn();

const obj = null;
console.log('obj.id=', obj?.id);

const x = '';
// const x = null;
// const cmt = x || 'bb';
const cmt = x ?? 'bb';
console.log('comment=', cmt);
