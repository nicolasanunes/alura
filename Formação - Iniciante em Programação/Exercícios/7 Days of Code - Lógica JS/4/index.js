const prompt = require("prompt-sync")();

const valorPredefinido = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(valorPredefinido);

let chuteValor = prompt("Qual valor você acha que o programa escolheu? Entre 0 e 10.");

if(chuteValor == valorPredefinido) {
    console.log("Parabéns, você acertou o valor!");
} else {
    for(let contador = 2; contador > 0; contador--) {
        chuteValor = prompt(`Você tem mais ${contador} chance(s), qual o seu próximo palpite?`);
        if(chuteValor == valorPredefinido) {
            console.log("Parabéns, você acertou o valor!");
        } else if(contador == 1) {
            console.log(`Que pena, você perdeu! O número correto era ${valorPredefinido}.`);
        }
    } 
}