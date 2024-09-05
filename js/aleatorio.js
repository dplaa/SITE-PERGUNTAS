const jogadores = {
    'Neymar': {
        descricao: 'Habilidade técnica incrível, com dribles e jogadas criativas.',
        caracteristicaUnica: 'Dribles excepcionais'
    },
    'Cristiano Ronaldo': {
        descricao: 'Força física impressionante e habilidades de finalização excepcionais.',
        caracteristicaUnica: 'Finalização poderosa'
    },
    'Messi': {
        descricao: 'Criatividade e visão de jogo excepcionais, com passes e dribles mágicos.',
        caracteristicaUnica: 'Visão de jogo'
    },
    'Virgil van Dijk': {
        descricao: 'Defensor sólido, conhecido por seu posicionamento e habilidade de desarme.',
        caracteristicaUnica: 'Posicionamento defensivo'
    },
    'Kevin De Bruyne': {
        descricao: 'Criativo meio-campista, com passes precisos e visão de jogo excepcional.',
        caracteristicaUnica: 'Precisão de passes'
    },
    'Gianluigi Donnarumma': {
        descricao: 'Goleiro jovem e talentoso, conhecido por suas defesas impressionantes.',
        caracteristicaUnica: 'Reflexos rápidos'
    },
    'Sergio Ramos': {
        descricao: 'Líder defensivo com habilidades de desarme e presença física marcante.',
        caracteristicaUnica: 'Liderança defensiva'
    },
    'Kylian Mbappé': {
        descricao: 'Atacante veloz e habilidoso, com finalização e dribles excepcionais.',
        caracteristicaUnica: 'Velocidade explosiva'
    }
};

export function determinarJogador(respostas) {
    const contagem = Object.keys(jogadores).reduce((acc, jogador) => {
        acc[jogador] = 0;
        return acc;
    }, {});

    const mapeamento = {
        'Ofensivo': ['Neymar', 'Cristiano Ronaldo', 'Kylian Mbappé'],
        'Defensivo': ['Virgil van Dijk', 'Sergio Ramos'],
        'Criativo': ['Messi', 'Kevin De Bruyne'],
        'Equilibrado': ['Cristiano Ronaldo', 'Messi'],
        'Atacante': ['Neymar', 'Cristiano Ronaldo', 'Kylian Mbappé'],
        'Meio-campo': ['Kevin De Bruyne', 'Messi'],
        'Defensor': ['Virgil van Dijk', 'Sergio Ramos'],
        'Goleiro': ['Gianluigi Donnarumma'],
        'Drible': ['Neymar', 'Messi'],
        'Chute': ['Cristiano Ronaldo', 'Kylian Mbappé'],
        'Passe': ['Messi', 'Kevin De Bruyne'],
        'Desarme': ['Virgil van Dijk', 'Sergio Ramos']
    };

    respostas.forEach(resposta => {
        const jogadoresParaCategoria = mapeamento[resposta];
        if (jogadoresParaCategoria) {
            jogadoresParaCategoria.forEach(jogador => {
                if (contagem[jogador] !== undefined) {
                    contagem[jogador]++;
                }
            });
        }
    });

    const jogadorMaisApto = Object.entries(contagem).reduce((acc, [jogador, qtd]) => {
        return (qtd > acc.qtd) ? { jogador, qtd } : acc;
    }, { jogador: '', qtd: -1 }).jogador;

    if (!jogadorMaisApto) {
        return { descricao: 'Não foi possível determinar o jogador.', caracteristicaUnica: '' };
    }

    return jogadores[jogadorMaisApto];
}
