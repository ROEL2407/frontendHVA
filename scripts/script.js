// JavaScript Document
var deButton = document.querySelector("#burger");
var menu = document.querySelector("#menu");

deButton.addEventListener("click", openMenu);

function openMenu() {
    document.body.classList.toggle("menuOpen");
    menu.classList.toggle("invisible");
}


var Opst = document.querySelector("#opstelling_btn");
var game = document.querySelector("#wedstrijd_btn");
var opstelling_info = document.querySelector("#opstelling");
var wedstrijd_info = document.querySelector("#wed-info");
var wedstrijd_stats = document.querySelector("#wed-stats");

Opst.addEventListener("click", openOpst);

function openOpst() {
    opstelling_info.classList.remove("invisible");
    wedstrijd_info.classList.add("invisible");
    wedstrijd_stats.classList.add("invisible");
    Opst.classList.remove("not-selected");
    game.classList.add("not-selected");
}

game.addEventListener("click", openWed);

function openWed() {
    opstelling_info.classList.add("invisible");
    wedstrijd_info.classList.remove("invisible");
    wedstrijd_stats.classList.remove("invisible");
    Opst.classList.add("not-selected");
    game.classList.remove("not-selected");
}

var tableRow = document.querySelector("#JSlink");
tableRow.addEventListener("click", linkToPage);

function linkToPage() {
  window.location.href = "wedstrijd.html";
}
