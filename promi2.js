// 결정되지 않은 프로미스 방지하기
const promi = new Promise((resolve, reject) => {
	setTimeout(() => resolve('OK'), 2000);

	setTimeout(() => {
		reject(new Error('Timeout!'));
		// 또는 resolve('skip!');
	}, 3000);
});

promi.then(console.table).catch(console.error);

const promiseFn = (id = 1) =>
	new Promise((resolve, reject) => {
		console.log('id>>', id);
		if (id < 7) resolve(id + 1);
		else reject(new Error('어디로?' + id));
	});

promiseFn() // 1
	.then(res => {
		console.log('res1>>', res); // 2
		promiseFn(res); // 2
	})
	.then(res => {
		console.log('res2>>', res); // un
		promiseFn(res ?? 3); // 3
	})
	.then(promiseFn) // 4 <-- res => promiseFn(res)
	.then(res => {
		console.log('res3>>', res); // 5
		return promiseFn(res); // 5
	})
	.then(promiseFn(4)) // 4 ← fist then callback
	.then(res => promiseFn(res)) // 6
	.catch(err => console.log('Error!!>>', err));
