const prompt = require("prompt-sync")();

let num1;
let num2;

function soma(num1, num2) {
    let resultado = +num1 + +num2;
    return console.log(resultado);
}


function subtracao(num1, num2) {
    let resultado = num1 - num2;
    return console.log(resultado);
}


function multiplicacao(num1, num2) {
    let resultado = num1 * num2;
    return console.log(resultado);
}


function divisao(num1, num2) {
    let resultado = num1 / num2;
    return console.log(resultado);
}

let operacao = prompt("Qual operação deve ser realizada? 'Soma, Subtração, Multiplicação ou Divisão'. 'Sair' para encerrar o programa.");
while(operacao != "Sair"){
    switch(operacao) {
        case 'Soma':
            num1 = prompt("Digite o primeiro número:");
            num2 = prompt("Digite o segundo número:");
            soma(num1, num2);
            operacao = "Finalizado";
            break;

        case 'Subtração':
            num1 = prompt("Digite o primeiro número:");
            num2 = prompt("Digite o segundo número:");
            subtracao(num1, num2);
            operacao = "Finalizado";
            break;
    
        case 'Multiplicação':
            num1 = prompt("Digite o primeiro número:");
            num2 = prompt("Digite o segundo número:");
            multiplicacao(num1, num2);
            operacao = "Finalizado";
            break;
    
        case 'Divisão':
            num1 = prompt("Digite o primeiro número:");
            num2 = prompt("Digite o segundo número:");
            divisao(num1, num2);
            operacao = "Finalizado";
            break;
    
        case 'Sair':
            console.log("Até a próxima!");
            break;

        case "Finalizado":
            operacao = prompt("Dessa fazer mais alguma operação? 'Soma, Subtração, Multiplicação ou Divisão'. 'Sair' para encerrar o programa.");
            break;
    
        default:
            console.log("Opção inválida.");
    }
}
