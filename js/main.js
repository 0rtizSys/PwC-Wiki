// =====================
// DATA - Seeds
// =====================
const seeds = [
    {
        name: "Wheat", type: "Crop", cost: 20, desc: "A basic crop, great for beginners.", img: "assets/images/wheat.png",
        stats: { valuePerKg: 15, avgWeight: "3.00kg", growthTime: "4.50 sec", avgProfitHarvest: 25, avgProfitMin: "333 SC/Min." },
        about: "Wheat is the staple crop for any beginner farmer. It grows quickly and provides a steady income, making it the perfect starting point for learning the ropes of agriculture. Despite its low value, its rapid growth cycle means you can harvest it frequently."
    },
    {
        name: "Potato", type: "Crop", cost: 40, desc: "A reliable crop with decent yield.", img: "assets/images/potato.png",
        stats: { valuePerKg: 30, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Potatoes are hearty and reliable. They take a bit more investment than wheat but yield a significantly higher value per kilogram. A solid choice for farmers looking to expand their operations."
    },
    {
        name: "Carrot", type: "Crop", cost: 80, desc: "Fast growing and easy to harvest.", img: "assets/images/carrot.png",
        stats: { valuePerKg: 110, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Carrots offer a huge jump in value per kilogram compared to early crops. They are bright, nutritious, and very rewarding for those willing to pay the higher seed cost."
    },
    {
        name: "Bush", type: "Crop", cost: 100, desc: "A simple bush crop.", img: "assets/images/tree.png",
        stats: { valuePerKg: 250, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Bushes are easy to maintain and provide a very respectable value. They represent the transition from basic ground crops to more permanent agricultural structures."
    },
    {
        name: "Tree", type: "Crop", cost: 200, desc: "Slow but produces a lot of resources.", img: "assets/images/now_tree.png",
        stats: { valuePerKg: 250, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "A standard tree that requires patience but offers excellent returns. Once fully grown, trees serve as long-term investments that continually produce resources."
    },
    {
        name: "Apple", type: "Harvestable", cost: 1000, desc: "A fruit tree with decent profit.", img: "assets/images/apple.png",
        stats: { valuePerKg: 100, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Apple trees are the first major step into fruit harvesting. While the cost is steep, the steady supply of apples ensures a reliable stream of revenue over time."
    },
    {
        name: "Onion", type: "Harvestable", cost: 1200, desc: "Produces fruit with high weight.", img: "assets/images/onio.png",
        stats: { valuePerKg: 1200, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Onions are incredibly valuable per kilogram. They have a sharp flavor and a similarly sharp impact on your farm's profitability. An excellent mid-tier crop."
    },
    {
        name: "Pumpkin", type: "Crop", cost: 500, desc: "A seasonal crop with good value.", img: "assets/images/pumkin.png",
        stats: { valuePerKg: 200, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Pumpkins are heavy and valuable. They require ample space but reward the farmer with massive harvests that look great and sell for a solid price."
    },
    {
        name: "Strawberry", type: "Harvestable", cost: 1500, desc: "A fruit with a 16.67 sec growth time.", img: "assets/images/strawberry.png",
        stats: { valuePerKg: 200, avgWeight: "N/A", growthTime: "16.67 sec", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Strawberries grow remarkably fast for a harvestable plant. Their sweet taste makes them a favorite, and their rapid growth cycle ensures you're never waiting long for a payout."
    },
    {
        name: "Blueberry", type: "Harvestable", cost: 1700, desc: "Small but profitable fruit.", img: "assets/images/blueberry.png",
        stats: { valuePerKg: 250, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Blueberry bushes yield numerous small fruits that add up quickly in value. They are robust and provide a consistent harvest once matured."
    },
    {
        name: "Tomato", type: "Crop", cost: 2000, desc: "A versatile crop with solid returns.", img: "assets/images/tomato.png",
        stats: { valuePerKg: 500, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Tomatoes are a high-value crop that bridges the gap between mid-tier and high-tier farming. Their high value per kilogram makes them highly sought after."
    },
    {
        name: "Grape", type: "Harvestable", cost: 3000, desc: "Produces clusters of fruit.", img: "assets/images/grapew.png",
        stats: { valuePerKg: 600, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Grapes grow in large, heavy clusters. Cultivating a vineyard requires significant upfront capital, but the aesthetic and financial rewards are unmatched at this stage."
    },
    {
        name: "Bamboo", type: "Crop", cost: 3400, desc: "Fast growing crop with bulk yield.", img: "assets/images/bamboo.png",
        stats: { valuePerKg: 400, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Bamboo is famous for its incredible growth speed. It can be harvested in bulk, providing excellent utility and steady profits for the dedicated farmer."
    },
    {
        name: "Corn", type: "Harvestable", cost: 3800, desc: "A classic crop with good weight.", img: "assets/images/corn.png",
        stats: { valuePerKg: 700, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Corn stalks grow tall and produce heavy ears of corn. They are a staple of large-scale farming operations and offer a very high value per kilogram."
    },
    {
        name: "Cactus", type: "Harvestable", cost: 4000, desc: "Thrives in tough conditions.", img: "assets/images/cactus.png",
        stats: { valuePerKg: 1000, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "Cacti are incredibly resilient and require minimal attention. Despite their thorny exterior, the fruits and materials harvested from them fetch a premium price."
    },
    {
        name: "Pineapple", type: "Harvestable", cost: 5000, desc: "Tropical fruit with good value/kg.", img: "assets/images/pineapple.png",
        stats: { valuePerKg: 900, avgWeight: "N/A", growthTime: "N/A", avgProfitHarvest: "N/A", avgProfitMin: "N/A" },
        about: "A beautiful tropical plant that produces a single, highly valuable fruit. Cultivating pineapples is a mark of a successful, advanced agricultural setup."
    },
    {
        name: "Pepper", type: "Harvestable", cost: 10000, desc: "High value fruit, 75 sec growth time.", img: "assets/images/pepper.png",
        stats: { valuePerKg: 1500, avgWeight: "5.00kg", growthTime: "75.00 sec", avgProfitHarvest: 7500, avgProfitMin: "6,000 SC/Min." },
        about: "Peppers are a massive jump in profitability. With a growth time of 75 seconds and heavy yields, a field of peppers will rapidly multiply your wealth."
    },
    {
        name: "Banana", type: "Harvestable", cost: 12000, desc: "Heavy fruit with great profit.", img: "assets/images/banana.png",
        stats: { valuePerKg: 4500, avgWeight: "6.00kg", growthTime: "N/A", avgProfitHarvest: 27000, avgProfitMin: "N/A" },
        about: "Banana trees are a tropical powerhouse. The fruits are incredibly heavy and sell for massive sums, making each harvest a lucrative event."
    },
    {
        name: "Watermelon", type: "Crop", cost: 15000, desc: "One of the heaviest crops available.", img: "assets/images/watermelon.png",
        stats: { valuePerKg: 5000, avgWeight: "4.00kg", growthTime: "N/A", avgProfitHarvest: 5000, avgProfitMin: "N/A" },
        about: "Watermelons are visually impressive and financially rewarding. They take up space but their high weight and value per kilogram make them an elite crop."
    },
    {
        name: "Coconut", type: "Harvestable", cost: 20000, desc: "A tropical fruit with high yield.", img: "assets/images/mushroom.png",
        stats: { valuePerKg: 9500, avgWeight: "6.00kg", growthTime: "N/A", avgProfitHarvest: 57000, avgProfitMin: "N/A" },
        about: "Coconut palms are the quintessential tropical harvest. They drop extremely heavy coconuts that are highly prized, providing a massive boost to your income."
    },
    {
        name: "Cacao", type: "Harvestable", cost: 30000, desc: "Premium crop, 16,000 SC/Min profit.", img: "assets/images/coconut.png",
        stats: { valuePerKg: 10000, avgWeight: "4.00kg", growthTime: "150.00 sec", avgProfitHarvest: 40000, avgProfitMin: "16,000 SC/Min." },
        about: "Cacao is an exotic, premium plant. Its beans are essential for luxury goods, meaning the market is always willing to pay top dollar for a successful harvest."
    },
    {
        name: "Mushroom", type: "Crop", cost: 40000, desc: "Rare crop with massive profit potential.", img: "assets/images/cacao.png",
        stats: { valuePerKg: 20000, avgWeight: "7.00kg", growthTime: "160.00 sec", avgProfitHarvest: 100000, avgProfitMin: "37,500 SC/Min." },
        about: "Giant mushrooms are rare and incredibly heavy. They thrive in specific conditions and offer some of the highest profit margins in the entire game."
    },
    {
        name: "Lotus", type: "Harvestable", cost: 60000, desc: "Exotic plant, 32,432 SC/Min profit.", img: "assets/images/Lotus.png",
        stats: { valuePerKg: 25000, avgWeight: "4.00kg", growthTime: "185.00 sec", avgProfitHarvest: 100000, avgProfitMin: "32,432 SC/Min." },
        about: "The Lotus is an aquatic marvel. Growing it requires an elite setup, but its immense value per kilogram and breathtaking beauty make it an ultimate endgame crop."
    },
    {
        name: "Lemon", type: "Harvestable", cost: 500000, desc: "The most expensive seed in the game.", img: "assets/images/lemon.png",
        stats: { valuePerKg: 100000, avgWeight: "1.50kg", growthTime: "330.00 sec", avgProfitHarvest: 150000, avgProfitMin: "27,273 SC/Min." },
        about: "The Lemon tree is the crown jewel of any master farmer. With an astronomical seed cost, it represents the absolute pinnacle of agricultural achievement and wealth."
    },
    {
        name:"Glitch", type: "Harvestable", cost: "???", desc: "Glitch is a extremely rare fruit that only appears on [Unknow] lorem ipsum...", img: "assets/images/glitch.png",
        stats: { valuePerKg: 1111, avgWeight: "4.7kg", growthTime: "--- secs", avgProfitHarvest: 1111, avgProfitMin: "1100 SC/Min" },
        about: "Lorem ipsum insert description..."
    }
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
                        
                        <button onclick="navigateToSeed('${seed.name}')" class="seed-btn">Learn more</button>
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

function navigateToSeed(seedName) {
    const seed = seeds.find(s => s.name === seedName);
    if (!seed) return;

    const content = document.getElementById('content');
    
    const statsHtml = seed.stats ? `
        <div class="seed-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; margin-top: 20px; margin-bottom: 25px; background: rgba(0,0,0,0.2); padding: 20px; border-radius: 12px; border: 1px solid #3a3a3a;">
            <div class="stat-box">
                <span style="display: block; color: #848484; font-size: 0.9rem; margin-bottom: 5px;">Value/kg</span>
                <strong style="color: #fff; font-size: 1.1rem;">${seed.stats.valuePerKg !== "N/A" ? seed.stats.valuePerKg.toLocaleString() + ' SC' : 'N/A'}</strong>
            </div>
            <div class="stat-box">
                <span style="display: block; color: #848484; font-size: 0.9rem; margin-bottom: 5px;">Avg. Weight</span>
                <strong style="color: #fff; font-size: 1.1rem;">${seed.stats.avgWeight}</strong>
            </div>
            <div class="stat-box">
                <span style="display: block; color: #848484; font-size: 0.9rem; margin-bottom: 5px;">Growth Time</span>
                <strong style="color: #fff; font-size: 1.1rem;">${seed.stats.growthTime}</strong>
            </div>
            <div class="stat-box">
                <span style="display: block; color: #848484; font-size: 0.9rem; margin-bottom: 5px;">Avg. Profit/Harvest</span>
                <strong style="color: #fff; font-size: 1.1rem;">${seed.stats.avgProfitHarvest !== "N/A" ? seed.stats.avgProfitHarvest.toLocaleString() + ' SC' : 'N/A'}</strong>
            </div>
            <div class="stat-box">
                <span style="display: block; color: #848484; font-size: 0.9rem; margin-bottom: 5px;">Avg. Profit/Min.</span>
                <strong style="color: #fff; font-size: 1.1rem;">${seed.stats.avgProfitMin}</strong>
            </div>
        </div>
    ` : '';

    content.innerHTML = `
        <section class="hero seed-details-hero">
            <button onclick="navigateTo('seeds')" class="seed-btn" style="background-color: transparent; color: var(--text-color); border: 1px solid #3a3a3a; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-size: 14px; margin-bottom: 20px; transition: border-color 0.3s ease, color 0.3s ease;">⬅ Back to Seeds</button>
            <div style="display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap;">
                <div style="background: rgba(255,255,255,0.02); padding: 30px; border-radius: 16px; border: 1px solid #2a2a2a; display: flex; justify-content: center; align-items: center; min-width: 250px;">
                    <img class="seed-img" src="${seed.img}" alt="${seed.name}" style="width: 250px; height: auto; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));">
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <div class="seed-card-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span class="seed-type ${seed.type.toLowerCase()}" style="padding: 5px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">${seed.type}</span>
                        <span class="seed-cost" style="color: #ffd700; font-weight: bold; font-size: 1.1rem;">💰 ${seed.cost.toLocaleString()} SC</span>
                    </div>
                    <h2 style="font-size: 3rem; margin-top: 0; margin-bottom: 15px; background: linear-gradient(90deg, #fff, #aaa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${seed.name}</h2>
                    <p style="color: #a0a0a0; font-size: 1.2rem; margin-bottom: 20px; border-left: 4px solid #4a4a4a; padding-left: 15px; line-height: 1.5;">${seed.desc}</p>
                    
                    ${statsHtml}

                    <h3 style="margin-top: 30px; margin-bottom: 15px; border-bottom: 1px solid #3a3a3a; padding-bottom: 10px; color: #e0e0e0;">About ${seed.name}</h3>
                    <p style="line-height: 1.7; color: #b0b0b0; font-size: 1.05rem;">
                        ${seed.about || "Detailed information about this plant will be added soon."}
                    </p>
                </div>
            </div>
        </section>
    `;
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