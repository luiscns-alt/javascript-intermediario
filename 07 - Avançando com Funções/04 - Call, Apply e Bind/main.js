var myObj = {
  name: "TreinaWeb",
  sayName: function () {
    console.log(this.name);
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

myObj.sayName();
