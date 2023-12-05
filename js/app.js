const divImagemPrincipal = document.querySelector('#imagem-principal')
const imagemPrincipal = divImagemPrincipal.querySelector('img')
const textoAlternativo = divImagemPrincipal.querySelector('.texto-alternativo')
const btnAnterior = divImagemPrincipal.querySelector('.anterior')
const btnProximo = divImagemPrincipal.querySelector('.proximo')
const todasImagens = document.querySelectorAll('#imagens img')

let idImagemAtiva = 0

const proximoImagem = function(){
    idImagemAtiva++
    if(idImagemAtiva >= todasImagens.length) idImagemAtiva = 0
    selecionarImagem()
}

const voltarImagem = function(){
    idImagemAtiva--
    if(idImagemAtiva < 0 ) idImagemAtiva = todasImagens.length - 1
    selecionarImagem()
}

const selecionarImagem = function(){
    imagemPrincipal.src = todasImagens[idImagemAtiva].src;
    const altText = todasImagens[idImagemAtiva].alt;
    textoAlternativo.textContent = altText;
    todasImagens.forEach(function(imagem){
        imagem.classList.remove("ativo");
    });
    todasImagens[idImagemAtiva].classList.add("ativo");
}


btnProximo.addEventListener('click',proximoImagem)
btnAnterior.addEventListener('click',voltarImagem)

todasImagens.forEach(function(imagem, numeroImagem) {
    imagem.addEventListener('click', function() {
        idImagemAtiva = numeroImagem;
        selecionarImagem();
    });
});