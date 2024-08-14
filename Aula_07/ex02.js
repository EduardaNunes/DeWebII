class Cachorro {
    constructor(nome, raça) {
        this.nome = nome
        this.raça = raça
        this.idade = undefined
        this.dono = undefined
    }
    fazBarulho() {
        console.log("Au!")
    }
}

const tótó = new Cachorro("tótó", "hotweiller")
tótó.idade = "2 anos"
tótó.dono = "Morty"

console.dir(tótó)
tótó.fazBarulho()