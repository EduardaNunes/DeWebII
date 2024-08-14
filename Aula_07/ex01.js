function Cachorro(nome,raça){
    this.nome = nome
    this.raça = raça
    this.idade = undefined
    this.done = undefined
}
Cachorro.prototype.fazBarulho = function(){
    console.log("Au!")
}

const tótó = new Cachorro("tótó", "hotweiller")

console.dir(tótó)
tótó.fazBarulho()