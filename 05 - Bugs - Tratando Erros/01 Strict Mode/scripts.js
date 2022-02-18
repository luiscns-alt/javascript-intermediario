"use strict";

function myLooping() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

myLooping();

function Pencil() {
  this.color = "red";
}

var myPencil = new Pencil();
