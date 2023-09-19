import { TODOLIST2 } from "../adatok.js";
import Megjelenit from "../View/MegjelenitView.js";
//import MegjelenitSor from "../View/MegjelenitSorView.js";
import Urlap from "../View/UrlapView.js";
import Model from "../Model/Model.js";
class Controller {

    constructor() {
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), ".tarolo")
        new Urlap({ tevekenyseg: "", hatarido: "" }, $(".ujadat"));

        $(window).on("torol", (event) => {
            console.log(event.detail);
        })
        let adatTar = $(`table`);
        $(window).on("adatHozaad", (event) => {
            console.log(event.detail);
            MODEL.ujAdat(event.detail);
            new Megjelenit(MODEL.getList(), ".tarolo")
        })
    }
}
export default Controller;