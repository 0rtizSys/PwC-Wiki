// =====================
// STATE + CONSTANTS
// =====================
const STORAGE_KEYS = {
    theme: "pwcWikiTheme",
    language: "pwcWikiLanguage",
    pendingChanges: "pwcWikiPendingChanges",
    approvedData: "pwcWikiApprovedData",
    webhookUrl: "pwcWikiDiscordWebhookUrl",
};

const SUPPORTED_THEMES = new Set(["dark", "light"]);
const SUPPORTED_LANGUAGES = new Set(["es", "en"]);
const ENTITY_COLLECTIONS = new Set(["seeds", "gears", "contributors"]);
const CHANGE_TYPES = new Set(["add", "edit", "delete"]);
const IMAGE_FALLBACK = "assets/images/ph.png";

const i18n = {
    es: {
        appTitle: "PwC Wiki",
        home: "Inicio",
        seeds: "Semillas",
        gears: "Herramientas",
        contributors: "Colaboradores",
        extras: "Extras",
        discord: "Discord",
        menu: "Menu",
        openNavigation: "Abrir navegacion",
        toggleSidebar: "Alternar barra lateral",
        themeToggle: "Cambiar tema",
        languageToggle: "Cambiar idioma",
        displayControls: "Controles de visualizacion",
        darkMode: "Oscuro",
        lightMode: "Claro",
        heroTitle: "Plant with Code [BETA]",
        heroCopy: "Plant with Coding es un juego creado por el grupo de Roblox Lated Graham, fundado por TheEmreTutuk, basado en Grow a Garden pero con programacion Luau.",
        playGame: "Jugar Plant with Coding",
        seedsTitle: "Semillas",
        seedsCopy: "Todas las semillas disponibles en Plant with Code.",
        gearsTitle: "Herramientas",
        gearsCopy: "Todas las herramientas disponibles en Plant with Code.",
        learnMore: "Ver mas",
        costUnavailable: "No disponible",
        area: "Area",
        duration: "Duracion",
        backToSeeds: "Volver a semillas",
        valuePerKg: "Valor/kg",
        averageWeight: "Peso prom.",
        growthTime: "Tiempo de crecimiento",
        averageProfitHarvest: "Ganancia prom./cosecha",
        averageProfitMinute: "Ganancia prom./min.",
        about: "Acerca de {name}",
        missingAbout: "Pronto se agregara informacion detallada sobre esta planta.",
        contributorsTitle: "Colaboradores",
        contributorsCopy: "Filas de ejemplo listas para reemplazar con miembros reales de la comunidad.",
        avatar: "Avatar",
        name: "Nombre",
        role: "Rol",
        link: "Enlace",
        wikiFounder: "Fundador de la wiki",
        dataEditor: "Editor de datos",
        uiContributor: "Colaborador UI",
        contributorName: "Nombre del colaborador",
        robloxProfile: "Perfil de Roblox",
        profile: "Perfil",
        extrasTitle: "Extras",
        extrasCopy: "Tarjetas extra para informacion adicional de la wiki.",
        imageSlot: "Imagen pendiente",
        wikiAssistants: "Asistentes de la wiki",
        wikiAssistantsCopy: "El fundador recibio apoyo de una IA para el diseno web; la wiki NO fue hecha completamente con IA.",
        extraTitle: "Titulo extra {number}",
        extraCopy: "Contenido extra pendiente.",
        imageUnavailable: "Imagen no disponible",
        invalidRoute: "Ruta no encontrada",
    },
    en: {
        appTitle: "PwC Wiki",
        home: "Home",
        seeds: "Seeds",
        gears: "Gears",
        contributors: "Contributors",
        extras: "Extras",
        discord: "Discord",
        menu: "Menu",
        openNavigation: "Open navigation",
        toggleSidebar: "Toggle sidebar",
        themeToggle: "Toggle theme",
        languageToggle: "Change language",
        displayControls: "Display controls",
        darkMode: "Dark",
        lightMode: "Light",
        heroTitle: "Plant with Code [BETA]",
        heroCopy: "Plant with Coding is a game created by the Roblox group Lated Graham, founded by TheEmreTutuk, based on Grow a Garden but with Luau coding.",
        playGame: "Play Plant with Coding",
        seedsTitle: "Seeds",
        seedsCopy: "All available seeds in Plant with Code.",
        gearsTitle: "Gears",
        gearsCopy: "All available gears in Plant with Code.",
        learnMore: "Learn more",
        costUnavailable: "Unavailable",
        area: "Area",
        duration: "Duration",
        backToSeeds: "Back to seeds",
        valuePerKg: "Value/kg",
        averageWeight: "Avg. Weight",
        growthTime: "Growth Time",
        averageProfitHarvest: "Avg. Profit/Harvest",
        averageProfitMinute: "Avg. Profit/Min.",
        about: "About {name}",
        missingAbout: "Detailed information about this plant will be added soon.",
        contributorsTitle: "Contributors",
        contributorsCopy: "Example rows ready to replace with real community members.",
        avatar: "Avatar",
        name: "Name",
        role: "Role",
        link: "Link",
        wikiFounder: "Wiki Founder",
        dataEditor: "Data editor",
        uiContributor: "UI contributor",
        contributorName: "Contributor Name",
        robloxProfile: "Roblox Profile",
        profile: "Profile",
        extrasTitle: "Extras",
        extrasCopy: "Extra cards for additional wiki info.",
        imageSlot: "Image pending",
        wikiAssistants: "Wiki Assistants",
        wikiAssistantsCopy: "The founder received AI support for the web design; the wiki is NOT fully made with AI.",
        extraTitle: "Extra title {number}",
        extraCopy: "Pending extra content.",
        imageUnavailable: "Image unavailable",
        invalidRoute: "Route not found",
    },
};

