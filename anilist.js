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

// 🚀 نظام التخزين المؤقت المتقدم (Enterprise Level)
class AdvancedCache {
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
                
                // تحديث sessionStorage للوصول المستقبلي
                sessionStorage.setItem(`session_${key}`, JSON.stringify(cacheItem.data));
                this.updateMetrics('hit', key, 'local');
                
                return cacheItem.data;
            }
            
            this.updateMetrics('miss', key);
            return null;
        } catch (error) {
            console.warn('⚠️ تعذر تحميل التخزين المؤقت:', error);
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
                this.delete(key.replace('cache_', ''));
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
        const stats = {
            totalHits: 0,
            totalMisses: 0,
            totalWrites: 0,
            cacheSize: 0
        };

        this.performanceMetrics.forEach(metric => {
            if (metric.type === 'hit') stats.totalHits++;
            if (metric.type === 'miss') stats.totalMisses++;
            if (metric.type === 'write') stats.totalWrites++;
            stats.cacheSize += metric.size || 0;
        });

        return stats;
    }
}

// 🎯 النظام الرئيسي المحسّن (Enterprise Level)
class AniListManager {
    constructor() {
        this.ANILIST_API = 'https://graphql.anilist.co';
        this.advancedCache = new AdvancedCache();
        this.currentAnimeList = [];
        this.animeUrls = ANIME_URLS_LIST;
        
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
            imageQuality: 'high'
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
        // مراقبة أداء الشبكة
        if ('connection' in navigator) {
            navigator.connection.addEventListener('change', () => {
                this.adjustSettingsBasedOnConnection();
            });
        }

        // تتبع وقت التحميل
        this.performance.startTime = performance.now();
    }

