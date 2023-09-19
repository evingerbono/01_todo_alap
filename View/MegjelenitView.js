import MegjelenitSor from "./MegjelenitSorView.js";
class Megjelenit {
    #lista
    #adatTar
    constructor(lista, hely) {
        this.#lista = lista;
        this.hely = hely;
        $(this.hely).html("<table>");
        this.#adatTar = $(`${this.hely} table`);
        this.megjelenit();
    }
    megjelenit() {
        this.#lista.forEach((element,index) => {
            new MegjelenitSor(element,this.#adatTar, index)
        });
    }
        

}
export default Megjelenit;