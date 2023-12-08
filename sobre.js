function abrirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
setTimeout(function () {
    abrirPopup();
}, 2000);
setTimeout(function () {
    fecharPopup();
}, 6000);


// Função para fechar o pop-up
function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}