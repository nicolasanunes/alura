const prompt = require("prompt-sync")();

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function adicionarItem(itemASerAdicionado, categoriaASerAdicionada) {
    if(categoriaASerAdicionada === "Frutas") {
        frutas.push(itemASerAdicionado);
    } else if(categoriaASerAdicionada === "Laticínios") {
        laticinios.push(itemASerAdicionado);
    } else if(categoriaASerAdicionada === "Congelados") {
        congelados.push(itemASerAdicionado);
    } else if(categoriaASerAdicionada === "Doces") {
        doces.push(itemASerAdicionado);
    } else {
        prompt("Essa categora não foi definida.");
    }
}

function removerItem(itemASerRemovido) {
    if(frutas.indexOf(itemASerRemovido) != -1) {
        frutas.splice(frutas.indexOf(itemASerRemovido), 1);
        console.log(`O item ${itemASerRemovido} foi removido da lista.`)
    } else if(laticinios.indexOf(itemASerRemovido) != -1) {
        laticinios.splice(laticinios.indexOf(itemASerRemovido), 1);
        console.log(`O item ${itemASerRemovido} foi removido da lista.`)
    } else if(congelados.indexOf(itemASerRemovido) != -1) {
        congelados.splice(congelados.indexOf(itemASerRemovido), 1);
        console.log(`O item ${itemASerRemovido} foi removido da lista.`)
    } else if(doces.indexOf(itemASerRemovido) != -1) {
        doces.splice(doces.indexOf(itemASerRemovido), 1);
        console.log(`O item ${itemASerRemovido} foi removido da lista.`)
    } else {
        console.log("O item não foi encontrado na lista.")
    }
}

function imprimirLista() {
    console.log(`Lista de compras:\n    Frutas: ${frutas}\n    Laticínios: ${laticinios}\n    Congelados: ${congelados}\n    Doces: ${doces}`);
}

let decisao = prompt("Você deseja adicionar um item na sua lista de compras? 'Sim ou Não'");
while(decisao === "Adicionar" || decisao === "Sim") {
    let itemASerAdicionado = prompt("Qual item você deseja adicionar na lista de compras?");
    let categoriaASerAdicionada = prompt(`Em qual categoria o item ${itemASerAdicionado} deve ser adicionado? (Frutas; Laticínios; Congelados; Doces)`);
    adicionarItem(itemASerAdicionado, categoriaASerAdicionada);
    decisao = prompt("Você deseja adicionar ou remover outro item? 'Adicionar ou Remover'. Digite 'Não' para encerrar.");
}

while(decisao === "Remover") {
    imprimirLista();
    let itemASerRemovido = prompt(`Qual item você deseja remover da sua lista de compras?`);
    removerItem(itemASerRemovido);
    decisao = prompt("Você deseja adicionar ou remover outro item? 'Adicionar ou Remover'. Digite 'Não' para encerrar.");
}

imprimirLista();