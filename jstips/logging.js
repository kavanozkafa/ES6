/*jshint esversion: 6 */

// logging

const foo = { name: "tim", age: 30 };
const bar = { name: "tom", age: 30 };

//bad logging. objects name disappear
console.log(foo);
console.log(bar);

//good logging with object names.
//computed property name
console.log({ foo, bar });

//you can add css
console.log("%c names", "color:orange; font-weight:bold;");

// or you can display same objects as table
console.table([foo, bar]);
