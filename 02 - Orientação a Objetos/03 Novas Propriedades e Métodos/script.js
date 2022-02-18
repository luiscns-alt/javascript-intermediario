function Pencil(color, length) {
  var code = 153;

  if (!(this instanceof Pencil)) {
    return new Pencil(color, length);
  }
  this.color = color;
  this.length = length;
  this.write = function (text) {
    console.log(text);
  };
  this.getCode = function () {
    return code;
  };
  this.setCode = function (value) {
    code = value;
  };
}

var myPencil = Pencil("red", 15);
var myPencil2 = new Pencil("blue", 20);

console.log(Date.prototype);
console.log((Pencil.prototype.number = 5));

console.log(myPencil.number);
