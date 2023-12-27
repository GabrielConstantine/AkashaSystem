const prompt = require('prompt-sync')();
const fs = require('fs');

console.log("Seja bem-vindo ao Akasha System!!");

class FichaPersonagem {
    constructor(nome, idade, classe, ranking, rankeadasVencidas, rankeadasPerdidas, rankeadasTotais) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.ranking = ranking || 'Ferro';
        this.rankeadasVencidas = rankeadasVencidas || 0;
        this.rankeadasPerdidas = rankeadasPerdidas || 0;
        this.rankeadasTotais = rankeadasTotais || 0;
    }
}

function criarPersonagem() {
    const nome = prompt("Informe o seu nome Herói: ");
    const idade = parseInt(prompt("Informe a idade do Herói: "));
    const classe = prompt("Informe a classe do Herói: ");

    return new FichaPersonagem(nome, idade, classe);
}

const personagem = criarPersonagem();
let jogarRankeada;

function usarHabilidade() {
    try {
        const habilidadesJSON = fs.readFileSync('classes.json', 'utf-8');
        const habilidades = JSON.parse(habilidadesJSON).habilidades;

        return habilidades || {};  // Garantindo que habilidades é um objeto ou um objeto vazio
    } catch (error) {
        console.error('Erro ao carregar habilidades:', error.message);
        return {};  // Em caso de erro, retornar um objeto vazio
    }
}

do {
    function atacar(personagem) {
        const habilidadesPorClasse = usarHabilidade()[personagem.classe] || [];
    
        if (habilidadesPorClasse.length === 0) {
            console.error(`A classe '${personagem.classe}' não possui habilidades definidas.`);
            return;
        }
    
        const indice = Math.floor(Math.random() * habilidadesPorClasse.length);
        const habilidadeEscolhida = habilidadesPorClasse[indice];
    
        console.log(`O ${personagem.nome} da classe ${personagem.classe} atacou usando ${habilidadeEscolhida.nomeAtaque}`);
    
        const resultado = Math.random() < habilidadeEscolhida.chance;
    
        if (resultado) {
            console.log(`${personagem.nome} teve sucesso na ranqueada!`);
            personagem.rankeadasVencidas++;
        } else {
            console.log(`${personagem.nome} falhou na ranqueada.`);
            personagem.rankeadasPerdidas++;
        }
    
        personagem.rankeadasTotais++;
    }

    atacar(personagem);

    jogarRankeada = prompt("Deseja jogar outra ranqueada? (s/n)").toLowerCase() === 's';

    if (!jogarRankeada) {
        let xpRankeadas = personagem.rankeadasVencidas - (personagem.rankeadasPerdidas/2);
        let rankeadasTotais = personagem.rankeadasVencidas + personagem.rankeadasPerdidas;
        let xp = xpRankeadas * 200;

        // Determinando o ranking da ranqueada diretamente
        let matchRanking;
        if (xpRankeadas < 10) {
            matchRanking = "Ferro";
        } else if (xpRankeadas > 10 && xpRankeadas <= 20) {
            matchRanking = "Bronze";
        } else if (xpRankeadas > 20 && xpRankeadas <= 50) {
            matchRanking = "Prata";
        } else if (xpRankeadas > 50 && xpRankeadas <= 70) {
            matchRanking = "Ouro";
        } else if (xpRankeadas > 70 && xpRankeadas <= 80) {
            matchRanking = "Platina";
        } else if (xpRankeadas > 80 && xpRankeadas <= 90) {
            matchRanking = "Diamante";
        } else if (xpRankeadas > 90 && xpRankeadas <= 100) {
            matchRanking = "Lendário";
        } else if (xpRankeadas > 100) {
            matchRanking = "Imortal";
        }

        // Determinando o ranking do herói diretamente
        let ranking;
        if (xp <= 1000) {
            ranking = "Ferro";
        } else if (xp > 1000 && xp <= 2000) {
            ranking = "Bronze";
        } else if (xp > 2000 && xp <= 5000) {
            ranking = "Prata";
        } else if (xp > 5000 && xp <= 6000) {
            ranking = "Ouro";
        } else if (xp > 6000 && xp <= 7000) {
            ranking = "Platina";
        } else if (xp > 7000 && xp <= 8000) {
            ranking = "Diamante";
        } else if (xp > 8000 && xp <= 9000) {
            ranking = "Ascendente";
        } else if (xp > 9000 && xp <= 10000) {
            ranking = "Imortal";
        } else if (xp > 10000) {
            ranking = "Radiante";
        }

        // Exibindo ficha do herói
        console.log(`Ficha do Herói:
            Nome: ${personagem.nome}.
            Idade: ${personagem.idade}.
            Classe: ${personagem.classe}
            Ranking de Herói: ${ranking}.
            Ranqueadas vencidas: ${personagem.rankeadasVencidas} vitórias.
            Ranqueadas perdidas: ${personagem.rankeadasPerdidas} derrotas.
            Ranqueadas totais jogadas: ${personagem.rankeadasTotais} jogadas.
            Ranking de Partida:  ${matchRanking}.`);
    }
} while (jogarRankeada);