
var cabecalho = document.getElementsByTagName('nav');

window.onscroll = function() { fixarCabecalho() };

function fixarCabecalho() {
    // Adicionando ou removendo sombra dependendo da posição do scroll
    if (window.scrollY <= 75) {
        cabecalho[0].classList.remove("com-sombra");
    } else {
        cabecalho[0].classList.add("com-sombra");
    }
}



// Obtém a posição vertical do rodapé em relação ao topo da página

// Adiciona um listener de scroll
window.addEventListener('scroll', function() {
    
    var nav = document.querySelector('nav');
    var footer = document.querySelector('footer');
    
    var footerPosition = footer.offsetTop;
    var scrollPosition = window.scrollY;

    if (scrollPosition >= footerPosition) {
        nav.style.backgroundColor = '#1e2021';
    } else {
        nav.style.backgroundColor = ''; 
    }
});