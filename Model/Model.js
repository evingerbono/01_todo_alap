import { TODOLIST2 } from "../adatok.js";
class Model{

    #list=[];
    constructor(){
        this.#list=TODOLIST2;
    }
    ujAdat(obj){
        this.#list.push(obj);
    }
    kesz(){
        
    }
    getList(){
        return this.#list;
    }
}
export default Model;