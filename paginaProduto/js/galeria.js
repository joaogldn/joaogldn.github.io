const imagens = document.querySelectorAll(".galeriaProduto li img");

function galeriaTrocar(event){
    const clicada = event.currentTarget;
    const principal = document.querySelector('.imagemDestaque');
    principal.src = clicada.src;
    principal.alt = clicada.alt;
}

function galeriaClick(imagem){
    imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClick);
