export default class Pessoa{
    #nome
    constructor(nome){
        this.#nome = nome
        console.log(`Foi criado uma pessoa com nome ${this.#nome}`)
    }
    dizOi(){
        console.log(`Olá, Me chamo ${this.#nome}!`)
    }
}

const p1 = new Pessoa("Fulano")
const p2 = new Pessoa("Beltrano")
p2.dizOi();