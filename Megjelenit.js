import MegjelenitSor from "./MegjelenitSor.js";
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
        this.#lista.forEach((element) => {
            new MegjelenitSor(element,this.#adatTar)
        });
    }
        

}
export default Megjelenit;