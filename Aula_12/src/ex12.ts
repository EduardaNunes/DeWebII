// Funções e Genéricos

function paraVetor<TipoDoTrem>(trem:TipoDoTrem): TipoDoTrem[]{
    return[trem] // retorna um vetor com o primeiro elemento sendo o "trem" do tipo <TipoDoTrem>
}

const v1 = paraVetor("Fulano")
const v2 = paraVetor(true)
const v3 = paraVetor({x: 1, y: 2})

function paraTupla<T, V>(a:T, b:V): [T,V]{
    return [a,b]
}

const t1 = paraTupla("Fulano", 12)
const t2 = paraTupla({matricula: 123456, nome: "Fulano"}, [60, 70, 80]) // dois objetos com seus próprios elementos