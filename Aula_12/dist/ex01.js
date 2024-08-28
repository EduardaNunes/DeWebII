"use strict";
// npm install typescript -D
// npx tsc ex01.ts -> transpila para JS (cuidado pois ele usa um JS antigo [let => var])
// npx tsc --init -> gera um arquivo de configuração
// Mudar o "target: es2016" para "target:es2022"
// rootDir = ./src
// outDir = ./dist
// package.json -> script {"ex01": "tsc && node ./dist/ex01.js"}
// se você não definir o tipo da variável, o TS vai ditar o primeiro input como sendo seu tipo
let inteiro = 3;
let real = 3.33;
let texto = "Olá Mundo!";
let logico = true;
// Declaração de tipos
let inteiro2 = 3;
let real2 = 3.33;
let texto2 = "Olá Mundo!";
let logico2 = true;
console.log("Olá Mundo! (TS)");
