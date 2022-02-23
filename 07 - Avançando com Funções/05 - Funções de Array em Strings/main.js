var Dog = {
  name: "Dingo",
  sayName: function () {
    console.log(this.name);
  },
};

var Cat = {
  name: "Gumball",
};

Dog.sayName.call(Cat);

[].forEach.call("my string", function (letter) {
  console.log(letter);
});
