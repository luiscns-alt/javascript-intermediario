document.getElementsByTagName("div");
document.getElementsByTagName("def");
document.getElementsByTagName("abc");
document.querySelector("div");
document.querySelector("#def");
document.querySelector(".abc");

$("#abc");

document.querySelector("#abc").addEventListener("click", function () {
  console.log("abg");
});

$("#abc").on("click", function () {
  console.log("object");
});

$.ajax("https://api.github.com/search/repositories?q=javascript").then(
  function (r) {
    console.log(r);
  }
);
