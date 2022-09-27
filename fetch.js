import fetch from 'node-fetch';
const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
const myFetch = url => fetch(url).then(response => response.json());

myFetch(sampleUrl)
	.then(user => console.log('user>>>', user.name))
	.catch(err => console.error('@@@@err>>>', err));

// myFetch(sampleUrl).then(user => {
// 	console.log('user>>>', user);
// });
