// =====================
// DATA - Seeds
// =====================
const seeds = [
    { name: "Wheat", type: "Crop", cost: 20, desc: "A basic crop, great for beginners.", img: "../../assets/images/wheat.png" },
    { name: "Potato", type: "Crop", cost: 40, desc: "A reliable crop with decent yield.", img: "../../assets/images/potato.png" },
    { name: "Carrot", type: "Crop", cost: 80, desc: "Fast growing and easy to harvest.", img: "../../assets/images/carrot.png" },
    { name: "Bush", type: "Crop", cost: 100, desc: "A simple bush crop.", img: "../../assets/images/tree.png" },
    { name: "Tree", type: "Crop", cost: 200, desc: "Slow but produces a lot of resources.", img: "../../assets/images/now_tree.png" },
    { name: "Apple", type: "Harvestable", cost: 1000, desc: "A fruit tree with decent profit.", img: "../../assets/images/apple.png" },
    { name: "Onion", type: "Harvestable", cost: 1200, desc: "Produces fruit with high weight.", img: "../../assets/images/onio.png" },
    { name: "Pumpkin", type: "Crop", cost: 500, desc: "A seasonal crop with good value.", img: "../../assets/images/pumkin.png" },
    { name: "Strawberry", type: "Harvestable", cost: 1500, desc: "A fruit with a 16.67 sec growth time.", img: "../../assets/images/strawberry.png" },
    { name: "Blueberry", type: "Harvestable", cost: 1700, desc: "Small but profitable fruit.", img: "../../assets/images/blueberry.png" },
    { name: "Tomato", type: "Crop", cost: 2000, desc: "A versatile crop with solid returns.", img: "../../assets/images/tomato.png" },
    { name: "Grape", type: "Harvestable", cost: 3000, desc: "Produces clusters of fruit.", img: "../../assets/images/grapew.png" },
    { name: "Bamboo", type: "Crop", cost: 3400, desc: "Fast growing crop with bulk yield.", img: "../../assets/images/bamboo.png" },
    { name: "Corn", type: "Harvestable", cost: 3800, desc: "A classic crop with good weight.", img: "../../assets/images/corn.png" },
    { name: "Cactus", type: "Harvestable", cost: 4000, desc: "Thrives in tough conditions.", img: "../../assets/images/cactus.png" },
    { name: "Pineapple", type: "Harvestable", cost: 5000, desc: "Tropical fruit with good value/kg.", img: "../../assets/images/pineapple.png" },
    { name: "Pepper", type: "Harvestable", cost: 10000, desc: "High value fruit, 75 sec growth time.", img: "../../assets/images/pepper.png" },
    { name: "Banana", type: "Harvestable", cost: 12000, desc: "Heavy fruit with great profit.", img: "../../assets/images/banana.png" },
    { name: "Watermelon", type: "Crop", cost: 15000, desc: "One of the heaviest crops available.", img: "../../assets/images/watermelon.png" },
    { name: "Coconut", type: "Harvestable", cost: 20000, desc: "A tropical fruit with high yield.", img: "../../assets/images/mushroom.png" },
    { name: "Cacao", type: "Harvestable", cost: 30000, desc: "Premium crop, 16,000 SC/Min profit.", img: "../../assets/images/coconut.png" },
    { name: "Mushroom", type: "Crop", cost: 40000, desc: "Rare crop with massive profit potential.", img: "../../assets/images/cacao.png" },
    { name: "Lotus", type: "Harvestable", cost: 60000, desc: "Exotic plant, 32,432 SC/Min profit.", img: "../../assets/images/Lotus.png" },
    { name: "Lemon", type: "Harvestable", cost: 500000, desc: "The most expensive seed in the game.", img: "../../assets/images/lemon.png" },
];

// =====================
// PAGES - contenido de cada pagina
// =====================
const pages = {

    // Pagina de inicio (hero)
    home: `
        <section class="hero">
            <h2>Plant with Code [BETA]</h2>
            <p>Plant with Coding is a game created by the Roblox group
            Lated Graham, founded by TheEmreTutuk, which is based
            on Grow a Garden but with Luau coding.</p>
            <img class="imgg" src="assets/images/image.webp" alt="img">
            <button onclick="navigateTo('seeds')">View Seeds</button>
        </section>
    `,

    // Pagina de seeds - se genera dinamicamente desde el array
    seeds: `
    <section class="hero">
        <h2>Seeds</h2>
        <p>All available seeds in Plant with Code.</p>
    </section>
    <div class="seeds-grid">
        ${seeds.map(seed => `
            <div class="seed-card">
                <div class="seed-info">
                    <div class="seed-card-header">
                        <span class="seed-type ${seed.type.toLowerCase()}">${seed.type}</span>
                        <span class="seed-cost">${seed.cost.toLocaleString()} SC</span>
                        <h2>${seed.name}</h2>
                    </div>
                    <p class="seed-desc"> ${seed.desc}</p>
                    <div class="seed-footer">
                        
                        <button onclick="alert('${seed.name} page coming soon!')" class="seed-btn">Learn more</button>
                    </div>
                </div>
                <img class="seed-img" src="${seed.img}" alt="${seed.name}">
            </div>
        `).join('')}
    </div>
`,
};

// =====================
// NAVEGACION - cambia el contenido del main
// =====================
function navigateTo(page) {
    const content = document.getElementById('content');

    // Si la pagina no existe, mostrar home
    if (!pages[page]) {
        content.innerHTML = pages['home'];
        return;
    }

    content.innerHTML = pages[page];
}

// =====================
// EVENTOS - escucha clicks en los links del sidebar y navbar
// =====================
document.addEventListener('DOMContentLoaded', () => {

    // Cargar home al inicio
    navigateTo('home');

    // Escuchar todos los links con data-page
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // evita que el href recargue la pagina
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
});