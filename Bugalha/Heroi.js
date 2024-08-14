import Pessoa from "./Pessoa.js"

export default class Heroi extends Pessoa{ // Hierarquia, herda todas as configurações de Pessoa
    #poder
    constructor(nome, poder){
        super(nome) // acessa a super classe ou seja, o construtor de Pessoa
        this.#poder = poder
    }
    dizOi(){
        super.dizOi()
        console.log(`e tenho o poder de ${this.#poder}`) // não tem como acessar o #nome por aqui
    }
}

const sh1 = new Heroi("Bátema")
sh1.dizOi()