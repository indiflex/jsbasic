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

export { Stack, Queue, ArrayList };
