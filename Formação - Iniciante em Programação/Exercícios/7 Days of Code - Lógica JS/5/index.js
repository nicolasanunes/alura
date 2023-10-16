const prompt = require("prompt-sync")();

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let decisaoAdicionar = prompt("Você deseja adicionar um item na sua lista de compras? (Sim ou Não)");
while(decisaoAdicionar == "Sim") {
    let itemASerAdicionado = prompt("Qual item você deseja adicionar à lista de compras?");
    categoriaASerAdicionada = prompt(`Em qual categoria o item ${itemASerAdicionado} deve ser adicionado? (Frutas; Laticínios; Congelados; Doces)`);
    if(categoriaASerAdicionada == "Frutas") {
        frutas.push(itemASerAdicionado);
    } else if(categoriaASerAdicionada == "Laticínios") {
        laticinios.push(itemASerAdicionado);
    } else if(categoriaASerAdicionada == "Congelados") {
        congelados.push(itemASerAdicionado);
    } else if(categoriaASerAdicionada == "Doces") {
        doces.push(itemASerAdicionado);
    }
    decisaoAdicionar = prompt("Você deseja adicionar mais algum item? (Sim ou Não)");
}

console.log(`Lista de compras:\n    Frutas: ${frutas}\n    Laticínios: ${laticinios}\n    Congelados: ${congelados}\n    Doces: ${doces}`);