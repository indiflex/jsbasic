const q1 = new Date(0).setDate(2) / 1000;
console.log('#1=', q1);

const d2 = new Date(0).setDate(2);
console.log('d2=', d2);
const d5 = new Date(0).setDate(5);
console.log('d5=', d5);
console.log('d5 - d2 =', d5 - d2, (d5 - d2) / 86400000);

const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
const today = new Date();
const dates = [];
for (let i = 0; i < 5; i += 1) {
	const day = rand(1, 31);
	dates.push(new Date(today.getFullYear(), today.getMonth(), day));
}

console.log(dates.sort((a, b) => b - a));

const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() + 1);
console.log(today, nextYear, nextYear.getDay());

const WD = '일월화수목금토';
console.log(`${WD[nextYear.getDay()]}요일`);

const after100days = today.setDate(100 + today.getDate());
console.log(new Date(after100days));
