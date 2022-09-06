const eqArray = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i += 1) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
};

const assertArray = (arr1, arr2) => {
	if (eqArray(arr1, arr2)) console.log(arr1);
	else console.log(arr1, arr2, '==>', '불통!!');
};

export { assertArray };
