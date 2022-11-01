function sum1(n) {
	let tot = 0;
	for (let i = 1; i <= n; i += 1) {
		tot = tot + i;
	}

	return tot;
}

function sum2(n) {
	//          100
	if (n === 1) return 1;
	return n + sum2(n - 1); //   100 + sum2(99)
} //                                 99 + sum2(98)
//                                      98 + sum2(97)
//                                                  ....
//                                                       2 + sum2(1)
//                                                            1

console.log(sum1(100));
console.log(sum2(100));
