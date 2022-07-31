const nav = document.querySelector("header nav");
const checkbox = document.querySelector(".checkbox");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const hoverList = document.querySelector(".hover-list");
const hoverButton = document.querySelector(".hover-button");

checkbox.addEventListener("click", (e) => {
  e.preventDefault();
  checkbox.classList.toggle("checked");
  const checked = document.querySelector(".checked");
  if (checkbox.classList.contains("checked")) {
    checkbox.innerText = "";
  } else {
    checkbox.innerText = "V";
  }
});

menu.addEventListener("click", (e) => {
  nav.classList.toggle("nav-list");
  hoverList.classList.remove("hidden");
  hoverButton.classList.remove("hidden");
});

menuClose.addEventListener("click", (e) => {
  nav.classList.remove("nav-list");
  hoverButton.classList.add("hidden");
  hoverList.classList.add("hidden");
});
