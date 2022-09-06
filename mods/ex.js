console.log('This is ex top layer!!');
// export const A = 100;
const A = 100;
let B = 0;
const f = () => console.log('This is ex.f()!~!');

const C = {
	user: {
		id: 1,
		name: 'Hong',
	},
};

export default 10 * 100;
export { A as AA, B, f, C };

/* Module Map 
ex.js - A : 100
ex.js - B : 0
ex.js - C : 0
ex.js - *default* : 10
*/

// module.exports = {
// 	f: () => console.log('ex.CJS.default.function!!'),
// 	A: 100,
// 	B: 0,
// 	C: {
// 		id: 1,
// 		name: 'Hong',
// 	},
// };
