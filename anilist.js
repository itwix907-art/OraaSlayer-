// anilist.js - Anime Data Management Module (Enterprise Level)

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

// ⚙️ دوال المساعد (Utilities) للأداء
/**
 * تطبق تقنية Debounce لتقييد عدد مرات استدعاء الدالة.
 * @param {Function} func - الدالة المراد تقييدها.
 * @param {number} delay - فترة التأخير بالمللي ثانية.
 */
const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
            timeoutId = null;
        }, delay);
    };
};

/**
 * تقنية Throttle لتقييد تنفيذ الدالة لمرة واحدة كل فترة زمنية محددة.
 * @param {Function} func - الدالة المراد تقييدها.
 * @param {number} limit - الفترة الزمنية بالمللي ثانية.
 */
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// 🎯 إدارة حالة التطبيق (State Management)
class StateService {
    constructor(initialState) {
        this.state = initialState;
        this.listeners = new Map();
        // 🌟 إضافة خاصية لضمان عدم تغيير الحالة مباشرة من الخارج
        Object.freeze(this.state); 
    }

    // 🌟 جلب قيمة من الحالة
    get(key) {
        return this.state[key];
    }

    // 🌟 تحديث قيمة في الحالة وإخطار المستمعين
    set(key, value) {
        const oldValue = this.state[key];
        if (oldValue !== value) {
            // 🌟 إنشاء نسخة جديدة من الحالة لضمان عدم الطفرة (Immutability)
            const newState = { ...this.state, [key]: value };
            this.state = newState;
            Object.freeze(this.state); // إعادة التجميد
            this.notify(key, value);
        }
    }

    // 🌟 التسجيل للاستماع لتغيير مفتاح معين
    subscribe(key, callback) {
        if (!this.listeners.has(key)) {
            this.listeners.set(key, new Set());
        }
        this.listeners.get(key).add(callback);
        // إرجاع دالة لإلغاء الاشتراك
        return () => this.unsubscribe(key, callback);
    }

    // 🌟 إلغاء الاشتراك
    unsubscribe(key, callback) {
        if (this.listeners.has(key)) {
            this.listeners.get(key).delete(callback);
        }
    }

    // 🌟 إخطار المستمعين
    notify(key, value) {
        if (this.listeners.has(key)) {
            // 🌟 استخدام نسخة من الـ Set لتجنب مشاكل التعديل أثناء المرور
            Array.from(this.listeners.get(key)).forEach(callback => {
                 try {
                    callback(value);
                } catch (e) {
                    console.error(`خطأ في مستمع الحالة للمفتاح ${key}:`, e);
                }
            });
        }
    }
}


// 🚀 نظام التخزين المؤقت المتقدم (Enterprise Level)
class AdvancedCache {
    constructor() {
        this.cacheName = 'anilist-enterprise-cache-v3';
        this.cacheDuration = 24 * 60 * 60 * 1000; // 24 ساعة
        // 🌟 تحديد مدة التنبؤ بالتحديث (ساعة واحدة قبل الانتهاء)
        this.predictiveRefreshThreshold = 1 * 60 * 60 * 1000; 
        this.performanceMetrics = new Map();
        // 🌟 تعيين التنظيف الدوري كل ساعة ومراقبة التنبؤ
        setInterval(() => this.cleanupAndMonitor(), 60 * 60 * 1000); 
    }

    // 🔧 حفظ البيانات مع الوقت والنسخة الاحتياطية
    set(key, data, metadata = {}) {
        try {
            const expiryTime = Date.now() + this.cacheDuration; // 🌟 تحديد الوقت
            const cacheItem = {
                data: data,
                timestamp: Date.now(),
                metadata: {
                    version: '1.0',
                    source: 'anilist-api',
                    ...metadata
                },
                expiry: expiryTime // استخدام المتغير الجديد
            };

            // التخزين في localStorage
            localStorage.setItem(`cache_${key}`, JSON.stringify(cacheItem));
            
            // التخزين في sessionStorage للوصول السريع
            sessionStorage.setItem(`session_${key}`, JSON.stringify(data));
            
            // تحديث مؤشرات الأداء
            this.updateMetrics('write', key, data);
            
            return true;
        } catch (error) {
            console.warn('⚠️ تعذر حفظ التخزين المؤقت:', error);
            return false;
        }
    }

    // 🔧 جلب البيانات مع التحقق من الصلاحية
    get(key) {
        try {
            // محاولة جلب من sessionStorage أولاً (الأسرع)
            const sessionData = sessionStorage.getItem(`session_${key}`);
            if (sessionData) {
                this.updateMetrics('hit', key, 'session');
                // 🌟 التحقق من الصلاحية الخلفي (في حال وجود نسخة في session)
                this.checkAndRefresh(key); 
                return JSON.parse(sessionData);
            }

            // جلب من localStorage مع التحقق من الصلاحية
            const cached = localStorage.getItem(`cache_${key}`);
            if (cached) {
                const cacheItem = JSON.parse(cached);
                
                // التحقق من انتهاء الصلاحية
                if (Date.now() > cacheItem.expiry) {
                    this.delete(key);
                    this.updateMetrics('miss', key, 'expired'); // 🌟 تسجيل الكاش المنتهي
                    return null;
                }
                
                // 🌟 التحقق التنبؤي من الصلاحية
                if (cacheItem.expiry - Date.now() < this.predictiveRefreshThreshold) {
                    // تشغيل جلب خلفي غير حاصر (Non-Blocking)
                    this.triggerBackgroundRefresh(key); 
                }
                
                // تحديث sessionStorage للوصول المستقبلي
                sessionStorage.setItem(`session_${key}`, JSON.stringify(cacheItem.data));
                this.updateMetrics('hit', key, 'local');
                
                return cacheItem.data;
            }
            
            this.updateMetrics('miss', key);
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل التخزين المؤقت:', error);
            // 🌟 حذف العنصر الفاسد
            this.delete(key);
            return null;
        }
    }
    
    // 🌟 التحقق والتحديث للحالة
    checkAndRefresh(key) {
        const cached = localStorage.getItem(`cache_${key}`);
        if (!cached) return false;

        try {
            const cacheItem = JSON.parse(cached);
            
            // 🚨 التحقق من انتهاء الصلاحية
            if (Date.now() > cacheItem.expiry) {
                this.delete(key);
                return false;
            }
            
            // 🧠 منطق التحديث التنبؤي: إذا كان الكاش صالحاً، ولكن انتهت صلاحيته قريباً (أقل من ساعة)
            if (cacheItem.expiry - Date.now() < this.predictiveRefreshThreshold) {
                // إذا لم يتم تحديد حالة التحديث الخلفي بعد، قم بتشغيله
                if (!sessionStorage.getItem(`refreshing_${key}`)) {
                    this.triggerBackgroundRefresh(key);
                }
            }
            
            // إذا كان صالحاً، قم بتحديث الـ sessionStorage لضمان أقصى سرعة
            sessionStorage.setItem(`session_${key}`, JSON.stringify(cacheItem.data));
            return true;

        } catch (error) {
            this.delete(key);
            return false;
        }
    }

    // 🧠 تشغيل التحديث الخلفي (Non-Blocking)
    triggerBackgroundRefresh(key) {
        // منع التشغيل المتعدد
        if (sessionStorage.getItem(`refreshing_${key}`)) return;

        console.log(`⏳ بدء التحديث الخلفي التنبؤي للكاش: ${key}`);
        sessionStorage.setItem(`refreshing_${key}`, 'true');

        const animeIdMatch = key.match(/^anime_(\d+)/);
        if (animeIdMatch && window.aniListManager) {
            const animeId = parseInt(animeIdMatch[1]);
            // استخدام دالة الجلب المتقدمة ولكن بوضع "التحديث الخلفي"
            // 🌟 استخدام الدالة المجمعة الجديدة للتحسين
            window.aniListManager.fetchAnimeBatch([animeId], true) 
                .then(data => {
                    const anime = data[0]; // استخراج أول عنصر من نتائج التجميع
                    if (anime) {
                         console.log(`✅ اكتمل التحديث الخلفي بنجاح للكاش: ${key}`);
                         // 🌟 تحديث الحالة في StateService إذا كان الأنمي في القائمة الحالية (تحسين تجربة المستخدم)
                         window.aniListManager.updateSingleAnimeInState(anime);
                         
                    }
                })
                .catch(error => {
                    console.warn(`❌ فشل التحديث الخلفي للكاش ${key}:`, error);
                    window.aniListManager.logError('BackgroundRefresh', error, ErrorSeverity.MEDIUM);
                })
                .finally(() => {
                    // إزالة علامة التحديث بعد الانتهاء
                    sessionStorage.removeItem(`refreshing_${key}`);
                });
        }
    }

