const randTime = val => {
	// console.log('vvvvvvvvv>>>', val);
	return new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));
};

const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		const now = Date.now();
		if (now % 2 === 0) resolve(now);
		else reject(new Error('어디로?'));
	}, 1000);
});

p.then(res => {
	console.log('p.then.res11>>>', res);
	return randTime(1);
})
	.then(res => {
		console.log('p.then.res44>>>', res);
		return randTime(2);
	})
	.then(res => {
		console.log('p.then.res22>>>', res);
		return 'FiNALLY';
	})
	.then(console.log('p.then.res33!!!'))
	.then(res => res || 'TTT')
	.catch(err => console.error('err-11>>', err))
	.catch(err => console.error('err-22>>', err))
	.finally(() => console.log('finally-11'))
	.finally(() => console.log('finally-22'));

function Promise(cb) {
	console.log('@@myPromise.createAt>>', new Date());

	const thenFns = [];
	const finalFns = [];

	Promise.prototype.then = tcb => {
		if (typeof tcb === 'function') thenFns.push(tcb);
		return this;
	};

	Promise.prototype.catch = ccb => {
		if (!Promise.prototype.catchFn) Promise.prototype.catchFn = ccb;
		return this;
	};

	Promise.prototype.finally = fcb => {
		if (typeof fcb === 'function') finalFns.push(fcb);
		return this;
	};

	// const final = () => {
	// 	let isNowRunning = false;
	// 	return () => {
	// 		if (isNowRunning || !finalFns.length) return;
	// 		isNowRunning = true;
	// 		const intl = setInterval(() => {
	// 			for (const fn of finalFns) fn();

	// 			clearInterval(intl);
	// 		}, 0);
	// 	};
	// };

	const finalRunner = () => {
		for (const ffn of finalFns) ffn();
	};

	const resolve = succ => {
		console.log('RESOLVE!!', succ);
		// let preRet = succ;
		// const finalRunner = final();

		const recur = preRet => {
			const fn = thenFns.shift();
			if (!fn) {
				this.state = 'resolve';
				return finalRunner();
			}

			if (preRet instanceof Promise) {
				preRet.then(fn).then(res => {
					recur(res);
				});
			} else {
				recur(fn(preRet));
			}
		};

		recur(succ);

		// while (thenFns.length) {
		// 	const fn = thenFns.shift();
		// 	if (preRet instanceof Promise) {
		// 		console.log('fnnnnnn111>>', preRet);
		// 		preRet.then(fn).then(res => {
		// 			console.log('resssssss>>', res);
		// 			preRet = res;
		// 			if (!thenFns.length) {
		// 				this.state = 'resolve';
		// 				finalRunner();
		// 			}
		// 		});
		// 	} else {
		// 		console.log('fnnnnnn222>>', preRet);
		// 		preRet = fn(preRet);
		// 	}
		// }
	};

	const reject = err => {
		console.log('REJECT!!', err);
		this.state = 'reject';
		if (this.catchFn) this.catchFn(err);
		// final()();
		finalRunner();
	};

	cb(resolve, reject);

	if (new.target) this.state = 'pending';
}
