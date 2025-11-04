// anilist.js - Anime Data Management Module (Enterprise Level)
// 🚀 تم تحديثه بالكامل لتحسين الأداء، UX (نمط Crunchyroll/Glassmorphism)، ومعالجة الأخطاء المتقدمة

// =================================================================
// 1. البيانات الثابتة
// =================================================================

// قائمة الأنميات الأصلية (لم يتم تغييرها)
const ANIME_URLS_LIST = [
    "https://anilist.co/anime/170577/Tondemo-Skill-de-Isekai-Hourou-Meshi-2/",
    "https://anilist.co/anime/169969/Mushoku-no-Eiyuu-Betsu-ni-Skill-nanka-Ira-Nakattan-Daga/",
    "https://anilist.co/anime/21/ONE-PIECE/",
    "https://anilist.co/anime/171627/Chainsaw-Man-Rezehen/",
    "https://anilist.co/anime/153800/One-Punch-Man-3/",
    "https://anilist.co/anime/178025/Gachiakuta/",
    "https://anilist.co/anime/177937/SPYFAMILY-Season-3/",
    "https://anilist.co/anime/182896/Boku-no-Hero-Academia-FINAL-SEASON/",
    "https://anilist.co/anime/181447/Saigo-ni-Hitotsu-dake-Onegai-Shite-mo-Yoroshii-Deshou-ka/",
    "https://anilist.co/anime/186794/Ansatsusha-de-Aru-Ore-no-Status-ga-Yuusha-yori-mo-Akiraka-ni-Tsuyoi-no-da-ga/",
    "https://anilist.co/anime/162669/Fumetsu-no-Anata-e-Season-3/",
    "https://anilist.co/anime/180523/Yasei-no-Last-Boss-ga-Arawareta/",
    "https://anilist.co/anime/187663/Sozai-Saishuka-no-Isekai-Ryokouki/",
    "https://anilist.co/anime/185801/Nageki-no-Bourei-wa-Intai-shitai-2/",
    "https://anilist.co/anime/140337/Zombieland-Saga-Yume-Ginga-Paradise/",
    "https://anilist.co/anime/180436/WanDance/",
    "https://anilist.co/anime/176298/Kekkon-Yubiwa-Monogatari-II/",
    "https://anilist.co/anime/179930/Undead-Unluck-Winterhen/",
    "https://anilist.co/anime/188388/DIGIMON-BEATBREAK/",
    "https://anilist.co/anime/186914/Ninja-to-Gokudou/",
    "https://anilist.co/anime/190840/Kingdom-6th-Season/",
    "https://anilist.co/anime/132776/Peleliu-Rakuen-no-Guernica/",
    "https://anilist.co/anime/177686/Housenka/",
    "https://anilist.co/anime/199009/2200nen-Neko-no-Kuni-Nippon/",
    "https://anilist.co/anime/194389/Koala-Enikki/",
    "https://anilist.co/anime/195383/MUZIK-TIGER-In-the-Forest-2/",
    "https://anilist.co/anime/194832/Oshiri-Tantei-9-Part-2/",
    "https://anilist.co/anime/195173/SHIBUYAHACHI-Part-4/",
    "https://anilist.co/anime/200375/Inpurukun-no-Sonzai-Shinai-Oshigoto/",
    "https://anilist.co/anime/193968/Lets-Play-Quest-Darake-no-My-Life/",
    "https://anilist.co/anime/185116/Gnosia/",
    "https://anilist.co/anime/179992/Kikaijikake-no-Marie/",
    "https://anilist.co/anime/162890/3nen-Zgumi-Ginpachisensei/",
    "https://anilist.co/anime/195240/Uma-Musume-Cinderella-Gray-Part-2/",
    "https://anilist.co/anime/140291/Disney-TwistedWonderland-THE-ANIMATION---Season-1-EPISODE-of-HEARTSLABYUL/",
    "https://anilist.co/anime/195153/Towa-no-Yuugure/",
    "https://anilist.co/anime/195516/Kusuriya-no-Hitorigoto-3rd-Season/",
    "https://anilist.co/anime/163134/ReZero-kara-Hajimeru-Isekai-Seikatsu-3rd-Season/",
    "https://anilist.co/anime/169755/BLEACH-Sennen-Kessenhen--Soukokutan/",
    "https://anilist.co/anime/151514/Chi-Chikyuu-no-Undou-ni-Tsuite/",
    "https://anilist.co/anime/111314/Uzumaki/",
    "https://anilist.co/anime/173693/Hitoribocchi-no-Isekai-Kouryaku/",
    "https://anilist.co/anime/170083/Dragon-Ball-DAIMA/",
    "https://anilist.co/anime/177104/Saikyou-no-Shienshoku-Wajutsushi-Dearu-Ore-wa-Sekai-Saikyou-Clan-wo-Shitagaeru/",
    "https://anilist.co/anime/164299/Yarinaoshi-Reijou-wa-Ryuutei-Heika-wo-Kouryakuchuu/",
    "https://anilist.co/anime/136880/BEASTARS-FINAL-SEASON-Part-1/",
    "https://anilist.co/anime/174043/Party-kara-Tsuihou-sareta-Sono-Chiyushi-Jitsu-wa-Saikyou-ni-Tsuki/",
    "https://anilist.co/anime/167141/Sword-Art-Online-Alternative-Gun-Gale-Online-II/",
    "https://anilist.co/anime/176311/Ao-no-Exorcist-Yuki-no-Hatehen/",
    "https://anilist.co/anime/178434/Tensei-Kizoku-Kantei-Skill-de-Nariagaru-2nd-Season/",
    "https://anilist.co/anime/176053/Sayonara-Ryuusei-Konnichiwa-Jinsei/",
    "https://anilist.co/anime/184694/Ore-dake-Level-Up-na-Ken-ReAwakening/",
    "https://anilist.co/anime/172355/Kamonohashi-Ron-no-Kindan-Suiri-2nd-Season/",
    "https://anilist.co/anime/183423/ONE-PIECE-Gyojin-Touhen/",
    "https://anilist.co/anime/173263/Touhai-Ura-Rate-Mahjong-Touhai-Roku/",
    "https://anilist.co/anime/169258/Ao-no-Miburo/",
    "https://anilist.co/anime/166703/Kidou-Senshi-Gundam-Fukushuu-no-Requiem/",
    "https://anilist.co/anime/185613/The-Lord-of-the-Rings-Rohan-no-Tatakai/",
    "https://anilist.co/anime/176369/HIGH-CARD-THE-FLOWERS-BLOOM/",
    "https://anilist.co/anime/177581/Kinokoinu/",
    "https://anilist.co/anime/176245/Ganbatte-Ikimasshoi/",
    "https://anilist.co/anime/180923/Kankin-Kuiki-Level-X/",
    "https://anilist.co/anime/178729/Ooi-Tonbo-2nd-Season/",
    "https://anilist.co/anime/175473/Duel-Masters-LOST--Tsuioku-no-Suishou/",
    "https://anilist.co/anime/181776/Murder-Mystery-of-the-Dead/",
    "https://anilist.co/anime/138522/Thunderbolt-Fantasy-Touriken-Yuuki-4/",
    "https://anilist.co/anime/174913/KagakuBouken-Survival/",
    "https://anilist.co/anime/183651/Kidou-Senshi-Gundam-ALC-ENCOUNTER/",
    "https://anilist.co/anime/166610/MASHLE-Kami-Shinkakusha-Kouho-Senbatsu-Shikenhen/",
    "https://anilist.co/anime/151639/Ninja-Kamui/",
    "https://anilist.co/anime/158931/Ao-no-Exorcist-Shimane-Illuminatihen/",
    "https://anilist.co/anime/153518/Dungeon-Meshi/",
    "https://anilist.co/anime/151807/Ore-dake-Level-Up-na-Ken/",
    
    // 👇 روابط الأنمي الجديدة المضافة (كاملة)
    "https://anilist.co/anime/145064/Jujutsu-Kaisen-2nd-Season/",
    "https://anilist.co/anime/145139/Kimetsu-no-Yaiba-Katanakaji-no-Satohen/",
    "https://anilist.co/anime/161964/Kage-no-Jitsuryokusha-ni-Naritakute-2nd-season/",
    "https://anilist.co/anime/131518/Dr-STONE-NEW-WORLD/",
    "https://anilist.co/anime/151801/MASHLE/",
    "https://anilist.co/anime/155783/Tengoku-Daimakyou/",
    "https://anilist.co/anime/151970/ShangriLa-Frontier/",
    "https://anilist.co/anime/162314/Shingeki-no-Kyojin-The-Final-Season--Kanketsuhen-Kouhen/",
    "https://anilist.co/anime/142853/Tokyo-Revengers-Seiya-Kessenhen/",
    "https://anilist.co/anime/151384/Kaguyasama-wa-Kokurasetai-First-Kiss-wa-Owaranai/",
    "https://anilist.co/anime/147103/Watashi-no-Shiawase-na-Kekkon/",
    "https://anilist.co/anime/159322/BLEACH-Sennen-Kessenhen--Ketsubetsutan/",
    "https://anilist.co/anime/154116/Undead-Unluck/",
    "https://anilist.co/anime/162670/Dr-STONE-NEW-WORLD-Part-2/",
    "https://anilist.co/anime/145665/NieRAutomata-Ver11a/",
    "https://anilist.co/anime/130588/Maou-Gakuin-no-Futekigousha-Shijou-Saikyou-no-Maou-no-Shiso-Tensei-shite-Shisontachi-no-Gakkou-e-Kayou-II/",
    "https://anilist.co/anime/131680/Black-Clover-Mahou-Tei-no-Ken/",
    "https://anilist.co/anime/163329/Tokyo-Revengers-Tenjikuhen/",
    "https://anilist.co/anime/153629/Tensei-Oujo-to-Tensai-Reijou-no-Mahou-Kakumei/",
    "https://anilist.co/anime/163263/Bungou-Stray-Dogs-5th-Season/",
    "https://anilist.co/anime/136484/Shiguang-Dailiren-II/",
    "https://anilist.co/anime/136149/Alice-to-Therese-no-Maboroshi-Koujou/",
    "https://anilist.co/anime/162803/Dead-Mount-Death-Play-Part-2/",
    "https://anilist.co/anime/154966/Fatestrange-Fake-Whispers-of-Dawn/",
    "https://anilist.co/anime/140499/BLUE-GIANT/"
];

