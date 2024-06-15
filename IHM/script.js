

window.onscroll = function() { fixarCabecalho() };

function fixarCabecalho() {
    var cabecalho = document.getElementsByTagName('nav');
    // Adicionando ou removendo sombra dependendo da posição do scroll
    if (window.scrollY <= 75) {
        cabecalho[0].classList.remove("com-sombra");
    } else {
        cabecalho[0].classList.add("com-sombra");
    }
}