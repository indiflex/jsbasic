const inputDate = '2022-09';
const dt = new Date(`${inputDate}-01`);
const month = Number(inputDate.substring(5));
const week = dt.getDay();

// console.log(dt, month, week);

const days = Array(week).fill(0);

// console.log(inputDate, `${dt.getFullYear()}-${dt.getMonth() + 1}`);
while (dt.getMonth() === month - 1) {
	// console.log(dt);
	days.push(dt.getDate());
	dt.setDate(dt.getDate() + 1);
}

console.log(`${'\t'.repeat(2)}     ${inputDate}`);
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
