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
// يطبق منطق التخزين المؤقت الذكي باستخدام localStorage و sessionStorage
class AdvancedCache {
    constructor() {
        this.cacheName = 'anilist-enterprise-cache-v3';
        this.cacheDuration = 24 * 60 * 60 * 1000; // 24 ساعة
        this.performanceMetrics = new Map();
        // ⚠️ إضافة: متغير لتتبع حجم التخزين المؤقت
        this.cacheSize = 0; 
        this.initSize();
    }
    
    // 🔧 التهيئة: حساب الحجم الحالي للتخزين المؤقت
    initSize() {
        this.cacheSize = 0;
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
         keys.forEach(key => {
            try {
                const cached = localStorage.getItem(key);
                this.cacheSize += cached.length * 2; // تقريب بالبايت
            } catch (error) {
                // تجاهل
            }
        });
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
            
            const itemString = JSON.stringify(cacheItem);

            // التخزين في localStorage (للبقاء الدائم)
            localStorage.setItem(`cache_${key}`, itemString);
            
            // التخزين في sessionStorage (للوصول السريع خلال الجلسة الحالية)
            sessionStorage.setItem(`session_${key}`, JSON.stringify(data));
            
            // تحديث مؤشرات الأداء
            this.updateMetrics('write', key, data);
            
            // تحديث الحجم
            this.cacheSize += itemString.length * 2;
            
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
                return JSON.parse(sessionData);
            }

            // جلب من localStorage مع التحقق من الصلاحية
            const cached = localStorage.getItem(`cache_${key}`);
            if (cached) {
                const cacheItem = JSON.parse(cached);
                
                // التحقق من انتهاء الصلاحية
                if (Date.now() > cacheItem.expiry) {
                    this.delete(key);
                    return null;
                }
                
                // تحديث sessionStorage للوصول المستقبلي (الهدف من SWR)
                sessionStorage.setItem(`session_${key}`, JSON.stringify(cacheItem.data));
                this.updateMetrics('hit', key, 'local');
                
                return cacheItem.data;
            }
            
