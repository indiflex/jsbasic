function* route() {
	const start = yield '출발 역은?'; // yield가 있으므로 caller에게 제어권 넘김.
	console.log('start=', start);
	const end = yield '도착 역은?';
	return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const it = route();
console.log(it);
console.log(it.next());
console.log(it.next('문래'));
console.log(it.next('신림'));
console.log('---------------------------');
function* gener() {
	const x = yield 1;
	const y = yield x + 10;
	console.log('x y =', x, y);
	return x + y;
}
const it3 = gener();
console.log(it3.next()); // { value: 1, done: false }
console.log(it3.next(3)); // { value: 13, done: false }
// x y = 3 5
console.log(it3.next(5)); // { value: 8, done: true }

console.log('===============================');
function* add() {
	const a = yield '첫 번째 수?';
	const b = yield '두 번째 수?';
	return a + b;
}

const itAdd = add();
console.log(itAdd.next());
console.log(itAdd.next(1));
console.log(itAdd.next(2));
