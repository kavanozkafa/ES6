/*jshint esversion: 6 */

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
