const kim = {
	nid: 3,
	arr: [1, 2, 3, { aid: 1 }, [10, 20]],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
	fn() {
		console.log('fn=', this.nid);
	},
};

const copyArrayOrObject = arrobj => {
	const copyObj = Array.isArray(arrobj) ? [] : {};
	for (let k in arrobj) {
		const tmpObj = arrobj[k];
		console.log(k, tmpObj, typeof tmpObj);
		if (typeof tmpObj === 'object') copyObj[k] = copyArrayOrObject(tmpObj);
		else copyObj[k] = arrobj[k];
	}

	return copyObj;
};

const newKim = copyArrayOrObject(kim);
newKim.oo.name = 'Kim';
newKim.arr[4][1] = 300;
console.log(kim, newKim);
kim.fn();
newKim.fn = () => {
	console.log('fn22=', newKim.nid * 10);
};
newKim.fn();

const kims = [kim, newKim];
const newKims = copyArrayOrObject(kims);
newKims[0]['arr'][1] = 2000;
console.log(kims, newKims);
console.log(JSON.stringify(kims));
console.log(JSON.stringify(newKims));
