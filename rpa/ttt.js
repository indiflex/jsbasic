const copyArrayAndObject = function (obj) {
	let newObj; //obj가 배열일시 배열로 초기화
	if (Array.isArray(obj)) {
		//console.log("array!");
		newObj = [];
	} //배열이아닐시 object로 초기화
	else {
		//console.log("no array!");
		newObj = {};
	}
	for (const key in obj) {
		if (obj[key] != null && typeof obj[key] === 'object')
			newObj[key] = copyArrayAndObject(obj[key]);
		else newObj[key] = obj[key];
	}
	return newObj;
};

const arr = [1, 2, 3, 4, 5];
const f1 = v => v ** 2;
const f2 = v => Math.sqrt(v);
const f3 = v => v ** 3;
const result = [f1, f2, f3].reduce((pre, f) => pre.map(f), arr);
console.log(result);
