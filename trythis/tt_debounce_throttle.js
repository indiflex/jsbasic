import { debounce, throttle } from '../utils/timer-utils.js';
import { rand } from '../utils/math-utils.js';

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