let currentTheme = readStoredChoice(STORAGE_KEYS.theme, SUPPORTED_THEMES, "dark");
let currentLanguage = readStoredChoice(STORAGE_KEYS.language, SUPPORTED_LANGUAGES, "es");
let currentPage = "home";
let currentSeedName = "";

// =====================
// DATA
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
        name: "Coconut", type: "Harvestable", cost: 20000, desc: "A tropical fruit with high yield.", img: "assets/images/coconut.png",
        stats: { valuePerKg: 9500, avgWeight: "6.00kg", growthTime: "N/A", avgProfitHarvest: 57000, avgProfitMin: "N/A" },
        about: "Coconut palms are the quintessential tropical harvest. They drop extremely heavy coconuts that are highly prized, providing a massive boost to your income."
    },
    {
        name: "Cacao", type: "Harvestable", cost: 30000, desc: "Premium crop, 16,000 SC/Min profit.", img: "assets/images/cacao.png",
        stats: { valuePerKg: 10000, avgWeight: "4.00kg", growthTime: "150.00 sec", avgProfitHarvest: 40000, avgProfitMin: "16,000 SC/Min." },
        about: "Cacao is an exotic, premium plant. Its beans are essential for luxury goods, meaning the market is always willing to pay top dollar for a successful harvest."
    },
    {
        name: "Mushroom", type: "Crop", cost: 40000, desc: "Rare crop with massive profit potential.", img: "assets/images/mushroom.png",
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
        name: "Glitch", type: "Harvestable", cost: "N/A", desc: "Glitch is an extremely rare fruit that only appears on [Unknown]...", img: "assets/images/glitch.png",
        stats: { valuePerKg: 1111, avgWeight: "4.7kg", growthTime: "N/A secs", avgProfitHarvest: "N/A", avgProfitMin: "N/A SC/Min" },
        about: "Technically obtainable, but the obtain method is unknown."
    }
].map(normalizeSeed);

