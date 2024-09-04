let nomes = ["Beltrano"] // uma vez que eu coloco um tipo dentro da array ela é definida com esse tipo
nomes.push("123")        // Sendo assim, ele recebe elementos do mesmo tipo (string)
nomes.push(123)          // mas dá erro se eu tentar colocar de um tipo diferente (number)

let numeros: number[] = [1,2,4,5]
numeros.push(123)