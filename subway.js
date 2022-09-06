import { LINE2 } from './localdata.js';
class Subway {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	// LINE2.slice(startIdx, endIdx)
	[Symbol.iterator]() {
		let idx = LINE2.indexOf(this.start) - 1;
		let done = false;
		return {
			next: () => {
				idx = idx === LINE2.length - 1 ? 0 : idx + 1;
				done = done || LINE2[idx - 1] === this.end;
				// console.log(idx, LINE2[idx], this.end, done);
				return { value: done ? undefined : LINE2[idx], done };
			},
		};
	}
}

const routes = new Subway('문래', '신림');
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway('구로디지털단지', '성수');
console.log('구로디지털단지 ~ 성수', [...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
	const x = it2.next();
	console.log(x);
	if (x.done) break;
}
