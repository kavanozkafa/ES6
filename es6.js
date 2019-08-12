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

//---------------------------------------------
// Template Literals
const horse = {
  name: "jane",
  age: 4,
  ark: ["british", "grass"]
};

//bad string coding
let bio = horse.name + "welcome" + "you are " + horse.age + " years old.";

//good coding
const { name, age } = horse;

bio = `${name} is a ${age} years old`;
//---------------------------------------------
// let and var
("use strict"); // this is for avoiding common mistakes.unsaved actions.

// difference between var and let

// "let" doesn't allow a variable name twice

var catName = "nano";
var catName = "nana";

function catTalk() {
  var voice = catName + "meow";
}

catTalk();

// this will throw an error. "Duplicate decleration"
// let dogName = "tim";
// let dogName = "tom";
// function dogTalk() {
//   var voice = dogName + "vouuf";
// }

// dogName();
//---------------------------------------------
/* destructing objects */
const personalInformation = {
  firstName: "Dylan",
  lastName: "Israel",
  city: "Austin",
  state: "Texas",
  zipCode: 73301
};

const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn} ${ln}`);

//for array
let [firstName, middleName, lastName] = ["Dylan", "Coding God", "Israel"];

lastName = "Clements";

console.log(lastName);
//---------------------------------------------
/** object literals */
function addressMaker(city, state) {
  //we dont have assign these to function paramaters.
  //const newAdress = { city, state: state };
  const newAdress = { city: city, state };

  console.log(newAdress);
}

addressMaker("Austin", "Texas");
//---------------------------------------------
// all literals in one
function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: "United States"
  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({ city: "Austin", state: "Texas" });
//---------------------------------------------
// For of Loop

let fullName = "sammas";
let days = [23, 45, 67];

for (const char of fullName) {
  console.log(char);
}

for (const x of days) {
  console.log(x);
}
//---------------------------------------------
//spread operator
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);

console.log(example2);
//---------------------------------------------
//rest operator
//we dont know how many parameters functions get.

function add(...nums) {
  console.log(nums);
}

add(4, 5, 7, 8, 12);
//---------------------------------------------
//arrow functions
//for clean code and powerful code.
function add(...nums) {
  let total = nums.reduce((x, y) => x + y);

  console.log(total);
}

add(4, 5, 7, 8, 12);

// export and import
//export const data = [1, 2, 3];

//from another js file
//import { data } from "./example.js";
//let updatedData = data;

//updatedData.push(5);
//console.log(updatedData);
