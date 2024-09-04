// Interface é um contrato para garantir que algo irá se comportar como planejado inicialmente

interface Ave{
    bico:string;
    asas: number;
    crista?: boolean; // o ? faz com que seja opicional
    grasnar: () => void;
}

const pato: Ave = {
    bico: "amarelo",
    asas: 55,
    grasnar: function(){
        console.log("Quack!")
    }
}

const galinha: Ave = {
    bico: "laranja",
    asas: 30,
    crista: true,
    grasnar: function(){
        console.log("Cocó!")
    }
}