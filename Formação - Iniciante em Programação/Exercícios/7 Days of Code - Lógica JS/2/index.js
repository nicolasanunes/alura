const prompt = require("prompt-sync")();

//let nome;
//let idade;
//let linguagem;

const nome = prompt("Qual o seu nome?");

const idade = prompt("Quantos anos você tem?");

const linguagem = prompt("Qual linguagem de programação você está estudando?");

msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

console.log(msg);

const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if(resposta == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if(resposta == 2) {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}