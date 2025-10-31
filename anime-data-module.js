// ===================================================================
// 🟢 الوحدة المركزية للبيانات (Central Data Module)
// تم دمج البيانات هنا وتصديرها عالميًا لتحسين الفصل المنطقي (Logical Separation)
// ولحل مشكلة تكرار البيانات بين الصفحات.
// ===================================================================

// 📋 قائمة الأنميات الأساسية (تم نقلها إلى النطاق العالمي)
const ANIME_INDEX_DATA = [
    {
        "id": "one-punchman3",
        "title": "One Punch Man 3",
        "file": "one-punchman3.json",
        "totalEpisodes": 12,
        "imageUrl": "images/opm3-poster.jpg"
    },
    {
        "id": "attack-on-titan-s4",
        "title": "Attack on Titan S4",
        "file": "aots4.json",
        "totalEpisodes": 28,
        "imageUrl": "images/aots4-poster.jpg"
    },
    {
        "id": "gachiakuta",
        "title": "Gachiakuta",
        "file": "gachiakuta.json",
        "totalEpisodes": 24,
        "imageUrl": "images/gachiakuta-poster.jpg"
    }
];
window.ANIME_INDEX_DATA = ANIME_INDEX_DATA; // 🟢 تصدير عالمي

// 🎯 قاعدة بيانات السيرفرات الوصفية (Metadata) (تم نقلها إلى النطاق العالمي)
const SERVER_METADATA = {
    "سيرفر Vimeo السريع": {
        icon: "fa-brands fa-vimeo-v",
        color: "#1ab7ea",
        speed: "سريع جداً",
        features: ["1080p", "بدون إعلانات", "مشغل مدمج"]
    },
    "سيرفر Embed عادي": { 
        icon: "fa-solid fa-play-circle", 
        color: "#10b981",
        speed: "متوسط", 
        features: ["720p", "مشغل مدمج", "دعم جميع الأجهزة"]
    },
    "سيرفر التحميل المباشر": { 
        icon: "fa-solid fa-download",
        color: "#FF6584",
        speed: "عالٍ", 
        features: ["تحميل مباشر", "480p", "720p"]
    },
    "سيرفر Viewer 2": { 
        icon: "fa-solid fa-globe",
        color: "#36D1DC",
        speed: "سريع",
        features: ["1080p", "مشغل مدمج", "سريع"]
    }
};
window.SERVER_METADATA = SERVER_METADATA; // 🟢 تصدير عالمي

/**
 * @brief يجد بيانات أنمي محدد بناءً على الـ ID. (تم نقله إلى النطاق العالمي)
 * @param {string} id - معرّف الأنمي.
 * @returns {Object|null} بيانات الأنمي الكاملة أو null.
 */
function getAnimeDataById(id) {
    if (!id) return null;
    return ANIME_INDEX_DATA.find(anime => anime.id === id) || null;
}
window.getAnimeDataById = getAnimeDataById; // 🟢 تصدير عالمي

// ===================================================================
// 🚀 إعداد المتغيرات الأساسية (Servers Module)
// ===================================================================

let ANIME_TITLE = "جارٍ التحميل"; 
let CURRENT_EPISODE = 0;
let TOTAL_EPISODES = 0;
let ANIME_ID = "";
let AVAILABLE_SERVERS = [];

const SELECTED_SERVER_KEY = "selectedServer";

// ===================================================================
// 🛠️ دوال جلب البيانات الرئيسية (Servers Module)
// ===================================================================

/**
 * يجلب قائمة السيرفرات الخاصة بالأنمي والحلقة المحددة (منطق الروابط).
 * @param {string} id - معرّف الأنمي.
 * @param {number} episodeNumber - رقم الحلقة.
 * @returns {Array<Object>} قائمة روابط السيرفرات.
 */
function getEpisodeServers(id, episodeNumber) {
    // 🟢 تحسين: استخدام switch case لتحسين القراءة والأداء مقارنة بسلاسل if/else الطويلة.
    switch (id) {
        case 'gachiakuta':
            return [
                { name: "سيرفر Vimeo السريع", url: `https://vimeo.com/gachiakuta/ep${episodeNumber}`, type: "iframe", quality: "1080p", info: "جودة عالية وثبات ممتاز" },
                { name: "سيرفر Embed عادي", url: `https://embed.com/gachiakuta/ep${episodeNumber}`, type: "embed", quality: "720p", info: "سيرفر احتياطي للتشغيل المباشر" },
            ];
        case 'one-punchman3':
             return [
                { name: "سيرفر Viewer 2", url: `https://viewer2.net/opm/ep${episodeNumber}`, type: "iframe", quality: "1080p", info: "سيرفر رئيسي سريع" },
                { name: "سيرفر التحميل المباشر", url: `https://download.com/opm/ep${episodeNumber}.mp4`, type: "direct", quality: "720p", info: "رابط تحميل مباشر" },
             ];
        case 'attack-on-titan-s4':
             return [
                { name: "سيرفر Vimeo السريع", url: `https://vimeo.com/aots4/ep${episodeNumber}`, type: "iframe", quality: "1080p", info: "سيرفر رئيسي سريع" },
                { name: "سيرفر Embed عادي", url: `https://embed.com/aots4/ep${episodeNumber}`, type: "embed", quality: "720p", info: "سيرفر احتياطي" },
             ];
        default:
            return [];
    }
}

