import { assertArray } from '../utils/test-utils.js';

const vals = [1, 2, 3];
const randTime = val => {
	const delay = 2; // Math.random();
	console.log('delay>>', delay);
	return new Promise(resolve => setTimeout(resolve, delay * 1000, val));
};

const promiseAll = promises => {
	if (!promises?.length) return Promise.reject('No promises!!');
	return new Promise((resolve, reject) => {
		const results = [];
		let pending = promises.length;
		console.time('AAAA');
		for (let i = 0; i < promises.length; i += 1) {
			promises[i](i + 1)
				.then(res => {
					results[i] = res;
					pending -= 1;

					// console.log('currentResults>>', results);
					if (!pending) {
						console.timeEnd('AAAA');
						resolve(results);
					}
				})
				.catch(reject);
		}
		// console.timeEnd('AAAA');
	});
};

const promiseAll2 = async promises => {
	const results = [];
	console.time('AAAA');
	for (const promi of promises) {
		results.push(await promi(1));
	}
	console.timeEnd('AAAA');
	return results;
};

const promiseAll3 = async promises => {
	const results = [];
	const m = promises.map(async promi => {
		const a = await promi;
		console.log('a>>', a);
		results.push(a);
		return a;
	});
	const xxx = await Promise.all(m);
	console.log('resuxlts>>', results, xxx);
	// const intl = setInterval(() => {
	// 	console.log('xx', results.length);
	// 	if (results.length === promises.length) clearInterval(intl);
	// }, 0);

	// while (true) {
	// 	console.log('xx', results.length);
	// }
	return xxx;
};

const promiseAll4 = async promises => await Promise.all(promises);

// const promiseAll4 = async promises => {
// 	const results = [];
// 	const aa = promises.map(async promi => {
// 		const a = await promi;
// 		// console.log('a>>', a);
// 		return a;
// 	});
// 	console.log('aa>>', aa);
// 	return [...aa];
// };

// promiseAll([randTime(1), randTime(2), randTime(3)])
// promiseAll2([randTime, randTime, randTime])
// promiseAll2([randTime, randTime, randTime])
promiseAll4([randTime(1), randTime(2), randTime(3)])
	// promiseAll([])
	.then(arr => {
		console.log('then!!!!!!!!!!!!!!');
		console.table(arr);
		assertArray(arr, vals);
	})
	.catch(err => console.error('ERROR~!>>', err));

// promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
// 	.then(array => {
// 		console.log('여긴 과연 호출될까?!');
// 	})
// 	.catch(error => {
// 		console.log('reject!!!!!!>>', error);
// 	});
