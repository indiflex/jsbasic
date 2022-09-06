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

export { copyArrayOrObject as deepCopy };
