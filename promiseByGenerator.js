const afterTime = sec => {
	if (sec < 1 || sec > 3)
		return Promise.reject(new Error('Not valid sec range!!'));
	return new Promise(resolve => setTimeout(resolve, sec * 1000, `${sec}초`));
};

// afterTime(1)
// 	.then(res => console.log('res>>>>>', res))
// 	.catch(console.error);

function* pAfterTime(sec) {
	return yield afterTime(sec);
}
// const pa = pAfterTime(1);

// const n1 = pa.next();
// console.log('n1>>>', n1);
// n1.value
// 	.then(res => {
// 		console.log('res>>>>>', res);
// 		const n2 = pa.next(res);
// 		console.log('n2>>>', n2);
// 	})
// 	.catch(console.error);

import fetch from 'node-fetch';
const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';

// fetch(sampleUrl)
// 	.then(res => res.json())
// 	.then(user => console.log(user.name));

function* genFetch(url) {
	const res = yield fetch(url);
	const user = yield res.json();
	return user.name;
}

// const g = genFetch(sampleUrl);
// console.log('g>>>', g);
// const nextResult = g.next();
// console.log('nextResult>>', nextResult);
// nextResult.value.then(res => {
// 	console.log('res>>>', res);
// 	const nr2 = g.next(res);
// 	console.log('nr2>>', nr2);
// 	nr2.value.then(res2 => {
// 		console.log('res2>>', res2);
// 		const user = g.next(res2);
// 		console.log('userName>>>', user.value);
// 	});
// });

function* genFetch2(url, fromFn) {
	const res = yield fetch(url);
	const user = yield res.json();
	return console.log(fromFn, '>>>>', user.name);
}

import co from 'co';
co(genFetch2, 'https://jsonplaceholder.typicode.com/users/2', 'co');
