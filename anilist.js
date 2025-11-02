// anilist.js - Anime Data Management Module (Enterprise Level)

// 📋 قائمة الأنميات الأصلية (لم يتم تغييرها)
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

// 🚀 نظام التخزين المؤقت المتقدم (Enterprise Level)
// يطبق منطق التخزين المؤقت الذكي باستخدام localStorage و sessionStorage و Cache Storage
class AdvancedCache {
    constructor() {
        this.cacheName = 'anilist-enterprise-cache-v3';
        this.cacheDuration = 24 * 60 * 60 * 1000; // 24 ساعة
        this.performanceMetrics = new Map();
        // ⚠️ إضافة: متغير لتتبع حجم التخزين المؤقت
        this.cacheSize = 0; 
        this.initSize();
        // 💡 إضافة: التحقق من توافر localStorage
        this.isLocalStorageAvailable = typeof localStorage !== 'undefined';
        this.isSessionStorageAvailable = typeof sessionStorage !== 'undefined';
        // 💡 إضافة: معامل ضغط البيانات (للتطبيقات الحقيقية: استخدام مكتبات مثل lz-string)
        this.compressionFactor = 1; 
        // 💡 إضافة: قائمة بالأشياء التي يجب ألا تنتهي صلاحيتها في الوقت الحالي
        this.permanentKeys = ['ui_settings', 'anilist_username', 'anilist_token', 'favorite_anime'];
    }
    
    // 🔧 التهيئة: حساب الحجم الحالي للتخزين المؤقت
    initSize() {
        if (!this.isLocalStorageAvailable) return;
        this.cacheSize = 0;
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
         keys.forEach(key => {
            try {
                const cached = localStorage.getItem(key);
                // ⚠️ تحسين: التحقق من وجود القيمة قبل حساب الطول
                if (cached) {
                    this.cacheSize += cached.length * 2; // تقريب بالبايت
                }
            } catch (error) {
                // تجاهل
            }
        });
    }

    // 🔧 حفظ البيانات مع الوقت والنسخة الاحتياطية
    set(key, data, metadata = {}) {
        if (!this.isLocalStorageAvailable) return false;
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
            
            const itemString = JSON.stringify(cacheItem);

            // 💡 إضافة: تطبيق ضغط بسيط (محاكاة)
            // const compressedItemString = this.compress(itemString); 
            const compressedItemString = itemString; // استخدام الأصلي في هذه المحاكاة

            // التخزين في localStorage (للبقاء الدائم)
            localStorage.setItem(`cache_${key}`, compressedItemString);
            
            // التخزين في sessionStorage (للوصول السريع خلال الجلسة الحالية)
            if (this.isSessionStorageAvailable) {
                 // 💡 إضافة: التخزين مباشرةً بدون الـ timestamp/expiry في sessionStorage لتبسيط القيمة
                 sessionStorage.setItem(`session_${key}`, JSON.stringify(data));
            }
            
            // تحديث مؤشرات الأداء
            this.updateMetrics('write', key, data);
            
            // تحديث الحجم
            this.cacheSize += compressedItemString.length * 2;
            
            // 💡 إضافة: تفعيل آلية تنظيف التخزين المؤقت عند كتابة عناصر جديدة
            this.cleanup();
            
            return true;
        } catch (error) {
            console.warn('⚠️ تعذر حفظ التخزين المؤقت:', error);
            // 💡 إضافة: في حالة الوصول للحد الأقصى (Quota Exceeded)، حاول تنظيف التخزين المؤقت
            if (error.name === 'QuotaExceededError') {
                this.cleanup(true); // تنظيف قسري
                try { // محاولة الحفظ مرة أخرى
                    // ⚠️ تحسين: استخدام نفس الـ itemString المحسوب أعلاه
                    localStorage.setItem(`cache_${key}`, itemString);
                    return true;
                } catch (e) {
                    console.error('⚠️ فشل الحفظ حتى بعد التنظيف القسري.', e);
                }
            }
            return false;
        }
    }

    // 🔧 جلب البيانات مع التحقق من الصلاحية
    get(key) {
        if (!this.isLocalStorageAvailable) return null;
        try {
            // محاولة جلب من sessionStorage أولاً (الأسرع)
            if (this.isSessionStorageAvailable) {
                const sessionData = sessionStorage.getItem(`session_${key}`);
                if (sessionData) {
                    this.updateMetrics('hit', key, 'session');
                    // ⚠️ تحسين: إضافة try/catch للـ JSON.parse في sessionStorage
                    try {
                         return JSON.parse(sessionData);
                    } catch (e) {
                         sessionStorage.removeItem(`session_${key}`);
                         this.updateMetrics('miss', key, 'session-corrupted');
                    }
                }
            }

            // جلب من localStorage مع التحقق من الصلاحية
            const cached = localStorage.getItem(`cache_${key}`);
            if (cached) {
                // 💡 إضافة: فك ضغط البيانات (محاكاة)
                // const decompressed = this.decompress(cached);
                const decompressed = cached; // استخدام الأصلي في هذه المحاكاة

                // ⚠️ تحسين: إضافة try/catch لـ JSON.parse
                let cacheItem;
                try {
                    cacheItem = JSON.parse(decompressed);
                } catch (e) {
                    this.delete(key);
                    this.updateMetrics('miss', key, 'local-corrupted');
                    return null;
                }
                
                // التحقق من انتهاء الصلاحية
                // 💡 إضافة: التحقق من أن المفتاح ليس مفتاحاً دائماً
                if (Date.now() > cacheItem.expiry && !this.permanentKeys.includes(key)) {
                    this.delete(key);
                    this.updateMetrics('miss', key, 'expired'); // 💡 إضافة: تتبع الضربة الفاشلة بسبب انتهاء الصلاحية
                    return null;
                }
                
                // تحديث sessionStorage للوصول المستقبلي (الهدف من SWR)
                if (this.isSessionStorageAvailable) {
                     sessionStorage.setItem(`session_${key}`, JSON.stringify(cacheItem.data));
                }
                this.updateMetrics('hit', key, 'local');
                
                return cacheItem.data;
            }
            
            this.updateMetrics('miss', key, 'not-found');
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل التخزين المؤقت:', error);
            this.delete(key); // تنظيف العنصر الفاسد
            this.updateMetrics('miss', key, 'corrupted'); // 💡 إضافة: تتبع الضربة الفاشلة بسبب التلف
            return null;
        }
    }
    
    // 💡 إضافة: جلب بيانات من Cache Storage (لـ Offline Mode)
    async getFromCacheStorage(key) {
        if (!('caches' in window)) return null;
        try {
            const cache = await caches.open(this.cacheName);
            // ⚠️ تحسين: استخدام URL كاملة للمطابقة الدقيقة
            const response = await cache.match(new Request(`offline-data-v1/${key}`)); 
            if (response) {
                this.updateMetrics('hit', key, 'cacheStorage');
                return await response.json();
            }
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل من Cache Storage:', error);
            return null;
        }
    }

    // 💡 إضافة: حفظ بيانات في Cache Storage (لـ Offline Mode)
    async setToCacheStorage(key, data) {
         if (!('caches' in window)) return false;
         try {
            const cache = await caches.open(this.cacheName);
            const url = `offline-data-v1/${key}`;
            const response = new Response(JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            });
            await cache.put(url, response);
            // 💡 إضافة: تحديث مؤشرات الأداء لـ Cache Storage
            this.updateMetrics('write', key, data, 'cacheStorage'); 
            return true;
        } catch (error) {
            console.warn('⚠️ تعذر حفظ في Cache Storage:', error);
            return false;
        }
    }


    // 🔧 حذف البيانات
    delete(key) {
        if (this.isLocalStorageAvailable) {
            const itemString = localStorage.getItem(`cache_${key}`);
            if(itemString) {
                 this.cacheSize -= itemString.length * 2;
            }
            localStorage.removeItem(`cache_${key}`);
        }
        if (this.isSessionStorageAvailable) {
             sessionStorage.removeItem(`session_${key}`);
        }
        
        // 💡 إضافة: حذف من Cache Storage أيضاً
        if ('caches' in window) {
            caches.open(this.cacheName).then(cache => {
                cache.delete(`offline-data-v1/${key}`);
            }).catch(e => console.warn('فشل حذف Cache Storage', e));
        }
        this.updateMetrics('delete', key);
    }

    // 🔧 تنظيف التخزين المؤقت المنتهي (أو القسري)
    cleanup(force = false) {
        if (!this.isLocalStorageAvailable) return;
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        let cleanedUpSize = 0;
        const now = Date.now();
        
        keys.forEach(key => {
            try {
                const cached = localStorage.getItem(key);
                if (!cached) return;
                
                // 💡 إضافة: محاولة فك الضغط قبل التحليل
                // const decompressed = this.decompress(cached);
                const decompressed = cached;
                
                let cacheItem;
                try {
                     cacheItem = JSON.parse(decompressed);
                } catch (e) {
                     // في حالة التلف، حذف وتنظيف
                     cleanedUpSize += cached.length * 2;
                     this.delete(key.replace('cache_', ''));
                     return;
                }
                
                const originalKey = key.replace('cache_', '');
                
                // ⚠️ إضافة: منطق التنظيف القسري (حذف أقدم العناصر)
                const isExpired = now > cacheItem.expiry;
                const isTooOldForForced = force && cacheItem.timestamp < (now - (this.cacheDuration * 2)); // حذف الأقدم من يومين
                
                // 💡 التحقق من أن المفتاح ليس مفتاحاً دائماً قبل الحذف
                if ((isExpired || isTooOldForForced) && !this.permanentKeys.includes(originalKey)) {
                    // ⚠️ إضافة: حساب الحجم قبل الحذف
                    cleanedUpSize += cached.length * 2;
                    this.delete(originalKey);
                }
            } catch (error) {
                // حذف العناصر الفاسدة أيضاً
                const cachedItem = localStorage.getItem(key);
                if (cachedItem) {
                    cleanedUpSize += cachedItem.length * 2;
                }
                this.delete(key.replace('cache_', ''));
            }
        });
        
        // ⚠️ تحديث حجم الذاكرة المؤقتة بعد التنظيف
        this.cacheSize -= cleanedUpSize;
    }

    // 📊 تحديث مؤشرات الأداء
    updateMetrics(type, key, data, source = 'localStorage') {
        const metricKey = `${type}_${key}_${Date.now()}`; // 💡 استخدام وقت الإضافة لعدم تداخل المفاتيح
        
        // ⚠️ تحسين: التحقق من أن data ليس null قبل الحساب
        let size = 0;
        if (data) {
             try {
                size = (typeof data === 'string' ? data.length * 2 : JSON.stringify(data).length * 2); 
             } catch (e) {
                 size = 0; // في حالة وجود JSON غير صالح
             }
        }
        
        this.performanceMetrics.set(metricKey, {
            type,
            key,
            timestamp: Date.now(),
            size: size, // 💡 تقدير الحجم بالبايت
            source // 💡 إضافة: مصدر التخزين
        });
        // 💡 إضافة: تنفيذ نموذج FIFO بسيط على مقاييس الأداء
        if (this.performanceMetrics.size > 500) {
            // ⚠️ تحسين: استخدام `keys().next().value` لتحرير الذاكرة
            this.performanceMetrics.delete(this.performanceMetrics.keys().next().value);
        }
    }

    // 📊 الحصول على إحصائيات الأداء
    getStats() {
        let totalHits = 0;
        let totalMisses = 0;
        let totalWrites = 0;
        let cacheStorageHits = 0; // 💡 إضافة: إحصائيات Cache Storage

        this.performanceMetrics.forEach(metric => {
            if (metric.type === 'hit') {
                totalHits++;
                if (metric.source === 'cacheStorage') cacheStorageHits++;
            }
            if (metric.type === 'miss') totalMisses++;
            if (metric.type === 'write') totalWrites++;
        });

        const stats = {
            totalHits: totalHits,
            totalMisses: totalMisses,
            totalWrites: totalWrites,
            cacheStorageHits: cacheStorageHits, // 💡 إرجاع عدد ضربات Cache Storage
            // ⚠️ تصحيح: استخدام الحجم المحسوب بدلاً من الحساب المتكرر
            cacheSize: this.cacheSize, 
            cacheSizeMB: (this.cacheSize / 1024 / 1024).toFixed(2) + ' MB'
        };

        return stats;
    }

    // 💡 إضافة: محاكاة وظائف الضغط (لتطبيق حقيقي: استخدم مكتبة مثل lz-string)
    // compress(data) { return data; }
    // decompress(data) { return data; }
}

