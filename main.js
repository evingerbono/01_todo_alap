import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
import Urlap from "./Urlap.js";
$(function () {
    new Megjelenit(TODOLIST2, ".tarolo")
    new Urlap({tevekenyseg:"",hatarido:""},$(".ujadat"));

    $(window).on("torol", (event) => {
        console.log(event.detail);
    })
    $(window).on("adatHozaad", (event) => {
        console.log(event.detail);
        TODOLIST2.push(event.detail);
    })
})