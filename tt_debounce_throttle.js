const rand = (s, e) => {
	const r = s + Math.floor((e - s + 1) * Math.random());
	console.log(s, e, '==>', r);
};

const debounce = (cb, delay) => {
	let timer;
	return (...args) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(cb, delay, ...args);
	};
};

const throttle = (cb, delay) => {
	let timer;
	return (...args) => {
		if (timer) return;
		timer = setTimeout(() => {
			cb(...args);
			timer = null;
		}, delay);
	};
};

for (let i = 0; i < 20; i += 1) rand(1, 10);

const dbnc = debounce(rand, 1000);
const thrttle = throttle(rand, 1000);

let cnt = 0;
const intl = setInterval(() => {
	cnt += 1;
	console.log(cnt);
	dbnc(1, 10);
	thrttle(1, 10);
	if (cnt === 20) clearInterval(intl);
}, 100);
