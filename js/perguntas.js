export const perguntas = [
    {
        pergunta: 'Qual é o seu estilo de jogo?',
        alternativas: [
            'Ofensivo',
            'Defensivo',
            'Criativo',
            'Equilibrado'
        ]
    },
    {
        pergunta: 'Qual é a sua posição preferida?',
        alternativas: [
            'Atacante',
            'Meio-campo',
            'Defensor',
            'Goleiro'
        ]
    },
    {
        pergunta: 'Qual é a sua habilidade favorita?',
        alternativas: [
            'Drible',
            'Chute',
            'Passe',
            'Desarme'
        ]
    },
    {
        pergunta: 'Qual é o seu tipo de jogador favorito?',
        alternativas: [
            'Habilidade técnica',
            'Força física',
            'Liderança',
            'Agilidade'
        ]
    }
];

export function obterPerguntaAtual(index) {
    return perguntas[index] || null;
}

export function obterAlternativaPorIndex(index, perguntaIndex) {
    return perguntas[perguntaIndex]?.alternativas[index] || null;
}
