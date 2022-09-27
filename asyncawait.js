import fetch from 'node-fetch';

const afterTime = sec => {
	console.log('afterTime>>', sec);
	if (sec < 1 || sec > 3)
		return Promise.reject(new Error('Not valid sec range!!'));
	return new Promise(resolve => setTimeout(resolve, sec * 1000, `${sec}초`));
};

// try {
// 	const x = afterTime(1);
// 	console.log('x=', await x);
// 	const x2 = afterTime(0.1);
// 	console.log('await>>', await x2);

// 	// console.log(await afterTime(0.1));
// } catch (err) {
// 	console.log('eeeeeeeeeeeeeeeeeeeee>>', err);
// }
const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';

const getUser = async () => {
	const response = await fetch(sampleUrl);
	return response.json(); // await은 과연 필요한가?
};

// const user11 = getUser().then(res => console.log('res>>', res));
// console.log('user111>>>', user11.name);

// const user2 = await getUser();
// console.log('user222>>>', user2.name);

// (async function () {
// (async () => {
// 	console.log('IIFE>>>', (await getUser()).name);
// })();

// console.time('for-await-of');
// const arr = [afterTime(1), afterTime(2)];

// for (const fo of arr.values()) {
// 	console.log('fo=', typeof fo);
// }

// for await (const fao of arr.values()) {
// 	console.log('fao=', fao, typeof fao);
// }

// const arr2 = [afterTime, afterTime];
// let idx = 0;
// for await (const fao of arr2.map(a => afterTime((idx += 1)))) {
// 	// idx += 1;
// 	// console.log('fao=', await fao(idx));
// 	console.log('fao=', await fao);
// }
// console.timeEnd('for-await-of');

// console.time('for-await-of');
// const arr = [afterTime(1), afterTime(2)];

// for (const fo of arr.values()) {
// 	console.log('fo=', typeof fo);
// }

// for await (const fao of arr.values()) {
// 	console.log('fao=', fao, typeof fao);
// }
// console.timeEnd('for-await-of');

const promiseAll = async promises => {
	const results = [];
	let idx = 0;
	for (const fao of promises) {
		results.push(await fao((idx += 1)));
	}
	// for (let i = 0; i < promises.length; i += 1) {
	// 	results[i] = await promises[i](i + 1);
	// }

	// for await (const fao of promises.map(a => afterTime((idx += 1)))) {
	// 	results.push(fao);
	// }

	return results;
};

console.time('async-promiseAll');
const pfns = [afterTime, afterTime, afterTime];
// let idx = 0;
// for await (const fao of arr2.map(a => afterTime((idx += 1)))) {
// 	// idx += 1;
// 	// console.log('fao=', await fao(idx));
// 	console.log('fao=', await fao);
// }
const rets = await promiseAll(pfns);
console.log('rets>>>', rets);
console.timeEnd('async-promiseAll');
