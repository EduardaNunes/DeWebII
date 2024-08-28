type Pessoa = {
    nome: string;
    idade: number;
}

// Forma correta (campos compatíveis)
let p1:Pessoa = {
    nome: "Paulinha",
    idade: 23
}

// Não deixa adiconar ou faltar campos
// Objetos literais precisam ser iguais ao original
let p2:Pessoa = {
    nome: "Jaozin",
    idade: 24,
    cpf: "123456789-00"
}

let p3:Pessoa = {
    nome: "Claudinha"
}