type Ponto2 = {
    x: number;
    y: number;
}

let pt2: Ponto2 = {x: 1, y: 2}
pt1.y = 10;
imprimePonto(pt1);

function imprimePonto(pt: Readonly<Ponto2>){
    console.log(`x:${pt.x} e y:${pt.y}`)
    pt.y++ // não consigo mexer pois ele recebe um tipo Readonly com campo auxiliar genérico (Ponto2)
}