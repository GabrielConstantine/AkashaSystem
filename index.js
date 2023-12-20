const prompt = require('prompt-sync')();

const nome = prompt("Informe o seu nome Héroi: ");
console.log("Olá " + nome + ", Seja bem-vindo ao Akasha System!!");

let rankeadasVencidas = parseInt(prompt(nome + " quantas partidas ranqueadas foram vencidas?"));
let rankeadasPerdidas = parseInt(prompt(nome + " quantas partidas ranqueadas foram perdidas?"));
let xpRankeadas = rankeadasVencidas - rankeadasPerdidas;
let rankeadasTotais = rankeadasVencidas + rankeadasPerdidas;
let xp = xpRankeadas * 120

function matchRanking(xpRankeadas) {
    let matchRanking;

    switch (true) {
        case xpRankeadas < 10:
            matchRanking = "Ferro";
            break;
        case xpRankeadas > 10 && xpRankeadas <= 20:
            matchRanking = "Bronze";
            break;
        case xpRankeadas > 20 && xpRankeadas <= 50:
            matchRanking = "Prata";
            break;
        case xpRankeadas > 50 && xpRankeadas <= 70:
            matchRanking = "Ouro";
            break;
        case xpRankeadas > 70 && xpRankeadas <= 80:
            matchRanking = "Platina";
            break;
        case xpRankeadas > 80 && xpRankeadas <= 90:
            matchRanking = "Diamante";
            break;
        case xpRankeadas > 90 && xpRankeadas <= 100:
            matchRanking = "Lendário";
            break;
        case xpRankeadas > 100:
            matchRanking = "Imortal";
            break;
        default:
            matchRanking = "Ferro";
            break;
    }
    return matchRanking;
}

function rankingHero() {
    let ranking;

    switch (true) {
        case xp <= 1000:
            ranking = "Ferro";
            break;
        case xp > 1000 && xp <= 2000:
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
        case xp > 8000 && xp <= 9000:
            ranking = "Ascendente";
            break;
        case xp > 9000 && xp <= 10000:
            ranking = "Imortal";
            break;
        case xp > 10000:
            ranking = "Radiante";
            break;
        default:
            ranking = "Ferro";
            break;
    }
    return ranking;
}

console.log(`Ficha Técnica do Herói:
    Nome: ${nome}.
    Ranking de Herói: ${rankingHero(xpRankeadas)}.
    Ranqueadas vencidas: ${rankeadasVencidas} vitórias.
    Ranqueadas perdidas: ${rankeadasPerdidas} derrotas.
    Ranqueadas totais jogadas: ${rankeadasTotais} jogadas.
    Ranking de Partida:  ${matchRanking(xpRankeadas)}.`);
