function Gato (idade) {
    this.idade
    this.nome = "Vazio"
}

Gato.prototype.fazBarulho = function(){
    console.log("Miau")
}

const piratinha = new Gato(6)
const kali = new Gato(12)
piratinha.idade = "6 meses"
console.log(piratinha)
piratinha.fazBarulho()
kali.fazBarulho()
console.log(piratinha.toString())
console.log(kali.toString())
console.log(kali.__proto__ === Gato.prototype)