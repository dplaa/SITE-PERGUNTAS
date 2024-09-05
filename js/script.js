import { determinarJogador } from './aleatorio.js';
import { obterPerguntaAtual, obterAlternativaPorIndex } from './perguntas.js';

document.addEventListener('DOMContentLoaded', () => {
    const perguntasDiv = document.querySelector('.caixa-perguntas');
    const alternativasDiv = document.querySelector('.caixa-alternativas');
    const resultadoDiv = document.querySelector('.caixa-resultado');
    const textoResultado = document.querySelector('.texto-resultado');
    const descricaoResultado = document.querySelector('.descricao-caracteristica');
    const iniciarBtn = document.querySelector('.iniciar-btn');
    const novamenteBtn = document.querySelector('.novamente-btn');
    const telaInicial = document.querySelector('.tela-inicial');

    let perguntaIndex = 0;
    let respostas = [];

    function mostrarPergunta() {
        const perguntaAtual = obterPerguntaAtual(perguntaIndex);

        if (perguntaAtual) {
            perguntasDiv.innerHTML = `<h2>${perguntaAtual.pergunta}</h2>`;
            alternativasDiv.innerHTML = perguntaAtual.alternativas
                .map((alt, index) => `<button class="alternativa-btn" data-index="${index}">${alt}</button>`)
                .join('');
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        perguntasDiv.style.display = 'none';
        alternativasDiv.style.display = 'none';
        resultadoDiv.style.display = 'block';

        const jogador = determinarJogador(respostas);
        textoResultado.textContent = `Você seria ${jogador.descricao}`;
        descricaoResultado.textContent = jogador.descricao;
    }

    function iniciarQuiz() {
        telaInicial.style.display = 'none'; // Ocultar a tela inicial
        perguntasDiv.style.display = 'block';
        alternativasDiv.style.display = 'block';
        resultadoDiv.style.display = 'none';

        perguntaIndex = 0;
        respostas = [];
        mostrarPergunta();
    }

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('alternativa-btn')) {
            const alternativaIndex = parseInt(event.target.getAttribute('data-index'), 10);
            const alternativa = obterAlternativaPorIndex(alternativaIndex, perguntaIndex);
            respostas.push(alternativa);
            perguntaIndex++;
            mostrarPergunta();
        }
    });

    iniciarBtn.addEventListener('click', iniciarQuiz);
    novamenteBtn.addEventListener('click', iniciarQuiz);
});
