// mods/C.js
import { callDepth, b } from './B.js';

export function c(depth = 0) {
	console.log(`${callDepth(depth)}C-c`);
	b(depth + 1);
}
export default (depth = 0) => {
	console.log(`${callDepth(depth)}C-def`);
};
