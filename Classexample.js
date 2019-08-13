import { Animal, Cat } from "./Animal.js";

let cat = new Animal("cat", 4);
cat.legs = 3;
cat.Voice("meow");
console.log(cat);

console.log(Animal.Noon());
console.log(cat.Data);

let meow = new Cat("Cat", 4);

meow.makeNoise();
