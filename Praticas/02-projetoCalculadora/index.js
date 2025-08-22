let prompt = require('prompt-sync')();

let nome = prompt("Qual seu nome?");

console.log(`Seja bem vindo ${nome}`);
console.log(`\u000a`);

console.log(`Vamos calcular sua média`)
console.log(`\u000a`);

console.log(`########### Nota A1 ##################`);
let {calculadoraNotaA1, calculadoraNotaA2, calculadoraNotaFinal} = require('./CalculadoraNota');

let exerciciosA1 = parseFloat(prompt("Qual a nota dos exercicios A1: "));//Usar parseFloat para tranforma texto em numero
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalho A1: "));//Usar parseFloat para tranforma texto em numero
let provaA1 = parseFloat(prompt("Qual a nota da prova A1: "));//Usar parseFloat para tranforma texto em numero

let notaA1 = calculadoraNotaA1(exerciciosA1, trabalhoA1, provaA1);

console.log(`Sua nota A1 e igual: ${notaA1.toFixed(2)}`);
console.log(`\u000a`);


console.log(`########### Nota A2 ##################`);

let exerciciosA2 = parseFloat(prompt("Qual a nota dos exercicios A2: "));//Usar parseFloat para tranforma texto em numero
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho A2: "));//Usar parseFloat para tranforma texto em numero
let provaA2 = parseFloat(prompt("Qual a nota da prova A2: "));//Usar parseFloat para tranforma texto em numero

let notaA2 = calculadoraNotaA2(exerciciosA2, trabalhoA2, provaA2);
console.log(`Sua nota A2 e igual: ${notaA2.toFixed(2)}`);
console.log(`\u000a`);

console.log(`########### Nota Final ##################`);
console.log(`Nota final: ${calculadoraNotaFinal(notaA1, notaA2).toFixed(2)}`);