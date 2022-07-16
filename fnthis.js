const obj = {
	name: 'ObjName',
	bark() {
		// good!(호출한 객체)
		console.log('bark=', this.name);
	},
	bark2: () =>
		// bad!!
		console.log('bark2=', this, this.name),
};

obj.bark();
obj.bark2();

const declareFn = function(name) { // 함수 선언식
  // if, 'use strict'?
  this.name = name;
  console.log('declerFn=', this, new.target, this.name, name);
}
const r = declareFn('dfn');
console.log('outer.name=', name);

const arrowFn = (name) => {
  this.name = name;
  console.log('arrowfn=', this, new.target, this.name, name);
}
arrowFn('afn');
console.log('arrow.name=', name); // global name

console.log('typeof r=', r);

const dfn = new declareFn('D');
console.log('typeof dfn=', typeof dfn)
// const afn = arrowFn('A'); // OK?

console.log('---------------------------------')
const Dog = function(name) {
  console.log(name, this, new.target, 
              this instanceof Dog);
  this.name = name;
  this.bark = function () {
  console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);
}

const dog = Dog('Doggy');
// bark(); // ?
// bark2(); // ?

const lucy = new Dog('Lucy');
lucy.bark(); // ?
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy); // ?

const Cat = (name) => { // Object
  this.name = name;
  console.log('CAT>>', this, new.target);
  this.barkCat = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.barkCat2 = () => {
    console.log('bark2=', new.target, this.name, name);
  }

  return this;
}

const cat = Cat('Coco');
console.log('cat=', cat)
// const cat = new Cat(''); // error!!
cat.barkCat(); // ?
cat.barkCat2(); // ? 
console.log('type=', typeof cat); // ? 

// cf. arrow function's this (p.52)
