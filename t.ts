class X {
	private a;
	constructor(a) {
		this.a = a;
	}
}

class Y extends X {
	print() {
		console.log('aaa=>', this.a);
	}
}

const y = new Y(12);
console.log(y);
y.print();
