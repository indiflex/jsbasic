import { deepCopy as deepCopyObject } from './utils/utils.js';
const kim = {
	nid: 3,
	addr: 'Pusan',
	arr: [1, 2, 3, { aid: 1 }, [10, 20, [30, 40]]],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
	fn() {
		console.log('fn=', this.nid);
	},
};

const copyArray = a => {
	const rets = [];
	for (let t of a) {
		// console.log(t, typeof t);
		if (Array.isArray(t)) rets.push(copyArray(t));
		else if (typeof t === 'object') rets.push(deepCopyObject(t));
		else rets.push(t);
	}

	return rets;
};

// const arr = [10, 20, [30, 40]];
// const arr2 = copyArray(arr);
// arr2[2][0] = 1000;
// console.log('rrr>>', arr, arr2);
// return;

const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.addr.city = 'Pusan';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
// console.log(kim.addr !== newKim.addr, kim, newKim); // true면 통과!

console.log(JSON.stringify(newKim, null, ''));

// const kim2 = [
// 	{ id: 1, n: 'Hong' },
// 	{ id: 2, n: 'Kim' },
// ];
// console.log('--------------');
// console.log(kim2, copyArray(kim2));

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