// =================================================================
// 2. 💾 فئة التخزين المؤقت المتقدم (AdvancedCache - Enterprise Level)
// =================================================================

class AdvancedCache {
    // 💡 ملاحظة: في بيئة إنتاجية، يجب استبدال localStorage بـ IndexedDB للتخزين الكبير والموثوق.
    // لكننا نستخدم localStorage هنا للحفاظ على الكود في ملف JS واحد.
    
    constructor() {
        this.cacheName = 'anilist-enterprise-cache-v3';
        this.cacheDuration = 24 * 60 * 60 * 1000; // 24 ساعة
        this.performanceMetrics = new Map();
    }

    // 🔧 حفظ البيانات مع الوقت والنسخة الاحتياطية
    set(key, data, metadata = {}) {
        try {
            const cacheItem = {
                data: data,
                timestamp: Date.now(),
                metadata: {
                    version: '1.0',
                    source: 'anilist-api',
                    ...metadata
                },
                expiry: Date.now() + this.cacheDuration
            };

            // 🌟 التخزين في localStorage للتخزين الدائم (Persistent Storage)
            localStorage.setItem(`cache_${key}`, JSON.stringify(cacheItem));
            
            // التخزين في sessionStorage للوصول السريع خلال الجلسة الحالية
            sessionStorage.setItem(`session_${key}`, JSON.stringify(data));
            
            // تحديث مؤشرات الأداء
            this.updateMetrics('write', key, data);
            
            return true;
        } catch (error) {
            console.warn('⚠️ تعذر حفظ التخزين المؤقت:', error);
            // 🛡️ تسجيل الخطأ
            this.logError('Cache Write Error', error);
            return false;
        }
    }

    // 🔧 جلب البيانات مع التحقق من الصلاحية
    get(key) {
        try {
            // 1. محاولة جلب من sessionStorage أولاً (الأسرع)
            const sessionData = sessionStorage.getItem(`session_${key}`);
            if (sessionData) {
                this.updateMetrics('hit', key, 'session');
                return JSON.parse(sessionData);
            }

            // 2. جلب من localStorage مع التحقق من الصلاحية
            const cached = localStorage.getItem(`cache_${key}`);
            if (cached) {
                const cacheItem = JSON.parse(cached);
                
                // 🛡️ التحقق من انتهاء الصلاحية
                if (Date.now() > cacheItem.expiry) {
                    this.delete(key);
                    this.updateMetrics('miss', key, 'expired');
                    return null;
                }
                
                // تحديث sessionStorage للوصول المستقبلي
                sessionStorage.setItem(`session_${key}`, JSON.stringify(cacheItem.data));
                this.updateMetrics('hit', key, 'local');
                
                return cacheItem.data;
            }
            
            this.updateMetrics('miss', key, 'none');
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل التخزين المؤقت:', error);
            this.logError('Cache Read Error', error);
            return null;
        }
    }

    // 🔧 حذف البيانات
    delete(key) {
        localStorage.removeItem(`cache_${key}`);
        sessionStorage.removeItem(`session_${key}`);
    }

    // 🔧 تنظيف التخزين المؤقت المنتهي
    cleanup() {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => {
            try {
                const cached = localStorage.getItem(key);
                const cacheItem = JSON.parse(cached);
                if (Date.now() > cacheItem.expiry) {
                    this.delete(key.replace('cache_', ''));
                }
            } catch (error) {
                // إزالة البيانات التالفة
                this.delete(key.replace('cache_', ''));
                this.logError('Cache Cleanup Corrupt Item', error);
            }
        });
    }

    // 📊 تحديث مؤشرات الأداء
    updateMetrics(type, key, data) {
        const metricKey = `${type}_${key}`;
        this.performanceMetrics.set(metricKey, {
            type,
            key,
            timestamp: Date.now(),
            size: data ? JSON.stringify(data).length : 0
        });
    }

    // 📊 الحصول على إحصائيات الأداء
    getStats() {
        // ... (المنطق الأصلي للاحتفاظ بالتفاصيل)
        const stats = {
            totalHits: 0,
            totalMisses: 0,
            totalWrites: 0,
            cacheSize: 0, // بالبايت
            itemsCount: 0
        };

        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        stats.itemsCount = keys.length;

        this.performanceMetrics.forEach(metric => {
            if (metric.type.includes('hit')) stats.totalHits++;
            if (metric.type.includes('miss')) stats.totalMisses++;
            if (metric.type.includes('write')) stats.totalWrites++;
        });

        keys.forEach(key => {
            try {
                stats.cacheSize += localStorage.getItem(key).length || 0;
            } catch (e) { /* ignore */ }
        });
        
        // تحويل حجم التخزين المؤقت إلى كيلوبايت لسهولة القراءة
        stats.cacheSizeKB = (stats.cacheSize / 1024).toFixed(2);

        return stats;
    }

    // 📝 تسجيل الأخطاء (للاستخدام الداخلي في الفئة)
    logError(type, error) {
        const errorLog = {
            type,
            message: error?.message || 'Unknown error',
            timestamp: new Date().toISOString(),
        };

        try {
            const existingLogs = JSON.parse(localStorage.getItem('cache_errors') || '[]');
            existingLogs.push(errorLog);
            localStorage.setItem('cache_errors', JSON.stringify(existingLogs.slice(-20))); 
        } catch (e) {
            console.warn('تعذر حفظ سجل أخطاء التخزين المؤقت:', e);
        }
    }
}

