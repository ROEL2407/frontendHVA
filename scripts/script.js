// JavaScript Document
var deButton = document.querySelector("#burger");
var menu = document.querySelector("#menu");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
  menu.classList.toggle("none");
}


var Opst = document.querySelector("#opstelling_btn");
var game = document.querySelector("#wedstrijd_btn");
var opstelling_info = document.querySelector("#opstelling");
var wedstrijd_info = document.getElementsByClassName(".wedstrijd");

Opst.addEventListener("click", openOpst);

function openOpst() {
  opstelling_info.classList.remove("none");
  wedstrijd_info.classList.Add("none");
  Opst.classList.remove("not-selected");
  game.classList.add("not-selected");
}

game.addEventListener("click", openWed);

function openWed() {
  opstelling_info.classList.add("none");
  wedstrijd_info.classList.remove("none");
  Opst.classList.add("not-selected");
  game.classList.remove("not-selected");
}
