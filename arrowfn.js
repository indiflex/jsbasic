const obj = {
	name: 'ObjName',
	bark1() {
		console.log('1=', this.name);
		const self = this;
		setTimeout(function () {
			console.log('11=', self.name);
		}, 1000);
		console.log('xxxx');
	},
	bark2() {
		console.log('2=', this.name);
		setTimeout(() => {
			console.log('22=', this.name);
		}, 1000);
	},
};

obj.bark1();
obj.bark2();
