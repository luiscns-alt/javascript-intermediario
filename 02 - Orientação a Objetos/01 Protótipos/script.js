function Pencil(color, length) {
  this.color = color;
  this.length = length;
  this.write = function (text) {
    console.log(text);
  };
}

var myPencil = new Pencil("red", 15);
var myPencil2 = new Pencil("blue", 20);

myPencil2;
