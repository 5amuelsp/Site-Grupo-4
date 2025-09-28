// js/receitas.js

// 1. NOSSOS DADOS (SIMULANDO UM BANCO DE DADOS)
const receitas = [
    { id: 1, nome: "Torta de Casca de Banana", imagem: "https://via.placeholder.com/300x200.png?text=Torta+Banana", tags: ["aproveitamento", "doce"], custo: "baixo" },
    { id: 2, nome: "Pesto de Talos de Brócolis", imagem: "https://via.placeholder.com/300x200.png?text=Pesto+Brocolis", tags: ["aproveitamento", "salgado"], custo: "baixo" },
    { id: 3, nome: "Risoto de Abóbora", imagem: "https://via.placeholder.com/300x200.png?text=Risoto+Abobora", tags: ["salgado"], custo: "medio" },
    { id: 4, nome: "Chips de Casca de Batata", imagem: "https://via.placeholder.com/300x200.png?text=Chips+Batata", tags: ["aproveitamento", "salgado"], custo: "baixo" },
    { id: 5, nome: "Geleia de Casca de Maçã", imagem: "https://via.placeholder.com/300x200.png?text=Geleia+Maçã", tags: ["aproveitamento", "doce"], custo: "baixo" },
    { id: 6, nome: "Caldo de Legumes com Talos", imagem: "https://via.placeholder.com/300x200.png?text=Caldo+Legumes", tags: ["aproveitamento", "salgado"], custo: "baixo" }
];


// 2. PEGAR OS ELEMENTOS DO HTML
const receitasContainer = document.getElementById('receitas-container');
const barraPesquisa = document.getElementById('barra-pesquisa');
const checkboxesFiltro = document.querySelectorAll('.filtro');

// 3. FUNÇÃO PARA MOSTRAR AS RECEITAS NA TELA
function renderizarReceitas(listaReceitas) {
    receitasContainer.innerHTML = '';
    if (listaReceitas.length === 0) {
        receitasContainer.innerHTML = '<p class="nenhuma-receita">Nenhuma receita encontrada. Tente outros filtros!</p>';
        return;
    }
    listaReceitas.forEach(receita => {
        const card = `
            <div class="card-receita">
                <img src="${receita.imagem}" alt="${receita.nome}">
                <div class="card-receita-info">
                    <h3>${receita.nome}</h3>
                    <div class="tags">
                        ${receita.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        receitasContainer.innerHTML += card;
    });
}

// 4. FUNÇÃO PRINCIPAL QUE APLICA BUSCA E FILTROS
function aplicarFiltros() {
    const termoBusca = barraPesquisa.value.toLowerCase();
    const filtrosAtivos = Array.from(checkboxesFiltro)
                               .filter(check => check.checked)
                               .map(check => check.value);

    let receitasFiltradas = receitas.filter(receita => {
        const nomeMatch = receita.nome.toLowerCase().includes(termoBusca);
        const tagsMatch = filtrosAtivos.length === 0 || filtrosAtivos.every(filtro => {
            return receita.tags.includes(filtro) || receita.custo === filtro;
        });
        return nomeMatch && tagsMatch;
    });
    renderizarReceitas(receitasFiltradas);
}

// 5. ADICIONAR "OUVINTES" DE EVENTOS
barraPesquisa.addEventListener('keyup', aplicarFiltros);
checkboxesFiltro.forEach(check => check.addEventListener('change', aplicarFiltros));

// 6. MOSTRAR TODAS AS RECEITAS QUANDO A PÁGINA CARREGA
window.addEventListener('load', () => renderizarReceitas(receitas));