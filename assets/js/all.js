"use strict";

var nav = document.querySelector("header nav");
var checkbox = document.querySelector(".checkbox");
var menu = document.querySelector(".menu");
var menuClose = document.querySelector(".close");
var hoverList = document.querySelector(".hover-list");
var hoverButton = document.querySelector(".hover-button");
checkbox.addEventListener("click", function (e) {
  e.preventDefault();
  checkbox.classList.toggle("checked");
  var checked = document.querySelector(".checked");

  if (checkbox.classList.contains("checked")) {
    checkbox.innerText = "";
  } else {
    checkbox.innerText = "V";
  }
});
menu.addEventListener("click", function (e) {
  nav.classList.toggle("nav-list");
  hoverList.classList.remove("hidden");
  hoverButton.classList.remove("hidden");
});
menuClose.addEventListener("click", function (e) {
  nav.classList.remove("nav-list");
  hoverButton.classList.add("hidden");
  hoverList.classList.add("hidden");
});
//# sourceMappingURL=all.js.map