// ===================================================================
// ⚡ وظائف الإعداد والتنقل (منطق الصفحة)
// ===================================================================

async function loadEpisodeData() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const initialId = urlParams.get('id'); 
    let initialEpisode = parseInt(urlParams.get('ep'), 10) || 1; 
    
    // 🟢 تصحيح: الاعتماد على الدالة المُصدَّرة عالميًا (window.getAnimeDataById) لمركزية البيانات.
    const animeEntry = window.getAnimeDataById(initialId); 

    if (!animeEntry) {
        ANIME_TITLE = urlParams.get('title') || "بيانات الأنمي غير متوفرة";
        ANIME_ID = initialId || "unknown-id";
        TOTAL_EPISODES = 1;
        CURRENT_EPISODE = 1;
        displayNoServersMessage(`تعذر العثور على بيانات الأنمي: ${ANIME_TITLE}.`);
        return;
    }
    
    ANIME_ID = animeEntry.id;
    ANIME_TITLE = animeEntry.title;
    TOTAL_EPISODES = animeEntry.totalEpisodes;
    
    CURRENT_EPISODE = Math.min(Math.max(1, initialEpisode), TOTAL_EPISODES > 0 ? TOTAL_EPISODES : 1);
    
    const serversFromJS = getEpisodeServers(ANIME_ID, CURRENT_EPISODE);
    
    AVAILABLE_SERVERS = serversFromJS.map(s => ({
        server: s.name, url: s.url, type: s.type, quality: s.quality,
        info: s.info, size: s.size || 'غير محدد' 
    }));
    
    if (AVAILABLE_SERVERS.length === 0) {
         displayNoServersMessage(`لا تتوفر سيرفرات مشاهدة للحلقة ${CURRENT_EPISODE} حالياً.`);
         return;
    }

    updateUI(); 
}

function updateUI() {
    // 🟢 تصحيح: التأكد من وجود العناصر قبل محاولة الوصول إليها
    const pageTitleElement = document.getElementById("pageTitle");
    const animeTitleDisplayElement = document.getElementById("animeTitleDisplay");
    const backToAnimeBtnElement = document.getElementById("backToAnimeBtn");

    if (pageTitleElement) {
        pageTitleElement.textContent = `🌐 ${ANIME_TITLE} - حلقة ${CURRENT_EPISODE}`;
    }
    if (animeTitleDisplayElement) {
        animeTitleDisplayElement.textContent = ANIME_TITLE;
    }
    
    // ربط زر العودة
    if (backToAnimeBtnElement) {
        document.getElementById("backToAnimeBtn").onclick = () => {
            document.body.style.opacity = '0.7';
            document.body.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                window.location.href = `anime.html?id=${ANIME_ID}`;
            }, 300);
        };
    }

    loadServers(); 
    // إظهار المحتوى
    document.body.style.opacity = '1';
}

// ------------------------------------------------------------------
// ⏪ وظيفة التنقل بين الحلقات
// ------------------------------------------------------------------

window.navigateEpisode = function(direction) {
    let newEpisodeNumber = CURRENT_EPISODE + direction;

    if (newEpisodeNumber < 1 || newEpisodeNumber > TOTAL_EPISODES) {
        return;
    }
    
    const urlParams = new URLSearchParams({
        id: ANIME_ID,
        // 🟢 تصحيح: إضافة Title لضمان بقاء البيانات في حال فشل جلب بيانات الـ ID في الصفحة التالية (Fallback)
        title: ANIME_TITLE, 
        ep: newEpisodeNumber
    });

    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        window.location.search = urlParams.toString();
    }, 300);
}

// ------------------------------------------------------------------
// 🌐 وظائف عرض السيرفرات
// ------------------------------------------------------------------

function loadServers() {
    const serversContainer = document.getElementById("serversList");
    // 🟢 تصحيح: التأكد من وجود العنصر
    if (!serversContainer) { 
        console.error("العنصر serversList غير موجود في DOM.");
        return; 
    }

    serversContainer.innerHTML = '';
    
    if (AVAILABLE_SERVERS.length === 0) {
        displayNoServersMessage(); 
        return;
    }
    
    AVAILABLE_SERVERS.forEach((server) => {
        const card = createServerCard(server);
        serversContainer.appendChild(card);
    });
    
    updateNavigationStats();
}

