// JavaScript Document
var deButton = document.querySelector("#burger");
var menu = document.querySelector("#menu");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
  menu.classList.toggle("none");
}
