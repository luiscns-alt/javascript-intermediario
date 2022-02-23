var regexp = /a.c/g,
  myString = "234abc123 a4c5";

console.log(regexp.exec(myString));

console.log(myString.match(regexp));