// =================================================================
// 3. 🎯 فئة إدارة الواجهة (UI-Manager)
// =================================================================

// 🌟 وحدة مسؤولة عن جميع تفاعلات DOM وتقديم المحتوى
class UIManager {
    constructor(manager) {
        this.manager = manager; // ربط المدير الرئيسي للوصول إلى البيانات والوظائف
        this.initStyles();
    }

    // 🖼️ أنماط CSS المدمجة (تحسين: نقل جميع الأنماط إلى هنا)
    initStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            /* 1. هيكلة Grid نمط الهاتف (Crunchyroll/Netflix) */
            #animeGrid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); /* 2-3 أعمدة على الهاتف */
                gap: 15px;
                padding: 10px;
            }

            .anime-card {
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                background: #1e1e3f; /* لون خلفية أغمق للبطاقة */
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
            }
            
            .anime-image-container {
                position: relative;
                height: 200px; /* طول ثابت للصور على الهاتف */
            }
            
            .anime-image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            /* ⚡ تثبيت الأزرار على البطاقة (مفعل دائماً على الهاتف) */
            .btn-watch-link-fixed, .btn-favorite-fixed {
                position: absolute;
                width: 35px;
                height: 35px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s;
                z-index: 10;
                /* ✨ Glassmorphism Effect for Buttons */
                backdrop-filter: blur(5px);
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .btn-watch-link-fixed {
                right: 10px;
                bottom: 10px; 
                background: rgba(0, 255, 136, 0.7); /* لون أخضر شفاف */
                color: black;
                border: none; /* إزالة الحدود للزر الأساسي */
            }
            
            .btn-favorite-fixed {
                left: 10px;
                top: 10px; 
                border: 1px solid rgba(255, 255, 255, 0.5);
            }

            .btn-favorite-fixed.active {
                background: rgba(255, 71, 87, 0.8); /* أحمر للمفضلة */
                color: white;
                border: 1px solid #ff4757;
            }
            
            /* 🎯 شريط التقدم (Mobile Progress Bar) */
            .watching-progress-bar {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
            }
            
            .progress-fill-mobile {
                height: 100%;
                background: #ffaa00; /* لون برتقالي لتقدم المشاهدة */
                transition: width 0.3s ease;
            }
            
            /* معلومات البطاقة المحمولة */
            .anime-info {
                padding: 8px 10px;
            }
            .anime-title-mobile {
                font-size: 14px;
                margin: 0 0 5px 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: bold;
            }
            .anime-status-row {
                display: flex;
                justify-content: space-between;
                font-size: 11px;
                color: #aaa;
            }
            
            /* شارة حالة الأنمي (Glassmorphism) */
            .anime-badge {
                padding: 1px 6px;
                border-radius: 4px;
                font-size: 10px;
                font-weight: bold;
                color: #000;
                /* Glassmorphism Effect for Badge */
                backdrop-filter: blur(2px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .releasing { background: rgba(0, 255, 136, 0.7); } /* أخضر شفاف */
            .finished { background: rgba(0, 153, 255, 0.7); color: #fff; } /* أزرق شفاف */
            .not_yet_released { background: rgba(153, 0, 255, 0.7); color: #fff; } /* بنفسجي شفاف */
            .cancelled { background: rgba(255, 71, 87, 0.7); color: #fff; } /* أحمر شفاف */
            .hiatus { background: rgba(255, 165, 2, 0.7); } /* برتقالي شفاف */

            /* معلومات إضافية على الصورة (Glassmorphism) */
            .anime-rating, .anime-year {
                position: absolute;
                padding: 3px 8px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: bold;
                color: white;
                z-index: 5;
                backdrop-filter: blur(5px);
                background: rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .anime-rating {
                right: 10px;
                top: 10px;
                background: rgba(255, 170, 0, 0.7); /* لون ذهبي */
                color: black;
            }
            
            .anime-year {
                left: 55px; /* بجانب زر المفضلة */
                top: 10px;
                background: rgba(0, 0, 0, 0.4);
            }
            
            /* تأثيرات التحميل والأخطاء */
            .advanced-toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                border-left: 4px solid #00ff88;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                max-width: 400px;
                backdrop-filter: blur(10px);
                transform: translateX(400px);
                transition: transform 0.3s ease;
            }
            
            .advanced-toast.show {
                transform: translateX(0);
            }
            
            /* شريط التقدم الثابت */
            #progress-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: rgba(0, 0, 0, 0.9);
                padding: 10px;
                z-index: 9999;
                backdrop-filter: blur(10px);
                transition: opacity 0.3s ease;
            }
            
            #progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #00ff88, #0099ff);
                transition: width 0.3s ease;
                width: 0%;
            }

            .skeleton {
                animation: skeleton-pulse 1.5s ease-in-out infinite;
            }
            
            @keyframes skeleton-pulse {
                0% { opacity: 0.6; }
                50% { opacity: 0.3; }
                100% { opacity: 0.6; }
            }
            
            .skeleton-image {
                width: 100%;
                height: 200px; /* مطابق لـ .anime-image-container */
                background: #333;
                border-radius: 8px 8px 0 0;
            }
            
            .skeleton-title {
                width: 80%;
                height: 14px;
                background: #333;
                border-radius: 4px;
                margin: 8px 10px;
            }
            
            .skeleton-text {
                width: 60%;
                height: 11px;
                background: #333;
                border-radius: 4px;
                margin: 5px 10px 8px;
            }

            .empty-state, .error-state {
                grid-column: 1 / -1; /* لجعلها تتوسط الشبكة */
                text-align: center;
                padding: 40px 20px;
                color: #888;
            }
            
            .anime-overlay { /* إزالة التراكب الزائد على الهاتف (وإبقاء العناصر الأخرى) */
                opacity: 1 !important; 
                background: none !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 🎨 إنشاء بطاقة الأنمي على نمط Crunchyroll
    createAnimeCard(anime) {
        const container = document.getElementById('animeGrid');

        // **الإصلاح والتطوير (لضمان عدم التكرار)**
        // التحقق أولاً إذا كانت البطاقة موجودة مسبقاً (في حالة تحديث جزئي بعد جلب الدفعات)
        if (document.querySelector(`.anime-card[data-anime-id="${anime.id}"]`)) {
            // console.log(`Card for Anime ID ${anime.id} already exists. Skipping creation.`);
            return null; 
        }

        // إزالة هيكل التحميل إذا كان موجوداً قبل إضافة البطاقة الفعلية
        const skeletons = container.querySelectorAll('.skeleton');
        if (skeletons.length > 0) {
            // إزالة هيكل واحد فقط عند إضافة بطاقة واحدة
            const firstSkeleton = skeletons[0];
            if (firstSkeleton) {
                firstSkeleton.remove();
            }
        }

        const card = document.createElement('div');
        card.className = 'anime-card fade-in';
        card.setAttribute('data-anime-id', anime.id);
        
        const title = anime.title.userPreferred || anime.title.romaji || 'عنوان غير متوفر';
        const score = anime.averageScore ? (anime.averageScore / 10).toFixed(1) : 'N/A';
        const year = anime.seasonYear || 'N/A';
        const episodes = anime.episodes || '?';
        
        // 🖼️ اختيار جودة الصورة بناءً على إعدادات الأداء
        let coverImage = anime.coverImage?.extraLarge || anime.coverImage?.large;
        if (this.manager.uiSettings.imageQuality === 'low') {
            coverImage = anime.coverImage?.large;
        } else if (this.manager.uiSettings.imageQuality === 'medium') {
             coverImage = anime.coverImage?.large;
        }

        // 🎯 منطق تحديد رابط المشاهدة
        const dataFile = this.manager.ANIME_DATA_FILES.get(anime.id);
        // تم تبسيط رابط المشاهدة ليذهب مباشرة إلى صفحة العرض (بدون شرط ملف البيانات)
        const watchLink = `anime.html?id=${anime.id}&action=watch`; 
        
        // 🎯 منطق تتبع التقدم (Progress Bar Logic)
        const lastViewed = JSON.parse(localStorage.getItem('lastViewedAnime') || '{}');
        const isCurrentlyWatching = lastViewed.id === anime.id;
        // افتراض: إذا كان آخر مشاهدة، نفترض تقدم 40% (لأغراض العرض)
        // **تحسين:** يمكن استبدال 40 برقم يتم تخزينه فعلاً لتتبع الحلقة
        const progressPercent = isCurrentlyWatching ? 40 : 0; 
        const watchText = isCurrentlyWatching ? 'مواصلة المشاهدة' : 'مشاهدة الآن';

        // **تحسين زر المفضلة:** تم دمج منطق التبديل مباشرة في InnerHTML ليتوافق مع النمط الثابت الجديد
        // يجب أن نعتمد على دالة تحديث الأزرار لتحديد الحالة الأولية بشكل صحيح.
        const isFavorite = JSON.parse(localStorage.getItem('favorite_anime') || '[]').includes(anime.id);
        const favoriteIconClass = isFavorite ? 'fas fa-heart' : 'far fa-heart';
        const favoriteActiveClass = isFavorite ? 'active' : '';

        card.innerHTML = `
            <div class="anime-image-container">
                <img 
                    src="${coverImage || 'https://via.placeholder.com/300x400/1a1a3a/ffffff?text=صورة+غير+متوفرة'}" 
                    alt="${title}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/300x400/1a1a3a/ffffff?text=صورة+غير+متوفرة'"
                >
                
                <div class="anime-overlay">
                    <div class="anime-year">${year}</div>
                    <div class="anime-rating">
                        <i class="fas fa-star"></i> ${score}
                    </div>
                </div>
                
                ${isCurrentlyWatching ? `
                    <div class="watching-progress-bar">
                        <div class="progress-fill-mobile" style="width: ${progressPercent}%;"></div>
                    </div>
                ` : ''}
                
                <button class="btn-favorite-fixed ${favoriteActiveClass}" onclick="event.stopPropagation(); window.aniListManager.toggleFavorite(${anime.id})">
                    <i class="${favoriteIconClass}"></i>
                </button>
            </div>
            
            <div class="anime-info">
                <h3 class="anime-title-mobile">${title}</h3>
                <div class="anime-status-row">
                    <div class="anime-badge ${anime.status.toLowerCase()}">${this.manager.getStatusText(anime.status)}</div>
                    <div class="anime-episodes">${episodes} حلقة</div>
                </div>
                
                <a href="${watchLink}" class="btn-watch-link-fixed" onclick="event.stopPropagation(); window.aniListManager.storeAnimeData(${anime.id});">
                    <i class="fas fa-play"></i>
                </a>
            </div>
        `;

        // عند النقر على البطاقة بالكامل (للذهاب لصفحة التفاصيل)
        card.addEventListener('click', () => {
            this.manager.showAnimeDetails(anime);
        });

        // **تحسين الأداء:** إضافة البطاقة إلى الـ DOM فقط هنا
        container.appendChild(card);
        this.manager.updateFavoriteButton(anime.id, true); // تحديث حالة زر المفضلة (النمط الثابت)
        return card;
    }

    // 📊 إنشاء هيكل التحميل
    createSkeletonLoader(count) {
        let skeletonHTML = '';
        for (let i = 0; i < count; i++) {
            skeletonHTML += `
                <div class="anime-card skeleton" data-skeleton-id="${i}">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-title"></div>
                    <div class="skeleton-text"></div>
                </div>
            `;
        }
        return skeletonHTML;
    }

    // 📊 تحديث شريط التقدم (ثابت في الأعلى)
    updateProgress(percent, message = '') {
        let progressBar = document.getElementById('progress-bar');
        let progressText = document.getElementById('progress-text');
        const progressContainer = document.getElementById('progress-container');
        
        // 🌟 إنشاء شريط التقدم إذا لم يكن موجوداً
        if (!progressContainer) {
            const newProgressContainer = document.createElement('div');
            newProgressContainer.id = 'progress-container';
            newProgressContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: rgba(0, 0, 0, 0.9);
                padding: 10px;
                z-index: 9999;
                backdrop-filter: blur(10px);
                transition: opacity 0.3s ease;
            `;

            progressBar = document.createElement('div');
            progressBar.id = 'progress-bar';
            progressBar.style.cssText = `
                width: 100%;
                height: 4px;
                background: #333;
                border-radius: 2px;
                overflow: hidden;
            `;

            const progressFill = document.createElement('div');
            progressFill.id = 'progress-fill';
            
            progressText = document.createElement('div');
            progressText.id = 'progress-text';
            progressText.style.cssText = `
                color: #fff; 
                font-size: 10px; 
                margin-top: 5px; 
                text-align: center;
            `;

            progressBar.appendChild(progressFill);
            newProgressContainer.appendChild(progressBar);
            newProgressContainer.appendChild(progressText);
            document.body.prepend(newProgressContainer);
        } else {
            progressBar = document.getElementById('progress-bar');
            progressText = document.getElementById('progress-text');
        }

        // تحديث التقدم والنص
        document.getElementById('progress-fill').style.width = `${percent}%`;
        if (progressText) {
            progressText.textContent = message;
        }
    }

    // 📊 إخفاء شريط التقدم
    hideProgressBar() {
        const progressContainer = document.getElementById('progress-container');
        if (progressContainer) {
            progressContainer.style.opacity = '0';
            setTimeout(() => {
                progressContainer.remove();
            }, 300);
        }
    }

    // 🔔 إظهار الإشعارات المتقدمة (Toast)
    showToast(message, type = 'success', duration = 3000) {
        // ... (المنطق الأصلي لـ showToast)
        const existingToasts = document.querySelectorAll('.advanced-toast');
        // يمكن تغيير هذا ليتراكم بدلاً من الإزالة، ولكن للحفاظ على النظافة...
        existingToasts.forEach(toast => toast.remove()); 

        const toast = document.createElement('div');
        toast.className = `advanced-toast show ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${icons[type] || '💡'}</span>
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }

    // 🛑 إظهار حالة الخطأ
    showErrorState(message) {
        const container = document.getElementById('animeGrid');
        // **تحسين:** تفريغ الشبكة أولاً
        if(container) {
            container.innerHTML = '';

            container.innerHTML = `
                <div class="error-state">
                    <i class="fas fa-exclamation-triangle" style="font-size: 64px; margin-bottom: 20px; color: #ff4757;"></i>
                    <h3>حدث خطأ</h3>
                    <p>${message}</p>
                    <button onclick="window.aniListManager.fetchAnimeData()" class="retry-btn">
                        <i class="fas fa-redo"></i> إعادة المحاولة
                    </button>
                </div>
            `;
        }
    }

    // ✨ إضافة تأثيرات التمرير
    addScrollAnimations() {
        if (!this.manager.uiSettings.animations) return;
        
        const animeCards = document.querySelectorAll('.anime-card:not(.skeleton)');
        
        // **تحسين الأداء:** استخدام IntersectionObserver لتحسين أداء الرؤية
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animeCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
            observer.observe(card);
        });
    }

    // 📊 عرض الأنمي في الشبكة
    displayAnime(animeList) {
        const container = document.getElementById('animeGrid');
        // **الإصلاح الرئيسي لتكرار الأنميات:** تفريغ الـ DOM قبل العرض الكامل
        container.innerHTML = ''; 

        if (!animeList || animeList.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>لا توجد أنميات لعرضها</h3>
                    <p>جرب تعديل معايير البحث أو التصفية</p>
                </div>
            `;
            return;
        }

        // **تحسين الأداء:** استخدام DocumentFragment لإضافة جميع البطاقات مرة واحدة
        const fragment = document.createDocumentFragment();
        animeList.forEach(anime => {
            const card = this.createAnimeCard(anime);
            if(card) {
                fragment.appendChild(card);
            }
        });
        container.appendChild(fragment);

        this.addScrollAnimations();
    }
}


// =================================================================
// 4. 🎯 النظام الرئيسي المحسّن (AniListManager)
// =================================================================

class AniListManager {
    constructor() {
        this.ANILIST_API = 'https://graphql.anilist.co';
        this.advancedCache = new AdvancedCache();
        this.uiManager = new UIManager(this); // 🌟 ربط مدير الواجهة
        this.currentAnimeList = [];
        this.animeUrls = ANIME_URLS_LIST;
        
        // 👇 القائمة الجديدة لربط معرف الأنمي بملف بياناته (لتحقيق فكرتك)
        this.ANIME_DATA_FILES = new Map([
            // [AniList ID, 'اسم_ملف_البيانات.js']
            [153800, 'One-punchman3-data.js'], 
            [155783, 'Tengoku-Daimakyou-data.js'], 
            // ... (باقي الأنميات) ...
        ]);
        
        // ⚡ إعدادات متقدمة للأداء
        this.BATCH_SIZE = 4;
        this.DELAY_MS = 1200;
        this.MAX_RETRIES = 3;
        this.TIMEOUT_MS = 15000;

        // 📊 تتبع الأداء
        this.performance = {
            startTime: 0,
            requestsCount: 0,
            successfulRequests: 0,
            failedRequests: 0
        };

        this.loadingState = {
            currentIndex: 0,
            isLoading: false,
            allLoaded: false,
            progress: 0
        };

        // 🎨 إعدادات الواجهة المتقدمة
        this.uiSettings = {
            theme: 'dark',
            language: 'ar',
            animations: true,
            imageQuality: 'high' // low, medium, high
        };

        this.init();
    }

    // 🔧 التهيئة المتقدمة
    init() {
        this.loadUISettings();
        this.setupPerformanceMonitoring();
        this.advancedCache.cleanup();
        this.setupErrorHandling();
    }

    // ⚡ إعداد مراقبة الأداء
    setupPerformanceMonitoring() {
        if ('connection' in navigator) {
            navigator.connection.addEventListener('change', () => {
                this.adjustSettingsBasedOnConnection();
            });
            // الضبط الأولي
            this.adjustSettingsBasedOnConnection(); 
        }

        this.performance.startTime = performance.now();
    }

    // 🌐 ضبط الإعدادات بناءً على سرعة الاتصال
    adjustSettingsBasedOnConnection() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            // 🌟 منطق ذكي لتقليل الحمل على الشبكة الضعيفة
            if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                this.BATCH_SIZE = 2;
                this.uiSettings.imageQuality = 'low';
                this.uiSettings.animations = false;
                this.uiManager.showToast('🌐 اتصال ضعيف: تم تفعيل وضع توفير البيانات', 'warning', 4000);
            } else if (connection.effectiveType === '3g') {
                this.BATCH_SIZE = 3;
                this.uiSettings.imageQuality = 'medium';
                this.uiSettings.animations = true;
            } else {
                this.BATCH_SIZE = 4;
                this.uiSettings.imageQuality = 'high';
                this.uiSettings.animations = true;
            }
            this.saveUISettings();
        }
    }

    // 🛡️ إعداد معالجة الأخطاء المتقدم
    setupErrorHandling() {
        window.addEventListener('error', (event) => {
            this.logError('Global Error', event.error);
        });

        window.addEventListener('unhandledrejection', (event) => {
            this.logError('Unhandled Promise Rejection', event.reason);
        });
    }

    // 📝 تسجيل الأخطاء
    logError(type, error) {
        const errorLog = {
            type,
            message: error?.message || 'Unknown error',
            stack: error?.stack,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
        };

        try {
            const existingLogs = JSON.parse(localStorage.getItem('error_logs') || '[]');
            existingLogs.push(errorLog);
            localStorage.setItem('error_logs', JSON.stringify(existingLogs.slice(-100))); 
        } catch (e) {
            console.warn('تعذر حفظ سجل الأخطاء:', e);
        }
    }

    // ⏰ دالة التأخير الذكية
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 🔍 استخراج معرفات الأنمي
    extractAnimeIds() {
        // **تحسين:** استخدام Set لضمان عدم تكرار المعرفات من القائمة الثابتة
        const ids = new Set();
        this.animeUrls.forEach(url => {
            const match = url.match(/anime\/(\d+)|manga\/(\d+)/); 
            const id = match ? parseInt(match[1] || match[2]) : null;
            if (id !== null) {
                ids.add(id);
            }
        });
        return Array.from(ids);
    }

    // 📝 GraphQL Query متقدم (للاحتفاظ بالتفاصيل)
    get ANIME_QUERY() {
        // ... (الـ Query الأصلي الطويل) ...
        return `
            query ($id: Int) {
                Media(id: $id, type: ANIME) {
                    id
                    idMal
                    title {
                        userPreferred
                        romaji
                        english
                        native
                    }
                    description(asHtml: false)
                    episodes
                    duration
                    status
                    season
                    seasonYear
                    averageScore
                    meanScore
                    popularity
                    favourites
                    genres
                    tags {
                        name
                        category
                        rank
                    }
                    coverImage {
                        large
                        extraLarge
                        color
                    }
                    bannerImage
                    format
                    startDate {
                        year
                        month
                        day
                    }
                    endDate {
                        year
                        month
                        day
                    }
                    nextAiringEpisode {
                        airingAt
                        timeUntilAiring
                        episode
                    }
                    studios(isMain: true) {
                        nodes {
                            name
                            siteUrl
                        }
                    }
                    relations {
                        edges {
                            node {
                                id
                                title {
                                    userPreferred
                                }
                                type
                                format
                            }
                            relationType
                        }
                    }
                    recommendations {
                        nodes {
                            mediaRecommendation {
                                id
                                title {
                                    userPreferred
                                }
                                coverImage {
                                    large
                                }
                            }
                        }
                    }
                    stats {
                        statusDistribution {
                            status
                            amount
                        }
                        scoreDistribution {
                            score
                            amount
                        }
                    }
                    siteUrl
                    modNotes
                    isAdult
                    trending
                    updatedAt
                }
            }
        `;
    }

    // 🚀 دالة الجلب المتقدمة مع إعادة المحاولة الذكية ومعالجة 429
    async fetchAnime(id) {
        this.performance.requestsCount++;

        const cached = this.advancedCache.get(`anime_${id}`);
        if (cached) {
            this.performance.successfulRequests++;
            return cached;
        }

        let retries = this.MAX_RETRIES;
        let lastError;

        while (retries > 0) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), this.TIMEOUT_MS);

                const response = await fetch(this.ANILIST_API, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        query: this.ANIME_QUERY,
                        variables: { id: id }
                    }),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                // 🌟 معالجة 429 (Rate Limit)
                if (response.status === 429) {
                    const retryAfter = response.headers.get('Retry-After') || (10 * (this.MAX_RETRIES - retries + 1)); // تأخير أكبر
                    this.uiManager.showToast(`⏳ تجاوز حد الطلبات (429)، إعادة المحاولة بعد ${retryAfter} ثانية`, 'warning');
                    await this.delay(retryAfter * 1000);
                    continue; // إعادة الحلقة للمحاولة مرة أخرى
                }
                
                if (!response.ok) {
                    throw new Error(`خطأ في API: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                
                // 🛡️ معالجة أخطاء GraphQL حتى مع استجابة 200 OK
                if (result.errors) {
                    throw new Error(`خطأ في GraphQL: ${result.errors[0].message}`);
                }
                
                if (result.data && result.data.Media) {
                    const anime = result.data.Media;
                    
                    this.advancedCache.set(`anime_${id}`, anime, {
                        size: JSON.stringify(anime).length,
                        source: 'api'
                    });
                    
                    this.performance.successfulRequests++;
                    return anime;
                }
                
                throw new Error('بيانات الوسائط غير متوفرة في الاستجابة');
                
            } catch (error) {
                lastError = error;
                retries--;
                
                if (retries > 0) {
                    // 🌟 تأخير أسي (Exponential Backoff)
                    const backoffDelay = Math.pow(2, this.MAX_RETRIES - retries) * 1000 + 500; // 2s, 4.5s, 8.5s
                    this.uiManager.showToast(`🔄 فشل مؤقت، إعادة المحاولة ${this.MAX_RETRIES - retries}/${this.MAX_RETRIES}`, 'info');
                    await this.delay(backoffDelay);
                }
            }
        }

        this.performance.failedRequests++;
        this.logError('FetchAnime Failed', lastError);
        throw new Error(`فشل جلب البيانات بعد ${this.MAX_RETRIES} محاولات: ${lastError.message}`);
    }

    // 🎯 جلب البيانات مع التقدم المتقدم
    async fetchAnimeData() {
        if (this.loadingState.isLoading) {
            this.uiManager.showToast('جاري التحميل بالفعل...', 'info');
            return;
        }

        this.loadingState.isLoading = true;
        this.performance.startTime = performance.now();
        
        const animeIds = this.extractAnimeIds();
        
        try {
            this.showLoadingState(true);

            // **الإصلاح (لضمان عدم تكرار الأنميات في currentAnimeList):**
            // إذا كان التحميل يبدأ من البداية (ليس استئنافاً من تحميل سابق مخزن)
            if (this.loadingState.currentIndex === 0) {
                this.currentAnimeList = []; // تفريغ القائمة قبل البدء بالجلب الجديد
                const animeGrid = document.getElementById('animeGrid');
                if(animeGrid) {
                    animeGrid.innerHTML = this.uiManager.createSkeletonLoader(this.BATCH_SIZE * 2);
                }
            }
            
            this.uiManager.updateProgress(this.loadingState.progress, 'بدء التحميل/الاستئناف...');


            const totalIds = animeIds.length;
            let successfulFetches = 0;
            let failedFetches = 0;
            const totalBatches = Math.ceil(totalIds / this.BATCH_SIZE);


            for (let i = this.loadingState.currentIndex; i < totalIds; i += this.BATCH_SIZE) {
                const batchIds = animeIds.slice(i, i + this.BATCH_SIZE);
                const currentBatch = Math.floor(i / this.BATCH_SIZE) + 1;
                
                this.uiManager.updateProgress(
                    (i / totalIds) * 100,
                    `جاري تحميل الدفعة ${currentBatch} من ${totalBatches}`
                );

                const batchPromises = batchIds.map(id => this.fetchAnime(id));
                const batchResults = await Promise.allSettled(batchPromises);
                
                const currentBatchLoadedAnime = [];

                batchResults.forEach((result, index) => {
                    if (result.status === 'fulfilled' && result.value) {
                        this.currentAnimeList.push(result.value);
                        currentBatchLoadedAnime.push(result.value); // تجميع العناصر المجلوبة
                        successfulFetches++;
                    } else {
                        failedFetches++;
                        console.error(`فشل تحميل الأنمي ${batchIds[index]}:`, result.reason);
                    }
                });
                
                // **تحسين:** عرض الدفعة المجمّعة لتقليل عمليات التلاعب بـ DOM
                currentBatchLoadedAnime.forEach(anime => this.uiManager.createAnimeCard(anime));


                this.loadingState.currentIndex = i + this.BATCH_SIZE;
                this.loadingState.progress = (this.loadingState.currentIndex / totalIds) * 100;

                if (this.loadingState.currentIndex < totalIds) {
                    await this.delay(this.DELAY_MS);
                }
            }

            this.loadingState.allLoaded = true;
            this.loadingState.progress = 100;

            this.uiManager.updateProgress(100, 'اكتمل التحميل بنجاح!'); 

            this.showPerformanceSummary(successfulFetches, failedFetches);

            this.advancedCache.set('current_anime_list', this.currentAnimeList, { source: 'full_fetch' });
            
            // **تحسين:** تطبيق تأثيرات التمرير مرة واحدة بعد اكتمال التحميل
            this.uiManager.addScrollAnimations();

        } catch (error) {
            this.handleDataFetchError(error);
        } finally {
            this.loadingState.isLoading = false;
            this.showLoadingState(false);
            setTimeout(() => this.uiManager.hideProgressBar(), 1000); 
        }
    }

    // 📊 إظهار إحصائيات الأداء
    showPerformanceSummary(successful, failed) {
        const totalTime = (performance.now() - this.performance.startTime) / 1000;
        const cacheStats = this.advancedCache.getStats();
        
        const summary = `
            ✅ تم تحميل ${successful} أنمي بنجاح
            ❌ فشل تحميل ${failed} أنمي
            ⏱️ وقت التحميل: ${totalTime.toFixed(2)} ثانية
            📊 نسبة النجاح: ${((successful / (successful + failed || 1)) * 100).toFixed(1)}%
            💾 ضربات التخزين المؤقت: ${cacheStats.totalHits}
            📦 حجم التخزين المؤقت: ${cacheStats.cacheSizeKB} KB
        `;

        this.uiManager.showToast(summary, 'success', 5000);
        
        this.savePerformanceMetrics(successful, failed, totalTime);
    }

    // 💾 حفظ مؤشرات الأداء
    savePerformanceMetrics(successful, failed, totalTime) {
        const metrics = {
            // ... (المنطق الأصلي للاحتفاظ بالتفاصيل)
            timestamp: new Date().toISOString(),
            successfulFetches: successful,
            failedFetches: failed,
            totalTime: totalTime,
            cacheStats: this.advancedCache.getStats(),
            userAgent: navigator.userAgent,
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null
        };

        try {
            const existingMetrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
            existingMetrics.push(metrics);
            localStorage.setItem('performance_metrics', JSON.stringify(existingMetrics.slice(-50)));
        } catch (error) {
            console.warn('تعذر حفظ مؤشرات الأداء:', error);
        }
    }

    // 🎨 إنشاء بطاقة الأنمي المتقدمة (تم نقلها إلى UIManager)
    createAnimeCard(anime) {
        return this.uiManager.createAnimeCard(anime);
    }

    // 👇 دالة مساعدة لحفظ بيانات الأنمي قبل الانتقال (تم تعديلها)
    storeAnimeData(animeId) {
        const anime = this.currentAnimeList.find(a => a.id === animeId);
        if (anime) {
             // 1. التخزين المؤقت لبيانات الأنمي في sessionStorage (للوصول السريع في الصفحة التالية)
             sessionStorage.setItem('currentAnime', JSON.stringify(anime));
             
             // 2. حفظ ID الأنمي بشكل دائم لضمان العودة الآمنة
             localStorage.setItem('lastAnimeId', animeId.toString());
             
             // 3. حفظ آخر أنمي تمت مشاهدته/الضغط عليه
             localStorage.setItem('lastViewedAnime', JSON.stringify({
                id: anime.id,
                title: anime.title.userPreferred,
                timestamp: Date.now()
            }));

        }
    }


    // ❤️ تبديل المفضلة
    toggleFavorite(animeId) {
        // ... (المنطق الأصلي)
        const favorites = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
        const index = favorites.indexOf(animeId);
        
        if (index > -1) {
            favorites.splice(index, 1); 
            this.uiManager.showToast('تم إزالة من المفضلة', 'info');
        } else {
            favorites.push(animeId);
            this.uiManager.showToast('تم إضافة إلى المفضلة', 'success');
        }
        
        localStorage.setItem('favorite_anime', JSON.stringify(favorites));
        this.updateFavoriteButton(animeId, true); // تحديث الزر الثابت
    }

    // 🔄 تحديث زر المفضلة (معدلة للنمط الثابت)
    updateFavoriteButton(animeId) {
        const favorites = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
        const buttons = document.querySelectorAll(`[data-anime-id="${animeId}"] .btn-favorite-fixed`);
        
        buttons.forEach(button => {
            const icon = button.querySelector('i');
            if (favorites.includes(animeId)) {
                icon.className = 'fas fa-heart';
                button.classList.add('active'); // إضافة كلاس التفعيل للـ Glassmorphism
            } else {
                icon.className = 'far fa-heart';
                button.classList.remove('active');
            }
        });
    }

    // 📤 مشاركة الأنمي (تم نقل Toast لـ UIManager)
    shareAnime(animeId) {
        const anime = this.currentAnimeList.find(a => a.id === animeId);
        if (!anime) return;

        const title = anime.title.userPreferred;
        const url = `https://anilist.co/anime/${animeId}`;

        if (navigator.share) {
            navigator.share({
                title: title,
                text: `شاهد ${title} على AniList`,
                url: url
            });
        } else {
            navigator.clipboard.writeText(url).then(() => {
                this.uiManager.showToast('تم نسخ الرابط إلى الحافظة', 'success');
            });
        }
    }

    // 🎯 عرض تفاصيل الأنمي المتقدمة (تم تبسيطها)
    showAnimeDetails(anime) {
        this.uiManager.showToast(`جاري التوجيه إلى تفاصيل ${anime.title.userPreferred}...`, 'info');
        
        this.storeAnimeData(anime.id);

        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            window.location.href = `anime.html?id=${anime.id}`;
        }, 300);
    }

    // 🔍 البحث المتقدم
    searchAnime(searchTerm) {
        if (!searchTerm.trim()) {
            this.uiManager.displayAnime(this.currentAnimeList);
            // **تحسين:** إزالة نتائج البحث عند تفريغ شريط البحث
            this.showSearchResults(this.currentAnimeList.length, ''); 
            return;
        }

        // ... (منطق البحث الأصلي)
        const filtered = this.currentAnimeList.filter(anime => {
            const title = anime.title.userPreferred || anime.title.romaji || '';
            const englishTitle = anime.title.english || '';
            const nativeTitle = anime.title.native || '';
            const genres = anime.genres || [];
            const searchLower = searchTerm.toLowerCase();

            return (
                title.toLowerCase().includes(searchLower) ||
                englishTitle.toLowerCase().includes(searchLower) ||
                nativeTitle.toLowerCase().includes(searchLower) ||
                genres.some(genre => genre.toLowerCase().includes(searchLower))
            );
        });

        this.uiManager.displayAnime(filtered);
        this.showSearchResults(filtered.length, searchTerm);
    }

    // 📊 عرض نتائج البحث
    showSearchResults(count, term) {
        // ... (المنطق الأصلي)
        let element = document.getElementById('search-results-info');

        // **تحسين:** إزالة العنصر إذا كان شريط البحث فارغاً
        if (!term) {
            if (element) element.remove();
            return;
        }

        if (!element) {
            const newResultsInfo = document.createElement('div');
            newResultsInfo.id = 'search-results-info';
            newResultsInfo.style.cssText = `
                padding: 10px;
                text-align: center;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                margin: 10px;
                color: #fff;
                font-weight: bold;
                /* Glassmorphism */
                backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            `;
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer) {
                searchContainer.appendChild(newResultsInfo);
            } else {
                // إذا لم يكن هناك container، نضيفها لـ body
                document.body.prepend(newResultsInfo);
            }
            element = newResultsInfo;
        }

        if (count === 0) {
            element.innerHTML = `❌ لم يتم العثور على نتائج لـ "<strong>${term}</strong>"`;
            element.style.color = '#ff4757';
        } else {
            element.innerHTML = `✅ تم العثور على ${count} نتيجة لـ "<strong>${term}</strong>"`;
            element.style.color = '#00ff88';
        }
    }


    // 🎛️ تصفية متقدمة
    filterAnime(filters) {
        // ... (المنطق الأصلي)
        let filtered = [...this.currentAnimeList];

        if (filters.status) {
            filtered = filtered.filter(anime => anime.status === filters.status);
        }

        if (filters.genre) {
            filtered = filtered.filter(anime => 
                anime.genres && anime.genres.includes(filters.genre)
            );
        }

        if (filters.year) {
            filtered = filtered.filter(anime => anime.seasonYear == filters.year);
        }

        if (filters.minScore) {
            filtered = filtered.filter(anime => 
                anime.averageScore && anime.averageScore >= filters.minScore * 10
            );
        }

        this.uiManager.displayAnime(filtered);
    }

    // 🎯 الحصول على نص الحالة
    getStatusText(status) {
        const statusMap = {
            'RELEASING': '🟢 يعرض حالياً',
            'FINISHED': '🔵 منتهي',
            'NOT_YET_RELEASED': '🟣 قريباً',
            'CANCELLED': '🔴 ملغي',
            'HIATUS': '🟡 متوقف مؤقتاً'
        };
        return statusMap[status] || status;
    }

    // 📱 إدارة حالة التحميل (لإظهار/إخفاء المؤشر الكلاسيكي)
    showLoadingState(show) {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = show ? 'block' : 'none';
        }
    }

    // 🛑 معالجة أخطاء جلب البيانات
    handleDataFetchError(error) {
        console.error('خطأ في جلب البيانات:', error);
        
        let userMessage = 'حدث خطأ في تحميل بيانات الأنمي.';
        
        if (error.message.includes('429')) {
            userMessage = '🛑 تجاوز حد طلبات API. يرجى الانتظار دقيقة والمحاولة مرة أخرى.';
        } else if (error.message.includes('Network') || error.message.includes('fetch') || error.message.includes('timeout')) {
            userMessage = '🌐 مشكلة في الاتصال بالشبكة أو انتهت المهلة. تحقق من اتصالك وحاول مرة أخرى.';
        } else {
            userMessage = `❌ حدث خطأ: ${error.message}`;
        }
        
        this.uiManager.showErrorState(userMessage);
    }

    // 🎪 عرض الأنمي
    displayAnime(animeList) {
        this.uiManager.displayAnime(animeList);
    }

    // 🔔 إظهار الإشعارات المتقدمة (تم تبسيطها لتتجه لـ UIManager)
    showToast(message, type = 'success', duration = 3000) {
        this.uiManager.showToast(message, type, duration);
    }

    // ⚙️ تحميل إعدادات الواجهة
    loadUISettings() {
        try {
            const savedSettings = localStorage.getItem('ui_settings');
            if (savedSettings) {
                this.uiSettings = { ...this.uiSettings, ...JSON.parse(savedSettings) };
            }
        } catch (error) {
            console.warn('تعذر تحميل إعدادات الواجهة:', error);
        }
    }

    // 💾 حفظ إعدادات الواجهة
    saveUISettings() {
        try {
            localStorage.setItem('ui_settings', JSON.stringify(this.uiSettings));
        } catch (error) {
            console.warn('تعذر حفظ إعدادات الواجهة:', error);
        }
    }

    // 🎨 تبديل السمة
    toggleTheme() {
        // ... (المنطق الأصلي)
        this.uiSettings.theme = this.uiSettings.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.uiSettings.theme);
        this.saveUISettings();
        this.uiManager.showToast(`تم التبديل إلى السمة ${this.uiSettings.theme === 'dark' ? 'الداكنة' : 'الفاتحة'}`, 'success');
    }

    // 🌐 تبديل اللغة
    toggleLanguage() {
        // ... (المنطق الأصلي)
        this.uiSettings.language = this.uiSettings.language === 'ar' ? 'en' : 'ar';
        document.documentElement.setAttribute('lang', this.uiSettings.language);
        document.documentElement.setAttribute('dir', this.uiSettings.language === 'ar' ? 'rtl' : 'ltr');
        this.saveUISettings();
        this.uiManager.showToast(`تم التبديل إلى اللغة ${this.uiSettings.language === 'ar' ? 'العربية' : 'الإنجليزية'}`, 'success');
    }

    // 📊 الحصول على إحصائيات النظام
    getSystemStats() {
        // ... (المنطق الأصلي)
        const cacheStats = this.advancedCache.getStats();
        return {
            performance: {
                totalRequests: this.performance.requestsCount,
                successfulRequests: this.performance.successfulRequests,
                failedRequests: this.performance.failedRequests,
                successRate: this.performance.requestsCount > 0 ? 
                    (this.performance.successfulRequests / this.performance.requestsCount * 100).toFixed(1) : 0
            },
            cache: cacheStats,
            anime: {
                total: this.currentAnimeList.length,
                cachedItems: cacheStats.itemsCount
            },
            ui: this.uiSettings
        };
    }

    // 🗑️ تنظيف البيانات
    clearData() {
        // ... (المنطق الأصلي)
        if (confirm('هل أنت متأكد من رغبتك في مسح جميع البيانات المخزنة؟')) {
            localStorage.clear();
            sessionStorage.clear();
            this.advancedCache = new AdvancedCache();
            this.currentAnimeList = [];
            this.loadingState.currentIndex = 0;
            this.uiManager.showToast('تم مسح جميع البيانات بنجاح', 'success');
            setTimeout(() => location.reload(), 1000);
        }
    }

    // 📤 تصدير البيانات
    exportData() {
        // ... (المنطق الأصلي)
        const exportData = {
            animeList: this.currentAnimeList,
            favorites: JSON.parse(localStorage.getItem('favorite_anime') || '[]'),
            settings: this.uiSettings,
            performance: this.getSystemStats(),
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `anilist-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.uiManager.showToast('تم تصدير البيانات بنجاح', 'success');
    }

    // iniciar la aplicación
    start() {
        this.init();
        this.fetchAnimeData();
    }
}

// =================================================================
// 5. 🌟 التهيئة المتقدمة (Startup)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // إنشاء نسخة عالمية من المدير
    window.aniListManager = new AniListManager();
    
    const animeGrid = document.createElement('div');
    animeGrid.id = 'animeGrid';
    // إضافة Grid إلى الـ body أو إلى عنصر رئيسي آخر
    document.body.appendChild(animeGrid); 

    // تحميل البيانات المخزنة مسبقاً إذا كانت موجودة
    const cachedAnime = window.aniListManager.advancedCache.get('current_anime_list');
    if (cachedAnime && cachedAnime.length > 0) {
        window.aniListManager.currentAnimeList = cachedAnime;
        window.aniListManager.displayAnime(cachedAnime);
        // إعادة تهيئة حالة التحميل للتحميل اللاحق
        window.aniListManager.loadingState.currentIndex = cachedAnime.length;
        window.aniListManager.loadingState.allLoaded = true;
        // **تحسين:** يمكن هنا التحقق من التغييرات وجلب البيانات الجديدة فقط
        window.aniListManager.uiManager.showToast(`✅ تم تحميل ${cachedAnime.length} أنمي من التخزين المؤقت`, 'info');

    } else {
        // **الإصلاح:** التأكد من بدء الجلب من الصفر إذا لم يكن هناك تخزين مؤقت للقائمة
        window.aniListManager.loadingState.currentIndex = 0;
        window.aniListManager.loadingState.allLoaded = false;
    }
    
    // بدء جلب البيانات الحديثة
    setTimeout(() => {
        window.aniListManager.start();
    }, 1000);
});

// 🚀 تصدير الكلاس للاستخدام العالمي
window.AniListManager = AniListManager;
window.UIManager = UIManager; // تصدير UIManager أيضاً لسهولة الوصول إلى وظائف الواجهة
