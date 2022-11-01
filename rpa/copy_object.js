function copyObject(obj) {
	const ret = {};
	console.log('keys=', Object.keys(obj)); // ['nid', 'nm', ...]
	// for (let i = 0; i < 10; i++)
	for (const k in obj) {
		// in obj <==> Object.keys(obj)) -> loop
		// const k = 'addr'
		// ==>   for()
		ret[k] = obj[k]; // ret['nm'] = obj['nm']
	}
	// for (let i = 0; i < 10; i++)
	// ret.nid = obj.nid; // {nid: 3}
	// ret.nm = obj.nm; // {nid: 3, nm: 'Hong'}
	// ret.addr = obj.addr; // {nid: 3, nm: 'Hong', addr: 'Pusan'}
	return ret;
}

const kim = { nid: 3, nm: 'Hong', addr: 'Pusan', age: 30 }; // kim: &200
// const kim2 = { ...kim }; // Object.assign({}, kim)
// arr[1] = 22;
// console.log(arr2);
// console.table(kim);
// const key = 'nm';                    &200      { nid: 3, nm: 'Hong', addr: 'Pusan' }
// kim[key] = 'Kim';                    &201      { nid: 3, nm: 'Hong', addr: 'Seoul' }
// console.log(kim.nm, kim['nm'], kim[key]);
const newKim = copyObject(kim); // newKim: &201
// const newKim = kim;          // newKim: &200
newKim.addr = 'Seoul';
console.log(kim);
console.log(newKim);
// console.log(kim.addr, newKim.addr);

// nodemon 설치
// npm i nodemon -g
