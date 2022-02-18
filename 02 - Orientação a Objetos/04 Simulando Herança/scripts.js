function Animal() {
  this.sleep = function () {
    console.log("zzzzzzz");
  };
}

function Dog() {
  this.bark = function () {
    console.log("woof");
  };
}

Dog.prototype = new Animal();

var myDog = new Dog();

console.log(myDog.bark());
console.log(myDog.sleep());
