function repita(mensagem:string, vezes:number): void{
    for(let i = 0; i < vezes; i++){
        console.log(mensagem)
        return mensagem // por ser void não pode retornar nada
    }
}

repita("Hello World", 5)