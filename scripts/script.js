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


if (game){
Opst.addEventListener("click", openOpst);
}

function openOpst() {
    opstelling_info.classList.remove("invisible");
    wedstrijd_info.classList.add("invisible");
    wedstrijd_stats.classList.add("invisible");
    Opst.classList.remove("not-selected");
    game.classList.add("not-selected");
}

if (game){
game.addEventListener("click", openWed);
}

function openWed() {
    opstelling_info.classList.add("invisible");
    wedstrijd_info.classList.remove("invisible");
    wedstrijd_stats.classList.remove("invisible");
    Opst.classList.add("not-selected");
    game.classList.remove("not-selected");
}

var tableRows = document.querySelectorAll(".JSlink");
tableRows.forEach(function tableRowEventListeners(tableRow) {
tableRow.addEventListener("click", linkToPage);
})

function linkToPage() {
  window.location.href = "wedstrijd.html";
}

var bank_button = document.querySelector("#bank_btn");
var bank = document.querySelector("#bank");
var wedspelers_home = document.querySelector(".opst_ul_home");
var wedspelers_away = document.querySelector(".opst_ul_away");
var btn_txt_bank = document.querySelector("#bank_span");
var btn_txt_opst = document.querySelector("#opst_span");

if (game){
bank_button.addEventListener("click", BankToggle);
}

function BankToggle() {
    wedspelers_home.classList.toggle("invisible");
    wedspelers_away.classList.toggle("invisible");
    bank.classList.toggle("invisible");
    bank.classList.toggle("BankOpen");
    btn_txt_bank.classList.toggle("invisible");
    btn_txt_opst.classList.toggle("invisible");

}
