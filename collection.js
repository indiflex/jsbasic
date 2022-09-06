import { Stack, Queue, ArrayList } from './utils/collection.js';

const alist = new ArrayList({ value: 1, rest: { value: 2 } }); // new ArrayList([1,2]);
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.print();
// alist.remove(2);
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.print();
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.print();
console.log('get2=', alist.get(2));
console.log('size()=', alist.size()); // 22, 4
console.log('indexOf(300)=', alist.indexOf(300)); // 1
console.log('contains(300)=', alist.contains(300)); // 1
console.log('contains(301)=', alist.contains(301)); // 1
console.log('isEmpty=', alist.isEmpty);
console.log('peek=', alist.peek); // false, 3
console.log('toArray=', alist.toArray()); // [1, 300, 22, 3]
const lst = ArrayList.arrayToList(alist.toArray());
console.log('toList>>', JSON.stringify(lst, null, '    '));
console.log(alist.iterator().next()); // { value: 1, done: false }
alist.clear(); // all clear
alist.print();

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log('spop>>>', stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.push(3);
const queue = new Queue([11, 22]);
queue.enqueue(33); // 추가하기
console.log('deq>>', queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.enqueue(44);
stack.print();
queue.print();

console.log('===============================');
console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());

const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