// 💡 إضافة: نظام إدارة حدود الطلبات الذكي (Rate Limiter)
class RateLimiter {
    // 90 طلب/دقيقة (15 طلب/10 ثواني)
    static MAX_REQUESTS_PER_WINDOW = 15; 
    static WINDOW_MS = 10 * 1000; // 10 ثوانٍ
    
    constructor() {
        this.requestTimestamps = [];
    }

    // 🛡️ التحقق والانتظار إذا لزم الأمر
    async acquireToken() {
        this.cleanOldRequests();

        if (this.requestTimestamps.length >= RateLimiter.MAX_REQUESTS_PER_WINDOW) {
            // ⚠️ تحسين: التأكد من وجود طوابع زمنية قبل الوصول إلى العنصر [0]
            const earliestTime = this.requestTimestamps[0] || Date.now(); 
            const waitTime = earliestTime + RateLimiter.WINDOW_MS - Date.now() + 100; // +100ms ضمان
            
            if (waitTime > 0) {
                 // ⚠️ إرجاع وقت الانتظار
                 return waitTime;
            }
        }
        
        // تسجيل الطلب الحالي
        this.requestTimestamps.push(Date.now());
        // ⚠️ لا حاجة للانتظار
        return 0; 
    }

    // 🧹 تنظيف الطلبات القديمة
    cleanOldRequests() {
        const cutoff = Date.now() - RateLimiter.WINDOW_MS;
        // إزالة العناصر التي مر عليها وقت النافذة الزمنية
        this.requestTimestamps = this.requestTimestamps.filter(t => t > cutoff); 
    }
}


// 🎯 النظام الرئيسي المحسّن (Enterprise Level)
class AniListManager {
    constructor() {
        this.ANILIST_API = 'https://graphql.anilist.co';
        this.advancedCache = new AdvancedCache();
        // 💡 إضافة: نظام إدارة حدود الطلبات
        this.rateLimiter = new RateLimiter(); 
        this.currentAnimeList = [];
        this.animeUrls = ANIME_URLS_LIST;
        
        // 👇 القائمة الجديدة لربط معرف الأنمي بملف بياناته (لتحقيق فكرتك)
        this.ANIME_DATA_FILES = new Map([
            // [AniList ID, 'اسم_ملف_البيانات.js']
            [153800, 'One-punchman3-data.js'], 
            [155783, 'Tengoku-Daimakyou-data.js'], // Tengoku Daimakyou
            [145064, 'Jujutsu-Kaisen-2nd-Season-data.js'], 
            [151807, 'Ore-dake-Level-Up-na-Ken-data.js'] 
        ]);
        
        // ⚡ إعدادات متقدمة للأداء (متكيفة مع سرعة الاتصال)
        this.BATCH_SIZE = 4;
        this.DELAY_MS = 1200;
        this.MAX_RETRIES = 5; // تم زيادة عدد المحاولات لتحسين الموثوقية
        this.TIMEOUT_MS = 10000; // تم تقليل المهلة قليلاً لسرعة الاستجابة
        
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
        
        // 💡 إضافة: حالة وضع عدم الاتصال
        this.isOffline = typeof navigator !== 'undefined' ? !navigator.onLine : false;
        
        // 💡 إضافة: Intersection Observer Instance
        this.scrollObserver = null; 

        // 🎨 إعدادات الواجهة المتقدمة
        this.uiSettings = {
            theme: 'dark',
            language: 'ar',
            animations: true,
            imageQuality: 'high',
            // 💡 إضافة: إعداد المزامنة التلقائية
            autoSync: false 
        };
        
        // 💡 إضافة: متغيّر لتخزين بيانات المستخدم (للتوصيات والمقارنات)
        this.currentUser = {
            isLoggedIn: false,
            // ⚠️ تحسين: التحقق من توافر localStorage قبل الجلب
            username: typeof localStorage !== 'undefined' ? localStorage.getItem('anilist_username') : null, 
            lists: null // قائمة الأنمي للمستخدم
        };

        // 💡 إضافة: Map لتتبع الأنميات المفضلة بسرعة
        this.favoriteAnimeMap = new Map();

        this.init();
    }
    
    // 💡 إضافة: دالة لمعالجة التخزين المسبق (Preloading)
    async preloadData(ids) {
        // تحديد أهم الأنميات بناءً على الترتيب، أو المفضلة، أو الأكثر شعبية
        const topIdsToPreload = ids.slice(0, 10); 
        
        this.showToast('🚀 بدء التحميل المسبق لأهم 10 أنميات...', 'info', 2000);

        // ⚠️ استخدام Promise.all لضمان التحميل المتوازي
        // استخدام `this.fetchAnime(id, true)` لتعطيل إشعارات التحميل المسبق
        await Promise.allSettled(topIdsToPreload.map(id => this.fetchAnime(id, true)));
        
        this.showToast('✅ اكتمل التحميل المسبق', 'success', 1000);
    }

    // 🔧 التهيئة المتقدمة
    init() {
        this.loadUISettings();
        this.setupPerformanceMonitoring();
        this.advancedCache.cleanup();
        this.setupErrorHandling();
        // 💡 إضافة: إعداد استعلامات GraphQL الديناميكية
        this.setupGraphQLQueries(); 
        // 💡 إضافة: إعداد معالجة وضع عدم الاتصال
        this.setupOfflineMode(); 
        // 💡 إضافة: تحميل حالة المفضلة
        this.loadFavorites();
        // 💡 إضافة: تسجيل الـ Service Worker
        this.registerServiceWorker(); 
    }
    
    // 💡 إضافة: تسجيل الـ Service Worker (تحسين كبير للـ PWA ووضع عدم الاتصال)
    registerServiceWorker() {
         if ('serviceWorker' in navigator && typeof window !== 'undefined') {
            window.addEventListener('load', () => {
                // ⚠️ محاكاة: يجب أن يكون ملف service-worker.js موجوداً بالفعل
                navigator.serviceWorker.register('/service-worker.js').then(registration => {
                     console.log('SW registered: ', registration);
                }).catch(registrationError => {
                     this.logError('SW Registration Failed', registrationError);
                });
            });
         }
    }
    
    // 💡 إضافة: تحميل الأنميات المفضلة في Map
    loadFavorites() {
         if (typeof localStorage === 'undefined') return;
         try {
             const favorites = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
             this.favoriteAnimeMap = new Map(favorites.map(id => [id, true]));
         } catch (e) {
             console.warn('فشل تحميل المفضلة', e);
         }
    }


    // 💡 إضافة: إعداد معالجة وضع عدم الاتصال
    setupOfflineMode() {
        // ⚠️ التأكد من وجود window قبل إضافة المستمعات
        if (typeof window !== 'undefined') {
            window.addEventListener('online', () => {
                this.isOffline = false;
                this.showToast('🌐 تم استعادة الاتصال بالإنترنت', 'success', 3000);
                // 💡 تفعيل الجلب عند استعادة الاتصال إذا لم تكن القائمة كاملة
                if (!this.loadingState.allLoaded && !this.loadingState.isLoading) {
                     this.fetchAnimeData(); 
                }
            });
            window.addEventListener('offline', () => {
                this.isOffline = true;
                this.showToast('📴 وضع عدم الاتصال. يتم عرض البيانات المخزنة محليًا', 'warning', 5000);
            });
        }
        this.isOffline = typeof navigator !== 'undefined' ? !navigator.onLine : false;
    }
    
    // 💡 إضافة: إعداد استعلامات GraphQL المتقدمة
    setupGraphQLQueries() {
         // 💡 استعلام لاستخراج بيانات الإحصائيات (متوسطات التقييم حسب النوع)
        this.ANIME_STATS_QUERY = `
            query ($genre: String) {
                Genre: Page(perPage: 50) {
                    media(type: ANIME, genre: $genre, sort: POPULARITY_DESC) {
                        averageScore
                        genres
                        popularity
                        seasonYear
                        studios(isMain: true) { nodes { name } }
                    }
                }
            }
        `;
        
        // 💡 استعلام لجلب قائمة مستخدم (لمقارنة القوائم والمزامنة)
        this.USER_LIST_QUERY = `
            query ($userName: String) {
                MediaListCollection(userName: $userName, type: ANIME) {
                    lists {
                        name
                        entries {
                            media {
                                id
                                title { userPreferred }
                                genres
                            }
                            score
                            status
                        }
                    }
                }
            }
        `;
    }

    // ⚡ إعداد مراقبة الأداء
    setupPerformanceMonitoring() {
        // مراقبة أداء الشبكة
        if (typeof navigator !== 'undefined' && 'connection' in navigator) {
            navigator.connection.addEventListener('change', () => {
                this.adjustSettingsBasedOnConnection();
                this.showToast(`تم تعديل الإعدادات بناءً على الاتصال: ${navigator.connection.effectiveType}`, 'info', 3000);
            });
            // ⚠️ تطبيق الإعدادات عند بدء التشغيل أيضاً
            this.adjustSettingsBasedOnConnection();
        }

        // تتبع وقت التحميل
        this.performance.startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    }

