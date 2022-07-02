const x = 5;
console.log(3 - -x); // ? → 8
console.log(10 + -x * 2); // ? → 0
console.log(-10 * -x * -2); // ? → -100

console.log(2 ** 3 * 3 ** 2); // 64 or 512 ?

// %의 연산자 우선순위
const pm1 = 2 + 5 % 3 - 1;   
const pm2 = 2 + (5 % 3) - 1;
console.log(pm1, pm2, pm1 === pm2 ? '+- < %' : '+- > %')

const ms1 = 3 % 2 * 5 % 3 * 10;  
const ms2 = 3 % 2 * (5 % 3) * 10;
const ms3 = (3 % 2 * 5) % 3 * 10;
console.log(ms1 === ms3 ? 'same' : (ms1 === ms2 ? '*/ < %' : '*/ > %'))

const pow1 = 2 ** 5 % 3 ** 2;
const pow2 = 2 ** (5 % 3) ** 2;
console.log(pow1, pow2, pow1 === pow2 ? '** < %' : '** > %')
