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
