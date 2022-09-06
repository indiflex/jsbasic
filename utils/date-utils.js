const calendar = (year, month) => {
	const dt = new Date(year, month - 1, 1);
	const week = dt.getDay();

	const days = Array(week).fill(0);

	// console.log(inputDate, `${dt.getFullYear()}-${dt.getMonth() + 1}`);
	while (dt.getMonth() === month - 1) {
		// console.log(dt);
		days.push(dt.getDate());
		dt.setDate(dt.getDate() + 1);
	}

	console.log(`${'\t'.repeat(2)}     ${year}-${month}`);
	console.log('');
	console.log(
		'일월화수목금토'
			.split('')
			.map(w => `${w}\t`)
			.join('')
	);

	console.log(
		days
			.map((d, i) => {
				let delim = (i + 1) % 7 === 0 ? '\n' : '\t';
				d = d === 0 ? '' : d < 10 ? ` ${d}` : d;
				return `${d}${delim}`;
			})
			.join('')
	);
};

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

export { calendar, WEEKS };
