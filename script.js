function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function goToHomePage() {
    var paginaInicial = "index.html";
    // Redireciona o navegador para a página principal (index.html)
    window.location.href = paginaInicial;
}
