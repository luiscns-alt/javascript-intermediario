var myString = "Abc abc Abc abc";

console.log(myString.replace("a", "1"));
console.log(myString.replace(/a/gi, "1"));

var myString2 = "abc-954-def",
  myRegex = /(ab)c-(\d{3})-def/;

console.log(myString2.replace(myRegex, "my number: $1 - $2"));
