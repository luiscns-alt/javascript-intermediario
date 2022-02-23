var add = (function () {
  var counter = 0;
  return function () {
    return counter++;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
