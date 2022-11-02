const f1 = (f, val) => f(val); //
f1(console.log, 'this is val');

console.log('this is val');
// function ff(v) { return v * 10 }
const ff = v => v * 10;
console.log(f1(ff, 5));

f1(v => console.log('v is', v), 'VVV');

// f(val)
console.log('v is', 'VVV');

const f2 =
	f =>
	(...args) =>
		console.log(f.name, f(...args));

f2(Math.max)(1, 3, 2, 5, 4);
console.log(Math.max(1, 3, 2, 5, 4));
