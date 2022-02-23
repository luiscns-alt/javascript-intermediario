var regexp = /a.c/g,
  myString = "234abc123 a4c5",
  match;

while ((match = regexp.exec(myString))) {
  console.log(`${match[0]} - ${match.index}`);
}
