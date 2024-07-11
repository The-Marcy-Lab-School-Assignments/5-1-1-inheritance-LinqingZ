class Quadrilateral {
  constructor(side1, side2, side3, side4){
    this.side1 = side1;
    this.side2= side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter(){
    return this.side1 + this.side2 +this.side3+this.side4
  }
  getArea(){
    return this.side1 * this.side2
  }
}

class Rectangle extends Quadrilateral {
  constructor(length, width){
    super(length, width, length, width);
  }

}

class Square extends Rectangle {
  constructor(length){
    super(length, length, length, length);
  }
  getDiagonal() {
      return Math.sqrt(this.side1 * this.side1 * 2);
  }
}

/* Be creative with this one! */
// I AM NOT A CREATIVE PERSON SO I DON'T NEED TO DO THIS?
class Person {
  static #allPersons = [];
  constructor(name, age, human, type) {
    this.name = name; // string
    this.age = age; // number
    this.human = human; // boolean
    this.type = type; // string
    this.friends = []; // array
    Person.#allPersons.push(this);
  }

  // Non-trivial method 1: Celebrate birthday
  celebrateBirthday() {
    this.age += 1;
    return `Happy ${this.age}th birthday, ${this.name}!`;
  }

  // Non-trivial method 2: Make a new friend
  makeFriend(newFriend) {
    if (!this.friends.includes(newFriend)) {
      this.friends.push(newFriend);
      return `${newFriend} is now a friend of ${this.name}.`;
    }
    return `${newFriend} is already a friend of ${this.name}.`;
  }

  // Non-trivial method 3: Describe the person
  describe() {
    return `${this.name} is a ${this.age}-year-old ${this.human ? "human" : "non-human"} of type ${this.type}.`;
  }

  // Class method to list all persons
  static list() {
    return Person.#allPersons;
  }

  // Class method to find a person by name
  static find(name) {
    return Person.#allPersons.find(person => person.name === name);
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