const gears = [
    { name: "Watering Can", cost: 100, effect: "Growth Speed +125%", area: "1x1", duration: "1 Min", img: IMAGE_FALLBACK },
    { name: "Fertilizer", cost: 750, effect: "Growth Speed +200%", area: "1x1", duration: "2 Min", img: IMAGE_FALLBACK },
    { name: "Sprinkler", cost: 1500, effect: "Growth Speed +150%", area: "3x3", duration: "10 Min", img: IMAGE_FALLBACK },
    { name: "SprinklerV2", cost: 5000, effect: "Growth Speed +200%", area: "5x5", duration: "15 Min", img: IMAGE_FALLBACK },
    { name: "SprinklerV3", cost: 20000, effect: "Growth Speed +300%", area: "7x7", duration: "20 Min", img: IMAGE_FALLBACK },
    { name: "Lightning Rod", cost: 30000, effect: "Attracts Lightning", area: "1x1", duration: "15 Min", img: IMAGE_FALLBACK },
].map(normalizeGear);

const contributors = [
    { name: "Zyre", roleKey: "wikiFounder", avatar: "assets/contribuitors/zyrepfp.jpg", url: "https://www.roblox.com/users/1622167860/profile", linkKey: "robloxProfile" },
    { nameKey: "contributorName", roleKey: "dataEditor", avatarText: "B", url: "", linkKey: "profile" },
    { nameKey: "contributorName", roleKey: "uiContributor", avatarText: "C", url: "", linkKey: "profile" },
].map(normalizeContributor);

const wikiData = { seeds, gears, contributors };
loadApprovedWikiData();

// =====================
// HELPERS
// =====================
function readStoredChoice(key, allowedValues, fallback) {
    try {
        const stored = localStorage.getItem(key);
        return allowedValues.has(stored) ? stored : fallback;
    } catch {
        return fallback;
    }
}

function safeText(value, fallback = "") {
    if (value === null || value === undefined) return fallback;
    return String(value).replace(/[\u0000-\u001f\u007f]/g, "").trim();
}

function safeNumber(value, fallback = "N/A") {
    if (value === "N/A") return value;
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : fallback;
}

function safeUrl(value, fallback = "") {
    const url = safeText(value);
    if (!url) return fallback;

    try {
        const parsed = new URL(url, window.location.href);
        if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.href;
    } catch {
        return fallback;
    }

    return fallback;
}

function safeAssetPath(value, fallback = IMAGE_FALLBACK) {
    const path = safeText(value, fallback);
    if (/^assets\/[\w./-]+\.(png|jpe?g|webp|gif)$/i.test(path)) return path;
    return fallback;
}

function normalizeType(type) {
    const normalized = safeText(type).toLowerCase();
    return normalized === "harvestable" ? "harvestable" : "crop";
}

function normalizeStats(stats = {}) {
    return {
        valuePerKg: safeNumber(stats.valuePerKg),
        avgWeight: safeText(stats.avgWeight, "N/A"),
        growthTime: safeText(stats.growthTime, "N/A"),
        avgProfitHarvest: safeNumber(stats.avgProfitHarvest),
        avgProfitMin: safeText(stats.avgProfitMin, "N/A"),
    };
}

function normalizeSeed(seed = {}) {
    return {
        id: toSlug(seed.id || seed.name),
        name: safeText(seed.name, "Unknown Seed"),
        type: normalizeType(seed.type),
        cost: safeNumber(seed.cost),
        desc: safeText(seed.desc),
        img: safeAssetPath(seed.img),
        stats: normalizeStats(seed.stats),
        about: safeText(seed.about),
    };
}

function normalizeGear(gear = {}) {
    return {
        id: toSlug(gear.id || gear.name),
        name: safeText(gear.name, "Unknown Gear"),
        cost: safeNumber(gear.cost),
        effect: safeText(gear.effect),
        area: safeText(gear.area, "N/A"),
        duration: safeText(gear.duration, "N/A"),
        img: safeAssetPath(gear.img),
    };
}

function normalizeContributor(contributor = {}) {
    return {
        id: toSlug(contributor.id || contributor.name || contributor.nameKey || contributor.avatarText),
        name: safeText(contributor.name),
        nameKey: safeText(contributor.nameKey),
        role: safeText(contributor.role),
        roleKey: safeText(contributor.roleKey),
        avatar: safeAssetPath(contributor.avatar, ""),
        avatarText: safeText(contributor.avatarText, "?").slice(0, 2).toUpperCase(),
        url: safeUrl(contributor.url),
        linkKey: safeText(contributor.linkKey),
    };
}

