// js/receitas.js
document.addEventListener('DOMContentLoaded', () => {

    // A lista de receitas com o caminho correto para as imagens na pasta "img/"
    const RECIPES = [
      {id:'panqueca-banana', title:'Panqueca de Banana', image:'img/panqueca-banana.png', /* ... (restante dos dados) */},
      {id:'overnight-oats', title:'Overnight Oats', image:'img/overnight-oats.png', /* ... */},
      {id:'geleia-casca-maca', title:'Geleia de Casca de Maçã', image:'img/geleia-casca-maca.png', /* ... */},
      {id:'bolo-mingau-milho', title:'Bolo de Mingau de Milho', image:'img/bolo-mingau-milho.png', /* ... */},
      {id:'torrada-abacate', title:'Torrada com Abacate', image:'img/torrada-abacate.png', /* ... */},
      {id:'vitamina-casca-banana', title:'Vitamina com Casca de Banana', image:'img/vitamina-casca-banana.png', /* ... */},
      {id:'arroz-cremoso', title:'Arroz Cremoso', image:'img/arroz-cremoso.png', /* ... */},
      {id:'risoto-talhos', title:'Risoto de Talos', image:'img/risoto-talhos.png', /* ... */},
      {id:'quiche-vegetais', title:'Quiche de Vegetais', image:'img/quiche-vegetais.png', /* ... */},
      {id:'salada-quinoa-legumes', title:'Salada de Quinoa e Legumes', image:'img/salada-quinoa-legumes.png', /* ... */},
      {id:'panini-vegetal', title:'Panini Vegetal', image:'img/panini-vegetal.png', /* ... */},
      {id:'omelete-casca-abobrinha', title:'Omelete com Casca de Abobrinha', image:'img/omelete-casca-abobrinha.png', /* ... */},
      {id:'lanche-hummus', title:'Lanche com Hummus', image:'img/lanche-hummus.png', /* ... */},
      {id:'tapioca-queijo', title:'Tapioca com Queijo', image:'img/tapioca-queijo.png', /* ... */},
      {id:'bolinho-arroz', title:'Bolinho de Arroz', image:'img/bolinho-arroz.png', /* ... */},
      {id:'chips-casca-batata', title:'Chips de Casca de Batata', image:'img/chips-casca-batata.png', /* ... */},
      {id:'bolinho-casca-maca', title:'Bolinho com Casca de Maçã', image:'img/bolinho-casca-maca.png', /* ... */},
      {id:'torrada-talhos', title:'Torrada com Talos', image:'img/torrada-talhos.png', /* ... */},
      {id:'mousse-casca-laranja', title:'Mousse com Casca de Laranja', image:'img/mousse-casca-laranja.png', /* ... */},
      {id:'bolo-casca-laranja', title:'Bolo com Casca de Laranja', image:'img/bolo-casca-laranja.png', /* ... */},
      {id:'mousse-chia-cacau', title:'Mousse de Chia e Cacau', image:'img/mousse-chia-cacau.png', /* ... */},
      {id:'peras-assadas', title:'Peras Assadas', image:'img/peras-assadas.png', /* ... */},
      {id:'brigadeiro-casca-banana', title:'Brigadeiro com Casca de Banana', image:'img/brigadeiro-casca-banana.png', /* ... */},
      {id:'torta-casca-banana', title:'Torta de Casca de Banana', image:'img/torta-casca-banana.png', /* ... */},
      {id:'marmita-lentilha', title:'Marmita de Lentilha', image:'img/marmita-lentilha.png', /* ... */},
      {id:'marmita-graoselegumes', title:'Marmita de Grãos e Legumes', image:'img/marmita-graoselegumes.png', /* ... */},
      {id:'marmita-frango', title:'Marmita de Frango', image:'img/marmita-frango.png', /* ... */},
      {id:'marmita-tofu', title:'Marmita de Tofu', image:'img/marmita-tofu.png', /* ... */},
      {id:'marmita-frango-abobora', title:'Marmita de Frango e Abóbora', image:'img/marmita-frango-abobora.png', /* ... */},
      {id:'marmita-arroz-integral-legumes', title:'Marmita de Arroz Integral e Legumes', image:'img/marmita-arroz-integral-legumes.png', /* ... */},
      {id:'sopa-talhos', title:'Sopa de Talos', image:'img/sopa-talhos.png', /* ... */},
      {id:'risoto-abobora', title:'Risoto de Abóbora', image:'img/risoto-abobora.png', /* ... */},
      {id:'berinjela-recheada', title:'Berinjela Recheada', image:'img/berinjela-recheada.png', /* ... */},
      {id:'caldo-legumes', title:'Caldo de Legumes', image:'img/caldo-legumes.png', /* ... */},
      {id:'pesto-talhos-brocolis', title:'Pesto de Talos de Brócolis', image:'img/pesto-talhos-brocolis.png', /* ... */},
      {id:'nhoque-abobora', title:'Nhoque de Abóbora', image:'img/nhoque-abobora.png', /* ... */},
      // Adicione o restante dos dados de cada receita aqui...
    ];
});

    // --- 2. DADOS DOS FILTROS ---
    const FILTERS = ['cafe','jantar','lanche','vegetariana','vegano','sem_gluten', 'aproveitamento'];

    // --- 3. ELEMENTOS DO DOM (PÁGINA) ---
    const searchInput = document.getElementById('searchInput');
    const filtersContainer = document.getElementById('filters');
    const recipesListContainer = document.getElementById('recipesList');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Funções (createFilterChips, renderRecipes, openModal, closeModal)
    function createFilterChips() {
        FILTERS.forEach(filter => {
            const button = document.createElement('button');
            button.className = 'filter-chip';
            button.textContent = filter.replace('_',' ');
            button.dataset.filter = filter;
            button.onclick = () => { 
                button.classList.toggle('active'); 
                renderRecipes(); 
            };
            filtersContainer.appendChild(button);
        });
    }

    function renderRecipes() {
        const query = searchInput.value.trim().toLowerCase();
        const activeFilters = Array.from(document.querySelectorAll('.filter-chip.active')).map(el => el.dataset.filter);
        
        recipesListContainer.innerHTML = '';

        const filteredRecipes = RECIPES.filter(recipe => {
            const searchString = `${recipe.title} ${recipe.desc} ${recipe.tags.join(' ')} ${recipe.ingredients.join(' ')}`.toLowerCase();
            const matchesQuery = searchString.includes(query);
            const matchesFilters = activeFilters.every(filter => (
                recipe.type === filter || (recipe.tags && recipe.tags.includes(filter))
            ));
            return matchesQuery && matchesFilters;
        });

        if (filteredRecipes.length === 0) {
            recipesListContainer.innerHTML = '<div class="no-results">Nenhuma receita encontrada.</div>';
            return;
        }

        filteredRecipes.forEach(r => {
            const recipeCard = document.createElement('article');
            recipeCard.className = 'card';
            recipeCard.onclick = () => openModal(r.id);
            recipeCard.innerHTML = `
                <img src="${r.image}" alt="${r.title}">
                <div class="content">
                    <h4 class="k">${r.title}</h4><div class="desc">${r.desc}</div>
                    <div class="meta"><span>⏱ ${r.time} min • ${r.difficulty}</span><span class="badge-impact">♻ ${r.impact.wasteAvoided_g}g</span></div>
                    <div class="card-footer"><div class="tag-list">${[r.type, ...r.tags].join(', ')}</div></div>
                </div>`;
            recipesListContainer.appendChild(recipeCard);
        });
    }

    function openModal(id) {
        const recipe = RECIPES.find(r => r.id === id);
        if (!recipe) return;

        document.getElementById('modalTitle').textContent = recipe.title;
        document.getElementById('modalImage').src = recipe.image;
        document.getElementById('modalDesc').textContent = recipe.desc;
        document.getElementById('modalTime').textContent = `⏱ ${recipe.time} min`;
        document.getElementById('modalDiff').textContent = `Nível: ${recipe.difficulty}`;
        document.getElementById('modalYield').textContent = `Rende: ${recipe.yield}`;
        document.getElementById('modalImpact').textContent = `♻ ${recipe.impact.wasteAvoided_g}g evitados`;
        
        const createListItems = (items) => items.map(i => `<li>${i}</li>`).join('');
        document.getElementById('modalIngredients').innerHTML = createListItems(recipe.ingredients);
        document.getElementById('modalSteps').innerHTML = createListItems(recipe.steps);
        document.getElementById('modalTips').innerHTML = createListItems(recipe.tips);
        
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
    }

    // --- 4. INICIALIZAÇÃO E EVENTOS ---
    createFilterChips();
    renderRecipes();
    searchInput.addEventListener('input', renderRecipes);
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});