// Carregar o HTML
document.addEventListener("DOMContentLoaded", function () {
    iniciarSidebar();
    initCertificados();
});


function iniciarSidebar() {
    const links = document.querySelectorAll(".sidebar nav ul li a");
    const secoes = document.querySelectorAll(".conteudo .secao");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Mudando de seção
            links.forEach(l => l.classList.remove("selecionado"));
            this.classList.add("selecionado");

            secoes.forEach(secao => secao.classList.remove("ativa"));

            const ativarSecao = document.querySelector(this.getAttribute("href"));

            if (ativarSecao) {
                ativarSecao.classList.add("ativa");
            }
        });
    });
}


function initCertificados() {
    const linksCertificados = document.querySelectorAll("#certificados ul li a");
    const imagemCertificado = document.getElementById("certificado-imagem");
    const descricaoCertificado = document.getElementById("certificado-descricao");

    linksCertificados.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Obtém o caminho da imagem e o texto do link
            const caminhoImagem = this.getAttribute("data-certificado");
            const textoLink = this.textContent;

            // Atualiza a imagem e a descrição
            updateCertificadoDisplay(imagemCertificado, descricaoCertificado, caminhoImagem, textoLink);
        });
    });
}

function resetLinksAndSections(links, secoes) {
    links.forEach((link) => link.classList.remove("selecionado"));
    secoes.forEach((secao) => secao.classList.remove("ativa"));
}

/**
 * Função para exibir a seção correspondente ao link clicado.
 * @param {string} target - O ID da seção a ser exibida.
 */
function showSection(target) {
    const secao = document.querySelector(target);
    if (secao) {
        secao.classList.add("ativa");
    }
}

/**
 * Função para atualizar a exibição do certificado.
 * @param {HTMLElement} imagemCertificado - Elemento de imagem do certificado.
 * @param {HTMLElement} descricaoCertificado - Elemento de descrição do certificado.
 * @param {string} caminhoImagem - Caminho da imagem do certificado.
 * @param {string} textoLink - Texto do link do certificado.
 */
function updateCertificadoDisplay(imagemCertificado, descricaoCertificado, caminhoImagem, textoLink) {
    imagemCertificado.src = caminhoImagem;
    imagemCertificado.style.display = "block"; // Exibe a imagem
    descricaoCertificado.textContent = textoLink;
}