function normalizeEntity(collection, entity) {
    if (collection === "seeds") return normalizeSeed(entity);
    if (collection === "gears") return normalizeGear(entity);
    if (collection === "contributors") return normalizeContributor(entity);
    throw new Error("Unsupported entity collection.");
}

function normalizeCollection(collection, items) {
    if (!Array.isArray(items)) return [];
    return items.map(item => normalizeEntity(collection, item));
}

function toSlug(value) {
    return safeText(value, "item")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "item";
}

function cloneData(value) {
    return JSON.parse(JSON.stringify(value ?? null));
}

function loadApprovedWikiData() {
    try {
        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEYS.approvedData) || "{}");
        ENTITY_COLLECTIONS.forEach(collection => {
            if (!Array.isArray(storedData[collection])) return;
            const approvedItems = normalizeCollection(collection, storedData[collection]);
            wikiData[collection].splice(0, wikiData[collection].length, ...approvedItems);
        });
    } catch {
        // Corrupt local data is ignored so the bundled wiki remains usable.
    }
}

function saveApprovedWikiData() {
    localStorage.setItem(STORAGE_KEYS.approvedData, JSON.stringify(cloneData(wikiData)));
}

function t(key, params = {}) {
    const dictionary = i18n[currentLanguage] || i18n.es;
    const fallback = i18n.es[key] || key;
    return (dictionary[key] || fallback).replace(/\{(\w+)\}/g, (_, name) => safeText(params[name]));
}

function formatCost(cost) {
    if (typeof cost === "number") return `${cost.toLocaleString()} SC`;
    return t("costUnavailable");
}

function formatStatValue(value, suffix = "") {
    if (typeof value === "number") return `${value.toLocaleString()}${suffix}`;
    return safeText(value, "N/A");
}

function el(tag, options = {}, children = []) {
    const node = document.createElement(tag);

    Object.entries(options).forEach(([key, value]) => {
        if (value === null || value === undefined || value === false) return;

        if (key === "className") {
            node.className = safeText(value);
        } else if (key === "text") {
            node.textContent = safeText(value);
        } else if (key === "dataset") {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                node.dataset[dataKey] = safeText(dataValue);
            });
        } else if (key === "attrs") {
            Object.entries(value).forEach(([attr, attrValue]) => {
                if (attrValue === null || attrValue === undefined || attrValue === false) return;
                node.setAttribute(attr, safeText(attrValue));
            });
        }
    });

    children.filter(Boolean).forEach(child => {
        node.append(child instanceof Node ? child : document.createTextNode(safeText(child)));
    });

    return node;
}

function createButton(text, className, onClick) {
    const button = el("button", { className, text, attrs: { type: "button" } });
    button.addEventListener("click", onClick);
    return button;
}

function createImage(src, alt, className) {
    return el("img", {
        className,
        attrs: {
            src: safeAssetPath(src),
            alt: safeText(alt),
            loading: "lazy",
            decoding: "async",
        },
    });
}

function replaceChildren(target, children) {
    target.replaceChildren(...children.filter(Boolean));
}

// =====================
// RENDERING
// =====================
const renderers = {
    home: renderHomePage,
    seeds: renderSeedsPage,
    gears: renderGearsPage,
    contributors: renderContributorsPage,
    extras: renderExtrasPage,
};

function renderHero(title, copy, imageSrc = "", action = null) {
    const textColumn = el("div", { className: "hero-copy" }, [
        el("h2", { text: title }),
        el("p", { text: copy }),
    ]);

    if (action) textColumn.append(action);

    const children = [textColumn];
    if (imageSrc) children.push(createImage(imageSrc, title, "imgg"));

    return el("section", { className: "hero" }, children);
}

