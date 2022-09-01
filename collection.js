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
		if (this.constructor.name === 'Queue') return this.#arr[0];
		return this.#arr[this.length - 1];
	}

	get isEmpty() {
		return !this.#arr.length;
	}

	get length() {
		return this.#arr.length;
	}

	get(index) {
		return this.#arr[index];
	}

	contains(value) {
		return this.#arr.includes(value);
	}

	indexOf(value) {
		return this.#arr.indexOf(value);
	}

	_splice(...args) {
		return this.#arr.splice(...args);
	}

	// [Symbol.iterator]() {
	// 	return this.#arr.values();
	// }

	// [Symbol.iterator]() {
	// 	let idx = -1;
	// 	// let done = false;
	// 	return {
	// 		next: () => {
	// 			idx += 1;
	// 			// done = done || ...
	// 			// done ||= idx > this.#arr.length - 1;
	// 			// return { value: this.#arr[idx], done };

	// 			return { value: this.#arr[idx], done: !this.#arr[idx] };
	// 		},
	// 	};
	// }

	*[Symbol.iterator]() {
		for (let idx = 0; idx < this.#arr.length; idx += 1) {
			yield this.#arr[idx];
		}
	}

	iterator() {
		return this[Symbol.iterator]();
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

class ArrayList extends Collection {
	static listToArray(lst) {
		const arr = [];
		let node = lst;
		while (node?.value) {
			console.log(node);
			arr.push(node.value);
			node = node.rest;
		}

		return arr;
	}

	// {value: 1, rest: {value: 2, rest: }}
	static arrayToList(arr) {
		// return arr.reduce((o, a, i) => {
		// 	if (i === 1) {
		// 		return { value: a, rest: { value: arr[0] } };
		// 	}
		// 	return { value: a, rest: o };
		// });

		// return arr.reduce((o, a, i) => ({ value: a, rest: o }), undefined);

		let node;
		for (let i = arr.length - 1; i >= 0; i -= 1) {
			node = { value: arr[i], rest: node };
		}
		return node;

		// console.log('xx>>', arr, arr.slice(1));
		// return (function _al(i = 0) {
		// 	if (i === arr.length) return;
		// 	return {
		// 		value: arr[i],
		// 		rest: _al(i + 1),
		// 	};
		// })();
	}

	constructor(lstOrArr) {
		super(Array.isArray(lstOrArr) ? lstOrArr : ArrayList.listToArray(lstOrArr));
	}

	add(value, index) {
		if (index >= 0) super._splice(index, 0, value);
		else this.push(value);
	}

	removeByIndex(index) {
		super._splice(index, 1);
	}

	remove(value) {
		this.removeByIndex(super.indexOf(value));
	}

	set(index, value) {
		super._splice(index, 0, value);
	}

	size() {
		return this.length;
	}
}

const alist = new ArrayList({ value: 1, rest: { value: 2 } }); // new ArrayList([1,2]);
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.print();
// alist.remove(2);
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.print();
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.print();
console.log('get2=', alist.get(2));
console.log('size()=', alist.size()); // 22, 4
console.log('indexOf(300)=', alist.indexOf(300)); // 1
console.log('contains(300)=', alist.contains(300)); // 1
console.log('contains(301)=', alist.contains(301)); // 1
console.log('isEmpty=', alist.isEmpty);
console.log('peek=', alist.peek); // false, 3
console.log('toArray=', alist.toArray()); // [1, 300, 22, 3]
const lst = ArrayList.arrayToList(alist.toArray());
console.log('toList>>', JSON.stringify(lst, null, '    '));
console.log(alist.iterator().next()); // { value: 1, done: false }
alist.clear(); // all clear
alist.print();

return;
const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log('spop>>>', stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.push(3);
const queue = new Queue([11, 22]);
queue.enqueue(33); // 추가하기
console.log('deq>>', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.enqueue(44);
stack.print();
queue.print();

console.log('===============================');
console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());

const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
