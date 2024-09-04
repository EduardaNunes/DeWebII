type Ponto = {
    x: number;
    y: number;
}

interface PontoImutavel {
    readonly x: number;
    readonly y: number;
}

let pt1: Ponto = {x: 1, y: 2}
pt1.y = 10;
imprimePonto(pt1);

function imprimePonto(pt: PontoImutavel){
    console.log(`x:${pt.x} e y:${pt.y}`)
    pt.y++ // não consigo mexer pois ele recebe apenas o campo readonly (apenas leitura)
}