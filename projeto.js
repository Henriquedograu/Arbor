// Obter o modal e a imagem
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".image-wrapper img");

// Abrir o modal com a imagem clicada
images.forEach(image => {
    image.onclick = function() {
        modal.style.display = "flex"; // Exibe o modal
        modalImg.src = this.src; // Define a imagem do modal
        modalImg.style.maxWidth = "90%"; // Ajusta a largura da imagem para não ultrapassar a tela
        modalImg.style.maxHeight = "90%"; // Ajusta a altura da imagem para não ultrapassar a tela
        modal.querySelector(".modal-background").style.filter = "blur(8px)"; // Aplica o blur no fundo
    }
});

// Fechar o modal ao clicar no "X"
var close = document.getElementsByClassName("close")[0];
close.onclick = function() {
    modal.style.display = "none"; // Fecha o modal
    modal.querySelector(".modal-background").style.filter = "none"; // Remove o blur do fundo
}

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Fecha o modal
        modal.querySelector(".modal-background").style.filter = "none"; // Remove o blur do fundo
    }
}
