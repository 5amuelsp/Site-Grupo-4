// js/compras.js

document.addEventListener('DOMContentLoaded', () => {

  // Lista de produtos da loja
  const PRODUCTS = [
    {
      id:'ebook-sustentavel', 
      title:'E-book: Guia da Cozinha Sustentável (PDF)', 
      price: 24.90, 
      desc:'Nosso e-book completo com mais de 50 receitas, planilhas de compras e dicas de aproveitamento integral de alimentos.'
    },
    {
      id:'kit-cozinha-zero', 
      title:'Kit Cozinha Zero-Desperdício', 
      price: 129.90, 
      desc:'Um kit essencial com panos de cera de abelha, potes herméticos de vidro e escovas de fibra de coco para limpeza.'
    },
    {
      id:'workshop-online', 
      title:'Workshop Online: Aproveitamento Criativo', 
      price: 89.90, 
      desc:'Acesso a um evento gravado com 3 horas de demonstrações práticas e criativas para não desperdiçar mais nada na cozinha.'
    }
  ];

  /**
   * Função para renderizar os produtos na tela
   */
  function renderShop(){
    const container = document.getElementById('shopGrid');
    if (!container) return; // Se não encontrar o container, para a execução

    container.innerHTML = ''; // Limpa a área
    
    // Transforma o container num grid
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    container.style.gap = '30px';

    PRODUCTS.forEach(p => {
      const productCard = document.createElement('article');
      productCard.className = 'card'; // Reutilizando a classe .card das receitas

      productCard.innerHTML = `
        <div class="content">
          <h4 class="k">${p.title}</h4>
          <p class="desc">${p.desc}</p>
          <div class="meta" style="font-size: 1.5rem; font-weight: bold; color: #1b5e20;">
            <span>R$ ${p.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <div style="margin-top: 15px; text-align: right;">
            <button class="btn-primary" onclick="addToCart('${p.id}')">Adicionar ao Carrinho</button>
          </div>
        </div>
      `;
      container.appendChild(productCard);
    });
  }

  /**
   * Adiciona um item ao carrinho (simulação com alert)
   * A função precisa ser global para ser chamada pelo onclick
   * @param {string} id - O ID do produto.
   */
  window.addToCart = function(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    
    alert(`Adicionado ao carrinho:\n${product.title}\nPreço: R$ ${product.price.toFixed(2).replace('.', ',')}`);
  }

  // Renderiza a loja assim que a página carregar
  renderShop();
});