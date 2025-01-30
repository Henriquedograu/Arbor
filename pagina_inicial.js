// JavaScript para animação de botões no cabeçalho
document.querySelectorAll('nav ul li').forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.transform = 'translateY(-5px)'; // Efeito de elevação ao passar o mouse
        this.style.transition = 'transform 0.3s ease'; // Suavização do efeito
        this.style.color = 'rgb(0, 192, 147)'; // Cor ao passar o mouse (removendo roxo)
    });

    button.addEventListener('mouseout', function () {
        this.style.transform = 'translateY(0)'; // Retorna ao estado normal
        this.style.color = ''; // Retorna à cor original
    });
    
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('nav-active');
});
