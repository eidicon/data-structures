'use strict';
const LinkedList = require('./LinkedList');

const ll = new LinkedList();
const data = [1, 45, 644, 'test', '67r', 936];

for (const item of data) {
    ll.add(item);
}

//console.dir(ll, {depth: null});

console.log(ll.get(3)) // >> test
console.log(ll.remove(0)); // >> 1
console.log([...ll]); // >> [ 45, 644, 'test', '67r', 936 ]
console.log(ll.remove(3));
console.log([...ll]); // >> [ 45, 644, 'test', 936 ]