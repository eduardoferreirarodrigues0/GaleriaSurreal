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
    imagemPrincipal.src = todasImagens[idImagemAtiva].src
    todasImagens.forEach(function(imagem){
        imagem.classList = "";
    })
    todasImagens[idImagemAtiva].classList.add("")
}

btnProximo.addEventListener('click',proximoImagem)
btnAnterior.addEventListener('click',voltarImagem)

todasImagens.forEach(function(imagem, numeroImagem) {
    imagem.addEventListener('click', function() {
        idImagemAtiva = numeroImagem;
        textoAlternativo.innerText = imagem.alt
        selecionarImagem();
    });
});