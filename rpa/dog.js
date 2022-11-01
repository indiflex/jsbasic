function Dog(nm) {
	this.name = nm;
}

const lucy = new Dog('Lucy');
const maxx = new Dog('Maxx');

console.log(lucy, lucy instanceof Dog);
console.log(maxx);

function hello() {
	return 'Hello, World!';
}

const fn = hello,
	obj = { fn: hello },
	a = [hello];
console.log(fn);
console.log(obj);
console.log(a);

(function helloWorld() {
	console.log('Hello, World!');
})();