function renderHomePage() {
    const action = el("a", {
        className: "primary-action",
        text: t("playGame"),
        attrs: {
            href: "https://www.roblox.com/games/122761763017872/Plant-with-Coding",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    });

    return [renderHero(t("heroTitle"), t("heroCopy"), "assets/images/image.webp", action)];
}

function renderSeedsPage() {
    return [
        renderHero(t("seedsTitle"), t("seedsCopy")),
        el("div", { className: "seeds-grid" }, wikiData.seeds.map(renderSeedCard)),
    ];
}

function renderSeedCard(seed) {
    const typeBadge = el("span", { className: `seed-type ${seed.type}`, text: seed.type });
    const costBadge = el("span", { className: "seed-cost", text: formatCost(seed.cost) });
    const title = el("h2", { text: seed.name });
    const header = el("div", { className: "seed-card-header" }, [typeBadge, costBadge, title]);
    const description = el("p", { className: "seed-desc", text: seed.desc });
    const button = createButton(t("learnMore"), "seed-btn", () => navigateToSeed(seed.name));
    const footer = el("div", { className: "seed-footer" }, [button]);
    const info = el("div", { className: "seed-info" }, [header, description, footer]);

    return el("article", { className: "seed-card" }, [
        info,
        createImage(seed.img, seed.name, "seed-img"),
    ]);
}

function renderGearsPage() {
    return [
        renderHero(t("gearsTitle"), t("gearsCopy")),
        el("div", { className: "seeds-grid" }, wikiData.gears.map(renderGearCard)),
    ];
}

function renderGearCard(gear) {
    const header = el("div", { className: "seed-card-header" }, [
        el("span", { className: "seed-cost", text: formatCost(gear.cost) }),
        el("h2", { text: gear.name }),
    ]);
    const footer = el("div", { className: "seed-footer" }, [
        el("span", { className: "seed-type crop", text: `${t("area")}: ${gear.area}` }),
        el("span", { className: "seed-type harvestable", text: `${t("duration")}: ${gear.duration}` }),
    ]);

    return el("article", { className: "seed-card" }, [
        el("div", { className: "seed-info" }, [
            header,
            el("p", { className: "seed-desc", text: gear.effect }),
            footer,
        ]),
        createImage(gear.img, gear.name, "seed-img"),
    ]);
}

function renderContributorsPage() {
    const table = el("table", { className: "contributors-table" }, [
        el("thead", {}, [
            el("tr", {}, ["avatar", "name", "role", "link"].map(key => el("th", { text: t(key) }))),
        ]),
        el("tbody", {}, wikiData.contributors.map(renderContributorRow)),
    ]);

    return [
        el("section", { className: "page-panel" }, [
            el("h2", { className: "page-title", text: t("contributorsTitle") }),
            el("p", { className: "page-subtitle", text: t("contributorsCopy") }),
            el("div", { className: "contributors-table-wrap" }, [table]),
        ]),
    ];
}

function renderContributorRow(contributor) {
    const avatar = contributor.avatar
        ? createImage(contributor.avatar, contributor.name || t(contributor.nameKey), "contributor-avatar-image")
        : el("span", { className: "contributor-avatar", text: contributor.avatarText });

    const displayName = contributor.name || t(contributor.nameKey);
    const displayRole = contributor.role || t(contributor.roleKey);
    const linkText = t(contributor.linkKey || "profile");
    const link = contributor.url
        ? el("a", { text: linkText, attrs: { href: contributor.url, target: "_blank", rel: "noopener noreferrer", "aria-label": linkText } })
        : el("span", { className: "muted-link", text: linkText });

    return el("tr", {}, [
        el("td", {}, [avatar]),
        el("td", { text: displayName }),
        el("td", { text: displayRole }),
        el("td", {}, [link]),
    ]);
}

function renderExtrasPage() {
    const cards = [
        renderExtraCard(t("wikiAssistants"), t("wikiAssistantsCopy"), t("imageSlot")),
        renderExtraCard(t("extraTitle", { number: "2" }), t("extraCopy"), t("imageSlot")),
    ];

    return [
        el("section", { className: "page-panel" }, [
            el("h2", { className: "page-title", text: t("extrasTitle") }),
            el("p", { className: "page-subtitle", text: t("extrasCopy") }),
            el("div", { className: "extras-grid" }, cards),
        ]),
    ];
}

function renderExtraCard(title, copy, slotText) {
    return el("article", { className: "extras-card" }, [
        el("div", { className: "extras-image-slot", text: slotText }),
        el("div", { className: "extras-card-body" }, [
            el("h3", { text: title }),
            el("p", { text: copy }),
        ]),
    ]);
}

function renderSeedDetails(seed) {
    const stats = el("div", { className: "seed-stats" }, [
        renderStat(t("valuePerKg"), formatStatValue(seed.stats.valuePerKg, " SC")),
        renderStat(t("averageWeight"), seed.stats.avgWeight),
        renderStat(t("growthTime"), seed.stats.growthTime),
        renderStat(t("averageProfitHarvest"), formatStatValue(seed.stats.avgProfitHarvest, " SC")),
        renderStat(t("averageProfitMinute"), seed.stats.avgProfitMin),
    ]);

    return [
        el("section", { className: "seed-details-hero" }, [
            createButton(t("backToSeeds"), "back-btn", () => navigateTo("seeds")),
            el("div", { className: "seed-layout" }, [
                el("div", { className: "seed-image-box" }, [createImage(seed.img, seed.name, "seed-img")]),
                el("div", { className: "seed-info" }, [
                    el("div", { className: "seed-meta" }, [
                        el("span", { className: `seed-type ${seed.type}`, text: seed.type }),
                        el("span", { className: "seed-cost", text: formatCost(seed.cost) }),
                    ]),
                    el("h2", { className: "seed-name", text: seed.name }),
                    el("p", { className: "seed-desc", text: seed.desc }),
                    stats,
                    el("div", { className: "seed-about" }, [
                        el("h3", { text: t("about", { name: seed.name }) }),
                        el("p", { text: seed.about || t("missingAbout") }),
                    ]),
                ]),
            ]),
        ]),
    ];
}

function renderStat(label, value) {
    return el("div", { className: "stat-box" }, [
        el("span", { text: label }),
        el("strong", { text: value }),
    ]);
}

// =====================
// NAVIGATION
// =====================
function navigateTo(page) {
    const content = document.getElementById("content");
    const safePage = renderers[page] ? page : "home";

    currentPage = safePage;
    currentSeedName = "";
    replaceChildren(content, renderers[safePage]());
    setActivePage(safePage);
    closeMobileMenus();
    history.replaceState(null, "", `#${safePage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateToSeed(seedName) {
    const seed = wikiData.seeds.find(item => item.name === safeText(seedName));
    if (!seed) {
        navigateTo("seeds");
        return;
    }

    const content = document.getElementById("content");
    currentPage = "seed-details";
    currentSeedName = seed.name;
    replaceChildren(content, renderSeedDetails(seed));
    setActivePage("seeds");
    closeMobileMenus();
    history.replaceState(null, "", `#seed/${encodeURIComponent(seed.id)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function bootRoute() {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));

    if (hash.startsWith("seed/")) {
        const seedId = hash.replace("seed/", "");
        const seed = wikiData.seeds.find(item => item.id === seedId || toSlug(item.name) === seedId);
        if (seed) {
            navigateToSeed(seed.name);
            return;
        }
    }

    navigateTo(renderers[hash] ? hash : "home");
}

function rerenderCurrentView() {
    updateStaticText();

    if (currentPage === "seed-details" && currentSeedName) {
        navigateToSeed(currentSeedName);
        return;
    }

    navigateTo(currentPage);
}

function setActivePage(page) {
    document.querySelectorAll("[data-page]").forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-page") === page);
    });
}

