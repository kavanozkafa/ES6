//-------------------------------------------------
// Class

export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  Voice(sound = "prrrrr") {
    console.log(sound);
  }

  get Data() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  static Noon() {
    return 12;
  }
}

export class Cat extends Animal {
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}
