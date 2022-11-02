const declareFn = function (name, age) {
	// this: { n: 'JC' , name: 'XXX', age: undefined}
	// this.name = name;
	// this.age = age;
	console.log(this, this.name);
	console.log(new.target, typeof new.target);
	console.log(new.target ? 'call by new' : 'just call');
	// console.log(this.name, name);
};

// const arrowFn = (name) => {
//   this.name = name;
//   console.log(this, new.target, this.name, name);
// }

const obj = { name: 'JC', age: 30, profileimg: '' };
const jc = declareFn.apply(obj);
const objK = { name: 'KIM', age: 20 };
const jcK = declareFn.call(objK);
// const jc = declareFn.apply(obj, ['XXX', 30]);
// const jc = declareFn.bind(obj);
console.log('jc>>>', jc);
// arrowFn('afn');
console.log('-------------------------');
// const dfn = new declareFn('D', 30);
// console.log('dfn=', dfn);
// const afn = new arrowFn('A');