    // 🌐 ضبط الإعدادات بناءً على سرعة الاتصال (Connection Adaptive Settings)
    adjustSettingsBasedOnConnection() {
        if (typeof navigator !== 'undefined' && 'connection' in navigator) {
            const connection = navigator.connection;
            
            // تحديد السرعات المنخفضة بدقة
            if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                this.BATCH_SIZE = 2;
                this.DELAY_MS = 2000; // زيادة التأخير لتقليل الضغط
                this.uiSettings.imageQuality = 'low';
                this.uiSettings.animations = false;
            } else if (connection.effectiveType === '3g') {
                this.BATCH_SIZE = 3;
                this.DELAY_MS = 1500;
                this.uiSettings.imageQuality = 'medium';
                this.uiSettings.animations = true;
            } else {
                this.BATCH_SIZE = 4;
                this.DELAY_MS = 1200;
                this.uiSettings.imageQuality = 'high';
                this.uiSettings.animations = true;
            }
        }
        // ⚠️ إعادة حفظ الإعدادات لتعكس التعديلات التكيفية (إذا كان حفظ البيانات ممكناً)
        this.saveUISettings(); 
    }

    // 🛡️ إعداد معالجة الأخطاء المتقدم
    setupErrorHandling() {
        if (typeof window !== 'undefined') {
            window.addEventListener('error', (event) => {
                this.logError('Global Error', event.error);
                // 💡 إضافة: منع ظهور رسالة الخطأ الافتراضية للمتصفح (اختياري)
                // event.preventDefault(); 
            });

            window.addEventListener('unhandledrejection', (event) => {
                // ⚠️ تحسين: التحقق من وجود reason قبل الوصول لخاصية message
                const reason = event.reason;
                this.logError('Unhandled Promise Rejection', reason instanceof Error ? reason : new Error(String(reason)));
                // 💡 إضافة: منع ظهور رسالة الرفض الافتراضية
                // event.preventDefault();
            });
        }
    }

    // 📝 تسجيل الأخطاء
    logError(type, error) {
        const errorLog = {
            type,
            // ⚠️ تحسين: التعامل مع الكائنات غير الخطأية
            message: error?.message || (typeof error === 'string' ? error : (error ? JSON.stringify(error).substring(0, 100) : 'Unknown error')), 
            stack: error?.stack,
            timestamp: new Date().toISOString(),
            // ⚠️ التحقق من وجود window
            url: typeof window !== 'undefined' ? window.location.href : 'N/A', 
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A'
        };

        // حفظ في localStorage للتحليل لاحقاً
        try {
            // ⚠️ إضافة شرط للتحقق من توافر localStorage
            if (typeof localStorage !== 'undefined') {
                const existingLogs = JSON.parse(localStorage.getItem('error_logs') || '[]');
                existingLogs.push(errorLog);
                localStorage.setItem('error_logs', JSON.stringify(existingLogs.slice(-100))); // حفظ آخر 100 خطأ فقط
            }
        } catch (e) {
            console.warn('تعذر حفظ سجل الأخطاء:', e);
        }
        console.error(`[ERROR: ${type}]`, errorLog.message, error);
    }

    // ⏰ دالة التأخير الذكية
    delay(ms) {
        return new Promise(resolve => {
            // ⚠️ تحسين: استخدام setTimeout العالمي لضمان التوافق
            setTimeout(resolve, ms); 
        });
    }

    // 🔍 استخراج معرفات الأنمي
    extractAnimeIds() {
        // ⚠️ تحسين: استخدام دالة Reduce لتجنب تكرار الكود
        return this.animeUrls.reduce((ids, url) => {
            const match = url.match(/(anime|manga)\/(\d+)/); 
            if (match) {
                // 💡 التأكد من أن الـ ID لم تتم إضافته مسبقاً (لحذف الروابط المكررة ضمن ANIME_URLS_LIST)
                const id = parseInt(match[2]);
                if (!ids.includes(id)) {
                    ids.push(id); 
                }
            }
            return ids;
        }, []);
    }

    // 📝 GraphQL Query متقدم - تم الحفاظ على الكود الأصلي
    get ANIME_QUERY() {
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

    // 🚀 دالة الجلب المتقدمة مع إعادة المحاولة الذكية (Exponential Backoff & Jitter)
    // 💡 إضافة: معالج Rate Limit لضمان عدم تجاوز حدود AniList API
    async fetchAnime(id, isPreload = false) {
        if (this.isOffline && !isPreload) {
             const cachedOffline = this.advancedCache.get(`anime_${id}`);
             if (cachedOffline) {
                 return cachedOffline;
             }
             const cachedFromCacheStorage = await this.advancedCache.getFromCacheStorage(`anime_${id}`);
             if(cachedFromCacheStorage) return cachedFromCacheStorage;
             
             this.showToast('📴 لا يمكن جلب بيانات جديدة في وضع عدم الاتصال.', 'warning', 2000);
             return null;
        }
        
        this.performance.requestsCount++;

        // التحقق من التخزين المؤقت أولاً
        const cached = this.advancedCache.get(`anime_${id}`);
        if (cached) {
            this.performance.successfulRequests++;
            return cached;
        }

        let retries = this.MAX_RETRIES;
        let lastError;
        
        // ⚠️ تحديد الوقت الذي يجب عنده إيقاف إعادة المحاولة
        const startTime = Date.now();
        const maxTotalTime = 60000; // 60 ثانية كحد أقصى لإجمالي وقت الطلب (لعدم حظر التطبيق)

        while (retries > 0 && (Date.now() - startTime < maxTotalTime)) {
            // 🛡️ خطوة إدارة Rate Limit
            const waitDuration = await this.rateLimiter.acquireToken();
            if (waitDuration > 0) {
                 // ⚠️ تحسين: عدم عرض التوست إذا كان التحميل المسبق
                 if (!isPreload) {
                    this.showToast(`⏳ تجاوز الحد المحلي لـ Rate Limit، الانتظار ${Math.ceil(waitDuration / 1000)} ثانية لـ ID: ${id}`, 'warning', waitDuration + 500);
                 }
                 await this.delay(waitDuration);
                 continue;
            }
            
            try {
                // ⚠️ التحقق من وجود AbortController قبل الاستخدام
                const controller = typeof AbortController !== 'undefined' ? new AbortController() : {};
                const signal = controller.signal;
                
                let timeoutId;
                if (controller.abort) {
                    timeoutId = setTimeout(() => {
                        // ⚠️ تحسين: تسجيل الإلغاء كخطأ
                        controller.abort(); 
                        this.logError('FetchTimeout', new Error(`Request timed out after ${this.TIMEOUT_MS}ms for ID: ${id}`));
                    }, this.TIMEOUT_MS);
                }

                const response = await fetch(this.ANILIST_API, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        // 💡 إضافة: Authentication Header للمزامنة التلقائية إذا كانت متوفرة
                        ...(this.currentUser.isLoggedIn && typeof localStorage !== 'undefined' && localStorage.getItem('anilist_token') && { 'Authorization': `Bearer ${localStorage.getItem('anilist_token')}` }) 
                    },
                    body: JSON.stringify({
                        query: this.ANIME_QUERY,
                        variables: { id: id }
                    }),
                    signal: signal 
                });

                if (timeoutId) clearTimeout(timeoutId);

                if (response.status === 429) {
                    const retryAfter = parseInt(response.headers.get('Retry-After')) || 60;
                    // ⚠️ تحسين: عدم عرض التوست إذا كان التحميل المسبق
                    if (!isPreload) {
                        this.showToast(`⏳ تجاوز حد الطلبات، إعادة المحاولة بعد ${retryAfter} ثانية لـ ID: ${id}`, 'warning', retryAfter * 1000 + 3000);
                    }
                    await this.delay(retryAfter * 1000 + 2000); // تأخير إضافي +2 ثانية لضمان تجاوز الحد
                    continue;
                }
                
                if (!response.ok) {
                    const errorBody = await response.text();
                    // 💡 إضافة: التحقق من أخطاء الـ API الشهيرة الأخرى (5xx)
                    if (response.status >= 500) {
                         // زيادة التأخير وإعادة المحاولة لـ 5xx
                         const delay = Math.pow(2, this.MAX_RETRIES - retries) * 1000 + (Math.random() * 1000);
                         await this.delay(delay);
                         throw new Error(`خطأ في خادم API: ${response.status} ${response.statusText}`);
                    }
                    throw new Error(`خطأ في API: ${response.status} ${response.statusText} - ${errorBody.substring(0, 100)}...`);
                }

                const result = await response.json();
                
                if (result.errors) {
                    // ⚠️ تحسين: إرجاع رسالة الخطأ بالكامل
                    throw new Error(`خطأ في GraphQL: ${result.errors.map(e => e.message).join(' | ')}`); 
                }
                
                if (result.data && result.data.Media) {
                    const anime = result.data.Media;
                    this.advancedCache.set(`anime_${id}`, anime, {
                        size: JSON.stringify(anime).length,
                        source: 'api'
                    });
                    // 💡 إضافة: حفظ في Cache Storage لوضع عدم الاتصال
                    this.advancedCache.setToCacheStorage(`anime_${id}`, anime); 
                    
                    this.performance.successfulRequests++;
                    return anime;
                }
                
                throw new Error('بيانات الوسائط غير متوفرة في الاستجابة');
                
            } catch (error) {
                lastError = error;
                retries--;
                
                // ⚠️ تجاهل أخطاء الإلغاء إذا كانت بسبب انتهاء المهلة (ما لم نكن في المحاولة الأخيرة)
                if (error.name === 'AbortError' && retries > 0) {
                     // ⚠️ تحسين: عدم عرض التوست إذا كان التحميل المسبق
                     if (!isPreload) {
                        this.showToast(`⏰ انتهت مهلة الطلب لـ ID: ${id}. جارٍ إعادة المحاولة...`, 'warning');
                     }
                } else if (retries > 0) {
                    // ⚠️ تطبيق (Exponential Backoff + Jitter) لتحسين كفاءة إعادة المحاولة
                    const baseDelay = Math.pow(2, this.MAX_RETRIES - retries) * 1000;
                    const jitter = Math.random() * 1000;
                    const backoffDelay = baseDelay + jitter; 
                    
                    // ⚠️ تحسين: عدم عرض التوست إذا كان التحميل المسبق
                    if (!isPreload) {
                         this.showToast(`🔄 إعادة المحاولة ${this.MAX_RETRIES - retries}/${this.MAX_RETRIES} لـ ID: ${id} (${error.message.substring(0, 30)})`, 'info', 3000);
                    }
                    await this.delay(backoffDelay);
                }
            }
        }

        this.performance.failedRequests++;
        this.logError('FetchAnime Failed', lastError);
        // ⚠️ تحسين: التأكد من أن lastError موجود قبل الوصول إلى .message
        throw new Error(`فشل جلب البيانات بعد ${this.MAX_RETRIES} محاولات: ${lastError ? lastError.message : 'Timeout or unhandled error'}`);
    }

    // 🎯 جلب البيانات مع التقدم المتقدم (تحميل تدريجي)
    async fetchAnimeData() {
        if (this.loadingState.isLoading) {
            this.showToast('جاري التحميل بالفعل...', 'info');
            return;
        }
        
        // 💡 إضافة: التحقق من وضع عدم الاتصال قبل بدء الجلب
        if (this.isOffline) {
            this.showToast('📴 لا يمكن بدء جلب البيانات في وضع عدم الاتصال.', 'warning');
            this.displayAnime(this.currentAnimeList); // عرض ما هو مخزن حالياً
            return;
        }

        this.loadingState.isLoading = true;
        
        // التحقق من انتهاء التحميل
        const animeIds = this.extractAnimeIds();
        if (this.loadingState.allLoaded && this.currentAnimeList.length === animeIds.length) {
            this.showToast('تم تحميل جميع الأنميات سابقاً', 'info');
            this.displayAnime(this.currentAnimeList);
            this.loadingState.isLoading = false;
            return;
        }

        this.performance.startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
        
        const initialIndex = this.loadingState.currentIndex;
        
        // 💡 إضافة: بدء التحميل المسبق لأول مرة
        if (initialIndex === 0 && !this.loadingState.allLoaded) {
            this.preloadData(animeIds);
        }
        
        try {
            this.showLoadingState(true);
            this.updateProgress(this.loadingState.progress, 'بدء التحميل...');

            // إعداد شبكة الأنمي وهياكل التحميل
            const animeGrid = document.getElementById('animeGrid');
            if(animeGrid && initialIndex === 0) {
                // ⚠️ مسح الـ Grid عند البداية فقط إذا لم يكن قد تم تحميل أي شيء
                if (this.currentAnimeList.length === 0) {
                     animeGrid.innerHTML = '';
                }
                // ⚠️ إضافة هياكل التحميل عند البداية فقط
                const initialSkeletons = Math.min(this.BATCH_SIZE * 3, animeIds.length);
                if (initialSkeletons > 0 && !animeGrid.querySelector('.skeleton')) {
                     // 💡 تحسين: إضافة السكيلتونز فقط إذا لم تكن موجودة بالفعل
                     animeGrid.innerHTML += this.createSkeletonLoader(initialSkeletons);
                }
            }
            
            const totalIds = animeIds.length;
            let successfulFetches = 0;
            let failedFetches = 0;
            const totalBatches = Math.ceil((totalIds - initialIndex) / this.BATCH_SIZE);
            const fetchedAnimeInSession = [];

            for (let i = initialIndex; i < totalIds; i += this.BATCH_SIZE) {
                const batchIds = animeIds.slice(i, i + this.BATCH_SIZE);
                const currentBatch = Math.floor((i - initialIndex) / this.BATCH_SIZE) + 1;
                
                this.updateProgress(
                    (i / totalIds) * 100,
                    `جاري تحميل الدفعة ${currentBatch} من ${totalBatches} (ID ${batchIds[0]}...)`
                );

                const batchPromises = batchIds.map(id => this.fetchAnime(id));
                const batchResults = await Promise.allSettled(batchPromises);

                batchResults.forEach((result, index) => {
                    if (result.status === 'fulfilled' && result.value) {
                        fetchedAnimeInSession.push(result.value);
                        // ⚠️ إزالة هيكل التحميل عند النجاح
                        this.removeSkeletonLoader(); 
                        this.createAnimeCard(result.value); 
                        successfulFetches++;
                    } else {
                        failedFetches++;
                        this.removeSkeletonLoader(); // إزالة الهيكل حتى عند الفشل
                        // ⚠️ طباعة الخطأ بوضوح
                        console.error(`فشل تحميل الأنمي ${batchIds[index]}:`, result.reason); 
                    }
                });

                this.loadingState.currentIndex = i + this.BATCH_SIZE;
                this.loadingState.progress = (this.loadingState.currentIndex / totalIds) * 100;

                // تأخير بين الدفعات
                if (this.loadingState.currentIndex < totalIds) {
                    await this.delay(this.DELAY_MS);
                }
            }

            // تحديث القائمة النهائية (دمج ذكي)
            const newAnimeMap = new Map(fetchedAnimeInSession.map(a => [a.id, a]));
            const existingAnime = this.currentAnimeList.filter(a => !newAnimeMap.has(a.id));
            this.currentAnimeList = [...existingAnime, ...fetchedAnimeInSession];
            
            this.loadingState.allLoaded = this.currentAnimeList.length === totalIds;
            this.loadingState.progress = 100;

            // ⚠️ إعادة عرض القائمة كاملة لضمان الترتيب الصحيح
            this.displayAnime(this.currentAnimeList); 
            this.updateProgress(100, 'اكتمل التحميل بنجاح!'); 
            this.showPerformanceSummary(successfulFetches, failedFetches);

            // حفظ القائمة الكاملة بعد التحميل
            this.advancedCache.set('current_anime_list', this.currentAnimeList, { source: 'full_fetch', count: this.currentAnimeList.length });
            
            if (this.uiSettings.animations) {
                this.addScrollAnimations();
            }

        } catch (error) {
            this.handleDataFetchError(error);
        } finally {
            this.loadingState.isLoading = false;
            this.showLoadingState(false);
            setTimeout(() => this.hideProgressBar(), 1000); 
            
            // ⚠️ تنظيف هياكل التحميل المتبقية
            this.removeAllSkeletonLoaders();
        }
    }

    // 💡 إضافة: جلب وتحليل متوسطات الأنمي حسب النوع (لاستغلال قوة AniList)
    async getGenreAverages() {
        // يتم استخدام هذا لإنشاء إحصائيات بصرية احترافية
        const allGenres = [...new Set(this.currentAnimeList.flatMap(a => a.genres || []))];
        const genreStats = new Map();
        
        // 💡 تحسين: استخدام Promise.allSettled لجلب الأنواع في دفعات (لتقليل زمن الحظر)
        const genreBatches = [];
        for (let i = 0; i < allGenres.length; i += 5) { // 5 أنواع في كل دفعة
            genreBatches.push(allGenres.slice(i, i + 5));
        }

        for (const batch of genreBatches) {
            const batchPromises = batch.map(async (genre) => {
                 const cacheKey = `genre_stats_${genre}`;
                 const cached = this.advancedCache.get(cacheKey);
                 if (cached) {
                     genreStats.set(genre, cached);
                     return;
                 }
                 
                 // ⚠️ التحقق من وضع عدم الاتصال قبل الطلب
                 if (this.isOffline) {
                     this.showToast('📴 لا يمكن جلب إحصائيات الأنواع في وضع عدم الاتصال.', 'warning', 2000);
                     return; 
                 }

                 try {
                    // 🛡️ معالج Rate Limit محلي
                    const waitDuration = await this.rateLimiter.acquireToken();
                    if (waitDuration > 0) {
                        await this.delay(waitDuration);
                    }

                    const response = await fetch(this.ANILIST_API, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            query: this.ANIME_STATS_QUERY,
                            variables: { genre: genre }
                        })
                    });
                    
                    if (!response.ok) {
                        if (response.status === 429) {
                            const retryAfter = parseInt(response.headers.get('Retry-After')) || 60;
                            await this.delay(retryAfter * 1000 + 1000);
                            return;
                        }
                        return;
                    }

                    const result = await response.json();
                    const mediaList = result.data?.Genre?.media || [];
                    
                    if (mediaList.length > 0) {
                        const totalScore = mediaList.reduce((sum, media) => sum + (media.averageScore || 0), 0);
                        const avgScore = totalScore / mediaList.length;
                        
                        const stat = {
                            averageScore: avgScore.toFixed(1),
                            count: mediaList.length,
                            topStudio: mediaList[0]?.studios?.nodes[0]?.name || 'N/A'
                        };
                        
                        genreStats.set(genre, stat);
                        this.advancedCache.set(cacheKey, stat);
                    }
                 } catch (error) {
                     this.logError('GenreStatsFetchFailed', error);
                 }
            });

            await Promise.allSettled(batchPromises); // انتظار نتائج الدفعة
            await this.delay(this.DELAY_MS / 2); // تأخير بسيط بين دفعات الأنواع
        }


        return Object.fromEntries(genreStats);
    }
    
    // 💡 إضافة: دالة لجلب قائمة مستخدم (للمقارنة والتوصيات)
    async fetchUserList(username) {
        if (this.isOffline) {
             this.showToast('📴 لا يمكن جلب قوائم المستخدم في وضع عدم الاتصال.', 'warning');
             return null;
        }
        
        if (!username) return null;

        const cacheKey = `user_list_${username}`;
        const cached = this.advancedCache.get(cacheKey);
        if (cached) return cached;
        
        try {
            // 🛡️ معالج Rate Limit محلي
            const waitDuration = await this.rateLimiter.acquireToken();
            if (waitDuration > 0) {
                 await this.delay(waitDuration);
            }
            
            const response = await fetch(this.ANILIST_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: this.USER_LIST_QUERY,
                    variables: { userName: username }
                })
            });

            if (!response.ok) throw new Error(`Failed to fetch user list for ${username} - Status: ${response.status}`);

            const result = await response.json();
            const listData = result.data?.MediaListCollection?.lists || [];
            
            if (listData.length > 0) {
                this.advancedCache.set(cacheKey, listData, { source: 'user-list' });
                return listData;
            }
            return null;
        } catch (error) {
            this.logError('UserListFetchFailed', error);
            this.showToast(`❌ فشل جلب قائمة المستخدم ${username}: ${error.message.substring(0, 30)}...`, 'error', 4000);
            return null;
        }
    }
    
    // 💡 إضافة: دالة حساب التوصيات المخصصة (بناءً على الوسوم والأنواع)
    getPersonalizedRecommendations() {
        if (!this.currentUser.lists || !this.currentAnimeList.length) {
            // ⚠️ تحسين: لا تعرض توست إذا لم يكن مسجل الدخول
            if (this.currentUser.isLoggedIn) {
                 this.showToast('ℹ️ لم تتم مزامنة القائمة بعد للحصول على توصيات مخصصة.', 'info', 3000);
            }
            return [];
        }

        const userCompletedAnime = this.currentUser.lists
            .flatMap(list => list.entries)
            .filter(entry => entry.status === 'COMPLETED' && (entry.score || 0) >= 70) // الأنمي المكتمل بتقييم 7 فما فوق
            .map(entry => entry.media);

        const preferredGenres = new Map();
        userCompletedAnime.forEach(media => {
            (media.genres || []).forEach(genre => {
                preferredGenres.set(genre, (preferredGenres.get(genre) || 0) + 1);
            });
        });

        const topGenres = [...preferredGenres.entries()]
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([genre]) => genre);
            
        // ⚠️ إضافة: قائمة بمعرفات الأنمي التي شاهدها المستخدم لتجنب التوصية بها
        const userMediaIds = new Set(this.currentUser.lists.flatMap(list => list.entries).map(entry => entry.media.id));


        // تصفية الأنمي غير المكتمل الذي يشارك أكثر من نوع واحد من الأنواع المفضلة
        const recommendations = this.currentAnimeList
            .filter(anime => !userMediaIds.has(anime.id)) // لا توصي بالمشاهد
            .filter(anime => {
                const sharedGenresCount = (anime.genres || []).filter(genre => topGenres.includes(genre)).length;
                return sharedGenresCount >= 2;
            })
            // 💡 تحسين: الترتيب حسب تقييم المستخدمين ومتوسط الدرجات
            .sort((a, b) => ((b.averageScore ?? 0) * (b.popularity ?? 1)) - ((a.averageScore ?? 0) * (a.popularity ?? 1))) 
            .slice(0, 5);

        return recommendations;
    }
    
    // 💡 إضافة: دالة لمقارنة قوائم المستخدمين
    async compareUserLists(username1, username2) {
        if (this.isOffline) {
             this.showToast('📴 لا يمكن مقارنة القوائم في وضع عدم الاتصال.', 'warning');
             return { shared: [], user1Unique: [], user2Unique: [] };
        }
        
        const list1 = await this.fetchUserList(username1);
        const list2 = await this.fetchUserList(username2);
        
        if (!list1 || !list2) {
            this.showToast('❌ تعذر جلب قائمة مستخدم واحد أو كليهما للمقارنة.', 'error', 4000);
            return { shared: [], user1Unique: [], user2Unique: [] };
        }
        
        // ⚠️ تحسين: استخدام دالة Map لدمج جميع الحالات (Watching, Completed, etc.)
        const listToMap = (list) => new Map(list.flatMap(l => l.entries).map(e => [e.media.id, e.media.title.userPreferred]));
        
        const mediaMap1 = listToMap(list1);
        const mediaMap2 = listToMap(list2);
        
        const shared = [];
        const user1Unique = [];
        const user2Unique = [];

        // ⚠️ تحسين: استخدام مجموعة ID للمقارنة السريعة
        const ids1 = new Set(mediaMap1.keys());
        const ids2 = new Set(mediaMap2.keys());

        ids1.forEach(id => {
            if (ids2.has(id)) {
                shared.push({ id: id, title: mediaMap1.get(id) });
            } else {
                user1Unique.push({ id: id, title: mediaMap1.get(id) });
            }
        });
        
        ids2.forEach(id => {
            if (!ids1.has(id)) {
                user2Unique.push({ id: id, title: mediaMap2.get(id) });
            }
        });
        
        this.showToast(`✅ اكتملت المقارنة: ${shared.length} أنمي مشترك.`, 'success', 3000);
        
        return { shared, user1Unique, user2Unique };
    }


    // 📊 إنشاء هيكل التحميل
    createSkeletonLoader(count) {
        let skeletonHTML = '';
        for (let i = 0; i < count; i++) {
            // ⚠️ إضافة مؤشر فريد لكل هيكل
            skeletonHTML += `
                <div class="anime-card skeleton" data-skeleton-id="${Date.now() + i}">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-title"></div>
                    <div class="skeleton-text"></div>
                </div>
            `;
        }
        return skeletonHTML;
    }
    
    // 📊 إزالة هيكل تحميل واحد
    removeSkeletonLoader() {
        const container = document.getElementById('animeGrid');
        if (!container) return;
        // ⚠️ إزالة أول هيكل يتم العثور عليه
        const skeleton = container.querySelector('.anime-card.skeleton'); 
        if (skeleton) {
            skeleton.remove();
        }
    }
    
    // 📊 إزالة جميع هياكل التحميل
    removeAllSkeletonLoaders() {
        const container = document.getElementById('animeGrid');
        if (!container) return;
        const skeletons = container.querySelectorAll('.anime-card.skeleton');
        skeletons.forEach(s => s.remove());
    }

    // 📊 تحديث شريط التقدم (معدلة)
    updateProgress(percent, message = '') {
        // ⚠️ إضافة منطق إنشاء شريط التقدم إذا لم يكن موجوداً
        let progressContainer = document.getElementById('progress-container');
        if (!progressContainer && typeof document !== 'undefined' && document.body) {
            progressContainer = document.createElement('div');
            progressContainer.id = 'progress-container';
            // تطبيق الأنماط في DOM لضمان الظهور الفوري قبل تحميل CSS (تم نقل الأنماط الأساسية إلى أسفل)
            progressContainer.style.cssText = `
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
            const progressBar = document.createElement('div');
            progressBar.id = 'progress-bar';
            progressBar.style.cssText = 'width: 100%; height: 4px; background: #333; border-radius: 2px; overflow: hidden;';
            const progressFill = document.createElement('div');
            progressFill.id = 'progress-fill';
            progressFill.style.cssText = 'height: 100%; background: linear-gradient(90deg, #00ff88, #0099ff); transition: width 0.3s ease; width: 0%;';
            const progressText = document.createElement('div');
            progressText.id = 'progress-text';
            progressText.style.cssText = 'color: white; font-size: 12px; text-align: center; margin-top: 5px;';

            progressBar.appendChild(progressFill);
            progressContainer.appendChild(progressBar);
            progressContainer.appendChild(progressText);
            
            // ⚠️ تحسين: إدراج الحاوية قبل أي عنصر آخر في الجسم
            if (document.body.firstChild) {
                document.body.insertBefore(progressContainer, document.body.firstChild);
            } else {
                 document.body.appendChild(progressContainer);
            }
        }

        const actualProgressFill = document.getElementById('progress-fill');
        const actualProgressText = document.getElementById('progress-text');

        if (actualProgressFill) {
            // ⚠️ التأكد من أن النسبة لا تتجاوز 100
            actualProgressFill.style.width = `${Math.min(100, percent).toFixed(2)}%`; 
        }
        
        if (actualProgressText) {
            actualProgressText.textContent = message;
        }
        
        // التأكد من أن الحاوية مرئية عند التحديث
        if (progressContainer) {
            progressContainer.style.opacity = '1';
        }
    }

    // 📊 إخفاء شريط التقدم (جديدة)
    hideProgressBar() {
        const progressContainer = document.getElementById('progress-container');
        if (progressContainer) {
            progressContainer.style.opacity = '0';
            // الإزالة من DOM بعد الانتقال
            setTimeout(() => {
                if (progressContainer.parentElement) {
                    progressContainer.remove();
                }
            }, 300);
        }
    }

    // 📊 إظهار إحصائيات الأداء
    showPerformanceSummary(successful, failed) {
        const totalTime = (typeof performance !== 'undefined' ? performance.now() : Date.now() - this.performance.startTime) / 1000;
        const totalRequests = this.performance.requestsCount; // ⚠️ استخدام العداد الإجمالي
        const cacheStats = this.advancedCache.getStats();
        
        const summary = `
            ✅ تم تحميل ${successful} أنمي بنجاح
            ❌ فشل تحميل ${failed} أنمي
            ⏱️ وقت المعالجة: ${totalTime.toFixed(2)} ثانية
            📊 نسبة نجاح API: ${totalRequests > 0 ? ((this.performance.successfulRequests / totalRequests) * 100).toFixed(1) : 0}%
            💾 ضربات التخزين المؤقت (Hits): ${cacheStats.totalHits} / Misses: ${cacheStats.totalMisses}
            📦 حجم الكاش: ${cacheStats.cacheSizeMB}
        `;

        this.showToast(summary, 'success', 8000); // ⚠️ زيادة مدة التوست لعرض الملخص
        
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
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
            // ⚠️ استخدام Spread Operator لتبسيط إضافة خصائص الاتصال
            connection: typeof navigator !== 'undefined' && navigator.connection ? { ...navigator.connection, effectiveType: navigator.connection.effectiveType } : null
        };

        try {
             // ⚠️ التحقق من توافر localStorage
            if (typeof localStorage !== 'undefined') {
                const existingMetrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
                existingMetrics.push(metrics); // ⚠️ تصحيح اسم المتغير من existingLogs إلى existingMetrics
                localStorage.setItem('performance_metrics', JSON.stringify(existingMetrics.slice(-50)));
            }
        } catch (error) {
            console.warn('تعذر حفظ مؤشرات الأداء:', error);
        }
    }

    // 🎨 إنشاء بطاقة الأنمي المتقدمة (معدلة)
    createAnimeCard(anime) {
        const container = document.getElementById('animeGrid');
        if (!container) return; 

        // ⚠️ التأكد من أن البطاقة لم تتم إضافتها مسبقاً قبل الإضافة
        const existingCard = container.querySelector(`[data-anime-id="${anime.id}"]`);
        if (existingCard) {
            existingCard.remove();
        }

        const card = document.createElement('div');
        card.className = 'anime-card fade-in';
        card.setAttribute('data-anime-id', anime.id);
        card.setAttribute('data-status', anime.status);
        
        const title = anime.title.userPreferred || anime.title.romaji || 'عنوان غير متوفر';
        const score = anime.averageScore ? (anime.averageScore / 10).toFixed(1) : 'N/A';
        const year = anime.seasonYear || 'N/A';
        const episodes = anime.episodes || '?';
        
        let coverImage = anime.coverImage?.extraLarge || anime.coverImage?.large;
        if (this.uiSettings.imageQuality === 'low') {
            coverImage = anime.coverImage?.large;
        }
        
        const dataFile = this.ANIME_DATA_FILES.get(anime.id);
        
        const watchLink = dataFile 
            ? `servers.html?datafile=${dataFile}&animeId=${anime.id}` 
            : `anime.html?id=${anime.id}`; 
            
        const detailsLink = `anime.html?id=${anime.id}`;
        
        // 💡 إضافة: تنسيق عرض الوقت المتبقي (إذا كان متوفراً)
        let nextEpisodeDisplay = '';
        if (anime.nextAiringEpisode && anime.nextAiringEpisode.timeUntilAiring > 0) {
            const timeUntil = anime.nextAiringEpisode.timeUntilAiring;
            const days = Math.floor(timeUntil / (24 * 3600));
            const hours = Math.floor((timeUntil % (24 * 3600)) / 3600);
            const minutes = Math.floor((timeUntil % 3600) / 60);
            
            let timeString = '';
            if (days > 0) timeString += `${days} يوم و `;
            timeString += `${hours} ساعة`;
            
            nextEpisodeDisplay = `<div class="anime-next-episode">حلقة ${anime.nextAiringEpisode.episode}: ${timeString}</div>`;
        }
        
        const isFavorite = this.favoriteAnimeMap.has(anime.id); // 💡 استخدام الـ Map
        const favoriteIconClass = isFavorite ? 'fas fa-heart' : 'far fa-heart';
        const favoriteIconStyle = isFavorite ? 'color: #ff4757;' : 'color: #ffffff;';


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
                    <div class="anime-top-info">
                         <div class="anime-rating">
                            <i class="fas fa-star"></i> ${score}
                         </div>
                         ${nextEpisodeDisplay}
                    </div>
                    <div class="anime-bottom-info">
                         <div class="anime-episodes">${episodes} حلقة</div>
                         <div class="anime-badge ${anime.status.toLowerCase()}">${this.getStatusText(anime.status)}</div>
                    </div>
                </div>
                <div class="anime-actions">
                    <button class="btn-favorite" style="${favoriteIconStyle}" onclick="event.stopPropagation(); window.aniListManager.toggleFavorite(${anime.id})">
                        <i class="${favoriteIconClass}"></i>
                    </button>
                    <a href="${watchLink}" class="btn-watch-link" onclick="event.stopPropagation(); window.aniListManager.storeAnimeData(${anime.id})">
                        <i class="fas fa-play"></i>
                    </a>
                    <button class="btn-share" onclick="event.stopPropagation(); window.aniListManager.shareAnime(${anime.id})">
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

        // ⚠️ إضافة البطاقة بشكل تفاعلي
        // إما إضافتها مباشرة إذا كانت القائمة فارغة، أو إدراجها بترتيب معين إذا لزم الأمر
        if (container.querySelector('.skeleton')) {
             container.insertBefore(card, container.querySelector('.skeleton'));
        } else {
             container.appendChild(card);
        }
        
        // this.updateFavoriteButton(anime.id); // 💡 لم تعد ضرورية، تم تضمينها في Card
        return card;
    }

    // 👇 دالة مساعدة لحفظ بيانات الأنمي قبل الانتقال (تم تعديلها)
    storeAnimeData(animeId) {
        const anime = this.currentAnimeList.find(a => a.id === animeId);
        if (anime) {
             // 1. التخزين المؤقت لبيانات الأنمي في sessionStorage (للوصول السريع في الصفحة التالية)
             if (typeof sessionStorage !== 'undefined') {
                 try {
                     sessionStorage.setItem('currentAnime', JSON.stringify(anime));
                 } catch (e) {
                      console.warn('فشل حفظ sessionStorage', e);
                 }
             }
             
             // 2. حفظ ID الأنمي بشكل دائم في localStorage
             if (typeof localStorage !== 'undefined') {
                 try {
                     localStorage.setItem('lastAnimeId', animeId.toString());
                     
                     // 3. تخزين صورة الأنمي (إذا لزم الأمر لـ watch.html)
                     localStorage.setItem("selectedAnimeImg", anime.coverImage?.large || '');

                     // 4. حفظ آخر أنمي تمت مشاهدته/الضغط عليه
                     localStorage.setItem('lastViewedAnime', JSON.stringify({
                        id: anime.id,
                        title: anime.title.userPreferred,
                        timestamp: Date.now()
                    }));
                 } catch (e) {
                      console.warn('فشل حفظ localStorage', e);
                 }
             }
        } else {
             this.showToast('تعذر العثور على بيانات الأنمي لتخزينها!', 'error');
        }
    }


    // ❤️ تبديل المفضلة
    toggleFavorite(animeId) {
         if (typeof localStorage === 'undefined') {
             this.showToast('⚠️ لا يمكن حفظ المفضلة. المتصفح لا يدعم التخزين المحلي.', 'warning');
             return;
         }
         
        const favoritesArray = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
        
        if (this.favoriteAnimeMap.has(animeId)) {
            // ⚠️ تحسين: استخدام الـ Map لسرعة التحقق
            this.favoriteAnimeMap.delete(animeId);
            const index = favoritesArray.indexOf(animeId);
            if (index > -1) favoritesArray.splice(index, 1);
            this.showToast('تم إزالة من المفضلة', 'info');
        } else {
            this.favoriteAnimeMap.set(animeId, true);
            favoritesArray.push(animeId);
            this.showToast('تم إضافة إلى المفضلة', 'success');
        }
        
        localStorage.setItem('favorite_anime', JSON.stringify(favoritesArray));
        this.updateFavoriteButton(animeId);
    }

    // 🔄 تحديث زر المفضلة
    updateFavoriteButton(animeId) {
         if (typeof document === 'undefined') return;
         
        const isFavorite = this.favoriteAnimeMap.has(animeId);
        const buttons = document.querySelectorAll(`[data-anime-id="${animeId}"] .btn-favorite`);
        
        buttons.forEach(button => {
            const icon = button.querySelector('i');
            if (icon) { // ⚠️ التأكد من وجود الأيقونة
                 if (isFavorite) {
                    icon.className = 'fas fa-heart';
                    button.style.color = '#ff4757';
                } else {
                    icon.className = 'far fa-heart';
                    button.style.color = '#ffffff';
                }
            }
        });
    }

    // 📤 مشاركة الأنمي
    shareAnime(animeId) {
        const anime = this.currentAnimeList.find(a => a.id === animeId);
        if (!anime) {
             this.showToast('تعذر العثور على الأنمي للمشاركة.', 'error');
             return;
        }

        const title = anime.title.userPreferred;
        const url = anime.siteUrl || `https://anilist.co/anime/${animeId}`; // ⚠️ استخدام رابط الموقع الرسمي إن وجد

        if (typeof navigator !== 'undefined' && navigator.share) {
            navigator.share({
                title: title,
                text: `شاهد ${title} على AniList`,
                url: url
            }).catch(error => {
                 this.logError('Share Failed', error);
                 this.showToast('❌ فشلت المشاركة المباشرة: تم نسخ الرابط.', 'error');
                 // ⚠️ الرجوع إلى النسخ إذا فشلت المشاركة
                 if (typeof navigator.clipboard !== 'undefined') {
                     navigator.clipboard.writeText(url);
                 }
            });
        } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                this.showToast('تم نسخ الرابط إلى الحافظة', 'success');
            }).catch(error => {
                 this.logError('Clipboard Copy Failed', error);
                 this.showToast('❌ فشل نسخ الرابط.', 'error');
            });
        } else {
             this.showToast('❌ ميزة المشاركة غير مدعومة.', 'error');
        }
    }

    // 🔍 البحث المتقدم
    searchAnime(searchTerm) {
        if (!searchTerm.trim()) {
            this.displayAnime(this.currentAnimeList);
            const resultsInfo = document.getElementById('search-results-info');
            if (resultsInfo) resultsInfo.remove();
            return;
        }

        const searchLower = searchTerm.toLowerCase();

        const filtered = this.currentAnimeList.filter(anime => {
            const title = anime.title.userPreferred || anime.title.romaji || '';
            const englishTitle = anime.title.english || '';
            const nativeTitle = anime.title.native || '';
            const description = anime.description || '';
            const genres = anime.genres || [];
            
            // 💡 تحسين: البحث في الوسوم أيضاً
            const tags = (anime.tags || []).map(t => t.name.toLowerCase());

            return (
                title.toLowerCase().includes(searchLower) ||
                englishTitle.toLowerCase().includes(searchLower) ||
                nativeTitle.toLowerCase().includes(searchLower) ||
                description.toLowerCase().includes(searchLower) ||
                genres.some(genre => genre.toLowerCase().includes(searchLower)) ||
                tags.some(tag => tag.includes(searchLower))
            );
        });

        this.displayAnime(filtered);
        this.showSearchResults(filtered.length, searchTerm);
    }

    // 📊 عرض نتائج البحث
    showSearchResults(count, term) {
        // ⚠️ التأكد من وجود document قبل إنشاء العناصر
        if (typeof document === 'undefined') return;
        
        let resultsInfo = document.getElementById('search-results-info');
        if (!resultsInfo) {
            resultsInfo = document.createElement('div');
            resultsInfo.id = 'search-results-info';
            // ⚠️ تحسين: استخدام classes عوضاً عن style.cssText
            resultsInfo.className = 'search-results-info-banner'; 
            
            // ⚠️ تحسين: استخدام الجسم كحاوية احتياطية
            const searchContainer = document.querySelector('.search-container') || document.body;
            if (searchContainer && document.body) { 
                 // 💡 التأكد من وجود الجسم و إدراج العنصر قبله
                if (document.body.firstChild) {
                    document.body.insertBefore(resultsInfo, document.body.firstChild);
                } else {
                    document.body.appendChild(resultsInfo);
                }
            }
        }

        if (count === 0) {
            resultsInfo.innerHTML = `❌ لم يتم العثور على نتائج لـ "<strong>${term}</strong>"`;
            resultsInfo.style.color = '#ff4757';
        } else {
            resultsInfo.innerHTML = `✅ تم العثور على ${count} نتيجة لـ "<strong>${term}</strong>"`;
            resultsInfo.style.color = '#00ff88';
        }
    }

    // 🎛️ تصفية متقدمة
    filterAnime(filters) {
        let filtered = [...this.currentAnimeList];
        
        // ⚠️ التحقق من وجود filters وعدم كونه null
        if (!filters || typeof filters !== 'object') return this.displayAnime(this.currentAnimeList);

        // ⚠️ تحسين: استخدام Nullish Coalescing Operator للتحقق من وجود القيمة
        if (filters.status && filters.status !== 'ALL') {
            filtered = filtered.filter(anime => anime.status === filters.status);
        }

        if (filters.genre && filters.genre !== 'ALL') {
            filtered = filtered.filter(anime => 
                (anime.genres || []).includes(filters.genre)
            );
        }

        if (filters.year && filters.year !== 'ALL') {
            // ⚠️ تحسين: تحويل إلى String للمقارنة الآمنة
            filtered = filtered.filter(anime => anime.seasonYear?.toString() === filters.year);
        }

        if (filters.minScore) {
            // ⚠️ التأكد من أن minScore رقم صالح
            const minScore = parseFloat(filters.minScore);
            if (!isNaN(minScore)) {
                filtered = filtered.filter(anime => 
                    (anime.averageScore ?? 0) >= minScore * 10
                );
            }
        }
        
        // 💡 إضافة: تصفية حسب الوسم (Tag)
        if (filters.tag && filters.tag !== 'ALL') {
             const tagLower = filters.tag.toLowerCase();
             filtered = filtered.filter(anime => 
                 (anime.tags || []).some(tag => tag.name.toLowerCase().includes(tagLower))
             );
        }
        
        // 💡 إضافة: تصفية حسب الوسائط المتعددة (Format)
        if (filters.format && filters.format !== 'ALL') {
             filtered = filtered.filter(anime => anime.format === filters.format);
        }


        this.displayAnime(filtered);
        this.showSearchResults(filtered.length, 'عوامل التصفية');
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
         if (typeof document === 'undefined') return;
         
        let loading = document.getElementById('loading');
        
        if (!loading) {
            loading = document.createElement('div');
            loading.id = 'loading';
            loading.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 9998;
                transition: opacity 0.3s ease;
                color: white;
            `;
            document.body.appendChild(loading);
        }
        
        loading.style.display = show ? 'flex' : 'none';
        
        if (show) {
            // ⚠️ تحسين: عرض إحصائيات الأداء في حالة التحميل
            const stats = this.getSystemStats();
            loading.innerHTML = `
                <div class="advanced-loader">
                    <div class="loader-spinner"></div>
                    <div class="loader-text">جاري تحميل أحدث الأنميات...</div>
                    <div class="loader-stats" id="loader-stats">
                         <p>Hits/Misses: ${stats.cache.totalHits} / ${stats.cache.totalMisses}</p>
                         <p>Requests: ${stats.performance.totalRequests} | Failures: ${stats.performance.failedRequests}</p>
                    </div>
                </div>
            `;
            
            // ⚠️ نقل أنماط Loader إلى الـ DOMContentLoaded Styles
        }
    }

    // 🛑 معالجة أخطاء جلب البيانات
    handleDataFetchError(error) {
        console.error('خطأ في جلب البيانات:', error);
        
        let userMessage = 'حدث خطأ في تحميل بيانات الأنمي.';
        
        if (error.message.includes('429')) {
            userMessage = '🛑 تجاوز حد طلبات API. يرجى الانتظار دقيقة والمحاولة مرة أخرى.';
        } else if (error.message.includes('Network') || error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
            userMessage = '🌐 مشكلة في الاتصال بالإنترنت. تحقق من اتصالك وحاول مرة أخرى.';
        } else if (error.message.includes('timeout') || error.message.includes('aborted')) {
            userMessage = '⏰ انتهت مهلة الطلب. جارٍ إعادة المحاولة...';
        } else {
            // ⚠️ تحسين: عرض رسالة مختصرة للمستخدم مع عرض الخطأ الكامل في الكونسول
            userMessage = `❌ حدث خطأ: ${error.message.substring(0, 100)}...`;
        }
        
        this.showError(userMessage);
    }

    // 🎪 عرض الأنمي
    displayAnime(animeList) {
        const container = document.getElementById('animeGrid');
        if (!container) return; 
        
        // ⚠️ مسح المحتوى القديم لتجنب التكرار
        container.innerHTML = ''; 
        this.removeAllSkeletonLoaders(); // التأكد من إزالة جميع الهياكل

        if (!animeList || animeList.length === 0) {
             // ⚠️ عرض حالة الفراغ في حالة عدم وجود نتائج
             const resultsInfo = document.getElementById('search-results-info');
             const isEmptySearch = resultsInfo && resultsInfo.textContent.includes('لم يتم العثور');
             
             container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-filter" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>${isEmptySearch ? 'لا توجد نتائج مطابقة' : 'لا توجد أنميات لعرضها'}</h3>
                    <p>${isEmptySearch ? 'حاول تخفيف معايير البحث أو التصفية.' : 'جرب تعديل معايير البحث أو التصفية.'}</p>
                </div>
            `;
             
            return;
        }

        // ⚠️ عرض البطاقات بترتيب الـ ID المستخرج لضمان التناسق
        const sortedAnimeList = this.extractAnimeIds()
            .map(id => animeList.find(a => a.id === id))
            .filter(a => a); // إزالة أي عناصر غير موجودة في القائمة المفلترة

        sortedAnimeList.forEach(anime => {
            this.createAnimeCard(anime);
        });

        if (this.uiSettings.animations) {
            this.addScrollAnimations();
        }
        
        // 💡 إضافة: عرض التوصيات بعد العرض الرئيسي إذا كانت متاحة
        const recommendations = this.getPersonalizedRecommendations();
        if (recommendations.length > 0) {
            // ⚠️ تحسين: عرض التوصيات في مكان مخصص (على سبيل المثال، أسفل الـ Grid)
            // هذا مجرد إشعار الآن، ولكن يمكن إنشاء مكون مخصص
            this.showToast(`✨ توصيات مخصصة لك: ${recommendations.map(a => a.title.userPreferred).join(', ')}`, 'info', 8000); 
        }
    }

    // ✨ إضافة تأثيرات التمرير
    addScrollAnimations() {
        if (typeof IntersectionObserver === 'undefined' || typeof document === 'undefined') return;
        
        const animeCards = document.querySelectorAll('.anime-card:not(.skeleton)');
        
        // ⚠️ تحسين: استخدام دالة Observer واحدة
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
        }
        
        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // ⚠️ تحسين: تطبيق تأثير التمرير
                    entry.target.classList.add('visible'); 
                    this.scrollObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animeCards.forEach(card => {
            // ⚠️ إضافة classes للتحكم بالأنماط عبر CSS
            card.classList.remove('visible'); 
            this.scrollObserver.observe(card);
        });
    }

    // 🔔 إظهار الإشعارات المتقدمة
    showToast(message, type = 'success', duration = 3000) {
        if (typeof document === 'undefined') {
             console.log(`[TOAST - ${type.toUpperCase()}] ${message}`);
             return;
        }
        
        const toastContainerId = 'toast-container';
        let toastContainer = document.getElementById(toastContainerId);
        
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = toastContainerId;
            // ⚠️ استخدام الأنماط من DOMContentLoaded
            toastContainer.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 10000;
            `;
            document.body.appendChild(toastContainer);
        }

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
                <button class="toast-close" onclick="this.closest('.advanced-toast').remove()">
                    <i class="fas fa-times"></i>
                </button>
        ${duration > 4000 ? `<button class="toast-action-btn" onclick="this.closest('.advanced-toast').remove(); console.log('Action for: ${message.substring(0, 20)}...');">انظر التفاصيل</button>` : ''}
            </div>
        `;

        // ⚠️ تحسين: إضافة التوست في البداية ليكون الأحدث في الأعلى
        toastContainer.prepend(toast); 

        // إخفاء تلقائي
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
        
        // 💡 إضافة: تنظيف الإشعارات القديمة
        if (toastContainer.children.length > 5) {
             toastContainer.lastChild.remove();
        }
    }

    // 🛑 إظهار الخطأ
    showError(message) {
        const container = document.getElementById('animeGrid');
        
        if(container) container.innerHTML = '';
        this.removeAllSkeletonLoaders(); // إزالة أي هياكل عند الخطأ

        if(container) {
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
        
        this.showLoadingState(false);
    }

    // ⚙️ تحميل إعدادات الواجهة
    loadUISettings() {
        try {
             if (typeof localStorage !== 'undefined') {
                const savedSettings = localStorage.getItem('ui_settings');
                if (savedSettings) {
                    this.uiSettings = { ...this.uiSettings, ...JSON.parse(savedSettings) };
                }
             }
        } catch (error) {
            console.warn('تعذر تحميل إعدادات الواجهة:', error);
        }
        
        if (typeof document !== 'undefined' && document.documentElement) {
            document.documentElement.setAttribute('data-theme', this.uiSettings.theme);
            document.documentElement.setAttribute('lang', this.uiSettings.language);
            // ⚠️ تحسين: التحقق من اللغة لتحديد الاتجاه
            document.documentElement.setAttribute('dir', this.uiSettings.language === 'ar' ? 'rtl' : 'ltr');
        }
        this.adjustSettingsBasedOnConnection(); 
    }

    // 💾 حفظ إعدادات الواجهة
    saveUISettings() {
        try {
             if (typeof localStorage !== 'undefined') {
                 localStorage.setItem('ui_settings', JSON.stringify(this.uiSettings));
             }
        } catch (error) {
            console.warn('تعذر حفظ إعدادات الواجهة:', error);
        }
    }

    // 🎨 تبديل السمة
    toggleTheme() {
        this.uiSettings.theme = this.uiSettings.theme === 'dark' ? 'light' : 'dark';
        if (typeof document !== 'undefined' && document.documentElement) {
            document.documentElement.setAttribute('data-theme', this.uiSettings.theme);
        }
        this.saveUISettings();
        this.showToast(`تم التبديل إلى السمة ${this.uiSettings.theme === 'dark' ? 'الداكنة' : 'الفاتحة'}`, 'success');
    }

    // 🌐 تبديل اللغة
    toggleLanguage() {
        this.uiSettings.language = this.uiSettings.language === 'ar' ? 'en' : 'ar';
        if (typeof document !== 'undefined' && document.documentElement) {
            document.documentElement.setAttribute('lang', this.uiSettings.language);
            document.documentElement.setAttribute('dir', this.uiSettings.language === 'ar' ? 'rtl' : 'ltr');
        }
        this.saveUISettings();
        this.showToast(`تم التبديل إلى اللغة ${this.uiSettings.language === 'ar' ? 'العربية' : 'الإنجليزية'}`, 'success');
    }
    
    // 💡 إضافة: دالة لإدارة المزامنة التلقائية لقائمة المستخدم
    async syncUserList() {
        if (!this.currentUser.username || !this.uiSettings.autoSync) {
            return;
        }
        
        this.showToast('🔄 بدء المزامنة التلقائية لقائمة AniList...', 'info', 3000);
        const userList = await this.fetchUserList(this.currentUser.username);
        
        if (userList) {
            this.currentUser.lists = userList;
             if (typeof localStorage !== 'undefined') {
                 // ⚠️ تحسين: حفظ قائمة المستخدم المخزنة
                 localStorage.setItem('cached_user_list', JSON.stringify(userList));
             }
            this.showToast('✅ اكتملت المزامنة بنجاح!', 'success');
        } else {
             this.showToast('❌ فشل المزامنة. تأكد من إعدادات حسابك.', 'error', 4000);
        }
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
                total: this.currentAnimeList.length,
                cached: cacheStats.totalWrites, 
                // ⚠️ إضافة: إجمالي الأنميات التي تم جلب بياناتها
                totalUrls: this.extractAnimeIds().length // 💡 استخدام الدالة لاستثناء المكررات
            },
            ui: this.uiSettings
        };
    }
    
    // 💡 إضافة: دالة لإدارة بيانات المستخدم بعد تسجيل الدخول (محاكاة)
    handleUserLogin(username, token) {
         if (typeof localStorage === 'undefined') {
             this.showToast('⚠️ لا يمكن تسجيل الدخول. المتصفح لا يدعم التخزين المحلي.', 'warning');
             return;
         }
         
        localStorage.setItem('anilist_username', username);
        localStorage.setItem('anilist_token', token); // يجب تخزين التوكن بأمان في تطبيق حقيقي!
        this.currentUser.username = username;
        this.currentUser.isLoggedIn = true;
        
        // 💡 مزامنة القائمة بعد تسجيل الدخول مباشرة
        this.syncUserList(); 
        
        this.showToast(`مرحباً ${username}! تم تسجيل الدخول بنجاح.`, 'success');
    }


    // 🗑️ تنظيف البيانات
    clearData() {
        // ⚠️ التحقق من وجود نافذة للتأكيد
        if (typeof window === 'undefined' || !confirm('هل أنت متأكد من رغبتك في مسح جميع البيانات المخزنة (التخزين المؤقت، الإعدادات، المفضلة)؟')) {
            return;
        }
        
        // ⚠️ التحقق من وجود localStorage و sessionStorage
        if (typeof localStorage !== 'undefined') localStorage.clear();
        if (typeof sessionStorage !== 'undefined') sessionStorage.clear();
        
        // 💡 تنظيف Cache Storage لوضع عدم الاتصال
        if ('caches' in window) {
            caches.delete(this.advancedCache.cacheName)
                .then(() => console.log('Cache Storage Cleared!'))
                .catch(e => console.warn('Cache Storage Clear Failed', e));
        }
        
        // إعادة إنشاء الكائن Cache
        this.advancedCache = new AdvancedCache();
        this.currentAnimeList = [];
        this.loadingState.currentIndex = 0;
        this.currentUser.isLoggedIn = false;
        this.currentUser.username = null;
        this.currentUser.lists = null;
        this.favoriteAnimeMap = new Map(); // 💡 تحديث الـ Map
        this.showToast('تم مسح جميع البيانات بنجاح', 'success');
        setTimeout(() => location.reload(), 1000); 
    }

    // 📤 تصدير البيانات
    exportData() {
         if (typeof localStorage === 'undefined' || typeof document === 'undefined') {
             this.showToast('❌ لا يمكن تصدير البيانات. المتصفح غير مدعوم.', 'error');
             return;
         }
         
        const exportData = {
            animeList_Current: this.currentAnimeList.map(a => ({ id: a.id, title: a.title.userPreferred })), 
            favorites: JSON.parse(localStorage.getItem('favorite_anime') || '[]'),
            settings: this.uiSettings,
            performance: this.getSystemStats(),
            errorLogs: JSON.parse(localStorage.getItem('error_logs') || '[]'), // ⚠️ تصدير سجلات الأخطاء
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        // ⚠️ استخدام Blob و URL.createObjectURL لتوليد ملف التحميل
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `anilist-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        // ⚠️ تحرير الذاكرة
        URL.revokeObjectURL(link.href);
        
        this.showToast('تم تصدير البيانات بنجاح', 'success');
    }

    // 🏠 معالجة التحميل الأولي (Stale-While-Revalidate - SWR)
    handleInitialLoad() {
        const cachedAnime = this.advancedCache.get('current_anime_list');
        const animeIds = this.extractAnimeIds();
        
         if (typeof localStorage !== 'undefined') {
            // 💡 تحميل قائمة المستخدم المخزنة
            const cachedUserListString = localStorage.getItem('cached_user_list');
            if (cachedUserListString) {
                 try {
                     this.currentUser.lists = JSON.parse(cachedUserListString);
                 } catch (e) {
                      console.warn('فشل تحليل قائمة المستخدم المخزنة', e);
                 }
            }
            
            if (localStorage.getItem('anilist_username')) {
                this.currentUser.isLoggedIn = true;
            }
         }
         
        // 💡 بدء المزامنة التلقائية إذا كانت ممكّنة
        if (this.uiSettings.autoSync && this.currentUser.isLoggedIn) {
            this.syncUserList();
        }
        
        // 💡 التحقق من وجود وضع عدم الاتصال قبل بدء SWR
        if (this.isOffline) {
            if (cachedAnime && cachedAnime.length > 0) {
                 this.currentAnimeList = cachedAnime;
                 this.displayAnime(cachedAnime);
                 this.showToast('📴 وضع عدم الاتصال: تم التحميل من التخزين المؤقت.', 'warning', 5000);
            } else {
                 this.showError('📴 وضع عدم الاتصال ولا توجد بيانات مخزنة محلياً.');
            }
            return;
        }
        
        if (cachedAnime && cachedAnime.length > 0) {
            this.currentAnimeList = cachedAnime;
            this.displayAnime(cachedAnime);
            
            // ⚠️ تحسين: تحديد ما تم تحميله بناءً على الـ ID لضمان اكتمال القائمة
            const fetchedIds = new Set(cachedAnime.map(a => a.id));
            let missingIndex = animeIds.findIndex(id => !fetchedIds.has(id)); 
            
            // 💡 تحديد ما إذا كان وقت إعادة التحقق (Revalidation) قد حان
            const cachedCurrentListMeta = typeof localStorage !== 'undefined' ? localStorage.getItem('cache_current_anime_list') : null; 
            
            let needsRevalidation = true;
            if (cachedCurrentListMeta) {
                try {
                     const metadata = JSON.parse(cachedCurrentListMeta);
                     // ⚠️ تحسين: التحقق من وجود الـ expiry أولاً
                     needsRevalidation = metadata.expiry ? (Date.now() > metadata.expiry) : true; 
                } catch (e) {
                    needsRevalidation = true; // في حالة التلف
                }
            } else {
                 needsRevalidation = true; // إذا لم يكن هناك ميتا داتا
            }

            
            if (missingIndex === -1 && !needsRevalidation) {
                // جميع العناصر موجودة والبيانات حديثة
                this.loadingState.currentIndex = animeIds.length;
                this.loadingState.allLoaded = true;
                this.showToast('✅ تم تحميل جميع الأنميات. الكاش حديث.', 'success', 2000);
            
            } else if (missingIndex === -1 && needsRevalidation) {
                // جميع العناصر موجودة، لكن نحتاج لـ revalidate
                this.loadingState.currentIndex = animeIds.length;
                this.loadingState.allLoaded = true;
                
                // 💡 تفعيل revalidate حتى لو كانت القائمة كاملة
                this.showToast('⚡ تم التحميل من التخزين المؤقت (Cache) - جارٍ التحقق من التحديثات في الخلفية', 'info', 2000);
                setTimeout(() => {
                    this.loadingState.allLoaded = false;
                    this.loadingState.currentIndex = 0; // إعادة الجلب بالكامل في الخلفية (Revalidate)
                    this.fetchAnimeData();
                }, 100); // بدء التحقق الفوري في الخلفية
            
            } else {
                 // إذا كان هناك عناصر مفقودة، نبدأ من عندها
                this.loadingState.currentIndex = missingIndex; 
                this.loadingState.allLoaded = false;
                 this.showToast('⚡ تم التحميل من التخزين المؤقت (Cache) - جارٍ إكمال التحميل الناقص', 'info', 2000);
                 setTimeout(() => {
                    this.fetchAnimeData(); 
                 }, 100); 
            }
        } else {
            // بدء عملية الجلب التدريجي لأول مرة
            this.loadingState.currentIndex = 0;
            this.loadingState.allLoaded = false;
            this.fetchAnimeData();
        }
    }
    
    // 🌟 دالة بدء التطبيق النهائية
    start() {
        this.init();
        this.handleInitialLoad(); 
    }
}

// 🌟 التهيئة المتقدمة للتطبيق
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // إنشاء نسخة عالمية من المدير
        window.aniListManager = new AniListManager();
        
        // بدء جلب البيانات أو تحميلها من الكاش
        window.aniListManager.start();

        // ⚠️ إضافة الأنماط الأساسية لضمان عمل التحسينات البصرية
        // (تم إضافة الأنماط اللازمة لتنفيذ طلبات المستخدم: الزجاجي، البطاقات الحديثة، الإشعارات)
        const styleId = 'enhanced-app-styles';
        if (!document.getElementById(styleId)) {
            const additionalStyles = `
                /* الأنماط العامة للسمة (الداكنة كإفتراضي) */
                :root {
                    --bg-color: #121212;
                    --card-bg: #1a1a1a;
                    --text-color: #ffffff;
                    --primary-color: #00ff88;
                    --secondary-color: #0099ff;
                    --error-color: #ff4757;
                    --warning-color: #ffa502;
                    --glass-filter: blur(10px) saturate(180%);
                    --transition-duration: 0.3s; /* 💡 إضافة متغيّر للانتقالات */
                }
                
                [data-theme="light"] {
                    --bg-color: #f0f2f5;
                    --card-bg: #ffffff;
                    --text-color: #121212;
                    --primary-color: #00885a;
                    --secondary-color: #0077cc;
                    --error-color: #c9000c;
                    --warning-color: #d18d00;
                }
                
                /* Body & Global Resets */
                body {
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 0;
                    padding: 0;
                    min-height: 100vh; /* 💡 تحسين للـ Mobile */
                }

                /* Grid الأساسي - مناسب للجوال (طلب المستخدم: المقاسات تناسب الهاتف) */
                #animeGrid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 15px;
                    padding: 15px;
                    margin: 0 auto;
                    max-width: 1200px;
                    min-height: 100vh; /* 💡 ضمان مساحة كافية للتحميل */
                }
                
                /* شريط التقدم */
                #progress-container {
                    background: rgba(18, 18, 18, 0.95);
                    backdrop-filter: var(--glass-filter); /* 💡 تأثير زجاجي */
                }
                
                #progress-bar {
                    background: #333;
                }

                #progress-fill {
                    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                }
                #progress-text {
                     color: var(--text-color);
                }

                /* الإشعارات المتقدمة (Glassy Toasts) */
                #toast-container {
                     /* تم تعريف الأنماط في JS لأسباب التوقيت */
                }
                
                .advanced-toast {
                    background: rgba(26, 26, 26, 0.85); /* 💡 خلفية شبه شفافة */
                    backdrop-filter: var(--glass-filter); /* 💡 تأثير زجاجي */
                    padding: 10px 15px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
                    border-left: 4px solid var(--primary-color);
                    color: var(--text-color);
                    transition: all var(--transition-duration) ease-in-out;
                    opacity: 0;
                    transform: translateX(100%);
                }
                
                .advanced-toast.show {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                .toast-content {
                    display: flex;
                    align-items: center;
                    white-space: pre-wrap; /* 💡 للحفاظ على تنسيق الملخص */
                    font-size: 14px;
                    line-height: 1.4;
                }
                
                .toast-icon { margin-inline-end: 10px; font-size: 18px; }
                .toast-message { flex-grow: 1; }
                
                .advanced-toast.error { border-left-color: var(--error-color); }
                .advanced-toast.warning { border-left-color: var(--warning-color); }
                .advanced-toast.info { border-left-color: var(--secondary-color); }
                
                .toast-close { 
                    background: none; 
                    border: none; 
                    color: var(--text-color); 
                    font-size: 18px;
                    cursor: pointer;
                    margin-inline-start: 15px;
                    opacity: 0.7;
                }
                .toast-close:hover { opacity: 1; }
                
                .toast-action-btn { 
                    background: var(--secondary-color); 
                    color: white; 
                    border: none;
                    padding: 5px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-inline-start: 10px;
                }
                .toast-action-btn:hover { background: #0077cc; }
                
                /* هياكل التحميل (Skeleton Loader) */
                .skeleton {
                    background-color: var(--card-bg) !important;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    animation: pulse 1.5s infinite ease-in-out; /* 💡 تأثير النبض */
                }
                
                .skeleton-image { height: 250px; border-radius: 8px 8px 0 0; }
                .skeleton-title { height: 20px; width: 80%; margin: 10px 10px 5px; }
                .skeleton-text { height: 15px; width: 60%; margin: 0 10px 10px; }

                .skeleton-image, .skeleton-title, .skeleton-text { background: #333; border-radius: 4px; }
                [data-theme="light"] .skeleton-image, [data-theme="light"] .skeleton-title, [data-theme="light"] .skeleton-text { background: #e0e0e0; }

                @keyframes pulse {
                    0% { opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { opacity: 0.5; }
                }

                
                /* حالة الفراغ والخطأ */
                .empty-state, .error-state { 
                    grid-column: 1 / -1; 
                    text-align: center;
                    padding: 50px 20px;
                    color: #888; 
                }
                
                .retry-btn { 
                    background: var(--primary-color); 
                    color: var(--card-bg); 
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: bold;
                    margin-top: 20px;
                }
                .retry-btn:hover { background: #00cc6a; }
                
                /* تأثيرات البطاقة (البطاقة القديمة -> بطاقة حديثة) */
                .anime-card {
                    background-color: var(--card-bg);
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    overflow: hidden;
                    cursor: pointer;
                    color: var(--text-color);
                    /* 💡 أنماط خاصة بتأثير التمرير */
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow var(--transition-duration) ease;
                }
                
                .anime-card.visible { /* 💡 للـ Intersection Observer */
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .anime-card:hover {
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
                    transform: translateY(-5px) scale(1.02);
                }
                
                .anime-image-container { position: relative; overflow: hidden; height: 250px; }
                .anime-image-container img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
                .anime-card:hover .anime-image-container img { transform: scale(1.05); }

                
                .anime-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    box-sizing: border-box;
                    pointer-events: none;
                    /* 💡 التخطيط المحدث للتداخل */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.4) 0%,
                        transparent 30%,
                        rgba(0, 0, 0, 0.9) 100%
                    );
                    transition: background 0.3s ease;
                }
                
                .anime-actions { 
                    position: absolute; 
                    top: 10px; 
                    inset-inline-end: 10px; /* 💡 دعم RTL/LTR */
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    opacity: 0; 
                    pointer-events: auto; /* 💡 السماح بالضغط على الأزرار */
                    transition: opacity var(--transition-duration) ease;
                }
                .anime-card:hover .anime-actions { opacity: 1; }
                
                .btn-favorite, .btn-share, .btn-watch-link {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(4px);
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .btn-favorite i, .btn-share i, .btn-watch-link i { color: #ffffff; }
                .btn-favorite:hover, .btn-share:hover, .btn-watch-link:hover { background: var(--secondary-color); transform: scale(1.1); }
                
                .anime-top-info, .anime-bottom-info {
                     display: flex;
                     justify-content: space-between;
                     align-items: center;
                     width: 100%;
                }
                
                .anime-rating, .anime-year, .anime-episodes, .anime-next-episode, .anime-badge {
                     padding: 4px 8px;
                     border-radius: 4px;
                     font-size: 12px;
                     font-weight: bold;
                     background: rgba(0, 0, 0, 0.7);
                     color: white;
                     backdrop-filter: blur(2px);
                }
                
                .anime-next-episode { background: var(--error-color); } /* 💡 تحديث اللون */
                
                .anime-badge.releasing { background: var(--primary-color); color: var(--card-bg); }
                .anime-badge.finished { background: var(--secondary-color); color: white; }
                .anime-badge.not_yet_released { background: #9900ff; color: white; }
                .anime-badge.cancelled { background: var(--error-color); color: white; }
                .anime-badge.hiatus { background: var(--warning-color); color: black; }
                
                .anime-info { padding: 10px; text-align: start; }
                .anime-title { 
                    color: var(--text-color); 
                    font-size: 16px;
                    margin: 0 0 5px 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .genre-tag { 
                    background: rgba(0, 255, 136, 0.2); 
                    color: var(--primary-color); 
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-size: 11px;
                    margin-inline-end: 5px;
                }
                
                /* أنماط الـ Loader المتقدمة */
                .advanced-loader { text-align: center; }
                .loader-spinner {
                    border: 4px solid #333;
                    border-top-color: var(--primary-color);
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }
                .loader-text { font-size: 18px; margin-bottom: 10px; }
                .loader-stats { color: #888; font-size: 12px; line-height: 1.5; }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                /* Banner لنتائج البحث */
                .search-results-info-banner { 
                    padding: 10px;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 8px;
                    margin: 10px auto;
                    max-width: 800px;
                    color: var(--text-color);
                    grid-column: 1 / -1; /* 💡 يمتد على كامل الـ Grid */
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
                }
            `;
            
            const styleSheet = document.createElement('style');
            styleSheet.id = styleId;
            styleSheet.textContent = additionalStyles;
            document.head.appendChild(styleSheet);
            
            // 💡 إضافة أيقونات Font Awesome (افتراضي في أي تطبيق احترافي)
            const faLink = document.createElement('link');
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
            document.head.appendChild(faLink);
        }
    });
}

// 🚀 تصدير الكلاس للاستخدام العالمي
window.AniListManager = AniListManager;
