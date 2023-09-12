class Megjelenit{
    #lista
    #adatTar
    constructor(lista,hely){
        this.#lista=lista;
        this.hely=hely;
        $(this.hely).html("<table>");
        this.#adatTar=$(`${this.hely} table`);
        this.megjelenit();
    }
    megjelenit(){
        this.#lista.forEach((element,index)=>{
            this.#adatTar.append(`<tr> <td>${index+1}.${element}</td></tr>`);
        });
    }
}
export default Megjelenit;