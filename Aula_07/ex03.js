// métodos de acesso getter e setter (get,set)
// O # faz o campo ficar privado

class Cachorro {
    #raça
    #idade
    constructor(nome, raça) {
        this.nome = nome
        this.#raça = raça
        this.idade = undefined
        this.dono = undefined
    }
    fazBarulho() {
        console.log("Au!")
    }
    getIdade(){
        return this.#idade;
    }
    setIdade(novaIdade){ // isso aqui evita que a idade seja inserida como negativa
        if(novaIdade>=0){
            this.#idade = novaIdade
        }
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