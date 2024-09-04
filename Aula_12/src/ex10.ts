type TuplaNomeValor = [string, number]

const tupla1: TuplaNomeValor = ["Fulano", 1234]              // correto
const tupla2: TuplaNomeValor = ["Fulano", "Beltrano"]        // X
const tupla3: TuplaNomeValor = [123, "Beltrano"]             // X
const tupla4: TuplaNomeValor = ["Fulano", 1234, "Beltrano"]  // X


const tuplas: TuplaNomeValor[] = [];
tuplas.push(tupla1)
tuplas.push(["Patricia", 23])
console.log(tupla1[0], tupla1[1])
console.log(tuplas[1][1])