    // 🌐 ضبط الإعدادات بناءً على سرعة الاتصال
    adjustSettingsBasedOnConnection() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            if (connection.saveData || connection.effectiveType === 'slow-2g') {
                this.BATCH_SIZE = 2;
                this.uiSettings.imageQuality = 'low';
                this.uiSettings.animations = false;
            } else if (connection.effectiveType.includes('2g')) {
                this.BATCH_SIZE = 3;
                this.uiSettings.imageQuality = 'medium';
            } else {
                this.BATCH_SIZE = 4;
                this.uiSettings.imageQuality = 'high';
            }
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
            // عرض مؤشر تقدم أثناء الانتظار
            this.showProgressIndicator();
            setTimeout(() => {
                this.hideProgressIndicator();
                resolve();
            }, ms);
        });
    }

    // 📊 عرض مؤشر التقدم
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
            document.body.appendChild(indicator);

            // إضافة أنيميشن CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes progressPulse {
                    0% { transform: scaleX(0); opacity: 1; }
                    50% { transform: scaleX(0.5); opacity: 0.7; }
                    100% { transform: scaleX(1); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // 📊 إخفاء مؤشر التقدم
    hideProgressIndicator() {
        const indicator = document.getElementById('progress-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // 🔍 استخراج معرفات الأنمي
    extractAnimeIds() {
        return this.animeUrls.map(url => {
            const match = url.match(/anime\/(\d+)|manga\/(\d+)/); 
            return match ? parseInt(match[1] || match[2]) : null; 
        }).filter(id => id !== null);
    }

    // 📝 GraphQL Query متقدم
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

    // 🚀 دالة الجلب المتقدمة مع إعادة المحاولة الذكية
    async fetchAnime(id) {
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

                if (response.status === 429) {
                    const retryAfter = response.headers.get('Retry-After') || 60;
                    this.showToast(`⏳ تجاوز حد الطلبات، إعادة المحاولة بعد ${retryAfter} ثانية`, 'warning');
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
                
                if (result.data && result.data.Media) {
                    const anime = result.data.Media;
                    
                    // حفظ في التخزين المؤقت
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
                    const backoffDelay = Math.pow(2, this.MAX_RETRIES - retries) * 1000;
                    this.showToast(`🔄 إعادة المحاولة ${this.MAX_RETRIES - retries}/${this.MAX_RETRIES}`, 'info');
                    await this.delay(backoffDelay);
                }
            }
        }

        this.performance.failedRequests++;
        this.logError('FetchAnime', lastError);
        throw new Error(`فشل جلب البيانات بعد ${this.MAX_RETRIES} محاولات: ${lastError.message}`);
    }

    // 🎯 جلب البيانات مع التقدم المتقدم
    async fetchAnimeData() {
        if (this.loadingState.isLoading) {
            this.showToast('جاري التحميل بالفعل...', 'info');
            return;
        }

        this.loadingState.isLoading = true;
        this.performance.startTime = performance.now();
        
        const animeIds = this.extractAnimeIds();
        
        try {
            this.showLoadingState(true);
            this.updateProgress(0, 'بدء التحميل...');

            if (this.loadingState.currentIndex === 0) {
                // مسح الشبكة وإضافة هياكل التحميل عند البدء لأول مرة
                const animeGrid = document.getElementById('animeGrid');
                if(animeGrid) {
                    animeGrid.innerHTML = this.createSkeletonLoader(this.BATCH_SIZE);
                }
            }

            const totalIds = animeIds.length;
            let successfulFetches = 0;
            let failedFetches = 0;
            const totalBatches = Math.ceil(totalIds / this.BATCH_SIZE);


            for (let i = this.loadingState.currentIndex; i < totalIds; i += this.BATCH_SIZE) {
                const batchIds = animeIds.slice(i, i + this.BATCH_SIZE);
                const currentBatch = Math.floor(i / this.BATCH_SIZE) + 1;
                
                // تحديث شريط التقدم بالرسالة المطلوبة
                this.updateProgress(
                    (i / totalIds) * 100,
                    `جاري تحميل الدفعة ${currentBatch} من ${totalBatches}`
                );

                // معالجة الدفعة
                const batchPromises = batchIds.map(id => this.fetchAnime(id));
                const batchResults = await Promise.allSettled(batchPromises);

                // معالجة النتائج
                batchResults.forEach((result, index) => {
                    if (result.status === 'fulfilled' && result.value) {
                        this.currentAnimeList.push(result.value);
                        this.createAnimeCard(result.value);
                        successfulFetches++;
                    } else {
                        failedFetches++;
                        console.error(`فشل تحميل الأنمي ${batchIds[index]}:`, result.reason);
                    }
                });

                this.loadingState.currentIndex = i + this.BATCH_SIZE;
                this.loadingState.progress = (this.loadingState.currentIndex / totalIds) * 100;

                // تأخير بين الدفعات مع التقدم
                if (this.loadingState.currentIndex < totalIds) {
                    await this.delay(this.DELAY_MS);
                }
            }

            // الانتهاء من التحميل
            this.loadingState.allLoaded = true;
            this.loadingState.progress = 100;

            // تحديث الشريط للمرة الأخيرة
            this.updateProgress(100, 'اكتمل التحميل بنجاح!'); 

            // إظهار إحصائيات الأداء
            this.showPerformanceSummary(successfulFetches, failedFetches);

            // حفظ القائمة الكاملة بعد التحميل
            this.advancedCache.set('current_anime_list', this.currentAnimeList, { source: 'full_fetch' });
            
            // تطبيق الرسوم المتحركة
            if (this.uiSettings.animations) {
                this.addScrollAnimations();
            }

        } catch (error) {
            this.handleDataFetchError(error);
        } finally {
            this.loadingState.isLoading = false;
            this.showLoadingState(false);
            // 🛑 إخفاء شريط التقدم بعد الانتهاء
            setTimeout(() => this.hideProgressBar(), 1000); 
        }
    }

    // 📊 إنشاء هيكل التحميل
    createSkeletonLoader(count) {
        let skeletonHTML = '';
        for (let i = 0; i < count; i++) {
            skeletonHTML += `
                <div class="anime-card skeleton">
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
        let progressBar = document.getElementById('progress-bar');
        let progressText = document.getElementById('progress-text');
        const progressFill = document.getElementById('progress-fill');
        
        if (!progressBar) {
            const progressContainer = document.createElement('div');
            progressContainer.id = 'progress-container';
            progressContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: rgba(0, 0, 0, 0.9);
                padding: 10px;
                z-index: 9999;
                backdrop-filter: blur(10px);
                transition: opacity 0.3s ease; /* إضافة انتقال للإخفاء */
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

            const newProgressFill = document.createElement('div');
            newProgressFill.id = 'progress-fill';
            newProgressFill.style.cssText = `
                height: 100%;
                background: linear-gradient(90deg, #00ff88, #0099ff);
                transition: width 0.3s ease;
                width: 0%;
            `;

            progressText = document.createElement('div');
            progressText.id = 'progress-text';
            progressText.style.cssText = `
                color: white;
                font-size: 12px;
                text-align: center;
                margin-top: 5px;
            `;

            progressBar.appendChild(newProgressFill);
            progressContainer.appendChild(progressBar);
            progressContainer.appendChild(progressText);
            document.body.appendChild(progressContainer);
        }

        // تحديث التقدم والنص
        document.getElementById('progress-fill').style.width = `${percent}%`;
        if (progressText) {
            progressText.textContent = message;
        }
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
            ✅ تم تحميل ${successful} أنمي بنجاح
            ❌ فشل تحميل ${failed} أنمي
            ⏱️ وقت التحميل: ${totalTime.toFixed(2)} ثانية
            📊 نسبة النجاح: ${((successful / (successful + failed)) * 100).toFixed(1)}%
            💾 ضربات التخزين المؤقت: ${cacheStats.totalHits}
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
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null
        };

        try {
            const existingMetrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
            existingMetrics.push(metrics);
            // حفظ آخر 50 سجل أداء فقط
            localStorage.setItem('performance_metrics', JSON.stringify(existingLogs.slice(-50)));
        } catch (error) {
            console.warn('تعذر حفظ مؤشرات الأداء:', error);
        }
    }

    // 🎨 إنشاء بطاقة الأنمي المتقدمة (معدلة)
    createAnimeCard(anime) {
        const container = document.getElementById('animeGrid');
        
        // إزالة هيكل التحميل إذا كان موجوداً
        const skeletons = container.querySelectorAll('.skeleton');
        if (skeletons.length > 0) {
            // إزالة هيكل واحد فقط
            skeletons[0].remove();
        }

        const card = document.createElement('div');
        card.className = 'anime-card fade-in';
        card.setAttribute('data-anime-id', anime.id);
        card.setAttribute('data-status', anime.status);
        
        const title = anime.title.userPreferred || anime.title.romaji || 'عنوان غير متوفر';
        const score = anime.averageScore ? (anime.averageScore / 10).toFixed(1) : 'N/A';
        const year = anime.seasonYear || 'N/A';
        const episodes = anime.episodes || '?';
        
        // تحسين جودة الصورة بناءً على الإعدادات
        let coverImage = anime.coverImage?.extraLarge || anime.coverImage?.large;
        if (this.uiSettings.imageQuality === 'low') {
            coverImage = anime.coverImage?.large;
        }
        
        // 🎯 منطق تحديد رابط المشاهدة/السيرفر
        const dataFile = this.ANIME_DATA_FILES.get(anime.id);
        
        // إذا كان هناك ملف بيانات مخصص، نذهب إلى صفحة السيرفرات مباشرة
        // وإلا، نذهب إلى صفحة التفاصيل القياسية (anime.html)
        const watchLink = dataFile 
            ? `servers.html?datafile=${dataFile}&animeId=${anime.id}` 
            : `anime.html?id=${anime.id}`; 
            
        // رابط الصفحة التفصيلية (للنقر على البطاقة)
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

        // عند النقر على البطاقة بالكامل (للذهاب لصفحة التفاصيل)
        card.addEventListener('click', () => {
            // حفظ بيانات الأنمي
            this.storeAnimeData(anime.id);
            // التوجيه إلى صفحة التفاصيل (anime.html)
            window.location.href = detailsLink;
        });

        container.appendChild(card);
        this.updateFavoriteButton(anime.id); // تحديث حالة زر المفضلة
        return card;
    }

    // 👇 دالة مساعدة لحفظ بيانات الأنمي قبل الانتقال (تم تعديلها)
    storeAnimeData(animeId) {
        const anime = this.currentAnimeList.find(a => a.id === animeId);
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

        // تأثير انتقال سلس
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.3s ease';

        // التوجيه إلى صفحة التفاصيل القياسية (anime.html)
        setTimeout(() => {
            window.location.href = `anime.html?id=${anime.id}`;
        }, 300);
    }

    // 🔍 البحث المتقدم
    searchAnime(searchTerm) {
        if (!searchTerm.trim()) {
            this.displayAnime(this.currentAnimeList);
            return;
        }

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

        this.displayAnime(filtered);
        
        // إظهار نتائج البحث
        this.showSearchResults(filtered.length, searchTerm);
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
            document.querySelector('.search-container').appendChild(newResultsInfo);
        }

        const element = document.getElementById('search-results-info');
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

        this.displayAnime(filtered);
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
        if (loading) {
            loading.style.display = show ? 'block' : 'none';
            
            if (show) {
                loading.innerHTML = `
                    <div class="advanced-loader">
                        <div class="loader-spinner"></div>
                        <div class="loader-text">جاري تحميل أحدث الأنميات...</div>
                        <div class="loader-stats" id="loader-stats"></div>
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
        } else if (error.message.includes('Network') || error.message.includes('fetch')) {
            userMessage = '🌐 مشكلة في الاتصال بالإنترنت. تحقق من اتصالك وحاول مرة أخرى.';
        } else if (error.message.includes('timeout')) {
            userMessage = '⏰ انتهت مهلة الطلب. جارٍ إعادة المحاولة...';
        } else {
            userMessage = `❌ حدث خطأ: ${error.message}`;
        }
        
        this.showError(userMessage);
    }

    // 🎪 عرض الأنمي
    displayAnime(animeList) {
        const container = document.getElementById('animeGrid');
        
        // إزالة جميع الأنماط السابقة
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

        animeList.forEach(anime => {
            this.createAnimeCard(anime);
        });

        if (this.uiSettings.animations) {
            this.addScrollAnimations();
        }
    }

    // ✨ إضافة تأثيرات التمرير
    addScrollAnimations() {
        const animeCards = document.querySelectorAll('.anime-card:not(.skeleton)');
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

        document.body.appendChild(toast);

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
        container.innerHTML = '';

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
                cached: this.advancedCache.performanceMetrics.size
            },
            ui: this.uiSettings
        };
    }

    // 🗑️ تنظيف البيانات
    clearData() {
        if (confirm('هل أنت متأكد من رغبتك في مسح جميع البيانات المخزنة؟')) {
            localStorage.clear();
            sessionStorage.clear();
            // إعادة إنشاء الكائن Cache
            this.advancedCache = new AdvancedCache();
            this.currentAnimeList = [];
            this.loadingState.currentIndex = 0;
            this.showToast('تم مسح جميع البيانات بنجاح', 'success');
            setTimeout(() => location.reload(), 1000);
        }
    }

    // 📤 تصدير البيانات
    exportData() {
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
        window.aniListManager.currentAnimeList = cachedAnime;
        window.aniListManager.displayAnime(cachedAnime);
    }
    
    // بدء جلب البيانات الحديثة
    setTimeout(() => {
        window.aniListManager.start();
    }, 1000);

    // إضافة أنماط CSS الإضافية
    const additionalStyles = `
        /* إضافة نمط progress-container للتأكد من ظهوره أعلى الصفحة */
        #progress-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.9);
            padding: 10px;
            z-index: 9999;
            backdrop-filter: blur(10px);
            transition: opacity 0.3s ease; /* هام للإخفاء السلس */
        }
        
        #progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #00ff88, #0099ff);
            transition: width 0.3s ease;
            width: 0%;
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
        
        .btn-favorite, .btn-share, .btn-watch-link { /* تم إضافة .btn-watch-link */
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
            text-decoration: none; /* مهم للروابط */
            font-size: 14px; /* لتقليل حجم أيقونة التشغيل */
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
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
});

// 🚀 تصدير الكلاس للاستخدام العالمي
window.AniListManager = AniListManager;
