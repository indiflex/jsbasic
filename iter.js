class Animal {
	id = 1; // member property
	#age = 10; // private member variable

	// instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
	constructor(name) {
		this.name = name || super.name;
	}

	bark() {}

	getAge() {
		// Override the Object's toString()
		return this.#age;
	}

	toString() {
		// Override the Object's toString(), [메소드] 다형성!
		return `This animal's name is ${this.name}.`;
	}
}

class Dog extends Animal {
	constructor(name) {
		// cf. super(...args)
		super(name); // 필수(chaining), 중복(overload) 안됨!
	}

	bark() {
		console.log('bowwow!');
	}
}

class ItDog extends Dog {
	[Symbol.iterator]() {
		return this.name.split(', ').values();
	}
}
const idog = new ItDog('Toby, Max, Sam');
console.log('...=>', [...idog]);
for (const d of idog) console.log(d);
const iter1 = idog[Symbol.iterator]();
console.log('iter1=', iter1.next());

class ItDog2 extends Dog {
	[Symbol.iterator]() {
		let idx = 0;
		const names = this.name.split(/,\s/);
		return {
			next() {
				return { value: names[idx++], done: idx > names.length };
			},
		};
	}
}
console.log('-------------------------');
const idog2 = new ItDog2('Toby, Max, Sam');
for (const d of idog2) console.log(d);
const iter = idog2[Symbol.iterator]();
console.log(iter.next()); // 4회 반복