function closeMobileMenus() {
    const navbar = document.querySelector(".navbar");
    const navToggle = document.querySelector(".nav-toggle");
    const asideToggle = document.querySelector(".aside-toggle");

    navbar?.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body?.classList.remove("sidebar-open");
    asideToggle?.setAttribute("aria-expanded", "false");
}

// =====================
// THEME + I18N
// =====================
function applyTheme(theme) {
    currentTheme = SUPPORTED_THEMES.has(theme) ? theme : "dark";
    document.documentElement.dataset.theme = currentTheme;
    document.documentElement.style.colorScheme = currentTheme;

    try {
        localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
    } catch {
        // Local storage can be disabled; the live theme still applies.
    }

    updateStaticText();
}

function toggleTheme() {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function applyLanguage(language) {
    currentLanguage = SUPPORTED_LANGUAGES.has(language) ? language : "es";
    document.documentElement.lang = currentLanguage;

    try {
        localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
    } catch {
        // Local storage can be disabled; the live language still applies.
    }

    rerenderCurrentView();
}

function toggleLanguage() {
    applyLanguage(currentLanguage === "es" ? "en" : "es");
}

function updateStaticText() {
    document.querySelectorAll("[data-i18n]").forEach(node => {
        node.textContent = t(node.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(node => {
        node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });

    const themeButton = document.querySelector("[data-action='toggle-theme']");
    if (themeButton) themeButton.textContent = currentTheme === "dark" ? t("lightMode") : t("darkMode");

    const languageButton = document.querySelector("[data-action='toggle-language']");
    if (languageButton) languageButton.textContent = currentLanguage === "es" ? "EN" : "ES";
}

// =====================
// DISCORD APPROVAL PIPELINE
// =====================
function getPendingChanges() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.pendingChanges) || "[]");
        return Array.isArray(stored) ? stored : [];
    } catch {
        return [];
    }
}

