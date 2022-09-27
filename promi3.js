const randTime = val =>
	new Promise(resolve => {
		const delay = Math.random() * 1000;
		console.log('randTime>>', val, delay);
		// setTimeout(() => resolve(val), delay);
		setTimeout(resolve, delay, val);
	});

const vals = [1, 2, 3, 4, 5];
// vals.forEach(a => randTime(a).then(console.log));

// Promise.all(vals.map(randTime)).then(console.table);

// Promise.all([randTime(1), Promise.reject('Error!'), randTime(2)])
// 	.then(console.table)
// 	.catch(console.error);

// Promise.race(vals.map(randTime)).then(console.table);

Promise.allSettled([randTime(1), Promise.reject('Error!'), randTime(2)])
	.then(console.table)
	.catch(console.error);
