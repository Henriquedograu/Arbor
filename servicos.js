console.log("Script carregado!");

// Seleciona todas as caixas de imagem e cria o fundo de sobreposição
const images = document.querySelectorAll('.item-image img');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Função para abrir ou fechar a imagem
images.forEach((img) => {
    img.addEventListener('click', () => {
        // Alterna a classe 'expanded' na imagem clicada
        img.parentElement.classList.toggle('expanded');
        
        // Alterna a visibilidade da sobreposição
        overlay.classList.toggle('active');
    });
});

// Fecha a imagem ao clicar no fundo de sobreposição
overlay.addEventListener('click', () => {
    // Remove a classe 'expanded' de todas as imagens
    images.forEach((img) => img.parentElement.classList.remove('expanded'));
    
    // Remove a sobreposição
    overlay.classList.remove('active');
});

// Função para bloquear a rolagem da página
function lockPage() {
    document.body.style.overflow = 'hidden';  // Impede o scroll
}

// Função para liberar a rolagem da página
function unlockPage() {
    document.body.style.overflow = '';  // Permite o scroll
}

// Cria a sobreposição da "nuvem" de login
const overlayLogin = document.createElement('div');
overlayLogin.classList.add('overlay-login');
overlayLogin.innerHTML = `
    <div class="login-message">
        <h2>Você precisa fazer o login para continuar!</h2>
        <button class="login-btn" onclick="redirectToLogin()">Fazer Login</button>
    </div>
`;

// Adiciona a sobreposição ao body
document.body.appendChild(overlayLogin);

// Função para redirecionar para a página de login
function redirectToLogin() {
    window.location.href = 'login2.html'; // Altere para a página de login real
}

// Função para bloquear a rolagem da página até que o login seja feito
let scrollBlocked = true;

// Evento de scroll para mostrar a sobreposição
window.addEventListener('scroll', () => {
    if (scrollBlocked) {
        overlayLogin.classList.add('active');
        window.scrollTo(0, 0); // Impede o scroll
    }
});

// Evento de click para mostrar a sobreposição
window.addEventListener('click', () => {
    if (scrollBlocked) {
        overlayLogin.classList.add('active');
        window.scrollTo(0, 0); // Impede o scroll
    }
});

// Estilo CSS para a sobreposição de login
const style = document.createElement('style');
style.innerHTML = `
    .overlay-login {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }

    .overlay-login.active {
        display: flex;
    }

    .login-message {
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 30px;
        border-radius: 10px;
    }

    .login-btn {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .login-btn:hover {
        background-color: #45a049;
    }
`;

document.head.appendChild(style);

// Função de login (simulada)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aqui você pode adicionar a lógica real de autenticação
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        unlockPage();  // Libera a rolagem
        overlayLogin.classList.remove('active'); // Remove a sobreposição de login
        window.location.href = "inicio.html"; // Redireciona para a página de conteúdo (Modern Header)
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// Função chamada quando o usuário tenta rolar a página
function attemptClickOrScroll() {
    if (!scrollBlocked) {
        return;
    }
    lockPage(); // Impede o scroll até que o login seja realizado
    overlayLogin.classList.add('active'); // Exibe a sobreposição
}

// Inicia o bloqueio da rolagem assim que o usuário clicar ou rolar na página
window.onload = function () {
    window.addEventListener('scroll', attemptClickOrScroll); // Chama a função ao rolar a página
    window.addEventListener('click', attemptClickOrScroll); // Chama a função ao clicar na página
};
