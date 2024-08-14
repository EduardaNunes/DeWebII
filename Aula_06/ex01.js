// Criação de um exemplo de API (código responsável por resolver um determinado tipo de problema)

function doar(receptor){
    receptor.maçãs += this.maçãs
    this.maçãs = 0;
}

const pessoa1 = {
    idade: 10,
    nome: "Maria",
    maçãs: 2,
    doar
}

const pessoa2 = {
    idade: 12,
    nome: "João",
    maçãs: 1,
    doar //por ser o mesmo nome pode omitir
}

pessoa1.doar(pessoa2, pessoa1)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1 === pessoa2)
console.log(pessoa1.doar === pessoa2.doar) // não lembro como mas ele fez isso aqui dar falso 
