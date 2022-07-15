function hello() {
	return 'Hello, World!';
}
console.log(hello());

function printFnReturnValue(fn) {
	console.log(fn.name, fn());
}
console.log(printFnReturnValue(hello));

function f(n) {
	// if (n.hasOwnProperty('id')) n.id += 1;
	if (typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
	else n += 1; // 10 -> 11
}

let n = 10;
let nobj = { id: 10 };
f(n); // typeof number, 순수함수
f(nobj); // mem-address 전달, typeof object, 비 순수 함수
console.log(n, nobj);

const user = { id: 1, name: 'Hong' };
function fd1(id, name) {
	console.log(`Id is ${id}, Name is ${name}`);
}

// let {id, name} = user;
function fd2({ name, id }) {
	console.log(`Id is ${id}, Name is ${name}`);
}

// let [id, name] = arr;
function fd3([id, name]) {
	console.log(`Id is ${id}, Name is ${name}`);
}

fd1(user.id, user.name);
fd2(user);
const arr = [2, 'Kim'];
fd3(arr);

// function f(a) {
// 	return a + 100;
// }

function f(a, b = 100) {
	return a + b; // 10 + +''
}

function f22(a, b) {
	return a + (b || 100);
}

console.log('f=', f(10, 20), f(10, 0), f22(10, ''));

console.log('--------------------------');
const f1 = function ff(isLast = false) {
	console.log('f1');
	if (!isLast) ff(true);
};
const f2 = function () {
	console.log('f2');
};

f1();
// ff();
f2();
console.log('--------------------------');

(function () {
	console.log('xxx');
})();

const counter = (function () {
	let curr = 0;
	return {
		inc(n = 1) {
			curr += n;
		},
		dec(n = 1) {
			curr -= n;
		},
		getCurr() {
			return curr;
		},
	};
})();

console.log('Curr=', counter.getCurr());
counter.inc();
console.log('Curr=', counter.getCurr());

counter.inc(100);
console.log('Curr=', counter.getCurr()); // 101
counter.dec(50);
console.log('Curr=', counter.getCurr()); // 51

const f3 = (n, m) => {
	return n * m;
};

const f4 = (n, m) => n * m;

console.log(f3(100, 10));

console.log(f4(100, 10));

console.log('------------------------');

const obj = {
	name: 'ObjName',
	bark1() {
		console.log('obj.bark=', this.name);
	},
	bark2: () => console.log('obj.bark2=', obj.name),
};

obj.bark1();
obj.bark2();

class cls {
	constructor(name) {
		this.name = name;
	}

	bark() {
		console.log('bark=', this.name);
	}
}

const c = new cls('Kim');
console.log(cls.__prototype__);
console.log(Object.getPrototypeOf(c));
c.bark();

let tot = 0;
for (let i = 1; i <= 100; i += 1) {
	tot += i;
}
console.log(tot);

// 1 + 2 + 3 ... + 100
// 100 + 99 + ... + 1
const sum1 = n => {
	console.log(n);
	if (n === 1) return n;
	return n + sum1(n - 1);
};
//  sum1(100)     100
//                     + sum1(100 - 1)
//                                      + sum1(99 - 1)
//                                                  ......
//                                                       + 1

console.log(sum1(100));

console.log(sum2(1, 100));