    // 🔧 حذف البيانات
    delete(key) {
        localStorage.removeItem(`cache_${key}`);
        sessionStorage.removeItem(`session_${key}`);
    }
    
    // 🌟 إضافة دالة لحذف جميع الكاش
    clearAll() {
        const keysToRemove = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keysToRemove.forEach(key => this.delete(key.replace('cache_', '')));
        sessionStorage.clear();
        this.performanceMetrics.clear();
    }

    // 🔧 تنظيف التخزين المؤقت المنتهي ومراقبة التنبؤ
    cleanupAndMonitor() {
        // 1. التنظيف القياسي
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => {
            const pureKey = key.replace('cache_', '');
            try {
                const cached = localStorage.getItem(key);
                // 🌟 إضافة تحقق من القيمة قبل التحليل
                if (!cached) {
                    this.delete(pureKey);
                    return;
                }
                const cacheItem = JSON.parse(cached);
                
                if (Date.now() > cacheItem.expiry) {
                    this.delete(pureKey);
                } 
                
                // 2. مراقبة التنبؤ
                else if (cacheItem.expiry - Date.now() < this.predictiveRefreshThreshold) {
                    this.triggerBackgroundRefresh(pureKey);
                }
                
            } catch (error) {
                // حذف العناصر الفاسدة أيضاً
                this.delete(pureKey);
            }
        });
    }

    // 📊 تحديث مؤشرات الأداء
    updateMetrics(type, key, data) {
        const metricKey = `${type}_${key}_${Date.now()}`; // استخدام تاريخ الكتابة للفرز
        this.performanceMetrics.set(metricKey, {
            type,
            key,
            timestamp: Date.now(),
            size: data ? JSON.stringify(data).length : 0
        });
        // 🌟 الحفاظ على حجم الخريطة PerformanceMetrics محدوداً
        if (this.performanceMetrics.size > 200) {
            const oldestKey = Array.from(this.performanceMetrics.keys())[0];
            this.performanceMetrics.delete(oldestKey);
        }
    }

    // 📊 الحصول على إحصائيات الأداء
    getStats() {
        const stats = {
            totalHits: 0,
            totalMisses: 0,
            totalWrites: 0,
            cacheSize: 0 // بالبايت
        };

        this.performanceMetrics.forEach(metric => {
            if (metric.type === 'hit') stats.totalHits++;
            if (metric.type === 'miss') stats.totalMisses++;
            if (metric.type === 'write') stats.totalWrites++;
            // 🌟 الجمع الذكي لحجم البيانات
            if (metric.type !== 'miss') { 
                 stats.cacheSize += metric.size || 0;
            }
        });
        
        // 🌟 إضافة مقياس حجم التخزين الفعلي لـ localStorage
        const totalStorageSize = Object.keys(localStorage).reduce((total, key) => {
            // تقدير حجم التخزين: استخدام length * 2 للبايت (UTF-16)
            return total + (localStorage.getItem(key).length * 2); 
        }, 0);
        stats.totalStorageSizeKB = (totalStorageSize / 1024).toFixed(2);

        return stats;
    }
}

// 🛡️ ثابتات شدة الأخطاء
const ErrorSeverity = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL' // يتطلب إرسال للخادم
};

// 🎯 النظام الرئيسي المحسّن (Enterprise Level)
class AniListManager {
    constructor() {
        this.ANILIST_API = 'https://graphql.anilist.co';
        this.advancedCache = new AdvancedCache();
        this.animeUrls = ANIME_URLS_LIST;
        
        // 🌟 إدارة الحالة التفاعلية
        this.stateService = new StateService({
            currentAnimeList: [], // القائمة المعروضة حالياً
            loadingState: {
                currentIndex: 0,
                isLoading: false,
                allLoaded: false,
                progress: 0,
                message: 'جاري الإعداد...'
            },
            uiSettings: {
                theme: 'dark',
                language: 'ar',
                animations: true,
                imageQuality: 'high'
            },
            // 🌟 إضافة حالة لمراقبة الذاكرة
            memoryUsage: {
                currentMB: 0,
                limitMB: 100, // حد تحذيري
                warning: false
            },
            // 🌟 إضافة حالة للتصفية والفرز
            currentFilters: {
                status: null,
                genre: null,
                year: null,
                minScore: 0,
                sortBy: 'popularity', // القيمة الافتراضية
                sortDirection: 'desc' // القيمة الافتراضية
            },
            // 🌟 إضافة حالة لـ Pre-fetching
            prefetchedAnime: new Map() // ID -> Promise
        });
        
        // ربط القائمة المعروضة بالحالة
        this.currentAnimeList = this.stateService.get('currentAnimeList');


        // 👇 القائمة الجديدة لربط معرف الأنمي بملف بياناته (لتحقيق فكرتك)
        this.ANIME_DATA_FILES = new Map([
            // [AniList ID, 'اسم_ملف_البيانات.js']
            // تم افتراض أن 153800 هو One-Punch Man 3 (للتوافق مع فكرتك)
            [153800, 'One-punchman3-data.js'], 
            [155783, 'Tengoku-Daimakyou-data.js'], // Tengoku Daimakyou
            // أضف الأنميات الأخرى هنا:
            // [145064, 'Jujutsu-Kaisen-2nd-Season-data.js'], 
            // [151807, 'Ore-dake-Level-Up-na-Ken-data.js'] 
        ]);
        
        // ⚡ إعدادات متقدمة للأداء
        this.BATCH_SIZE = 4;
        this.DELAY_MS = 1200;
        this.MAX_RETRIES = 3;
        this.TIMEOUT_MS = 15000;
        // 🌟 الحد الأعلى للموارد المطلوبة دفعة واحدة في GraphQL
        this.MAX_BATCH_IDS = 15; 
        
        // 🌟 تثبيت المعالجات المقيدة (Throttle/Debounce)
        this.throttledScrollAnimations = throttle(this.addScrollAnimations.bind(this), 300);
        this.debouncedSearch = debounce(this.searchAnime.bind(this), 400);

        // 📊 تتبع الأداء
        this.performance = {
            startTime: 0,
            requestsCount: 0,
            successfulRequests: 0,
            failedRequests: 0
        };
        
        // 🌟 تعيين حالة الجلب المسبق (لضمان أن دالة fetchAnimeBatch تستخدم الـ Map)
        this.prefetchedAnime = this.stateService.get('prefetchedAnime');


        // 🎨 إعدادات الواجهة المتقدمة (مدمجة الآن في StateService)
        // this.uiSettings = { ...this.stateService.get('uiSettings') }; 
        
        this.init();
    }

    // 🔧 التهيئة المتقدمة
    init() {
        this.loadUISettings();
        this.setupStateSubscriptions(); // 🌟 اشتراكات الحالة
        this.setupPerformanceMonitoring();
        this.advancedCache.cleanupAndMonitor(); // 🌟 استخدام الدالة الجديدة
        this.setupErrorHandling();
        
        // 🛡️ بدء مراقبة الذاكرة كل 30 ثانية
        setInterval(() => this.monitorMemoryUsage(), 30000); 
    }
    
    // 🌟 إعداد اشتراكات الحالة
    setupStateSubscriptions() {
        // تحديث إعدادات الواجهة عندما تتغير في الخدمة
        this.stateService.subscribe('uiSettings', (newSettings) => {
            this.uiSettings = newSettings; // تحديث الإعداد المحلي
            document.documentElement.setAttribute('data-theme', newSettings.theme);
            document.documentElement.setAttribute('lang', newSettings.language);
            document.documentElement.setAttribute('dir', newSettings.language === 'ar' ? 'rtl' : 'ltr');
            
            // 🌟 إعادة تطبيق تأثيرات التمرير عند تغيير الإعدادات
            if (newSettings.animations) {
                this.addScrollAnimations();
            }
        });
        
        // تحديث حالة التحميل على الواجهة
        this.stateService.subscribe('loadingState', (newState) => {
            this.updateProgress(newState.progress, newState.message);
            // ... يمكنك إضافة تحديثات أخرى للـ UI هنا ...
        });
        
        // تحديث قائمة الأنمي
        this.stateService.subscribe('currentAnimeList', (newList) => {
            this.currentAnimeList = newList;
            // الملاحظة: دالة displayAnime ستقوم بهذا.
        });
        
        // 🛡️ الاشتراك في مراقبة الذاكرة لإطلاق التنبيهات
        this.stateService.subscribe('memoryUsage', (newState) => {
            if (newState.warning && newState.currentMB > 0) {
                this.showToast(`⚠️ استهلاك الذاكرة مرتفع (${newState.currentMB} MB). قد تحتاج لإعادة التحميل.`, 'warning', 10000);
            }
        });
        
        // 🌟 الاشتراك في تغيير الفلاتر/الفرز وإعادة العرض
        this.stateService.subscribe('currentFilters', (newFilters) => {
            // 🌟 إعادة تصفية وفرز القائمة المعروضة حاليًا
            this.applyCurrentFiltersAndSorting();
        });
    }