function createServerCard(server) {
    const card = document.createElement("div");
    card.className = "server-card";

    // 🟢 تصحيح: الاعتماد على قاعدة البيانات العالمية (window.SERVER_METADATA) لوصف السيرفرات
    const serverData = window.SERVER_METADATA[server.server] || { 
        icon: server.type === 'direct' ? "fa-solid fa-download" : "fa-solid fa-server",
        color: server.type === 'direct' ? "#FF6584" : "#007bff",
        // 🟢 تحسين: وصف افتراضي إذا لم يتوفر info
        description: server.info || `جودة ${server.quality || 'غير محدد'}`, 
        features: [server.quality || "HD", server.type === 'iframe' || server.type === 'embed' ? "مشغل مدمج" : "تحميل مباشر"].filter(f => f)
    };
    
    const features = [...serverData.features, serverData.speed || ''];
    
    const featureBadgesHTML = features.filter(f => f).map(feature => {
        let badgeStyle = '';
        if (feature.includes('1080p') || feature.includes('720p')) badgeStyle = 'background: rgba(255, 193, 7, 0.5);';
        else if (feature.includes('سريع')) badgeStyle = 'background: rgba(40, 167, 69, 0.5);';
        else if (feature.includes('تحميل')) badgeStyle = 'background: rgba(220, 53, 69, 0.5);';
        
        return `<div class="feature-badge" style="${badgeStyle}">${feature}</div>`;
    }).join('');

    
    card.innerHTML = `
        <div class="server-info-content">
            <div class="server-icon" style="background: ${serverData.color}; box-shadow: 0 0 10px ${serverData.color}80;">
                <i class="${serverData.icon}"></i>
            </div>
            <div class="server-details">
                <div class="server-name">${server.server}</div>
                <div class="server-description">${server.info || serverData.description}</div>
                <div class="server-features">
                    ${featureBadgesHTML}
                    ${server.size && server.size !== 'غير محدد' ? `<div class="feature-badge" style="background: rgba(108, 117, 125, 0.5);">الحجم: ${server.size}</div>` : ''}
                </div>
            </div>
        </div>
        
        <button class="play-btn">
            <i class="fas fa-play"></i>
            تشغيل
        </button>
    `;

    card.querySelector('.play-btn').addEventListener('click', () => {
        selectServer(server);
    });

    return card;
}

// 🚀 وظيفة اختيار السيرفر والانتقال للمشاهدة
function selectServer(server) {
    const encodedUrl = encodeURIComponent(server.url);
    const encodedName = encodeURIComponent(server.server);
    const encodedAnimeTitle = encodeURIComponent(ANIME_TITLE);

    // 🟢 تصحيح مشكلة "تشغيل نفس الفيديو": يجب التأكد أن Watch.html يستخدم جميع متغيرات الرابط (id, ep, url) بشكل صحيح
    const uniqueWatchUrl = `watch.html?id=${ANIME_ID}&url=${encodedUrl}&type=${server.type}&name=${encodedName}&ep=${CURRENT_EPISODE}&title=${encodedAnimeTitle}`;
    
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        window.location.href = uniqueWatchUrl; 
    }, 300);
}

// ❌ وظيفة عرض رسالة عدم التوفر 
function displayNoServersMessage(message) {
    const serversContainer = document.getElementById("serversList");
    // 🟢 تصحيح: التأكد من وجود العنصر
    if (!serversContainer) {
        console.warn("serversList غير موجود. لا يمكن عرض رسالة عدم توفر السيرفرات.");
        return;
    }
    
    serversContainer.innerHTML = `
        <div class="no-servers-container">
            <div class="no-servers-icon">
                <i class="fas fa-satellite-dish"></i>
            </div>
            <h2 class="no-servers-title">لا تتوفر سيرفرات مشاهدة</h2>
            <p class="no-servers-description">
                ${message || `لا توجد سيرفرات متاحة للحلقة ${CURRENT_EPISODE} حالياً.`}
            </p>
        </div>
    `;
     updateNavigationStats(); 
}

// 📈 وظيفة تحديث شريط التنقل والإحصائيات
function updateNavigationStats() {
    const prevBtn = document.getElementById("prevEpBtn");
    const nextBtn = document.getElementById("nextEpBtn");
    const episodeDisplay = document.getElementById("episodeNumberDisplay");
    const currentEpNumElement = document.getElementById("currentEpisodeNumber");
    const totalEpElement = document.getElementById("totalEpisodes");
    const serversCountElement = document.getElementById("serversCount");

    // 🟢 تصحيح: التأكد من وجود العناصر قبل محاولة الوصول إليها
    if (!prevBtn || !nextBtn || !episodeDisplay || !currentEpNumElement || !totalEpElement || !serversCountElement) {
        // console.warn("عناصر التنقل أو الإحصائيات غير موجودة.");
        return;
    }

    const maxEpisodes = TOTAL_EPISODES > 0 ? TOTAL_EPISODES : 1; 

    prevBtn.disabled = CURRENT_EPISODE <= 1;
    nextBtn.disabled = CURRENT_EPISODE >= maxEpisodes;
    
    episodeDisplay.textContent = `الحلقة ${CURRENT_EPISODE} من ${TOTAL_EPISODES}`;
    currentEpNumElement.textContent = CURRENT_EPISODE;
    totalEpElement.textContent = TOTAL_EPISODES; 
    
    const count = AVAILABLE_SERVERS.length;
    serversCountElement.textContent = 
        `${count} ${count === 1 ? 'سيرفر' : 'سيرفرات'}`;
}

// 🎬 بدء التشغيل عند تحميل الصفحة 
document.addEventListener('DOMContentLoaded', () => {
    loadEpisodeData();
});
