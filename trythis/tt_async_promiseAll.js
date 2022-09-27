const afterTime = sec => {
	console.log('afterTime>>', sec);
	if (sec < 1 || sec > 3)
		return Promise.reject(new Error('Not valid sec range!!'));
	return new Promise(resolve => setTimeout(resolve, sec * 1000, `${sec}초`));
};

const promiseAll2 = async promises => {
	const results = [];
	for (let i = 0; i < promises.length; i += 1) {
		results[i] = await promises[i](i + 1);
	}
	return results;
};

const promiseAll = async promises => {
	const results = [];
	const rs = promises.map((p, i) => p(i + 1));
	// console.log('rs>>', rs);
	for await (const r of rs) {
		results.push(r);
	}
	return results;
};

console.time('async-promiseAll');
const pfns = [afterTime, afterTime, afterTime];
const rets = await promiseAll(pfns);
// const rets = [];
// for await (const r of promiseAll(pfns)) rets.push(r);
console.log('rets>>>', rets);
console.timeEnd('async-promiseAll');