            this.updateMetrics('miss', key);
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل التخزين المؤقت:', error);
            this.delete(key); // تنظيف العنصر الفاسد
            return null;
        }
    }
    
    // 💡 إضافة: جلب بيانات من Cache Storage (لـ Offline Mode)
    async getFromCacheStorage(key) {
        try {
            if ('caches' in window) {
                const cache = await caches.open(this.cacheName);
                const response = await cache.match(`offline-data-v1/${key}`);
                if (response) {
                    this.updateMetrics('hit', key, 'cacheStorage');
                    return await response.json();
                }
            }
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل من Cache Storage:', error);
            return null;
        }
    }

    // 💡 إضافة: حفظ بيانات في Cache Storage (لـ Offline Mode)
    async setToCacheStorage(key, data) {
         try {
            if ('caches' in window) {
                const cache = await caches.open(this.cacheName);
                const url = `offline-data-v1/${key}`;
                const response = new Response(JSON.stringify(data), {
                    headers: { 'Content-Type': 'application/json' }
                });
                await cache.put(url, response);
                return true;
            }
            return false;
        } catch (error) {
            console.warn('⚠️ تعذر حفظ في Cache Storage:', error);
            return false;
        }
    }


    // 🔧 حذف البيانات
    delete(key) {
        const itemString = localStorage.getItem(`cache_${key}`);
        if(itemString) {
             this.cacheSize -= itemString.length * 2;
        }
        localStorage.removeItem(`cache_${key}`);
        sessionStorage.removeItem(`session_${key}`);
    }

    // 🔧 تنظيف التخزين المؤقت المنتهي
    cleanup() {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        let cleanedUpSize = 0;
        keys.forEach(key => {
            try {
                const cached = localStorage.getItem(key);
                const cacheItem = JSON.parse(cached);
                if (Date.now() > cacheItem.expiry) {
                    this.delete(key.replace('cache_', ''));
                    cleanedUpSize += cached.length * 2;
                }
            } catch (error) {
                // حذف العناصر الفاسدة أيضاً
                this.delete(key.replace('cache_', ''));
                if (localStorage.getItem(key)) {
                    cleanedUpSize += localStorage.getItem(key).length * 2;
                }
            }
        });
        // ⚠️ تحديث حجم الذاكرة المؤقتة بعد التنظيف
        this.cacheSize -= cleanedUpSize;
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
        const stats = {
            totalHits: 0,
            totalMisses: 0,
            totalWrites: 0,
            // ⚠️ تصحيح: استخدام الحجم المحسوب بدلاً من الحساب المتكرر
            cacheSize: this.cacheSize, 
            cacheSizeMB: (this.cacheSize / 1024 / 1024).toFixed(2) + ' MB'
        };

        this.performanceMetrics.forEach(metric => {
            if (metric.type === 'hit') stats.totalHits++;
            if (metric.type === 'miss') stats.totalMisses++;
            if (metric.type === 'write') stats.totalWrites++;
        });

        return stats;
    }
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
            const earliestTime = this.requestTimestamps[0];
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
        this.isOffline = !navigator.onLine;

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
            username: localStorage.getItem('anilist_username') || null,
            lists: null // قائمة الأنمي للمستخدم
        };

        this.init();
    }
    
    // 💡 إضافة: دالة لمعالجة التخزين المسبق (Preloading)
    async preloadData(ids) {
        // تحديد أهم الأنميات بناءً على الترتيب، أو المفضلة، أو الأكثر شعبية
        const topIdsToPreload = ids.slice(0, 10); 
        
        this.showToast('🚀 بدء التحميل المسبق لأهم 10 أنميات...', 'info', 2000);

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
    }

    // 💡 إضافة: إعداد معالجة وضع عدم الاتصال
    setupOfflineMode() {
        window.addEventListener('online', () => {
            this.isOffline = false;
            this.showToast('🌐 تم استعادة الاتصال بالإنترنت', 'success', 3000);
            this.fetchAnimeData(); // إعادة محاولة الجلب عند استعادة الاتصال
        });
        window.addEventListener('offline', () => {
            this.isOffline = true;
            this.showToast('📴 وضع عدم الاتصال. يتم عرض البيانات المخزنة محليًا', 'warning', 5000);
        });
        this.isOffline = !navigator.onLine;
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
        if ('connection' in navigator) {
            navigator.connection.addEventListener('change', () => {
                this.adjustSettingsBasedOnConnection();
                this.showToast(`تم تعديل الإعدادات بناءً على الاتصال: ${navigator.connection.effectiveType}`, 'info', 3000);
            });
            // ⚠️ تطبيق الإعدادات عند بدء التشغيل أيضاً
            this.adjustSettingsBasedOnConnection();
        }

        // تتبع وقت التحميل
        this.performance.startTime = performance.now();
    }

    // 🌐 ضبط الإعدادات بناءً على سرعة الاتصال (Connection Adaptive Settings)
    adjustSettingsBasedOnConnection() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            // تحديد السرعات المنخفضة بدقة
            if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                this.BATCH_SIZE = 2;
                this.uiSettings.imageQuality = 'low';
                this.uiSettings.animations = false;
            } else if (connection.effectiveType === '3g') {
                this.BATCH_SIZE = 3;
                this.uiSettings.imageQuality = 'medium';
                this.uiSettings.animations = true;
            } else {
                this.BATCH_SIZE = 4;
                this.uiSettings.imageQuality = 'high';
                this.uiSettings.animations = true;
            }
        }
        // ⚠️ إعادة حفظ الإعدادات لتعكس التعديلات التكيفية (إذا كان حفظ البيانات ممكناً)
        this.saveUISettings(); 
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

        // حفظ في localStorage للتحليل لاحقاً
        try {
            const existingLogs = JSON.parse(localStorage.getItem('error_logs') || '[]');
            existingLogs.push(errorLog);
            localStorage.setItem('error_logs', JSON.stringify(existingLogs.slice(-100))); // حفظ آخر 100 خطأ فقط
        } catch (e) {
            console.warn('تعذر حفظ سجل الأخطاء:', e);
        }
    }

    // ⏰ دالة التأخير الذكية
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }

    // 🔍 استخراج معرفات الأنمي
    extractAnimeIds() {
        // ⚠️ تحسين: استخدام دالة Reduce لتجنب تكرار الكود
        return this.animeUrls.reduce((ids, url) => {
            const match = url.match(/(anime|manga)\/(\d+)/); 
            if (match) {
                ids.push(parseInt(match[2])); 
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

        while (retries > 0) {
            // 🛡️ خطوة إدارة Rate Limit
            const waitDuration = await this.rateLimiter.acquireToken();
            if (waitDuration > 0) {
                 this.showToast(`⏳ تجاوز الحد المحلي لـ Rate Limit، الانتظار ${Math.ceil(waitDuration / 1000)} ثانية لـ ID: ${id}`, 'warning');
                 await this.delay(waitDuration);
                 continue;
            }
            
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => {
                    // ⚠️ تحسين: تسجيل الإلغاء كخطأ
                    controller.abort(); 
                    this.logError('FetchTimeout', new Error(`Request timed out after ${this.TIMEOUT_MS}ms for ID: ${id}`));
                }, this.TIMEOUT_MS);

                const response = await fetch(this.ANILIST_API, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        // 💡 إضافة: Authentication Header للمزامنة التلقائية إذا كانت متوفرة
                        ...(this.currentUser.isLoggedIn && { 'Authorization': `Bearer ${localStorage.getItem('anilist_token')}` }) 
                    },
                    body: JSON.stringify({
                        query: this.ANIME_QUERY,
                        variables: { id: id }
                    }),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (response.status === 429) {
                    const retryAfter = parseInt(response.headers.get('Retry-After')) || 60;
                    this.showToast(`⏳ تجاوز حد الطلبات، إعادة المحاولة بعد ${retryAfter} ثانية لـ ID: ${id}`, 'warning');
                    await this.delay(retryAfter * 1000 + 2000); // تأخير إضافي +2 ثانية لضمان تجاوز الحد
                    continue;
                }
                
                if (!response.ok) {
                    const errorBody = await response.text();
                    throw new Error(`خطأ في API: ${response.status} ${response.statusText} - ${errorBody.substring(0, 100)}...`);
                }

                const result = await response.json();
                
                if (result.errors) {
                    throw new Error(`خطأ في GraphQL: ${result.errors[0].message}`);
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
                
                if (retries > 0) {
                    // ⚠️ تطبيق (Exponential Backoff + Jitter) لتحسين كفاءة إعادة المحاولة
                    const baseDelay = Math.pow(2, this.MAX_RETRIES - retries) * 1000;
                    const jitter = Math.random() * 1000;
                    const backoffDelay = baseDelay + jitter; 
                    
                    this.showToast(`🔄 إعادة المحاولة ${this.MAX_RETRIES - retries}/${this.MAX_RETRIES} لـ ID: ${id} (${error.message.substring(0, 30)})`, 'info');
                    await this.delay(backoffDelay);
                }
            }
        }

        this.performance.failedRequests++;
        this.logError('FetchAnime Failed', lastError);
        throw new Error(`فشل جلب البيانات بعد ${this.MAX_RETRIES} محاولات: ${lastError.message}`);
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
        if (this.loadingState.allLoaded && this.currentAnimeList.length > 0 && this.loadingState.currentIndex === this.extractAnimeIds().length) {
            this.showToast('تم تحميل جميع الأنميات سابقاً', 'info');
            this.displayAnime(this.currentAnimeList);
            this.loadingState.isLoading = false;
            return;
        }

        this.performance.startTime = performance.now();
        
        const animeIds = this.extractAnimeIds();
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
            if(animeGrid && this.loadingState.currentIndex === 0) {
                animeGrid.innerHTML = '';
                // ⚠️ إضافة هياكل التحميل عند البداية فقط
                animeGrid.innerHTML = this.createSkeletonLoader(Math.min(this.BATCH_SIZE * 3, animeIds.length)); 
            }
            
            const totalIds = animeIds.length;
            let successfulFetches = 0;
            let failedFetches = 0;
            const totalBatches = Math.ceil(totalIds / this.BATCH_SIZE);
            const fetchedAnimeInSession = [];

            for (let i = initialIndex; i < totalIds; i += this.BATCH_SIZE) {
                const batchIds = animeIds.slice(i, i + this.BATCH_SIZE);
                const currentBatch = Math.floor(i / this.BATCH_SIZE) + 1;
                
                this.updateProgress(
                    (i / totalIds) * 100,
                    `جاري تحميل الدفعة ${currentBatch} من ${totalBatches}`
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

            // تحديث القائمة النهائية
            this.currentAnimeList = [
                ...this.currentAnimeList.filter(a => !fetchedAnimeInSession.some(f => f.id === a.id)),
                ...fetchedAnimeInSession
            ];
            
            this.loadingState.allLoaded = true;
            this.loadingState.progress = 100;

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
        
        for (const genre of allGenres.slice(0, 10)) { // 💡 جلب لأهم 10 أنواع فقط لتجنب Rate Limit
             const cached = this.advancedCache.get(`genre_stats_${genre}`);
             if (cached) {
                 genreStats.set(genre, cached);
                 continue;
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
                
                if (!response.ok) continue;

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
                    this.advancedCache.set(`genre_stats_${genre}`, stat);
                }
             } catch (error) {
                 this.logError('GenreStatsFetchFailed', error);
             }
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

        const cached = this.advancedCache.get(`user_list_${username}`);
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

            if (!response.ok) throw new Error(`Failed to fetch user list for ${username}`);

            const result = await response.json();
            const listData = result.data?.MediaListCollection?.lists || [];
            
            if (listData.length > 0) {
                this.advancedCache.set(`user_list_${username}`, listData);
                return listData;
            }
            return null;
        } catch (error) {
            this.logError('UserListFetchFailed', error);
            this.showToast(`❌ فشل جلب قائمة المستخدم ${username}: ${error.message.substring(0, 30)}...`, 'error');
            return null;
        }
    }
    
    // 💡 إضافة: دالة حساب التوصيات المخصصة (بناءً على الوسوم والأنواع)
    getPersonalizedRecommendations() {
        if (!this.currentUser.lists) {
            this.showToast('ℹ️ يجب تسجيل الدخول ومزامنة القائمة أولاً للحصول على توصيات مخصصة.', 'info');
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

        // تصفية الأنمي غير المكتمل الذي يشارك أكثر من نوع واحد من الأنواع المفضلة
        const recommendations = this.currentAnimeList
            .filter(anime => anime.status !== 'COMPLETED') // لا توصي بالمكتمل
            .filter(anime => {
                const sharedGenresCount = (anime.genres || []).filter(genre => topGenres.includes(genre)).length;
                return sharedGenresCount >= 2;
            })
            .sort((a, b) => b.averageScore - a.averageScore) // الترتيب حسب التقييم
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
            this.showToast('❌ تعذر جلب قائمة مستخدم واحد أو كليهما للمقارنة.', 'error');
            return { shared: [], user1Unique: [], user2Unique: [] };
        }
        
        const mediaIds1 = new Set(list1.flatMap(list => list.entries).map(entry => entry.media.id));
        const mediaMap2 = new Map(list2.flatMap(list => list.entries).map(entry => [entry.media.id, entry.media.title.userPreferred]));
        
        const shared = [];
        const user1Unique = [];

        list1.flatMap(list => list.entries).forEach(entry => {
            if (mediaMap2.has(entry.media.id)) {
                shared.push({ id: entry.media.id, title: entry.media.title.userPreferred });
                mediaMap2.delete(entry.media.id);
            } else {
                user1Unique.push({ id: entry.media.id, title: entry.media.title.userPreferred });
            }
        });
        
        const user2Unique = [...mediaMap2.entries()].map(([id, title]) => ({ id: id, title: title }));
        
        this.showToast(`✅ اكتملت المقارنة: ${shared.length} أنمي مشترك.`, 'success', 3000);
        
        return { shared, user1Unique, user2Unique };
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
    
    // 📊 إزالة هيكل تحميل واحد
    removeSkeletonLoader() {
        const container = document.getElementById('animeGrid');
        if (!container) return;
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
        if (!progressContainer) {
            progressContainer = document.createElement('div');
            progressContainer.id = 'progress-container';
            // تطبيق الأنماط في DOM لضمان الظهور الفوري قبل تحميل CSS
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
            document.body.appendChild(progressContainer);
        }

        const actualProgressFill = document.getElementById('progress-fill');
        const actualProgressText = document.getElementById('progress-text');

        if (actualProgressFill) {
            actualProgressFill.style.width = `${percent.toFixed(2)}%`;
        }
        
        if (actualProgressText) {
            actualProgressText.textContent = message;
        }
        
        // التأكد من أن الحاوية مرئية عند التحديث
        progressContainer.style.opacity = '1';
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
        const totalRequests = successful + failed;
        const cacheStats = this.advancedCache.getStats();
        
        const summary = `
            ✅ تم تحميل ${successful} أنمي بنجاح
            ❌ فشل تحميل ${failed} أنمي
            ⏱️ وقت التحميل: ${totalTime.toFixed(2)} ثانية
            📊 نسبة نجاح API: ${this.performance.requestsCount > 0 ? ((this.performance.successfulRequests / this.performance.requestsCount) * 100).toFixed(1) : 0}%
            💾 ضربات التخزين المؤقت (Hits): ${cacheStats.totalHits}
            📦 حجم الكاش: ${cacheStats.cacheSizeMB}
        `;

        this.showToast(summary, 'success', 5000);
        
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
            // ⚠️ استخدام Spread Operator لتبسيط إضافة خصائص الاتصال
            connection: navigator.connection ? { ...navigator.connection, effectiveType: navigator.connection.effectiveType } : null
        };

        try {
            const existingMetrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
            existingLogs.push(metrics);
            localStorage.setItem('performance_metrics', JSON.stringify(existingMetrics.slice(-50)));
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
                    ${anime.nextAiringEpisode ? `<div class="anime-next-episode">حلقة ${anime.nextAiringEpisode.episode} قريباً!</div>` : ''}
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

        container.appendChild(card);
        
        this.updateFavoriteButton(anime.id); 
        return card;
    }

    // 👇 دالة مساعدة لحفظ بيانات الأنمي قبل الانتقال (تم تعديلها)
    storeAnimeData(animeId) {
        const anime = this.currentAnimeList.find(a => a.id === animeId);
        if (anime) {
             // 1. التخزين المؤقت لبيانات الأنمي في sessionStorage (للوصول السريع في الصفحة التالية)
             sessionStorage.setItem('currentAnime', JSON.stringify(anime));
             
             // 2. حفظ ID الأنمي بشكل دائم في localStorage
             localStorage.setItem('lastAnimeId', animeId.toString());
             
             // 3. تخزين صورة الأنمي (إذا لزم الأمر لـ watch.html)
             localStorage.setItem("selectedAnimeImg", anime.coverImage?.large || '');

             // 4. حفظ آخر أنمي تمت مشاهدته/الضغط عليه
             localStorage.setItem('lastViewedAnime', JSON.stringify({
                id: anime.id,
                title: anime.title.userPreferred,
                timestamp: Date.now()
            }));

        } else {
             this.showToast('تعذر العثور على بيانات الأنمي لتخزينها!', 'error');
        }
    }


    // ❤️ تبديل المفضلة
    toggleFavorite(animeId) {
        const favorites = JSON.parse(localStorage.getItem('favorite_anime') || '[]');
        const index = favorites.indexOf(animeId);
        
        if (index > -1) {
            favorites.splice(index, 1); 
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
        const anime = this.currentAnimeList.find(a => a.id === animeId);
        if (!anime) return;

        const title = anime.title.userPreferred;
        const url = anime.siteUrl || `https://anilist.co/anime/${animeId}`; // ⚠️ استخدام رابط الموقع الرسمي إن وجد

        if (navigator.share) {
            navigator.share({
                title: title,
                text: `شاهد ${title} على AniList`,
                url: url
            });
        } else {
            navigator.clipboard.writeText(url).then(() => {
                this.showToast('تم نسخ الرابط إلى الحافظة', 'success');
            });
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

        const filtered = this.currentAnimeList.filter(anime => {
            const title = anime.title.userPreferred || anime.title.romaji || '';
            const englishTitle = anime.title.english || '';
            const nativeTitle = anime.title.native || '';
            const description = anime.description || '';
            const genres = anime.genres || [];
            const searchLower = searchTerm.toLowerCase();

            return (
                title.toLowerCase().includes(searchLower) ||
                englishTitle.toLowerCase().includes(searchLower) ||
                nativeTitle.toLowerCase().includes(searchLower) ||
                description.toLowerCase().includes(searchLower) ||
                genres.some(genre => genre.toLowerCase().includes(searchLower))
            );
        });

        this.displayAnime(filtered);
        this.showSearchResults(filtered.length, searchTerm);
    }

    // 📊 عرض نتائج البحث
    showSearchResults(count, term) {
        let resultsInfo = document.getElementById('search-results-info');
        if (!resultsInfo) {
            resultsInfo = document.createElement('div');
            resultsInfo.id = 'search-results-info';
            resultsInfo.style.cssText = `
                padding: 10px;
                text-align: center;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                margin: 10px auto;
                max-width: 800px;
            `;
            const searchContainer = document.querySelector('.search-container') || document.body;
            if (searchContainer) { 
                searchContainer.insertBefore(resultsInfo, searchContainer.firstChild); 
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
            filtered = filtered.filter(anime => 
                (anime.averageScore ?? 0) >= filters.minScore * 10
            );
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
                    </div>
                </div>
            `;
            
            if (!document.querySelector('style#loader-styles')) {
                const style = document.createElement('style');
                style.id = 'loader-styles';
                style.textContent = `
                    .loader-spinner {
                        border: 4px solid rgba(255, 255, 255, 0.3);
                        border-top: 4px solid #00ff88;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        animation: spin 1s linear infinite;
                        margin-bottom: 15px;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .loader-text {
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    .loader-stats {
                        font-size: 12px;
                        color: #888;
                    }
                `;
                document.head.appendChild(style);
            }
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
            userMessage = `❌ حدث خطأ: ${error.message}`;
        }
        
        this.showError(userMessage);
    }

    // 🎪 عرض الأنمي
    displayAnime(animeList) {
        const container = document.getElementById('animeGrid');
        if (!container) return; 
        
        container.innerHTML = '';
        this.removeAllSkeletonLoaders(); // التأكد من إزالة جميع الهياكل

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
            this.createAnimeCard(anime);
        });

        if (this.uiSettings.animations) {
            this.addScrollAnimations();
        }
        
        // 💡 إضافة: عرض التوصيات بعد العرض الرئيسي إذا كانت متاحة
        const recommendations = this.getPersonalizedRecommendations();
        if (recommendations.length > 0) {
            this.showToast(`✨ توصيات مخصصة لك: ${recommendations.map(a => a.title.userPreferred).join(', ')}`, 'info', 8000);
            // يمكنك إنشاء قسم إضافي لعرض التوصيات هنا
        }
    }

    // ✨ إضافة تأثيرات التمرير
    addScrollAnimations() {
        const animeCards = document.querySelectorAll('.anime-card:not(.skeleton)');
        
        // ⚠️ تحسين: استخدام دالة Observer واحدة
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
        }
        
        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    this.scrollObserver.unobserve(entry.target);
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
            this.scrollObserver.observe(card);
        });
    }

    // 🔔 إظهار الإشعارات المتقدمة
    showToast(message, type = 'success', duration = 3000) {
        const toastContainerId = 'toast-container';
        let toastContainer = document.getElementById(toastContainerId);
        
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = toastContainerId;
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

        toastContainer.appendChild(toast);

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
        
        if(container) container.innerHTML = '';
        this.removeAllSkeletonLoaders(); // إزالة أي هياكل عند الخطأ

        if(container) {
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
        }
        
        this.showLoadingState(false);
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
        
        document.documentElement.setAttribute('data-theme', this.uiSettings.theme);
        document.documentElement.setAttribute('lang', this.uiSettings.language);
        document.documentElement.setAttribute('dir', this.uiSettings.language === 'ar' ? 'rtl' : 'ltr');
        this.adjustSettingsBasedOnConnection(); 
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
        this.uiSettings.theme = this.uiSettings.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.uiSettings.theme);
        this.saveUISettings();
        this.showToast(`تم التبديل إلى السمة ${this.uiSettings.theme === 'dark' ? 'الداكنة' : 'الفاتحة'}`, 'success');
    }

    // 🌐 تبديل اللغة
    toggleLanguage() {
        this.uiSettings.language = this.uiSettings.language === 'ar' ? 'en' : 'ar';
        document.documentElement.setAttribute('lang', this.uiSettings.language);
        document.documentElement.setAttribute('dir', this.uiSettings.language === 'ar' ? 'rtl' : 'ltr');
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
            localStorage.setItem('cached_user_list', JSON.stringify(userList));
            this.showToast('✅ اكتملت المزامنة بنجاح!', 'success');
        } else {
             this.showToast('❌ فشل المزامنة. تأكد من إعدادات حسابك.', 'error');
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
                totalUrls: this.animeUrls.length 
            },
            ui: this.uiSettings
        };
    }
    
    // 💡 إضافة: دالة لإدارة بيانات المستخدم بعد تسجيل الدخول (محاكاة)
    handleUserLogin(username, token) {
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
        if (confirm('هل أنت متأكد من رغبتك في مسح جميع البيانات المخزنة (التخزين المؤقت، الإعدادات، المفضلة)؟')) {
            localStorage.clear();
            sessionStorage.clear();
            
            // 💡 تنظيف Cache Storage لوضع عدم الاتصال
            if ('caches' in window) {
                caches.delete(this.advancedCache.cacheName);
            }
            
            // إعادة إنشاء الكائن Cache
            this.advancedCache = new AdvancedCache();
            this.currentAnimeList = [];
            this.loadingState.currentIndex = 0;
            this.currentUser.isLoggedIn = false;
            this.currentUser.username = null;
            this.currentUser.lists = null;
            this.showToast('تم مسح جميع البيانات بنجاح', 'success');
            setTimeout(() => location.reload(), 1000); 
        }
    }

    // 📤 تصدير البيانات
    exportData() {
        const exportData = {
            animeList_Current: this.currentAnimeList.map(a => ({ id: a.id, title: a.title.userPreferred })), 
            favorites: JSON.parse(localStorage.getItem('favorite_anime') || '[]'),
            settings: this.uiSettings,
            performance: this.getSystemStats(),
            errorLogs: JSON.parse(localStorage.getItem('error_logs') || '[]'), // ⚠️ تصدير سجلات الأخطاء
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

    // 🏠 معالجة التحميل الأولي (Stale-While-Revalidate - SWR)
    handleInitialLoad() {
        const cachedAnime = this.advancedCache.get('current_anime_list');
        const animeIds = this.extractAnimeIds();
        
        // 💡 تحميل قائمة المستخدم المخزنة
        const cachedUserList = localStorage.getItem('cached_user_list');
        if (cachedUserList) {
             this.currentUser.lists = JSON.parse(cachedUserList);
        }
        
        if (this.currentUser.username) {
            this.currentUser.isLoggedIn = true;
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
            this.loadingState.currentIndex = animeIds.findIndex(id => !fetchedIds.has(id)); 
            if (this.loadingState.currentIndex === -1) {
                this.loadingState.currentIndex = animeIds.length;
                this.loadingState.allLoaded = true;
            } else {
                 // إذا كان هناك عناصر مفقودة، نبدأ من عندها
                const missingIndex = this.loadingState.currentIndex;
                this.loadingState.currentIndex = missingIndex; 
            }
            
            this.showToast('⚡ تم التحميل من التخزين المؤقت (Cache) - جارٍ التحقق من التحديثات', 'info', 2000);
            
            // ⚠️ تطبيق SWR: جلب البيانات المتبقية أو إعادة جلبها في الخلفية
            setTimeout(() => {
                this.fetchAnimeData(); 
            }, 100); 

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
document.addEventListener('DOMContentLoaded', () => {
    // إنشاء نسخة عالمية من المدير
    window.aniListManager = new AniListManager();
    
    // بدء جلب البيانات أو تحميلها من الكاش
    window.aniListManager.start();

    // ⚠️ إضافة الأنماط الأساسية لضمان عمل التحسينات البصرية
    const additionalStyles = `
        /* شريط التقدم */
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

        /* الإشعارات المتقدمة */
        .advanced-toast {
            position: relative; /* تغيير إلى relative لتناسب flexbox الأب */
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            border-left: 4px solid #00ff88;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            max-width: 400px;
            backdrop-filter: blur(10px);
            transform: translateX(400px);
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0.95;
            margin-bottom: 10px;
        }
        
        #toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 10000;
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
            justify-content: space-between;
        }
        
        .toast-message {
            flex-grow: 1;
        }

        .toast-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s ease;
            font-size: 16px;
        }
        
        .toast-close:hover {
            opacity: 1;
        }
        
        .toast-action-btn {
            background: #0099ff;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            transition: background 0.3s ease;
            margin-right: 5px;
        }
        
        .toast-action-btn:hover {
            background: #0077cc;
        }
        
        /* هياكل التحميل (Skeleton Loader) */
        .skeleton {
            animation: skeleton-pulse 1.5s ease-in-out infinite;
            /* ⚠️ إزالة خلفية البطاقة الأصلية مؤقتاً */
            background-color: transparent !important; 
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
        
        /* حالة الفراغ والخطأ */
        .empty-state, .error-state {
            text-align: center;
            padding: 40px 20px;
            color: #888;
            width: 100%;
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
        
        /* تأثيرات البطاقة */
        .anime-image-container {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        }
        
        .anime-image-container img {
             width: 100%;
             height: 300px;
             object-fit: cover;
             display: block;
             transition: transform 0.3s ease;
        }
        
        .anime-card:hover .anime-image-container img {
            transform: scale(1.05);
        }
        
        .anime-card {
            background-color: #1a1a1a;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            cursor: pointer;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .anime-card:hover {
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
            transform: translateY(-5px);
        }
        
        .anime-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.4) 0%,
                transparent 50%,
                rgba(0, 0, 0, 0.8) 100%
            );
            opacity: 1; /* تغيير الافتراضي إلى 1 */
            transition: background 0.3s ease;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
        }
        
        .anime-card:hover .anime-overlay {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.2) 0%,
                transparent 50%,
                rgba(0, 0, 0, 0.6) 100%
            );
        }
        
        .anime-actions {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 5px;
            opacity: 0; /* إخفاء الأزرار في الوضع العادي */
            transition: opacity 0.3s ease;
        }
        
        .anime-card:hover .anime-actions {
            opacity: 1; /* إظهار الأزرار عند التحويم */
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
        
        .anime-rating {
            position: static; /* تغيير الموضع ليكون داخل flow الـ overlay */
            background: rgba(0, 0, 0, 0.7);
            color: gold;
            padding: 2px 8px;
            border-radius: 5px;
            font-weight: bold;
            align-self: flex-start;
        }
        
        .anime-badge {
            align-self: flex-start;
            padding: 2px 8px;
            border-radius: 5px;
            font-size: 10px;
            font-weight: bold;
            margin-top: 5px;
        }
        
        .anime-badge.releasing { background: #00ff88; color: black; }
        .anime-badge.finished { background: #0099ff; color: white; }
        .anime-badge.not_yet_released { background: #9900ff; color: white; }
        .anime-badge.cancelled { background: #ff4757; color: white; }
        .anime-badge.hiatus { background: #ffa502; color: black; }
        
        .anime-year {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 2px 8px;
            border-radius: 5px;
            font-size: 12px;
        }
        
        .anime-next-episode {
            position: absolute;
            top: 40px;
            left: 10px;
            background: #ff4757;
            color: white;
            padding: 2px 8px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: bold;
            animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(255, 71, 87, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0); }
        }

        .anime-episodes {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 2px 8px;
            border-radius: 5px;
            font-size: 12px;
        }
        
        .anime-info {
            padding: 10px;
        }
        
        .anime-title {
            font-size: 16px;
            margin: 0 0 5px 0;
            color: white;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        
        .anime-genres {
            font-size: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
        
        .genre-tag {
            background: rgba(0, 255, 136, 0.2);
            color: #00ff88;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 11px;
            white-space: nowrap;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
});

// 🚀 تصدير الكلاس للاستخدام العالمي
window.AniListManager = AniListManager;
