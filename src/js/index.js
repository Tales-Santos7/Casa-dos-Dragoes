// Seleciona todos os elementos necessários
const imagens = document.querySelectorAll('.carrossel .imagem');
const informacoes = document.querySelectorAll('.conteudo .informacoes');
const botoes = document.querySelectorAll('.botoes-carrossel .botao');
const setaEsquerda = document.querySelector('.seta.e');
const setaDireita = document.querySelector('.seta:not(.e)');

let indiceAtual = 0; // Índice da imagem atual

// Função para atualizar a imagem, título, descrição e botão selecionado
function atualizarCarrossel(novoIndice) {
    // Remover classe ativa de todas as imagens, informações e botões
    imagens[indiceAtual].classList.remove('ativa');
    informacoes[indiceAtual].classList.remove('ativa');
    botoes[indiceAtual].classList.remove('selecionado');

    // Atualiza o índice atual
    indiceAtual = novoIndice;

    // Adicionar classe ativa à nova imagem, informações e botão
    imagens[indiceAtual].classList.add('ativa');
    informacoes[indiceAtual].classList.add('ativa');
    botoes[indiceAtual].classList.add('selecionado');
}

// Adiciona eventos de clique aos botões de navegação
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        atualizarCarrossel(index);
    });
});

// Adiciona eventos de clique às setas de navegação
setaEsquerda.addEventListener('click', () => {
    const novoIndice = (indiceAtual - 1 + imagens.length) % imagens.length; // Navega para a esquerda
    atualizarCarrossel(novoIndice);
});

setaDireita.addEventListener('click', () => {
    const novoIndice = (indiceAtual + 1) % imagens.length; // Navega para a direita
    atualizarCarrossel(novoIndice);
});
