const afterTime = sec => {
	console.log('afterTime>>', sec);
	if (sec < 1 || sec > 3)
		return Promise.reject(new Error('Not valid sec range!!'));
	return new Promise(resolve => setTimeout(resolve, sec * 1000, sec + 10));
};

console.time('async-filter');
// const odds = [1, 2, 3].filter(async val => {
// 	const r = await afterTime(val);
// 	console.log('r>>', r);
// 	return r % 2 === 1;
// });
// console.log('odds=', odds);

// const r1 = [1, 2, 3].map(async a => {
// 	const b = await afterTime(a);
// 	console.log('a>>>', a);
// 	return b;
// }); // bad!!

const r1 = [1, 2, 3].map(afterTime); // OK

console.log('r1>>>>', r1);
const r2 = await Promise.all(r1);
console.log('r2>>>>', r2);
console.log(r2.filter(a => a % 2 === 1));

const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter(
	a => a % 2 === 1
);
console.log('odds=', rrr);
console.timeEnd('async-filter');
