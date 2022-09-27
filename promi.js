// function f(fn) {
//   const x = 1;
//   fn(x);
// }

// f(console.log)
// f((res) => console.log(res))

const promiseFn = id =>
	new Promise((resolve, reject) => {
		console.log('id>>', id);
		if (id < 5) resolve(id + 1);
		else reject(new Error('어디로?' + id));
	});

promiseFn(1)
	.then(res => {
		console.log('res1>>', res);
		return promiseFn(res); // 2
	})
	.then(res => {
		console.log('res2>>', res);
		return promiseFn(res); // 3
	})
	.then(promiseFn) // 4
	.then(res => promiseFn(res)) // 5
	.catch(err => console.log('Error11!!>>', err))
	.catch(err => console.log('Error22!!>>', err))
	.finally(res => console.log('finally11>>>>>', res))
	.finally(res => console.log('finally22>>>>>', res));
