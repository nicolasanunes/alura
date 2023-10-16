const prompt = require("prompt-sync")();

while(areaEscolhida != "Front-end" || areaEscolhida != "Back-end") {
    var areaEscolhida = prompt("Você gostaria de seguir na área de Front-end ou Back-end?");
    if(areaEscolhida == "Front-end") {
        while(linguagemFrontEnd != "React" || linguagemFrontEnd != "Vue") {
            var linguagemFrontEnd = prompt("Você quer aprender React ou Vue?");
            if(linguagemFrontEnd == "React" || linguagemFrontEnd == "Vue") {
                break;
            }
        }
        break;
    } else if (areaEscolhida == "Back-end") {
        while(lingaguemBackEnd != "C#" || lingaguemBackEnd != "Java") {
            var lingaguemBackEnd = prompt("Você quer aprender C# ou Java?");
            if(lingaguemBackEnd == "C#" || lingaguemBackEnd == "Java") {
                break;
            }
        }
        break;
    } else {
        console.log("Resposta inválida.");
    }
}

const especializacao = prompt(`Você deseja se especializar em ${areaEscolhida} ou seguir se desenvolvendo para se tornar Fullstack?`);

const tecnologiaEscolhida = prompt("Qual tecnologia você gostaria de se especializar ou de conhecer?");
console.log(`${tecnologiaEscolhida} é uma ótima escolha!`);

var decisao = "Sim";
while(decisao == "Sim") {
    decisao = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Sim ou Não)");
    if(decisao == "Sim") {
        const tecnologia = prompt("Qual?");
        console.log(`${tecnologia} é uma boa escolha!`);
    }
}