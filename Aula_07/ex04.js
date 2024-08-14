// Não peguei direito a mudança que ele fez no nome aqui tenho que dar uma olhada melhor depois

class Cachorro {
    #nome
    #raça
    #idade
    constructor(nome, raça) {
        this.#nome = nome
        this.#raça = raça
        this.idade = undefined
        this.dono = undefined
    }
    fazBarulho() {
        console.log("Au!")
    }
    get idade(){
        return this.#idade;
    }
    set idade(novaIdade){ // isso aqui evita que a idade seja inserida como negativa
        if(novaIdade>=0){
            this.#idade = novaIdade
        }
    }
    get nome(){
        return this.#nome;
    }
}

const tótó = new Cachorro("tótó", "hotweiller")
tótó.dono = "Morty"

tótó.idade = "2 anos" // isso aqui vai criar um campo novo além do campo #idade
console.log(tótó.nome + " tem " + tótó.getIdade() + " anos.") // aqui idade dá undefined pois #idade é privado
tótó.setIdade(-32)
console.log(tótó.nome + " tem " + tótó.getIdade() + " anos.") // aqui idade tbm dá undefined pois não aceita idade negativa
tótó.setIdade(9)
console.log(tótó.nome + " tem " + tótó.getIdade() + " anos.") // aqui idade é setada como 9

console.dir(tótó)
tótó.fazBarulho()