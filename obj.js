const user = {
	'': 1, // OK
	' ': 1, // OK
	123: 1, // OK?        cf. user[123] * 10 = ?
	true: 1, // OK?        cf. user[false] = 0
	id: 1, // OK?
	id: 2, // user.id ? 2
	[`name`]: 'Hong', // OK? No     cf. user[`name`] = 'Hong'; // OK
	[Symbol()]: 'Hong', // OK?       cf. s = Symbol(); user[s] = 9; // OK
	'my-friends': ['Han', 'Kim'], // OK?
	'0y': '000', // OK?
	getInfo: () => `${this.id}-${this.name}`, // OK?
	getInfo2() {
		return `${this.id}-${this.name}`;
	}, // OK?
};

console.log(user, user.getInfo(), user.getInfo2());
// console.log(Object.keys(user));
console.log(Reflect.ownKeys(user)); // Symbol
console.log(user?.idd + 1);
user.addr = 'Seoul';
console.log(user?.addr);

console.log('addr' in user, user.hasOwnProperty('addr'));
for (let x in user) console.log(x);

const s = Symbol();
user[s] = 'xxxx';
// console.log(Object.keys(user));
console.log(Reflect.ownKeys(user)); // Symbol
console.log(user[s]);
console.log(Object.getOwnPropertySymbols(user), Reflect.has(user, 'addr'));
// delete user.addr;
const a = 'addr';
delete user[a];
console.log(user.addr);

user[`${user.id}'s name`] = `Mr. ${user.name}`; // user["2's info"]
console.log(Object.keys(user), user["2's name"]);
user.firstName = 'Kildong';
user.lastName = 'Kang';
// user.fullName = `${user.firstName} ${user.lastName}`;
// console.log(user.fullName);
user.fullName = function () {
	return `${this.firstName} ${this.lastName}`;
};
console.log('fn=', user.fullName());
user.fullName2 = () => {
	return `${user.firstName} ${user.lastName}`;
};
console.log('fn2=', user.fullName2());
console.log(Object.keys(user));

let { id, name: nm } = user;
console.log(id, nm);

nm = 'Kim';
const kim = { id, nm, age: 29 };
console.log(kim);

user.addr = 'Pusan';
console.log(Object.getOwnPropertyDescriptor(user, 'addr'));

// user.age = 39; // writable: true
Object.defineProperty(user, 'age', { value: 39, writable: false });
console.log(Object.getOwnPropertyDescriptor(user, 'age'), user.age);

console.log(
	Object.keys(user),
	'\n---------\n',
	Object.values(user),
	'\n---------\n',
	Object.entries(user)
);

for (let x of Object.entries(user)) console.log(`${x[0]}: ${x[1]}`);

const park = Object.fromEntries([
	['id', 7],
	['nm', 'Park'],
]);
console.log(park);

// const newUser1 = Object.assign({ age: 30 }, park);
const newUser1 = { ...park, age: 30 };
// const newUser1 = new Object(park); // ES5
newUser1.id = 5;
console.log(newUser1, park);

Object.freeze(user);
console.log(Object.getOwnPropertyDescriptors(user, 'age'));

user.id = 100;
console.log(user.id);

park.arr = [1, 2, 3];
console.log(park.arr);
Object.freeze(park);
park.arr[1] = 200;
park.arr = ['a', 'b'];
console.log(park.arr);