    // ⚡ إعداد مراقبة الأداء
    setupPerformanceMonitoring() {
        // مراقبة أداء الشبكة
        if ('connection' in navigator) {
            // 🌟 إضافة تحديث فوري عند بدء التشغيل
            this.adjustSettingsBasedOnConnection(); 
            navigator.connection.addEventListener('change', () => {
                this.adjustSettingsBasedOnConnection();
            });
        }

        // تتبع وقت التحميل
        this.performance.startTime = performance.now();
    }
    
    // 🛡️ مراقبة استخدام الذاكرة وإطلاق التحذيرات
    monitorMemoryUsage() {
        if ('performance' in window && 'memory' in performance) {
            const memory = performance.memory;
            // تحويل البايت إلى ميغابايت (MB)
            const usedMB = (memory.usedJSHeapSize / 1048576).toFixed(2); 
            const totalMB = (memory.totalJSHeapSize / 1048576).toFixed(2);
            
            const memoryState = this.stateService.get('memoryUsage');
            
            // 🌟 تحديث الحالة
            this.stateService.set('memoryUsage', {
                currentMB: parseFloat(usedMB),
                limitMB: memoryState.limitMB,
                // التحذير إذا تجاوز 80% من الحد الأقصى أو حد التحذير الذي وضعناه
                warning: parseFloat(usedMB) > memoryState.limitMB || 
                         (memory.jsHeapSizeLimit > 0 && memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.8)
            });
            
            if (this.stateService.get('memoryUsage').warning) {
                this.logError('MemoryWarning', `Used: ${usedMB}MB, Total: ${totalMB}MB`, ErrorSeverity.MEDIUM);
            }
        }
    }


    // 🌐 ضبط الإعدادات بناءً على سرعة الاتصال
    adjustSettingsBasedOnConnection() {
        const currentSettings = this.stateService.get('uiSettings');
        let newSettings = { ...currentSettings };
        
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            // 🌟 منطق "تحسين أولوية التحميل"
            if (connection.saveData || connection.effectiveType === 'slow-2g') {
                this.BATCH_SIZE = 2; // تقليل حجم الدفعة لتقليل الإجهاد على الشبكة
                newSettings.imageQuality = 'low';
                newSettings.animations = false;
            } else if (connection.effectiveType.includes('2g')) {
                this.BATCH_SIZE = 3;
                newSettings.imageQuality = 'medium';
            } else {
                this.BATCH_SIZE = 4;
                newSettings.imageQuality = 'high';
            }
        }
        
