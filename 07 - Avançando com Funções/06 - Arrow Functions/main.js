var myObj = {
  name: "TreinaWeb",
  sayName: function () {
    console.log(this.name);

    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

myObj.sayName();
