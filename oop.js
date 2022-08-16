const obj = { id: 1, name: 'Hong' };
Object.prototype.name = 'Obj';
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

const animal = new Animal();
const dog = new Animal('Dog');
console.log('ani,dog name=', animal.name, dog.name);
// console.log('ok=', Object.keys(obj));
// console.log('ak=', Object.keys(dog));
// for (let k in dog) console.log(k);
// console.log('oh=', obj.hasOwnProperty('id'));
// console.log('dh=', dog.hasOwnProperty('id'));
console.log(animal instanceof Object);
console.log(typeof Animal);
console.log({} instanceof Object);

class Dog extends Animal {
	constructor(name) {
		// cf. super(...args)
		super(name); // 필수(chaining), 중복(overload) 안됨!
	}

	bark() {
		console.log('bowwow!');
	}
}
const jake = new Dog('Jake');
jake.bark(); // bowwow!
dog.bark(); // TypeError: dog.bark is not a function
console.log(jake.name); // super()면 Obj, super(name)이면 Jake

Dog.prototype.name = 'DOG';
console.log('jakeName=', jake.name); // ?
Dog.prototype.age = 1;
console.log(jake.age); // 1

class Pet {
	feed(nutrient) {
		console.log(`feed to ${this.name} :`, nutrient);
	}
}

console.log('aaaaaaaaa>>', Pet.feed);
// jake.feed = Pet.prototype.feed;
jake.__proto__ = Pet.prototype;
jake.feed('dog-food'); // How?

const petMixin = {
	likesPeople() {
		console.log(`${this.name} likes people!`);
	},
};

Object.assign(jake, petMixin); // jake만!
Object.assign(Dog.prototype, petMixin);
