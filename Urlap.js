class Urlap {

    #adat = {};
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#urlapLetrehozasa();
        this.#adatGyujt();
        this.submitELem = this.formElem.children("div").children("#submit");
        console.log(this.submitELem);
        this.submitELem.on("click", () => {
            event.preventDefault();
            this.#adatGyujt();
            this.#esemenyTrigger("adatHozaad");
        });
    }
    #urlapLetrehozasa() {
        let txt = "";
        for (const key in this.#adat) {
            txt += `<div class="forms-group"><label for=${key}>${this.#adat[key]}</label> <input type="text" class="form-control" id="${key}" name="${key} value="${this.#adat[key]}"></div> `;
        }
        txt += `<div><button type="submit" class="btn btn-primary" id="submit">Hozzáad</button> </div>`;
        this.formElem.html(txt);
    }
    #adatGyujt(){
        for (const key in this.#adat) {
           this.#adat[key]=$(`#${key}`).val();
        }
    }
    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
        window.dispatchEvent(esemeny);
    }
}
export default Urlap;