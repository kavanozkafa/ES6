/*jshint esversion: 6 */

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

/** object literals */
function addressMaker(city, state) {
  //we dont have assign these to function paramaters.
  //const newAdress = { city, state: state };
  const newAdress = { city: city, state };

  console.log(newAdress);
}

addressMaker("Austin", "Texas");

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

// For of Loop

let fullName = "sammas";
let days = [23, 45, 67];

for (const char of fullName) {
  console.log(char);
}

for (const x of days) {
  console.log(x);
}

//spread operator
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);

console.log(example2);

//rest operator
//we dont know how many parameters functions get.

function add(...nums) {
  console.log(nums);
}

add(4, 5, 7, 8, 12);

//arrow functions
//for clean code and powerful code.
function add(...nums) {
  let total = nums.reduce((x, y) => x + y);

  console.log(total);
}

add(4, 5, 7, 8, 12);
