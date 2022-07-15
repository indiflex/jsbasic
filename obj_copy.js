const kim = { nid: 3, nm: 'Hong', addr: 'Pusan' };
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr, kim, newKim); // true면 통과!

function copyObject(obj) {
	const copyObj = {};
	for (let k in obj) {
		// console.log(k, obj[k]);
		copyObj[k] = obj[k];
	}

	return copyObj;
}

function copyObject3(obj) {
	// const str = JSON.stringify(obj, null, '  ');
	const str = JSON.stringify(obj);
	console.log(str);
	const arr = str.replace(/\{|\}/g, '').split(',');
	const copyObj = {};
	for (let x of arr) {
		const tmpArr = x.split(':');
		console.log(tmpArr, tmpArr[0].replace(/"/g, ''));
		tmpArr[0] = tmpArr[0].replace(/"/g, '');
		tmpArr[1] = tmpArr[1].includes('"')
			? tmpArr[1].replace(/"/g, '')
			: Number(tmpArr[1]);
		copyObj[tmpArr[0]] = tmpArr[1];
	}

	return copyObj;
}

function copyObject3(obj) {
	const str = JSON.stringify(obj);
	// console.log('str=', str);
	// const arr = str.replace('{', '').replace('}', '').split(',');
	const arr = str.replace(/\{|\}/g, '').split(',');
	console.log(arr);
	const entries = [];
	for (let x of arr) {
		// console.log(x.split(':'));
		const tmpArr = x.split(':');
		console.log(tmpArr, tmpArr[0].replace(/"/g, ''));
		tmpArr[0] = tmpArr[0].replace(/"/g, '');
		tmpArr[1] = tmpArr[1].includes('"')
			? tmpArr[1].replace(/"/g, '')
			: Number(tmpArr[1]);
		entries.push(tmpArr);
	}
	console.log('entries=', entries);
	console.log('----------------------');
	// console.log(Object.fromEntries(entries));
	return Object.fromEntries(entries);
}
