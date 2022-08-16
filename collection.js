class Collection {
	#arr;
	constructor(...args) {
		// console.log(args, [...args], ...args);
		this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
		// console.log(this.#arr);
	}

	push(val) {
		this.#arr.push(val);
	}

	pop() {
		return this.#arr.pop();
	}

	shift() {
		return this.#arr.shift();
	}

	clear() {
		this.#arr.length = 0;
	}

	get peek() {
		if (this.constructor.name === 'Stack') return this.#arr[this.length - 1];
		return this.#arr[0];
	}

	get isEmpty() {
		return !this.#arr.length;
	}

	get length() {
		return this.#arr.length;
	}

	toArray() {
		return [...this.#arr];
	}

	print(cb) {
		if (cb) {
			cb([...this.#arr].reverse());
			return;
		}
		console.log('coll>>', this.#arr);
	}
}

class Stack extends Collection {
	print() {
		super.print(arr => console.log('STACK>>\n', arr.join('\n ')));
	}
}

class Queue extends Collection {
	enqueue(val) {
		super.push(val);
	}

	dequeue() {
		return super.shift();
	}

	print() {
		super.print(arr => console.log('QUEUE>> ->', arr.join(' -> '), '->'));
	}
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log('spop>>>', stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.push(3);
const queue = new Queue([11, 22]);
queue.enqueue(33); // 추가하기
console.log('deq>>', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.enqueue(44);
// console.log('speek=', stack.peek);
// console.log('qpeek=', queue.peek);
stack.print();
queue.print();
