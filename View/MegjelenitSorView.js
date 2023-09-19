class MegjelenitSor {
    #adat = {};
    #index;
    constructor(adat, szuloElem,index) {
        this.#adat = adat;
        this.tablaElem=szuloElem;
        this.#index=index;
        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");

        this.keszElem=this.sorElem.children("td").children(".kesz");
        this.keszElem.on("click",()=>{
            this.#esemenyTrigger("torol");
            this.keszElem.css("background-color","green");
        });

        this.torolElem=this.sorElem.children("td").children(".torol");
        this.torolElem.on("click",()=>{
            this.#esemenyTrigger("torol");
            this.sorElem.remove();
        });
    }
    #sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            const element=this.#adat[key];
            txt += `<td>${element}</td>`;
        }
        txt += `<td><button type="button" class="kesz btn">✔</button> <button type="button" class="torol btn">❌</button></td>`;
        txt += "</tr>";
        this.tablaElem.append(txt);
    }
    #esemenyTrigger(esemenyNev){
        const esemeny = new CustomEvent(esemenyNev, { detail: this.#index });
        window.dispatchEvent(esemeny);
    }

}
export default MegjelenitSor;