const Gato = {
    fazBarulho(){
        console.log("Miau")
    }
}

const piratinha = Object.create(Gato)
const kali = Object.create(Gato)
piratinha.idade = "6 meses"
console.log(piratinha)
piratinha.fazBarulho()
kali.fazBarulho()
console.log(piratinha.toString())
console.log(kali.toString())
console.log(kali.__proto_ === Gato)