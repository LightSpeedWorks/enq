enq
====

```
var Queue = require('./enq');

var q = new Queue();

q.push('elem1');
q.push('elem2');
q.push('elem3');

console.log(q.shift()); // -> 'elem1'
console.log(q.shift()); // -> 'elem2'
console.log(q.shift()); // -> 'elem3'
console.log(q.shift()); // -> null
```