        // تحديث الحالة
        this.stateService.set('uiSettings', newSettings);
    }

    // 🛡️ إعداد معالجة الأخطاء المتقدم
    setupErrorHandling() {
        window.addEventListener('error', (event) => {
            this.logError('Global Error', event.error, ErrorSeverity.CRITICAL);
        });

        window.addEventListener('unhandledrejection', (event) => {
            this.logError('Unhandled Promise Rejection', event.reason, ErrorSeverity.HIGH);
        });
        
        // 🌟 إضافة معالجة للأخطاء المتعلقة بالموارد
        document.addEventListener('error', (event) => {
            if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
                 this.logError('ResourceLoadFailure', `Failed to load resource: ${event.target.src || event.target.href}`, ErrorSeverity.LOW);
            }
        }, true); // استخدام capture phase لضمان التقاط جميع الأخطاء
    }

    // 📝 تسجيل الأخطاء
    logError(type, error, severity = ErrorSeverity.MEDIUM) {
        const errorLog = {
            type,
            message: error?.message || (typeof error === 'string' ? error : 'Unknown error'), // 🌟 دعم الرسائل النصية المباشرة
            stack: error?.stack,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            severity: severity // 🌟 إضافة شدة الخطأ
        };

        // حفظ في localStorage للتحليل لاحقاً
        try {
            const existingLogs = JSON.parse(localStorage.getItem('error_logs') || '[]');
            existingLogs.push(errorLog);
            localStorage.setItem('error_logs', JSON.stringify(existingLogs.slice(-100))); // حفظ آخر 100 خطأ فقط
        } catch (e) {
            console.warn('تعذر حفظ سجل الأخطاء:', e);
        }
        
        // 🌟 إرسال الأخطاء الحرجة إلى الخادم (محاكاة)
        if (severity === ErrorSeverity.CRITICAL || severity === ErrorSeverity.HIGH) {
            // استخدام `navigator.sendBeacon` للإرسال غير الحاصر عند الإغلاق
            if (navigator.sendBeacon) {
                 // navigator.sendBeacon('/api/log-error', JSON.stringify(errorLog));
            } else {
                // fetch('/api/log-error', { method: 'POST', body: JSON.stringify(errorLog), keepalive: true });
            }
            console.error(`🚨 خطأ حرج تم الإبلاغ عنه: ${errorLog.message}`);
        }
    }

    // ⏰ دالة التأخير الذكية
    delay(ms) {
        return new Promise(resolve => {
            // عرض مؤشر تقدم أثناء الانتظار
            this.showProgressIndicator();
            setTimeout(() => {
                this.hideProgressIndicator();
                resolve();
            }, ms);
        });
    }

    // 📊 عرض مؤشر التقدم (مؤشر التفاعل السريع)
    showProgressIndicator() {
        let indicator = document.getElementById('progress-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'progress-indicator';
            indicator.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(90deg, #00ff88, #0099ff);
                z-index: 10000;
                transform-origin: left;
                animation: progressPulse 2s infinite;
            `;
            // 🌟 إضافة إلى body بشكل آمن
            if (document.body) {
                 document.body.appendChild(indicator);
            }

            // إضافة أنيميشن CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes progressPulse {
                    0% { transform: scaleX(0); opacity: 1; }
                    50% { transform: scaleX(0.5); opacity: 0.7; }
                    100% { transform: scaleX(1); opacity: 0; }
                }
            `;
            // 🌟 إضافة إلى head بشكل آمن
            if (document.head) {
                document.head.appendChild(style);
            }
        }
    }

    // 📊 إخفاء مؤشر التقدم
    hideProgressIndicator() {
        const indicator = document.getElementById('progress-indicator');
        if (indicator) {
            // 🌟 إخفاء سلس
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 300);
        }
    }

    // 🔍 استخراج معرفات الأنمي
    extractAnimeIds() {
        return this.animeUrls.map(url => {
            const match = url.match(/anime\/(\d+)|manga\/(\d+)/); 
            // 🌟 استخدام تعبير منطقي أكثر أماناً
            return match ? parseInt(match[1] || match[2] || '0') : null; 
        }).filter(id => id !== null && id > 0);
    }

    // 📝 GraphQL Query متقدم
    get ANIME_QUERY() {
        // تم تصميم الاستعلام لجلب حقل 'id' و 'title' فقط، لأن دالة الجلب الآن ستستخدم التجميع
        // هذا الاستعلام لم يعد يُستخدم في دالة fetchAnime الفردية ولكنه يُحفظ للاستخدام البديل/المستقبلي
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
    
    // ⚡ دالة جديدة: تحضير استعلام GraphQL المجمّع
    prepareGraphQLQueryBatch(ids) {
        let queryParts = [];
        let variables = {};
        
        ids.forEach((id, index) => {
            const alias = `anime${id}`;
            const variableName = `id${id}`;
            
            // 🌟 بناء استعلام مخصص لكل ID باستخدام الـ Alias في GraphQL
            queryParts.push(`
                ${alias}: Media(id: $${variableName}, type: ANIME) {
                    id
                    idMal
                    title { userPreferred romaji english native }
                    description(asHtml: false)
                    episodes duration status season seasonYear averageScore meanScore popularity favourites genres
                    tags { name category rank }
                    coverImage { large extraLarge color }
                    bannerImage format
                    startDate { year month day } endDate { year month day }
                    nextAiringEpisode { airingAt timeUntilAiring episode }
                    studios(isMain: true) { nodes { name siteUrl } }
                    relations { edges { node { id title { userPreferred } type format } relationType } }
                    recommendations { nodes { mediaRecommendation { id title { userPreferred } coverImage { large } } } }
                    stats { statusDistribution { status amount } scoreDistribution { score amount } }
                    siteUrl modNotes isAdult trending updatedAt
                }
            `);
            
            variables[variableName] = id;
        });

        const query = `
            query (${ids.map(id => `$id${id}: Int`).join(', ')}) {
                ${queryParts.join('\n')}
            }
        `;
        
        return { query, variables };
    }


    // 🚀 دالة الجلب المتقدمة مع إعادة المحاولة الذكية (مُعدلة لدعم الجلب الخلفي)
    // 🌟 تم الآن توجيهها لاستخدام الجلب المجمع (fetchAnimeBatch) حتى في الوضع الفردي
    async fetchAnime(id, isBackground = false) {
        if (!isBackground) {
            this.performance.requestsCount++;
        }

        // التحقق من التخزين المؤقت أولاً
        const cached = this.advancedCache.get(`anime_${id}`);
        if (cached && !isBackground) { // لا نستخدم الكاش إذا كان تحديثاً خلفياً
            this.performance.successfulRequests++;
            return cached;
        } 
        
        // 🌟 التحقق من وجود جلب مسبق
        const prefetchedPromise = this.prefetchedAnime.get(id);
        if (prefetchedPromise) {
            this.prefetchedAnime.delete(id); // استخدام الجلب المسبق ثم إزالته
            console.log(`⚡ استخدام الجلب المسبق للأنمي ID: ${id}`);
            return prefetchedPromise;
        }
        
        // 🌟 استخدام الدالة المجمّعة حتى لجلب ID واحد (لضمان نفس الاستعلامات)
        const result = await this.fetchAnimeBatch([id], isBackground); 
        return result[0];
    }
    
    
    // ⚡ دالة جديدة: جلب مجموعة من الأنميات باستخدام التجميع (Batching)
    async fetchAnimeBatch(ids, isBackground = false) {
        if (!isBackground) {
            this.performance.requestsCount++;
        }
        
        let retries = this.MAX_RETRIES;
        let lastError;
        
        const { query, variables } = this.prepareGraphQLQueryBatch(ids);

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
                    body: JSON.stringify({ query, variables }),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (response.status === 429) {
                    const retryAfter = response.headers.get('Retry-After') || 60;
                    if (!isBackground) this.showToast(`⏳ تجاوز حد الطلبات، إعادة المحاولة بعد ${retryAfter} ثانية`, 'warning');
                    await this.delay(retryAfter * 1000);
                    continue;
                }
                
                if (!response.ok) {
                    throw new Error(`خطأ في API: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                
                if (result.errors) {
                    throw new Error(`خطأ في GraphQL: ${result.errors[0].message}`);
                }
                
                const fetchedAnime = [];
                // 🌟 معالجة نتائج التجميع
                if (result.data) {
                    ids.forEach(id => {
                        const alias = `anime${id}`;
                        const anime = result.data[alias];
                        
                        if (anime && anime.id) {
                            // حفظ في الكاش
                            this.advancedCache.set(`anime_${id}`, anime, {
                                size: JSON.stringify(anime).length,
                                source: isBackground ? 'api_bg_refresh' : 'api_batch_fetch'
                            });
                            fetchedAnime.push(anime);
                        }
                    });
                }
                
                if (!isBackground) this.performance.successfulRequests++;
                return fetchedAnime;
                
            } catch (error) {
                lastError = error;
                retries--;
                
                if (retries > 0) {
                    const backoffDelay = Math.pow(2, this.MAX_RETRIES - retries) * 1000;
                    if (!isBackground) this.showToast(`🔄 إعادة المحاولة ${this.MAX_RETRIES - retries}/${this.MAX_RETRIES}`, 'info');
                    await this.delay(backoffDelay);
                }
            }
        }

        if (!isBackground) {
            this.performance.failedRequests++;
            this.logError('FetchAnimeBatch', lastError, ErrorSeverity.HIGH);
        }
        throw new Error(`فشل جلب البيانات المجمعة بعد ${this.MAX_RETRIES} محاولات: ${lastError.message}`);
    }


    // 🎯 جلب البيانات مع التقدم المتقدم (مُعدلة لاستخدام التجميع)
    async fetchAnimeData() {
        const loadingState = this.stateService.get('loadingState');

        if (loadingState.isLoading) {
            this.showToast('جاري التحميل بالفعل...', 'info');
            return;
        }

        this.stateService.set('loadingState', { ...loadingState, isLoading: true });
        this.performance.startTime = performance.now();
        
        const animeIds = this.extractAnimeIds();
        
        try {
            this.showLoadingState(true);
            this.stateService.set('loadingState', { 
                ...this.stateService.get('loadingState'), 
                progress: 0, 
                message: 'بدء التحميل...' 
            });

            const totalIds = animeIds.length;
            let successfulFetches = 0;
            let failedFetches = 0;
            const batchSize = this.MAX_BATCH_IDS; // استخدام حجم التجميع الأقصى
            const totalBatches = Math.ceil(totalIds / batchSize);
            let currentList = [...this.currentAnimeList]; 
            
            // 🌟 إضافة السكلتون المبدئي لجميع العناصر
            const container = document.getElementById('animeGrid');
            if(container) {
                 container.innerHTML = this.createSkeletonLoader(totalIds);
            }

            for (let i = 0; i < totalIds; i += batchSize) { // 🌟 البدء من الصفر دائماً والاعتماد على الكاش
                const batchIds = animeIds.slice(i, i + batchSize);
                const currentBatch = Math.floor(i / batchSize) + 1;
                
                // 1. التحقق من الكاش للدفعة الحالية
                const uncachedIds = [];
                const cachedData = [];
                
                batchIds.forEach(id => {
                    const cached = this.advancedCache.get(`anime_${id}`);
                    if (cached) {
                        cachedData.push(cached);
                        successfulFetches++;
                    } else {
                        uncachedIds.push(id);
                    }
                });
                
                // 2. تحديث الواجهة بالبيانات المخزنة فوراً
                cachedData.forEach(anime => {
                     // 🌟 إضافة بطاقة فوراً بدون إزالة سكلتون
                    if (!currentList.some(a => a.id === anime.id)) {
                         currentList.push(anime);
                         // 🌟 استخدام دالة تحديث البطاقة الذكية
                         this.updateAnimeCard(anime, true, 'skeleton', i); 
                    }
                });
                // 🌟 لا نقوم بتحديث الحالة حتى يتم جلب البيانات الجديدة (لتجنب التحديثات المفرطة)
                
                // 3. تحديث شريط التقدم بالرسالة المطلوبة
                this.stateService.set('loadingState', {
                    ...this.stateService.get('loadingState'),
                    progress: (i / totalIds) * 100,
                    message: `جاري تحميل الدفعة ${currentBatch} من ${totalBatches} (تم تخزين ${cachedData.length} أنمي)`
                });
                
                let fetchedData = [];

                // 4. جلب البيانات غير المخزنة باستخدام التجميع
                if (uncachedIds.length > 0) {
                    try {
                        const result = await this.fetchAnimeBatch(uncachedIds);
                        fetchedData = result;
                        successfulFetches += fetchedData.length;
                        failedFetches += uncachedIds.length - fetchedData.length;
                    } catch (error) {
                        failedFetches += uncachedIds.length; // اعتبار كل الطلبات غير المنجزة فاشلة
                        console.error('خطأ في طلب التجميع:', error);
                        this.logError('BatchFetchError', error, ErrorSeverity.HIGH);
                    }
                }
                
                // 5. معالجة نتائج التجميع
                fetchedData.forEach(anime => {
                    if (!currentList.some(a => a.id === anime.id)) {
                         currentList.push(anime);
                         this.updateAnimeCard(anime, true, 'skeleton', animeIds.indexOf(anime.id));
                    }
                });

                // 6. تحديث القائمة النهائية والحالة
                this.stateService.set('currentAnimeList', currentList);
                this.stateService.set('loadingState', {
                    ...this.stateService.get('loadingState'),
                    currentIndex: i + batchSize,
                    progress: Math.min(100, ((i + batchSize) / totalIds) * 100),
                });
                
                // 7. إزالة السكلتون الذي لم يتم تحديثه (فشل)
                const totalProcessedInBatch = cachedData.length + fetchedData.length;
                const totalIdsInBatch = batchIds.length;
                const failedInBatch = totalIdsInBatch - totalProcessedInBatch;
                
                if (failedInBatch > 0) {
                     const skeletons = container.querySelectorAll('.skeleton');
                     // 🌟 إزالة السكلتون الفاشل من نهاية الدفعة (افتراضياً)
                     for (let k = 0; k < failedInBatch; k++) {
                         if (skeletons[i + k]) {
                             // 🌟 وضع علامة فشل بدلاً من الإزالة
                             skeletons[i + k].classList.add('failed-load');
                             skeletons[i + k].innerHTML = `<div class="error-load-text">فشل التحميل ${animeIds[i+k]}</div>`;
                             // skeletons[i + k].remove();
                         }
                     }
                }


                // تأخير بين الدفعات مع التقدم
                if (this.stateService.get('loadingState').currentIndex < totalIds) {
                    await this.delay(this.DELAY_MS / 2); // تقليل التأخير مع التجميع
                    
                    // 🌟 تفعيل الجلب المسبق للدفعة التالية
                    const nextBatchIds = animeIds.slice(i + batchSize, i + batchSize * 2);
                    this.prefetchRelatedData(nextBatchIds);
                }
            }
            
            // 8. تطبيق الفرز والتصفية على القائمة النهائية (للتأكد من الترتيب الصحيح)
            this.applyCurrentFiltersAndSorting();


            // الانتهاء من التحميل
            this.stateService.set('loadingState', {
                ...this.stateService.get('loadingState'),
                allLoaded: true,
                progress: 100,
                message: 'اكتمل التحميل بنجاح!'
            });

            // إظهار إحصائيات الأداء
            this.showPerformanceSummary(successfulFetches, failedFetches);

            // حفظ القائمة الكاملة بعد التحميل
            this.advancedCache.set('current_anime_list', currentList, { source: 'full_fetch' });
            
            // تطبيق الرسوم المتحركة
            if (this.stateService.get('uiSettings').animations) {
                this.addScrollAnimations();
            }

        } catch (error) {
            this.handleDataFetchError(error);
        } finally {
            this.stateService.set('loadingState', { ...this.stateService.get('loadingState'), isLoading: false });
            this.showLoadingState(false);
            // 🛑 إخفاء شريط التقدم بعد الانتهاء
            setTimeout(() => this.hideProgressBar(), 1000); 
        }
    }
    
    // 🌟 دالة جديدة: الجلب المسبق للبيانات المرتبطة
    prefetchRelatedData(ids) {
        // فلترة المعرفات التي هي قيد الجلب المسبق أو موجودة في الكاش
        const newIdsToPrefetch = ids.filter(id => 
            !this.prefetchedAnime.has(id) && !this.advancedCache.get(`anime_${id}`)
        );
        
        if (newIdsToPrefetch.length === 0) return;
        
        console.log(`⚡ بدء الجلب المسبق لـ ${newIdsToPrefetch.length} أنمي`);
        
        // استخدام fetchAnimeBatch في وضع الخلفية وإنشاء Promise لحفظها
        const prefetchPromise = this.fetchAnimeBatch(newIdsToPrefetch, true);
        
        newIdsToPrefetch.forEach(id => {
            this.prefetchedAnime.set(id, prefetchPromise);
            
            // 🌟 تحديث الـ Promise عند الانتهاء (لضمان أن الكاش تم تحديثه)
            prefetchPromise.then(result => {
                const fetchedAnime = result.find(a => a.id === id);
                if (fetchedAnime) {
                     // 🌟 وضع البيانات مباشرة في الكاش (تم بالفعل داخل fetchAnimeBatch)
                     this.updateSingleAnimeInState(fetchedAnime); // تحديث الواجهة فورًا
                }
                this.prefetchedAnime.delete(id);
            }).catch(() => {
                this.prefetchedAnime.delete(id);
            });
        });
    }

    // 🌟 تحديث حالة أنمي مفردة في قائمة الحالة (للتحديث الخلفي/المسبق)
    updateSingleAnimeInState(anime) {
        const currentList = this.stateService.get('currentAnimeList');
        const index = currentList.findIndex(a => a.id === anime.id);
        
        if (index > -1) {
            // 🌟 إنشاء قائمة جديدة لضمان عدم الطفرة (Immutability)
            const newList = [...currentList];
            newList[index] = anime;
            this.stateService.set('currentAnimeList', newList);
            this.updateAnimeCard(anime, false); // تحديث بطاقة الأنمي على الواجهة
        }
    }


    // 📊 إنشاء هيكل التحميل
    createSkeletonLoader(count) {
        let skeletonHTML = '';
        for (let i = 0; i < count; i++) {
            skeletonHTML += `
                <div class="anime-card skeleton" data-skeleton-index="${i}">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-title"></div>
                    <div class="skeleton-text"></div>
                </div>
            `;
        }
        return skeletonHTML;
    }

    // 📊 تحديث شريط التقدم (معدلة)
    updateProgress(percent, message = '') {
        let progressContainer = document.getElementById('progress-container');
        let progressText = document.getElementById('progress-text');
        const progressFill = document.getElementById('progress-fill');
        
        // 🌟 إذا لم يكن موجوداً، قم بإنشائه (تم نقل معظم CSS إلى أسفل)
        if (!progressContainer && document.body) {
            progressContainer = document.createElement('div');
            progressContainer.id = 'progress-container';
            progressContainer.style.cssText = `z-index: 9999; opacity: 1;`;

            const progressBar = document.createElement('div');
            progressBar.id = 'progress-bar';

            const newProgressFill = document.createElement('div');
            newProgressFill.id = 'progress-fill';

            progressText = document.createElement('div');
            progressText.id = 'progress-text';

            progressBar.appendChild(newProgressFill);
            progressContainer.appendChild(progressBar);
            progressContainer.appendChild(progressText);
            document.body.appendChild(progressContainer);
        }

        // تحديث التقدم والنص
        if (progressFill) progressFill.style.width = `${percent}%`;
        if (progressText) progressText.textContent = message;
    }

    // 📊 إخفاء شريط التقدم (جديدة)
    hideProgressBar() {
        const progressContainer = document.getElementById('progress-container');
        if (progressContainer) {
            progressContainer.style.opacity = '0';
            // الإزالة من DOM بعد الانتقال
            setTimeout(() => {
                progressContainer.remove();
            }, 300);
        }
    }

    // 📊 إظهار إحصائيات الأداء
    showPerformanceSummary(successful, failed) {
        const totalTime = (performance.now() - this.performance.startTime) / 1000;
        const cacheStats = this.advancedCache.getStats();
        
        const summary = `
            ✅ ${successful} أنمي
            ❌ ${failed} أنمي
            ⏱️ ${totalTime.toFixed(2)} ثانية
            📊 نجاح: ${((successful / (successful + failed)) * 100).toFixed(1)}%
            💾 ضربات التخزين: ${cacheStats.totalHits} (حجم التخزين: ${cacheStats.totalStorageSizeKB} KB)
        `;

        this.showToast(summary, 'success', 7000); // زيادة المدة
        
        // حفظ إحصائيات الأداء
        this.savePerformanceMetrics(successful, failed, totalTime);
    }

    // 💾 حفظ مؤشرات الأداء
    savePerformanceMetrics(successful, failed, totalTime) {
        const metrics = {
            timestamp: new Date().toISOString(),
            successfulFetches: successful,
            failedFetches: failed,
            totalTime: totalTime,
            cacheStats: this.advancedCache.getStats(),
            userAgent: navigator.userAgent,
            // 🌟 التأكد من وجود navigator.connection
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null,
            // 🛡️ إضافة حالة الذاكرة
            memory: this.stateService.get('memoryUsage')
        };

        try {
            const existingMetrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
            existingMetrics.push(metrics);
            // حفظ آخر 50 سجل أداء فقط (تم تصحيح اسم المتغير)
            localStorage.setItem('performance_metrics', JSON.stringify(existingMetrics.slice(-50)));
        } catch (error) {
            console.warn('تعذر حفظ مؤشرات الأداء:', error);
            this.logError('SavePerformance', error, ErrorSeverity.LOW);
        }
    }

    // 🎨 إنشاء وتحديث بطاقة الأنمي المتقدمة
    updateAnimeCard(anime, isNewCard = false, placeholderClass = null, skeletonIndex = null) {
        const container = document.getElementById('animeGrid');
        if (!container) return;

        // 1. البحث عن البطاقة الحالية أو هيكل التحميل
        let card = container.querySelector(`[data-anime-id="${anime.id}"]`);
        let placeholderElement = null;
        
        if (!card && placeholderClass) {
             // 🌟 البحث عن هيكل التحميل باستخدام الفهرس
             placeholderElement = container.querySelector(`.${placeholderClass}[data-skeleton-index="${skeletonIndex}"]`);
             // 🌟 البحث في حالة عدم وجود فهرس (في حالة الإضافة من التخزين المؤقت)
             if (!placeholderElement) { 
                 placeholderElement = container.querySelector(`.${placeholderClass}`);
             }
        }
        
        // 2. إذا كانت البطاقة موجودة بالفعل، قم بتحديثها فقط
        if (card && !isNewCard) {
             // 🌟 تحديث أزرار المفضلة وما شابه
             this.updateFavoriteButton(anime.id);
             return card;
        }


        // 3. إنشاء أو إعادة استخدام البطاقة
        if (!card) {
            card = document.createElement('div');
            // 🌟 إضافة خاصية will-change لتحسين أداء التصيير
            card.style.willChange = 'transform, opacity'; 
            card.className = 'anime-card fade-in';
            card.setAttribute('data-anime-id', anime.id);
            card.setAttribute('data-status', anime.status);
            // 🌟 إضافة خاصية لضمان ترتيب الأنماط بعد الجلب
            card.style.order = skeletonIndex !== null ? skeletonIndex : 999; 
            
            // ... (بقية منطق إنشاء البطاقة من createAnimeCard) ...
            
            const title = anime.title.userPreferred || anime.title.romaji || 'عنوان غير متوفر';
            const score = anime.averageScore ? (anime.averageScore / 10).toFixed(1) : 'N/A';
            const year = anime.seasonYear || 'N/A';
            const episodes = anime.episodes || '?';
            
            const uiSettings = this.stateService.get('uiSettings');

            let coverImage = anime.coverImage?.extraLarge || anime.coverImage?.large;
            if (uiSettings.imageQuality === 'low') {
                coverImage = anime.coverImage?.large;
            }
            
            const dataFile = this.ANIME_DATA_FILES.get(anime.id);
            const watchLink = dataFile 
                ? `servers.html?datafile=${dataFile}&animeId=${anime.id}` 
                : `anime.html?id=${anime.id}`; 
                
            const detailsLink = `anime.html?id=${anime.id}`;


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
                        <div class="anime-episodes">${episodes} حلقة</div>
                        <div class="anime-badge ${anime.status.toLowerCase()}">${this.getStatusText(anime.status)}</div>
                    </div>
                    <div class="anime-actions">
                        <button class="btn-favorite" onclick="event.stopPropagation(); aniListManager.toggleFavorite(${anime.id})">
                            <i class="far fa-heart"></i>
                        </button>
                        <a href="${watchLink}" class="btn-watch-link" onclick="event.stopPropagation(); aniListManager.storeAnimeData(${anime.id})">
                            <i class="fas fa-play"></i>
                        </a>
                        <button class="btn-share" onclick="event.stopPropagation(); aniListManager.shareAnime(${anime.id})">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
                <div class="anime-info">
                    <h3 class="anime-title">${title}</h3>
                    <div class="anime-genres">
                        ${(anime.genres || []).slice(0, 2).map(genre => 
                            `<span class="genre-tag">${genre}</span>`
                        ).join('')}
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                this.storeAnimeData(anime.id);
                window.location.href = detailsLink;
            });
            
            this.updateFavoriteButton(anime.id);
        }
        
        // 4. استبدال هيكل التحميل بالبطاقة الجديدة
        if (placeholderElement) {
            container.replaceChild(card, placeholderElement);
        } else if (isNewCard) {
            // إضافة البطاقة إذا لم يكن هناك هيكل تحويل
             container.appendChild(card);
        }

        return card;
    }
    
    // 🎨 إنشاء بطاقة الأنمي المتقدمة (معدلة)
    createAnimeCard(anime, removeSkeleton = false) {
        // 🌟 توجيه الدالة القديمة لاستخدام الدالة الجديدة
        return this.updateAnimeCard(anime, true, removeSkeleton ? 'skeleton' : null);
    }

    // 👇 دالة مساعدة لحفظ بيانات الأنمي قبل الانتقال (تم تعديلها)
    storeAnimeData(animeId) {
        // 🌟 البحث في القائمة المحدثة
        const anime = this.stateService.get('currentAnimeList').find(a => a.id === animeId);
        if (anime) {
             // 1. التخزين المؤقت لبيانات الأنمي في sessionStorage (للوصول السريع في الصفحة التالية)
             sessionStorage.setItem('currentAnime', JSON.stringify(anime));
             
             // 2. 🌟 التعديل الحاسم: حفظ ID الأنمي بشكل دائم في localStorage لضمان العودة الآمنة
             localStorage.setItem('lastAnimeId', animeId.toString());
             
             // 3. تخزين صورة الأنمي (إذا لزم الأمر لـ watch.html)
             localStorage.setItem("selectedAnimeImg", anime.coverImage?.large || '');

             // 4. حفظ آخر أنمي تمت مشاهدته/الضغط عليه
             localStorage.setItem('lastViewedAnime', JSON.stringify({
                id: anime.id,
                title: anime.title.userPreferred,
                timestamp: Date.now()
            }));

        }
    }


    // ❤️ تبديل المفضلة
    toggleFavorite(animeId) {
        const favorites = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
        const index = favorites.indexOf(animeId);
        
        if (index > -1) {
            favorites.splice(index, 1); // ⚡ تم تصحيح طريقة الحذف
            this.showToast('تم إزالة من المفضلة', 'info');
        } else {
            favorites.push(animeId);
            this.showToast('تم إضافة إلى المفضلة', 'success');
        }
        
        localStorage.setItem('favorite_anime', JSON.stringify(favorites));
        this.updateFavoriteButton(animeId);
    }

    // 🔄 تحديث زر المفضلة
    updateFavoriteButton(animeId) {
        const favorites = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
        const buttons = document.querySelectorAll(`[data-anime-id="${animeId}"] .btn-favorite`);
        
        buttons.forEach(button => {
            const icon = button.querySelector('i');
            if (favorites.includes(animeId)) {
                icon.className = 'fas fa-heart';
                button.style.color = '#ff4757';
            } else {
                icon.className = 'far fa-heart';
                button.style.color = '#ffffff';
            }
        });
    }

    // 📤 مشاركة الأنمي
    shareAnime(animeId) {
        const anime = this.stateService.get('currentAnimeList').find(a => a.id === animeId);
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
            // نسخ الرابط إلى الحافظة
            navigator.clipboard.writeText(url).then(() => {
                this.showToast('تم نسخ الرابط إلى الحافظة', 'success');
            });
        }
    }

    // 🎯 عرض تفاصيل الأنمي المتقدمة (معدلة - أصبحت الآن تتبع وظيفة النقر على البطاقة)
    showAnimeDetails(anime) {
        // هذه الدالة الآن تم تبسيطها، وأصبحت وظيفتها الرئيسية في مُستمع الحدث (event listener) لـ card.addEventListener('click')
        // ولكن أبقيناها هنا لإمكانية الاستخدام المباشر
        this.showToast(`جاري التوجيه إلى تفاصيل ${anime.title.userPreferred}...`, 'info');
        
        this.storeAnimeData(anime.id);
        
        // 🌟 تطبيق تأثير التلاشي للتوجيه
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.3s ease';

        // التوجيه إلى صفحة التفاصيل القياسية (anime.html)
        setTimeout(() => {
            window.location.href = `anime.html?id=${anime.id}`;
        }, 300);
    }

    // 🔍 البحث المتقدم
    searchAnime(searchTerm) {
        const currentList = this.stateService.get('currentAnimeList');
        if (!searchTerm.trim()) {
            // 🌟 العودة إلى القائمة بعد تطبيق التصفية والفرز
            this.applyCurrentFiltersAndSorting(); 
            return;
        }

        const searchLower = searchTerm.toLowerCase();
        
        // 🌟 تطبيق البحث على القائمة الكاملة أولاً
        const unfilteredList = this.advancedCache.get('current_anime_list') || currentList;
        
        const filtered = unfilteredList.filter(anime => {
            const title = anime.title.userPreferred || anime.title.romaji || '';
            const englishTitle = anime.title.english || '';
            const nativeTitle = anime.title.native || '';
            const description = anime.description || ''; // 🌟 البحث في الوصف أيضًا
            const genres = anime.genres || [];

            return (
                title.toLowerCase().includes(searchLower) ||
                englishTitle.toLowerCase().includes(searchLower) ||
                nativeTitle.toLowerCase().includes(searchLower) ||
                description.toLowerCase().includes(searchLower) || // 🌟 إضافة البحث في الوصف
                genres.some(genre => genre.toLowerCase().includes(searchLower))
            );
        });

        // 🌟 تطبيق التصفية والفرز على نتائج البحث
        const filters = this.stateService.get('currentFilters');
        const finalFiltered = this.applyFiltersAndSortingLogic(filtered, filters);
        
        this.displayAnime(finalFiltered);
        
        // إظهار نتائج البحث
        this.showSearchResults(finalFiltered.length, searchTerm);
    }
    
    // 🌟 دالة البحث التي تستخدم Debounce
    performSearch(searchTerm) {
        this.debouncedSearch(searchTerm);
    }


    // 📊 عرض نتائج البحث
    showSearchResults(count, term) {
        const resultsInfo = document.getElementById('search-results-info');
        if (!resultsInfo) {
            const newResultsInfo = document.createElement('div');
            newResultsInfo.id = 'search-results-info';
            newResultsInfo.style.cssText = `
                padding: 10px;
                text-align: center;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                margin: 10px 0;
            `;
            // 🌟 البحث عن الحاوية بشكل آمن قبل الإضافة
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer) {
                 searchContainer.appendChild(newResultsInfo);
            }
        }

        const element = document.getElementById('search-results-info');
        if (element) {
            if (count === 0) {
                element.innerHTML = `❌ لم يتم العثور على نتائج لـ "<strong>${term}</strong>"`;
                element.style.color = '#ff4757';
            } else {
                element.innerHTML = `✅ تم العثور على ${count} نتيجة لـ "<strong>${term}</strong>"`;
                element.style.color = '#00ff88';
            }
        }
    }

    // 🎛️ تحديث الفلتر (جديدة)
    updateFilter(key, value) {
        const currentFilters = this.stateService.get('currentFilters');
        const newFilters = { ...currentFilters, [key]: value };
        this.stateService.set('currentFilters', newFilters);
    }
    
    // 🎛️ منطق تطبيق التصفية والفرز (جديدة)
    applyFiltersAndSortingLogic(list, filters) {
        let filtered = [...list];

        if (filters.status) {
            filtered = filtered.filter(anime => anime.status === filters.status);
        }

        if (filters.genre) {
            filtered = filtered.filter(anime => 
                anime.genres && anime.genres.includes(filters.genre)
            );
        }

        if (filters.year) {
            // 🌟 تحويل القيمة إلى رقم لضمان المقارنة الصحيحة
            const yearNum = parseInt(filters.year);
            filtered = filtered.filter(anime => anime.seasonYear === yearNum);
        }

        if (filters.minScore) {
            const minScore = filters.minScore * 10;
            filtered = filtered.filter(anime => 
                anime.averageScore && anime.averageScore >= minScore
            );
        }
        
        // 🌟 تطبيق الفرز
        filtered.sort((a, b) => {
            let valA, valB;
            switch (filters.sortBy) {
                case 'score':
                    valA = a.averageScore || 0;
                    valB = b.averageScore || 0;
                    break;
                case 'popularity':
                    valA = a.popularity || 0;
                    valB = b.popularity || 0;
                    break;
                case 'title':
                    valA = a.title.userPreferred || '';
                    valB = b.title.userPreferred || '';
                    if (filters.sortDirection === 'asc') {
                        return valA.localeCompare(valB);
                    }
                    return valB.localeCompare(valA);
                case 'year':
                    valA = a.seasonYear || 0;
                    valB = b.seasonYear || 0;
                    break;
                default: // الافتراضي
                    valA = a.id;
                    valB = b.id;
            }
            
            if (filters.sortBy === 'title') return 0; // تم التعامل معه بالأعلى

            if (filters.sortDirection === 'asc') {
                return valA - valB;
            }
            return valB - valA;
        });

        return filtered;
    }
    
    // 🎛️ تطبيق الفلاتر والفرز على القائمة المعروضة
    applyCurrentFiltersAndSorting() {
        const fullList = this.advancedCache.get('current_anime_list') || this.stateService.get('currentAnimeList');
        const filters = this.stateService.get('currentFilters');
        
        // 🌟 التأكد من تطبيق الفرز والتصفية على القائمة الكاملة
        const finalFiltered = this.applyFiltersAndSortingLogic(fullList, filters);
        
        // 🌟 إعادة عرض القائمة المفلترة والمفرزة
        this.displayAnime(finalFiltered);
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

    // 📱 إدارة حالة التحميل
    showLoadingState(show) {
        const loading = document.getElementById('loading');
        const loadingState = this.stateService.get('loadingState');

        if (loading) {
            loading.style.display = show ? 'block' : 'none';
            
            if (show) {
                // 🌟 تحديث الإحصائيات داخل اللودر
                const stats = this.advancedCache.getStats();
                const memory = this.stateService.get('memoryUsage'); // 🛡️ إضافة مراقبة الذاكرة
                const loaderStatsHTML = `
                    <p>الطلبات: ${this.performance.requestsCount}</p>
                    <p>ضربات التخزين المؤقت: ${stats.totalHits}</p>
                    <p class="${memory.warning ? 'warning-text' : ''}">الذاكرة: ${memory.currentMB} MB</p>
                `;

                loading.innerHTML = `
                    <div class="advanced-loader">
                        <div class="loader-spinner"></div>
                        <div class="loader-text">${loadingState.message}</div>
                        <div class="loader-stats" id="loader-stats">${loaderStatsHTML}</div>
                    </div>
                `;
            }
        }
    }

    // 🛑 معالجة أخطاء جلب البيانات
    handleDataFetchError(error) {
        console.error('خطأ في جلب البيانات:', error);
        
        let userMessage = 'حدث خطأ في تحميل بيانات الأنمي.';
        
        if (error.message.includes('429')) {
            userMessage = '🛑 تجاوز حد طلبات API. يرجى الانتظار دقيقة والمحاولة مرة أخرى.';
            this.logError('DataFetchError', error, ErrorSeverity.HIGH);
        } else if (error.message.includes('Network') || error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
            userMessage = '🌐 مشكلة في الاتصال بالإنترنت. تحقق من اتصالك وحاول مرة أخرى.';
            this.logError('DataFetchError', error, ErrorSeverity.CRITICAL);
        } else if (error.message.includes('timeout')) {
            userMessage = '⏰ انتهت مهلة الطلب. جارٍ إعادة المحاولة...';
            this.logError('DataFetchError', error, ErrorSeverity.MEDIUM);
        } else {
            userMessage = `❌ حدث خطأ: ${error.message}`;
            this.logError('DataFetchError', error, ErrorSeverity.MEDIUM);
        }
        
        this.showError(userMessage);
    }

    // 🎪 عرض الأنمي
    displayAnime(animeList) {
        const container = document.getElementById('animeGrid');
        
        // 🌟 إزالة محتوى الحاوية بطريقة أسرع
        if (container) {
             container.innerHTML = '';
        } else {
             return;
        }


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

        animeList.forEach(anime => {
            this.createAnimeCard(anime, false); // عدم إزالة السكلتون هنا
        });

        if (this.stateService.get('uiSettings').animations) {
            this.addScrollAnimations();
        }
    }

    // ✨ إضافة تأثيرات التمرير (تم تحسين Intersection Observer)
    addScrollAnimations() {
        // إزالة المراقبين القدامى أولاً لتجنب التسريبات
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
        }
        
        const animeCards = document.querySelectorAll('.anime-card:not(.skeleton)');
        
        // 🌟 تحسين IntersectionObserver باستخدام rootMargin لتحميل استباقي/تحريك استباقي
        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    // 🌟 إضافة will-change: auto لـ transition end (متقدم جدًا)
                    entry.target.addEventListener('transitionend', function handler() {
                         entry.target.style.willChange = 'auto';
                         entry.target.removeEventListener('transitionend', handler);
                    });
                    this.scrollObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05, // تفعيل التحريك عند ظهور 5% من العنصر
            rootMargin: '0px 0px -100px 0px' // تحميل واستباق التحريك قبل 100 بكسل من دخول العنصر
        });

        animeCards.forEach(card => {
            // 🌟 تطبيق الترتيب بناءً على خاصية order
            const order = card.style.order;
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
            // 🌟 استخدام will-change لتحسين تصيير التحريك
            card.style.willChange = 'transform, opacity'; 
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
            this.scrollObserver.observe(card);
        });
    }

    // 🔔 إظهار الإشعارات المتقدمة
    showToast(message, type = 'success', duration = 3000) {
        // إزالة أي إشعارات سابقة
        const existingToasts = document.querySelectorAll('.advanced-toast');
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

        // 🌟 إضافة إلى body بشكل آمن
        if (document.body) {
             document.body.appendChild(toast);
        }

        // إخفاء تلقائي
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }

    // 🛑 إظهار الخطأ
    showError(message) {
        const container = document.getElementById('animeGrid');
        
        // مسح محتوى الشبكة
        if (container) {
             container.innerHTML = '';
        } else {
             // إظهار في toast إذا كانت الحاوية غير موجودة
             this.showToast(message, 'error', 15000);
             return;
        }


        container.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle" style="font-size: 64px; margin-bottom: 20px; color: #ff4757;"></i>
                <h3>حدث خطأ</h3>
                <p>${message}</p>
                <button onclick="aniListManager.fetchAnimeData()" class="retry-btn">
                    <i class="fas fa-redo"></i> إعادة المحاولة
                </button>
            </div>
        `;
        
        this.showLoadingState(false);
    }

    // ⚙️ تحميل إعدادات الواجهة
    loadUISettings() {
        try {
            const savedSettings = localStorage.getItem('ui_settings');
            if (savedSettings) {
                // 🌟 تحديث StateService بالإعدادات المحفوظة
                const settings = JSON.parse(savedSettings);
                this.stateService.set('uiSettings', { 
                    ...this.stateService.get('uiSettings'), 
                    ...settings 
                });
            }
        } catch (error) {
            console.warn('تعذر تحميل إعدادات الواجهة:', error);
            this.logError('LoadUISettings', error, ErrorSeverity.LOW);
        }
    }

    // 💾 حفظ إعدادات الواجهة
    saveUISettings() {
        try {
            // 🌟 حفظ الإعدادات من StateService
            localStorage.setItem('ui_settings', JSON.stringify(this.stateService.get('uiSettings')));
        } catch (error) {
            console.warn('تعذر حفظ إعدادات الواجهة:', error);
            this.logError('SaveUISettings', error, ErrorSeverity.LOW);
        }
    }

    // 🎨 تبديل السمة
    toggleTheme() {
        const currentTheme = this.stateService.get('uiSettings').theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.stateService.set('uiSettings', { 
            ...this.stateService.get('uiSettings'), 
            theme: newTheme 
        });
        
        this.saveUISettings();
        this.showToast(`تم التبديل إلى السمة ${newTheme === 'dark' ? 'الداكنة' : 'الفاتحة'}`, 'success');
    }

    // 🌐 تبديل اللغة
    toggleLanguage() {
        const currentLang = this.stateService.get('uiSettings').language;
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        
        this.stateService.set('uiSettings', { 
            ...this.stateService.get('uiSettings'), 
            language: newLang 
        });

        this.saveUISettings();
        this.showToast(`تم التبديل إلى اللغة ${newLang === 'ar' ? 'العربية' : 'الإنجليزية'}`, 'success');
    }

    // 📊 الحصول على إحصائيات النظام
    getSystemStats() {
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
                total: this.stateService.get('currentAnimeList').length,
                cached: this.advancedCache.performanceMetrics.size // هذا مقياس لعدد السجلات في الخريطة وليس حجم الكاش
            },
            ui: this.stateService.get('uiSettings'),
            memory: this.stateService.get('memoryUsage') // 🛡️ إضافة إحصائيات الذاكرة
        };
    }

    // 🗑️ تنظيف البيانات
    clearData() {
        if (confirm('هل أنت متأكد من رغبتك في مسح جميع البيانات المخزنة؟')) {
            localStorage.clear();
            sessionStorage.clear();
            // إعادة إنشاء الكائن Cache
            this.advancedCache = new AdvancedCache();
            // 🌟 إعادة تعيين الحالة عبر StateService
            this.stateService.set('currentAnimeList', []);
            this.stateService.set('loadingState', { currentIndex: 0, isLoading: false, allLoaded: false, progress: 0, message: 'جاهز للبدء' });
            
            this.showToast('تم مسح جميع البيانات بنجاح', 'success');
            setTimeout(() => location.reload(), 1000);
        }
    }

    // 📤 تصدير البيانات
    exportData() {
        const exportData = {
            animeList: this.stateService.get('currentAnimeList'),
            favorites: JSON.parse(localStorage.getItem('favorite_anime') || '[]'),
            settings: this.stateService.get('uiSettings'),
            performance: this.getSystemStats(),
            errorLogs: JSON.parse(localStorage.getItem('error_logs') || '[]'), // 🛡️ تصدير سجلات الأخطاء
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `anilist-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showToast('تم تصدير البيانات بنجاح', 'success');
    }

    // iniciar la aplicación
    start() {
        this.init();
        this.fetchAnimeData();
    }
}

// 🌟 التهيئة المتقدمة للتطبيق
document.addEventListener('DOMContentLoaded', () => {
    // إنشاء نسخة عالمية من المدير
    window.aniListManager = new AniListManager();
    
    // تحميل البيانات المخزنة مسبقاً إذا كانت موجودة
    const cachedAnime = window.aniListManager.advancedCache.get('current_anime_list');
    if (cachedAnime && cachedAnime.length > 0) {
        // 🌟 تحديث StateService بالبيانات المخزنة
        window.aniListManager.stateService.set('currentAnimeList', cachedAnime);
        // 🌟 تطبيق الفرز/التصفية على الكاش عند البدء
        window.aniListManager.applyCurrentFiltersAndSorting(); 
    }
    
    // 🌟 إعداد مستمع للبحث
    const searchInput = document.getElementById('anime-search');
    if (searchInput) {
        // 🌟 ربط بدالة performSearch التي تستخدم Debounce
        searchInput.addEventListener('input', (event) => {
            window.aniListManager.performSearch(event.target.value);
        });
    }

    // بدء جلب البيانات الحديثة
    setTimeout(() => {
        window.aniListManager.start();
    }, 1000);

    // إضافة أنماط CSS الإضافية (لضمان وجودها وتطبيقها بشكل صحيح)
    const additionalStyles = `
        /* 🌟 إصلاح الأنماط للحاويات الجديدة */
        
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

        #progress-bar {
            width: 100%;
            height: 4px;
            background: #333;
            border-radius: 2px;
            overflow: hidden;
        }
        
        #progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #00ff88, #0099ff);
            transition: width 0.3s ease;
            width: 0%;
        }
        
        #progress-text {
            color: white;
            font-size: 12px;
            text-align: center;
            margin-top: 5px;
        }

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
        
        .advanced-toast.error {
            border-left-color: #ff4757;
        }
        
        .advanced-toast.warning {
            border-left-color: #ffa502;
        }
        
        .advanced-toast.info {
            border-left-color: #0099ff;
        }
        
        .toast-content {
            display: flex;
            align-items: center;
            gap: 10px;
            white-space: pre-line; /* 🌟 دعم الأسطر الجديدة */
        }
        
        .toast-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }
        
        .toast-close:hover {
            opacity: 1;
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
            height: 300px;
            background: #333;
            border-radius: 8px;
        }
        
        .skeleton-title {
            width: 80%;
            height: 20px;
            background: #333;
            border-radius: 4px;
            margin: 10px 0;
        }
        
        .skeleton-text {
            width: 60%;
            height: 15px;
            background: #333;
            border-radius: 4px;
        }
        
        .failed-load {
            background: #444;
            border: 2px dashed #ff4757;
            color: #ff4757;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            text-align: center;
            padding: 10px;
            min-height: 350px;
        }
        
        .empty-state, .error-state {
            text-align: center;
            padding: 40px 20px;
            color: #888;
        }
        
        .retry-btn {
            background: #00ff88;
            color: black;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 15px;
            transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
            background: #00cc6a;
            transform: translateY(-2px);
        }
        
        .anime-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.3) 0%,
                transparent 30%,
                transparent 70%,
                rgba(0, 0, 0, 0.7) 100%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .anime-card:hover .anime-overlay {
            opacity: 1;
        }
        
        .anime-actions {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 5px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .anime-card:hover .anime-actions {
            opacity: 1;
        }
        
        .btn-favorite, .btn-share, .btn-watch-link {
            background: rgba(0, 0, 0, 0.7);
            border: none;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            text-decoration: none;
            font-size: 14px;
        }
        
        .btn-favorite:hover, .btn-share:hover, .btn-watch-link:hover {
            background: rgba(0, 0, 0, 0.9);
            transform: scale(1.1);
        }
        
        .genre-tag {
            background: rgba(0, 255, 136, 0.2);
            color: #00ff88;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 11px;
            margin: 2px;
        }
        
        /* 🌟 أنماط اللودر المتقدم */
        .advanced-loader {
            text-align: center;
            padding: 50px;
            color: white;
        }
        
        .loader-spinner {
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-top: 4px solid #00ff88;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loader-text {
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .loader-stats {
            font-size: 12px;
            opacity: 0.7;
        }

        .loader-stats .warning-text {
            color: #ffa502;
            font-weight: bold;
        }
        
        /* 🌟 أنماط السمة (theme) */
        [data-theme="dark"] {
             /* الأنماط الداكنة */
             --main-bg-color: #121212;
             --card-bg-color: #1e1e1e;
             --text-color: #ffffff;
        }
        
        [data-theme="light"] {
             /* الأنماط الفاتحة */
             --main-bg-color: #f4f4f4;
             --card-bg-color: #ffffff;
             --text-color: #121212;
        }
        
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    // 🌟 إضافة إلى head بشكل آمن
    if (document.head) {
         document.head.appendChild(styleSheet);
    }
});

// 🚀 تصدير الكلاس للاستخدام العالمي
window.AniListManager = AniListManager;
