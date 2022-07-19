const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const getNextWeek = (() => {
	let widx = -1;
	return () => {
		widx += 1; // side-effect!
		if (widx >= weeks.length) widx = 0;
		return weeks[widx];
	};
})();

let cnt = 0;
const intl = setInterval(() => {
	// widx += 2; // side-effect!
	const w = getNextWeek();
	console.log('call', cnt, w);
	if ((cnt += 1) === 8) clearInterval(intl);
}, 200);
