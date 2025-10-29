// Espera o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega o ano atual
    const anoAtual = new Date().getFullYear();
    
    // Encontra o elemento com o id 'copyright' no HTML
    const copyrightElemento = document.getElementById('copyright');
    
    // Insere o texto do copyright com o ano atual
    if (copyrightElemento) {
        copyrightElemento.innerHTML = `&copy; ${anoAtual} Cantina Sabor da Vila. Todos os direitos reservados.`;
    }

    // Mensagem de boas-vindas no console do navegador
    console.log("Página da Cantina carregada com sucesso!");

    // Bônus: Rolagem suave para as âncoras do menu
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});