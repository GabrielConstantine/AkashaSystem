const prompt = require('prompt-sync')();

console.log("Hello Hero, Seja bem vindo ao Akasha Systema!!");

function rankingHero() {
    const nome = prompt("Informe o seu nome Héroi: ");
    const xp = parseInt(prompt("Digite a quantidade de XP que você tem Héroi: "));
    let ranking;

    switch (true) {
        case xp <= 1000:
            ranking = "Ferro";
            break;
        case xp > 1000 & xp <= 2000:
            ranking = "Bronze";
            break;
        case xp > 2000 && xp <= 5000:
            ranking = "Prata";
            break;
        case xp > 5000 && xp <= 6000:
            ranking = "Ouro";
            break;
        case xp > 6000 && xp <= 7000:
            ranking = "Platina";
            break;
        case xp > 7000 && xp <= 8000:
            ranking = "Diamante";
            break;
        case xp > 8000 && xp > 9000:
            ranking = "Ascendente";
            break;
        case xp > 9000 &&  xp <= 1000:
            ranking = "Imortal";
            break;
        case xp > 10000:
            ranking = "Radiante";
            break;
        default:
            ranking = "Ferro";
            break;
    }

    console.log(`O herói ${nome} está no ranking ${ranking}`);
}

rankingHero();
