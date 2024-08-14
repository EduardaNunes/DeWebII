export default class Dado {
    #valor;
    constructor() {
        this.#valor = 1
    }
    set valor(novoValor){
        if(1 <= novoValor && novoValor <= 6){
            this.#valor = novoValor
        }else{
            throw new Error("Valor inválido")
        }
    }
    get valor(){
        return this.#valor
    }
    rolar(){
        this.#valor = Math.floor(Math.random()*6+1)
    }
}