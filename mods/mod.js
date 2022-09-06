// import { AA, B } from './ex.js';
// import { A } from './mod1.js';
// import defx, { C } from './ex.js';

import defx from './ex.js';
import { A, B, C, AA } from './aggr.js';

console.log('mod.mjs');

// ESM
console.log('ex.A=', AA);
console.log('ex.B=', B);
// B = 1;

console.log('mod1.A>>', A);

// import * as exex from './ex.js';
// console.log('BBB=', Object.getOwnPropertyDescriptors(exex));
console.log('-------------');
// const { id, name } = C.user;
const {
	user: { id, name },
} = C;
console.log(C, id, name);

const fff = ({ user: { id, name } }) => console.log('UU>', id, name);
fff(C);

console.log(defx);

// const obj = {
// 	user: {
// 		id: 1,
// 		name: 'Hong',
// 	},
// 	x: 100,
// };
// const {
// 	user: { id, name },
// 	x: xx,
// } = obj;
// console.log(id, name, xx);

// CJS
// const exxx = require('./ex.js')
// const {
// 	f,
// 	A,
// 	C: { id, name },
// } = require('./ex.js');
// // ex.f();
// f();
// console.log(C);
// console.log(id, name);
