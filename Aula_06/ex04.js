const Pessoa = {
    maçãs: 0,
    doar: function(receptor){
        receptor.maçãs += this.maçãs;
        this.maçãs = 0;
    },
}

const pessoa1 = Object.create(Pessoa)
const pessoa2 = Object.create(Pessoa)
pessoa1.maçãs = 2;
pessoa2.maçãs = 1;
console.log(pessoa1)
console.log(pessoa2)
pessoa1.doar(pessoa2)