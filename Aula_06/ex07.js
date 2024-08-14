class Gato {
    constructor(idade) {
        this.idade
        this.nome = "Vazio"
    }
    fazBarulho() {
        console.log("Miau")
    }
}


const piratinha = new Gato(6)
const kali = new Gato(12)
piratinha.idade = "6 meses"
console.dir(piratinha) // dir se comporta um pouco diferente do log
piratinha.fazBarulho()
kali.fazBarulho()
console.log(piratinha.toString())
console.log(kali.toString())
console.log(kali.__proto__ === Gato.prototype)