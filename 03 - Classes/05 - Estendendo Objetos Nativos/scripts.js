class MyArray extends Array {
  first() {
    return this[0];
  }

  last() {
    return this[this.length - 1];
  }
}

var myList = new MyArray(5, 8, 13);

console.log(myList);