function savePendingChanges(changes) {
    localStorage.setItem(STORAGE_KEYS.pendingChanges, JSON.stringify(changes));
}

function getDiscordWebhookUrl() {
    try {
        return localStorage.getItem(STORAGE_KEYS.webhookUrl) || "";
    } catch {
        return "";
    }
}

function setDiscordWebhookUrl(url) {
    const parsedUrl = safeUrl(url);
    if (!parsedUrl || !parsedUrl.startsWith("https://discord.com/api/webhooks/")) {
        throw new Error("Invalid Discord webhook URL.");
    }

    localStorage.setItem(STORAGE_KEYS.webhookUrl, parsedUrl);
}

async function proposeWikiChange(changeType, targetEntity, beforeValue, afterValue) {
    if (!CHANGE_TYPES.has(changeType)) throw new Error("Unsupported change type.");
    const collection = safeText(targetEntity?.collection);
    if (!ENTITY_COLLECTIONS.has(collection)) throw new Error("Unsupported target entity.");

    const targetId = toSlug(targetEntity?.id || beforeValue?.id || afterValue?.id || beforeValue?.name || afterValue?.name);
    const before = beforeValue ? normalizeEntity(collection, beforeValue) : null;
    const after = afterValue ? normalizeEntity(collection, afterValue) : null;

    const proposal = {
        changeId: crypto.randomUUID ? crypto.randomUUID() : `change-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        changeType,
        targetEntity: { collection, id: targetId },
        before: cloneData(before),
        after: cloneData(after),
        timestamp: new Date().toISOString(),
        status: "pending",
    };

    const pendingChanges = getPendingChanges();
    pendingChanges.push(proposal);
    savePendingChanges(pendingChanges);

    await sendChangeProposalToDiscord(proposal);
    return cloneData(proposal);
}

async function sendChangeProposalToDiscord(proposal) {
    const webhookUrl = getDiscordWebhookUrl();
    if (!webhookUrl) return { skipped: true, reason: "webhook-not-configured" };

    const payload = {
        username: "PwC Wiki Approval",
        allowed_mentions: { parse: [] },
        content: `Wiki change proposal ${proposal.changeId}`,
        embeds: [
            {
                title: "Wiki Change Proposal",
                color: 5763719,
                fields: [
                    { name: "Change ID", value: proposal.changeId, inline: false },
                    { name: "Type", value: proposal.changeType, inline: true },
                    { name: "Target", value: `${proposal.targetEntity.collection}/${proposal.targetEntity.id}`, inline: true },
                    { name: "Timestamp", value: proposal.timestamp, inline: false },
                    { name: "Before", value: truncateForDiscord(JSON.stringify(proposal.before, null, 2)), inline: false },
                    { name: "After", value: truncateForDiscord(JSON.stringify(proposal.after, null, 2)), inline: false },
                ],
            },
        ],
    };

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Discord webhook delivery failed.");
    return { delivered: true };
}

function truncateForDiscord(value) {
    const text = safeText(value, "null");
    return text.length > 950 ? `${text.slice(0, 947)}...` : text;
}

function approveChange(changeId) {
    const safeChangeId = safeText(changeId);
    const pendingChanges = getPendingChanges();
    const proposal = pendingChanges.find(change => change.changeId === safeChangeId && change.status === "pending");
    if (!proposal) return false;

    applyApprovedChange(proposal);
    proposal.status = "approved";
    proposal.approvedAt = new Date().toISOString();
    savePendingChanges(pendingChanges);
    saveApprovedWikiData();
    rerenderCurrentView();
    return true;
}

function rejectChange(changeId) {
    const safeChangeId = safeText(changeId);
    const pendingChanges = getPendingChanges();
    const proposal = pendingChanges.find(change => change.changeId === safeChangeId && change.status === "pending");
    if (!proposal) return false;

    proposal.status = "rejected";
    proposal.rejectedAt = new Date().toISOString();
    savePendingChanges(pendingChanges);
    return true;
}

function applyApprovedChange(proposal) {
    const { collection, id } = proposal.targetEntity;
    const targetCollection = wikiData[collection];
    const index = targetCollection.findIndex(item => item.id === id);

    if (proposal.changeType === "add") {
        if (index === -1 && proposal.after) targetCollection.push(normalizeEntity(collection, proposal.after));
        return;
    }

    if (proposal.changeType === "edit") {
        if (index !== -1 && proposal.after) targetCollection[index] = normalizeEntity(collection, proposal.after);
        return;
    }

    if (proposal.changeType === "delete" && index !== -1) {
        targetCollection.splice(index, 1);
    }
}

function requestWikiChange(changeType, collection, entity) {
    const normalizedCollection = safeText(collection);
    if (!ENTITY_COLLECTIONS.has(normalizedCollection)) throw new Error("Unsupported entity collection.");

    const normalizedEntity = entity ? normalizeEntity(normalizedCollection, entity) : null;
    const existing = normalizedEntity
        ? wikiData[normalizedCollection].find(item => item.id === normalizedEntity.id)
        : null;

    if (changeType === "add") return proposeWikiChange("add", { collection: normalizedCollection, id: normalizedEntity?.id }, null, normalizedEntity);
    if (changeType === "edit") return proposeWikiChange("edit", { collection: normalizedCollection, id: normalizedEntity?.id }, existing, normalizedEntity);
    if (changeType === "delete") return proposeWikiChange("delete", { collection: normalizedCollection, id: normalizedEntity?.id }, existing, null);
    throw new Error("Unsupported change type.");
}

// =====================
// EVENTS
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navToggle = document.querySelector(".nav-toggle");
    const asideToggle = document.querySelector(".aside-toggle");

    applyTheme(currentTheme);
    document.documentElement.lang = currentLanguage;
    updateStaticText();
    bootRoute();

    navToggle?.addEventListener("click", () => {
        const isOpen = navbar?.classList.toggle("nav-open") || false;
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    asideToggle?.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("sidebar-open");
        asideToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", event => {
        const clickTarget = event.target instanceof Element ? event.target : null;
        if (!clickTarget) return;

        const actionTarget = clickTarget.closest("[data-action]");
        if (actionTarget?.dataset.action === "toggle-theme") {
            toggleTheme();
            return;
        }

        if (actionTarget?.dataset.action === "toggle-language") {
            toggleLanguage();
            return;
        }

        const routeTarget = clickTarget.closest("[data-page]");
        if (routeTarget) {
            event.preventDefault();
            navigateTo(routeTarget.getAttribute("data-page"));
        }
    });
});

window.addEventListener("hashchange", bootRoute);

document.addEventListener("error", event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;

    const fallback = el("div", {
        className: `${image.className} image-fallback`,
        text: image.alt || t("imageUnavailable"),
    });
    image.replaceWith(fallback);
}, true);

window.navigateTo = navigateTo;
window.navigateToSeed = navigateToSeed;
window.approveChange = approveChange;
window.rejectChange = rejectChange;
window.requestWikiChange = requestWikiChange;
window.proposeWikiChange = proposeWikiChange;
window.setDiscordWebhookUrl = setDiscordWebhookUrl;
