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

export { debounce, throttle };
