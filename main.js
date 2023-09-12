import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function(){
    new Megjelenit(TODOLIST2,".tarolo")

$(window).on("torol",(event)=>{
    console.log(event.detail);
})
})