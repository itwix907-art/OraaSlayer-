// main.js - التهيئة الرئيسية وربط الأحداث والمزامنة مع Firebase (الإصدار المُصحح والمُحسن)

// ------------------------------------------------------------------
// 🟢🟢🟢 0. دمج البيانات المركزية (لحل مشكلة فقدان البيانات المركزية) 🟢🟢🟢
// ------------------------------------------------------------------

// 📋 مصدر الحقيقة: قائمة الأنميات الأساسية
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

// 🎯 قاعدة بيانات السيرفرات الوصفية (Metadata) (تم إضافتها هنا لمركزية البيانات)
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

/**
 * @brief يجد بيانات أنمي محدد بناءً على الـ ID.
 * @param {string} id - معرّف الأنمي.
 * @returns {Object|null} بيانات الأنمي الكاملة أو null.
 */
function getAnimeDataById(id) {
    if (!id) return null;
    return ANIME_INDEX_DATA.find(anime => anime.id === id) || null;
}

// 🟢 تصدير البيانات والدوال لتكون متاحة عالميًا لجميع وحدات JS
window.ANIME_INDEX_DATA = ANIME_INDEX_DATA;
window.SERVER_METADATA = SERVER_METADATA;
window.getAnimeDataById = getAnimeDataById;


// ------------------------------------------------------------------
// 1. تهيئة Firebase SDKs (محدثة ومحسنة - استخدام Firestore Lite)
// ------------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js"; // 🟢 إضافة logEvent
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
    getFirestore, doc, getDoc, setDoc, updateDoc,
    onSnapshot, collection, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore-lite.js"; // 🟢 استخدام Firestore-Lite لتحسين الأداء
// ملاحظة: تم تعديل المسار لاستخدام firebase-firestore-lite.js لتقليل حجم الحزمة

const firebaseConfig = {
    apiKey: "AIzaSyBDMFcCvthKNkHUrEbgYY1Uc80KTPpS01M",
    authDomain: "oraa-slayer-anime.firebaseapp.com",
    projectId: "oraa-slayer-anime",
    storageBucket: "oraa-slayer-anime.firebasestorage.app",
    messagingSenderId: "426607460785",
    appId: "1:426607460785:web:c8d9844253c9111ad3bd90",
    measurementId: "G-VNHP64HXD5"
};

// 🟢 تهيئة محسنة مع معالجة الأخطاء
let app, analytics, auth, firestore;
try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
    firestore = getFirestore(app);
    console.log('✅ Firebase initialized successfully (Using Firestore Lite)');
} catch (error) {
    console.error('❌ Firebase initialization failed:', error);
}

// ------------------------------------------------------------------
// 2. طبقة البيانات المتقدمة المحسنة (Enhanced Data Layer - Singleton Pattern)
// ------------------------------------------------------------------

class DataLayer {
    static instance = null; // 🟢 نمط Singleton
    
    constructor(auth, firestore) {
        if (DataLayer.instance) {
            return DataLayer.instance;
        }

        this.auth = auth;
        this.firestore = firestore;
        this.currentUser = null;
        this.userDocRef = null;
        this.favoritesListener = null;
        this.USERS_STORAGE_KEY = 'oraaAnimeUsers';
        this.settingsCache = new Map(); // 🟢 كاش ذكي للإعدادات

        DataLayer.instance = this;
    }

    /**
     * @brief تهيئة المستخدم مع معالجة محسنة للأخطاء
     */
    async initializeUser(user) {
        this.currentUser = user;
        this.userDocRef = user ? doc(this.firestore, "users", user.uid) : null;
        
        // 🟢 تنظيف الموارد قبل التهيئة الجديدة
        this.cleanupListeners(); 

        if (user) {
            // 🟢 استخدام Promise.allSettled لضمان استمرار جميع المهام حتى لو فشلت إحداها
            const results = await Promise.allSettled([ 
                this.ensureUserDocumentExists(user), // 🟢 ضمان وجود المستند قبل المزامنة
                this.syncSettingsFromFirebase(),
                this.setupFavoritesListener()
            ]);
            
            if (results.every(res => res.status === 'fulfilled')) {
                console.log('✅ User initialized successfully (All tasks fulfilled)');
            } else {
                console.warn('⚠️ User initialization completed with some failures:', results);
            }
            logEvent(analytics, 'user_login', { method: user.providerId }); // 🟢 تسجيل الحدث
        } else {
            // 🟢 تطبيق إعدادات الوضع الزائر
            this.applySettingToUI('premiumDarkToggle', localStorage.getItem('premiumDarkToggle') || 'false');
            console.log('User logged out. Listeners cleaned up.');
        }
    }
    
    /**
     * @brief ضمان وجود مستند المستخدم
     */
    async ensureUserDocumentExists(user) {
        if (!this.userDocRef) return;
        
        try {
            const docSnap = await getDoc(this.userDocRef);
            if (!docSnap.exists()) {
                // 🟢 إنشاء مستند جديد بالإعدادات الافتراضية
                await setDoc(this.userDocRef, {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString(),
                    favorites: [],
                    settings: {
                        premiumDarkToggle: 'false',
                        smartStreamToggle: 'true'
                    }
                }, { merge: true }); // 🟢 استخدام merge: true لضمان الأمان
                console.log('✅ New user document created.');
            } else {
                // 🟢 تحديث وقت آخر تسجيل دخول فقط
                await updateDoc(this.userDocRef, {
                    lastLogin: new Date().toISOString()
                });
            }
        } catch (error) {
            console.error('❌ Error ensuring user document exists:', error);
            this.showSmartToast('❌ فشل في تهيئة مستند المستخدم', 'error');
            throw error; // إعادة رمي الخطأ للـ Promise.allSettled
        }
    }


    /**
     * @brief مزامنة الإعدادات مع كاش محسن
     */
    async syncSettingsFromFirebase() {
        if (!this.userDocRef) return;

        try {
            const docSnap = await getDoc(this.userDocRef);
            if (docSnap.exists() && docSnap.data().settings) {
                const settings = docSnap.data().settings;

                // 🟢 تطبيق محسن مع الكاش
                let settingsUpdated = false;
                Object.keys(settings).forEach(key => {
                    const value = settings[key];
                    const localValue = localStorage.getItem(key);
                    
                    if (localValue !== value) {
                        localStorage.setItem(key, value);
                        this.settingsCache.set(key, value);
                        this.applySettingToUI(key, value);
                        settingsUpdated = true;
                    } else if (!this.settingsCache.has(key)) {
                        this.settingsCache.set(key, value);
                        this.applySettingToUI(key, value);
                    }
                });

                if (settingsUpdated) {
                    this.showSmartToast('✨ تم مزامنة الإعدادات من السحابة', 'success');
                } else {
                    console.log('✅ Settings already up-to-date.');
                }
            } else {
                // 🟢 إذا لم يكن هناك إعدادات سحابية، يتم حفظ المحلية
                const localSettings = setupSidebarToggles(true); // إعادة تحميل الإعدادات المحلية
                if (Object.keys(localSettings).length > 0) {
                     await updateDoc(this.userDocRef, {
                        settings: localSettings,
                        lastUpdated: new Date().toISOString()
                    });
                }
            }
        } catch (error) {
            console.error("Firebase sync error:", error);
            this.showSmartToast('⚠️ جاري استخدام الإعدادات المحلية', 'warning');
            throw error;
        }
    }

    /**
     * @brief تطبيق الإعدادات على الواجهة بذكاء
     */
    applySettingToUI(key, value) {
        const toggle = document.getElementById(key);
        const isChecked = value === 'true';
        
        if (toggle) {
            // 🟢 تحديث الواجهة مرة واحدة فقط إذا لزم الأمر
            if (toggle.checked !== isChecked) {
                 toggle.checked = isChecked;
            }
        }
        
        // 🟢 تطبيق تأثيرات فورية حسب الإعداد
        this.applySettingEffects(key, isChecked);
    }

    /**
     * @brief تأثيرات ذكية للإعدادات
     */
    applySettingEffects(key, isEnabled) {
        switch(key) {
            case 'premiumDarkToggle':
                // 🟢 استخدام aria-label لتغيير النص ديناميكياً
                document.body.classList.toggle('premium-dark-mode', isEnabled);
                document.documentElement.setAttribute('data-theme', isEnabled ? 'dark' : 'light');
                break;
            case 'smartStreamToggle':
                // تأثيرات مُسرع البث (إرسال حدث مخصص للمشغل)
                document.body.dispatchEvent(new CustomEvent('smartStreamUpdate', { detail: { isEnabled } }));
                break;
            case 'autoQualityToggle':
                // تأثيرات الجودة التلقائية (إرسال حدث مخصص للمشغل)
                document.body.dispatchEvent(new CustomEvent('autoQualityUpdate', { detail: { isEnabled } }));
                break;
        }
    }

    /**
     * @brief حفظ إعدادات محسن مع كاش
     */
    async saveSetting(key, value) {
        const valueStr = value.toString();
        
        // 🟢 حفظ فوري في الكاش والمحلي وتطبيق الواجهة
        localStorage.setItem(key, valueStr);
        this.settingsCache.set(key, valueStr);
        this.applySettingToUI(key, valueStr);
        
        // 🟢 تسجيل الحدث
        logEvent(analytics, 'setting_changed', { setting_key: key, new_value: valueStr });

        // 🟢 حفظ في Firebase مع معالجة محسنة للأخطاء
        if (this.userDocRef) {
            try {
                await updateDoc(this.userDocRef, {
                    [`settings.${key}`]: valueStr,
                    lastUpdated: new Date().toISOString()
                });
                this.showSmartToast('✅ تم حفظ الإعدادات بنجاح', 'success');
            } catch (error) {
                console.error("Firebase save error:", error);
                this.showSmartToast('❌ فشل حفظ الإعدادات، جاري المحاولة...', 'error');
                // 🟢 إعادة محاولة ذكية (باستخدام Debounce لضمان عدم ازدحام الطلبات)
                this.retrySaveSettingDebounced(key, value); 
            }
        } else {
            this.showSmartToast('⚠️ تم الحفظ محلياً، سجّل الدخول للمزامنة', 'info');
        }
    }
    
    // 🟢 دالة إعادة محاولة مُحسَّنة ومُخفَّضة
    retrySaveSettingDebounced = debounce(this.retrySaveSetting.bind(this), 5000); 

    /**
     * @brief إعادة محاولة حفظ ذكية
     */
    async retrySaveSetting(key, value) {
        if (this.userDocRef) {
            try {
                await updateDoc(this.userDocRef, {
                    [`settings.${key}`]: value.toString()
                });
                this.showSmartToast('✅ تمت مزامنة الإعدادات المتأخرة', 'success');
            } catch (error) {
                console.error("Retry failed:", error);
                this.showSmartToast('❌ فشل نهائي في مزامنة الإعدادات', 'error');
            }
        }
    }

    /**
     * @brief مراقب المفضلة المحسن
     */
    setupFavoritesListener() {
        if (!this.userDocRef) {
            updateFavoritesCount(0);
            return;
        }

        // 🟢 مراقب فوري مع معالجة محسنة
        this.favoritesListener = onSnapshot(this.userDocRef,
            { includeMetadataChanges: true }, // 🟢 تضمين التغييرات في البيانات الوصفية لتحسين التتبع
            (docSnap) => {
                const source = docSnap.metadata.hasPendingWrites ? "Local" : "Server";
                console.log(`Favorites update source: ${source}`);
                
                if (docSnap.exists()) {
                    const favorites = docSnap.data().favorites || [];
                    updateFavoritesCount(favorites.length);
                    // 🟢 استخدام IndexedDB أو Storage API بدلاً من localStorage لبيانات كبيرة مثل المفضلة لتحسين الأداء (تحديث محلي مؤقت)
                    localStorage.setItem('user_firebase_favorites', JSON.stringify(favorites)); 

                    // 🟢 تحديث ذكي للواجهة
                    this.updateFavoritesUI(favorites);
                } else {
                    updateFavoritesCount(0);
                }
            },
            (error) => {
                console.error("Favorites listener error:", error);
                updateFavoritesCountFromLocalFallback();
                this.showSmartToast('⚠️ فشل اتصال المفضلة، جاري استخدام البيانات المحلية', 'warning');
            }
        );
    }

    /**
     * @brief تحديث واجهة المفضلة
     */
    updateFavoritesUI(favorites) {
        const favoriteIds = new Set(favorites.map(fav => fav.id));
        // 🟢 تحسين الأداء: تحديث العناصر الظاهرة فقط أو باستخدام تفويض الأحداث
        document.querySelectorAll('.anime-card[data-anime-id]').forEach(card => {
            const animeId = card.dataset.animeId;
            const isFavorite = favoriteIds.has(animeId);
            card.classList.toggle('favorited', isFavorite);
        });
        
        // 🟢 إطلاق حدث مخصص لتحديث قائمة المفضلة الرئيسية
        document.body.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: { favorites } }));
    }

    /**
     * @brief تبديل المفضلة مع ذكاء إضافي (تم تصحيح الأخطاء المنطقية هنا)
     */
    async toggleFavorite(animeData) {
        if (!this.userDocRef) {
            this.showSmartToast('🔒 سجّل الدخول لحفظ مفضلتك', 'warning');
            return false;
        }

        const animeRef = this.userDocRef;
        // 🟢 تحسين: قراءة الكاش المحلي (المزامنة) لتقليل القراءة من Firebase قبل التحديث
        const currentFavoritesCache = JSON.parse(localStorage.getItem('user_firebase_favorites') || '[]');
        const isCurrentlyFav = currentFavoritesCache.some(fav => fav.id === animeData.id);
        
        let success = false;
        
        // 🟢 تحسين: التأكد من أن حزمة البيانات التي سيتم إرسالها إلى Firebase تحتوي على حقول محددة
        const dataToSend = {
            id: animeData.id,
            title: animeData.title || animeData.id, // استخدام ID كاحتياطي
            imageUrl: animeData.imageUrl || 'default.jpg',
            // يمكن إضافة المزيد من الحقول الضرورية للمستقبل هنا
        };

        try {
            if (isCurrentlyFav) {
                // 🟢 تصحيح: استخدام بيانات دقيقة للإزالة
                await updateDoc(animeRef, {
                    favorites: arrayRemove(dataToSend)
                });
                this.showSmartToast(`💔 تم إزالة ${animeData.title || ''} من المفضلة`, 'info');
                logEvent(analytics, 'remove_from_favorites', { anime_id: animeData.id }); // 🟢 تسجيل الحدث
                success = false;
            } else {
                // 🟢 تصحيح: استخدام بيانات دقيقة للإضافة
                await updateDoc(animeRef, {
                    favorites: arrayUnion(dataToSend)
                });
                this.showSmartToast(`💖 تمت إضافة ${animeData.title || ''} للمفضلة`, 'success');
                logEvent(analytics, 'add_to_favorites', { anime_id: animeData.id }); // 🟢 تسجيل الحدث
                success = true;
            }
            return success;
        } catch (error) {
            console.error("Toggle favorite error:", error);
            this.showSmartToast('❌ فشل في التحديث. تأكد من أن حجم المستند لا يتجاوز الحد المسموح به.', 'error'); // 🟢 رسالة خطأ مُحسّنة
            return null;
        }
    }

    /**
     * @brief عرض إشعارات ذكية
     */
    showSmartToast(message, type = 'info') {
        if (window.aniListManager && typeof window.aniListManager.showToast === 'function') {
            window.aniListManager.showToast(message, type);
        } else {
            // 🟢 fallback لإشعارات المتصفح
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }

    /**
     * @brief تنظيف المراقبات والموارد
     */
    cleanupListeners() {
        if (this.favoritesListener) {
            this.favoritesListener(); // إيقاف مراقب المفضلة
            this.favoritesListener = null;
            console.log('Favorites listener cleaned up.');
        }
        // 🟢 تنظيف ذاكرة الكاش عند تسجيل الخروج
        if (!this.currentUser) {
            this.settingsCache.clear();
        }
    }
}

const dataLayer = new DataLayer(auth, firestore); // 🟢 تهيئة Singleton

// ------------------------------------------------------------------
// 3. وظائف المساعدة المحسنة (Enhanced Helper Functions)
// ------------------------------------------------------------------

/**
 * @brief تحديث عداد المفضلة مع تأثيرات بصرية
 */
function updateFavoritesCount(count = null) {
    const countElement = document.getElementById('favoritesCount');
    if (!countElement) return;

    const finalCount = count !== null ? count : getLocalFavoritesCount();
    
    // 🟢 تأثيرات بصرية محسنة (استخدام requestAnimationFrame لتجنب مشاكل الأداء)
    requestAnimationFrame(() => {
        if (countElement.textContent !== finalCount.toString()) {
            countElement.textContent = finalCount;
            countElement.classList.add('pulse');
            setTimeout(() => countElement.classList.remove('pulse'), 600);
        }
    });
}

function getLocalFavoritesCount() {
    // 🟢 استخدام المفضلة المزامنة بدلاً من المفضلة المحلية العامة
    const favorites = JSON.parse(localStorage.getItem('user_firebase_favorites') || '[]');
    return favorites.length;
}

function updateFavoritesCountFromLocalFallback() {
    updateFavoritesCount(getLocalFavoritesCount());
}

/**
 * @brief تهيئة التبديلات مع تحسينات الأداء
 * @param {boolean} returnOnly - إذا كانت true، تعيد الإعدادات المحلية دون تهيئة الواجهة
 */
function setupSidebarToggles(returnOnly = false) {
    const toggles = [
        'premiumDarkToggle', 'smartStreamToggle', 'autoDownloadToggle',
        'autoQualityToggle', 'episodeNotificationsToggle', 'dataSaverToggle',
        'hideCompletedToggle', 'autoProgressToggle', 'smartSubsToggle'
    ];
    
    const localSettings = {};

    // 🟢 تهيئة مجمعة للأداء
    toggles.forEach(toggleId => {
        const toggle = document.getElementById(toggleId);
        const savedState = localStorage.getItem(toggleId);
        const isChecked = savedState === 'true';

        // 🟢 التخزين في الكائن للإعادة
        if (savedState !== null) {
            localSettings[toggleId] = savedState;
        } else {
            // 🟢 استخدام الحالة الافتراضية
            localSettings[toggleId] = toggle ? toggle.checked.toString() : 'false'; 
        }

        if (returnOnly) return; // الخروج إذا كان المطلوب هو الإعادة فقط

        if (toggle) {
            // التحميل من الكاش أولاً وتطبيق التأثيرات
            if (savedState !== null) {
                toggle.checked = isChecked;
                dataLayer.applySettingEffects(toggleId, isChecked);
            }
            
            // 🟢 معالجة أحداث محسنة
            toggle.removeEventListener('change', toggleChangeHandler); // 🟢 إزالة المستمع القديم لمنع التكرار
            toggle.addEventListener('change', toggleChangeHandler);
        }
    });
    
    return localSettings;
}

// 🟢 مُستمع حدث مُخفَّض (Debounced) للتبديلات
const toggleChangeHandler = debounce(async (e) => {
    const toggleId = e.target.id;
    const isChecked = e.target.checked;
    await dataLayer.saveSetting(toggleId, isChecked);
}, 300); // تأخير بسيط لتقليل عدد عمليات الحفظ في Firebase

/**
 * @brief دالة تأخير محسنة (Debounce)
 */
function debounce(func, delay, immediate = false) {
    let timeoutId;
    return function(...args) {
        const context = this;
        const later = () => {
            timeoutId = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeoutId;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, delay);
        
        if (callNow) func.apply(context, args);
    };
}

/**
 * @brief دالة تحديد الهوية الفريدة
 */
function generateUniqueId() {
    // 🟢 استخدام الأحدث والأكثر كفاءة لتوليد الهوية
    return crypto.randomUUID ? crypto.randomUUID() : 'id_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

// ------------------------------------------------------------------
// 4. ربط الأحداث الرئيسية المحسن (Enhanced Event Bindings)
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Oraa Slayer...');
    
    // 🟢 تهيئة متقدمة مع تسلسل ذكي
    initializeAppSequentially();
    
    // 🟢 إضافة مُستمع لإدارة الذاكرة عند مغادرة الصفحة
    window.addEventListener('beforeunload', () => {
        dataLayer.cleanupListeners();
    });
});

/**
 * @brief التهيئة المتسلسلة الذكية
 */
async function initializeAppSequentially() {
    try {
        // 1. مراقب المصادقة الذكي
        setupAuthObserver();
        
        // 2. تهيئة واجهة المستخدم الأساسية
        setupBasicUI();
        
        // 3. تهيئة نظام البحث
        setupSearchSystem();
        
        // 4. تهيئة الإعدادات
        setupSidebarToggles();
        
        // 5. تهيئة التحسينات الإضافية
        setupEnhancements();
        
        console.log('✅ All systems initialized successfully');
        
    } catch (error) {
        console.error('❌ Initialization failed:', error);
    }
}

/**
 * @brief مراقب المصادقة المحسن
 */
function setupAuthObserver() {
    onAuthStateChanged(auth, async (user) => {
        // 🟢 تحديث فوري للحالة قبل أي عملية غير متزامنة
        updateUserInterface(user);
        await dataLayer.initializeUser(user);
    });
}

/**
 * @brief تحديث واجهة المستخدم الذكية
 */
function updateUserInterface(user) {
    const elements = {
        profileName: document.getElementById('profileName'),
        userEmail: document.getElementById('userEmail'),
        loginMenuItem: document.getElementById('loginMenuItem'),
        logoutMenuItem: document.getElementById('logoutMenuItem'),
        headerName: document.getElementById('headerName'),
        headerProfile: document.getElementById('headerProfile')
    };

    if (user) {
        const userName = user.displayName || user.email.split('@')[0] || 'مستخدم مميز';
        const userEmail = user.email || 'غير متوفر';
        const userImage = user.photoURL || 'https://i.ibb.co/L5h92d1/user-avatar.png';
        
        // 🟢 تحديث جميع العناصر دفعة واحدة مع التحقق من الوجود
        requestAnimationFrame(() => { // 🟢 لضمان سلاسة تحديث الواجهة
            if (elements.profileName) elements.profileName.textContent = userName;
            if (elements.headerName) elements.headerName.textContent = userName;
            if (elements.userEmail) elements.userEmail.textContent = userEmail;
            if (elements.loginMenuItem) elements.loginMenuItem.style.display = 'none';
            if (elements.logoutMenuItem) elements.logoutMenuItem.style.display = 'block';
            if (elements.headerProfile) elements.headerProfile.src = userImage;
        });
        
        // 🟢 تجنب عرض التوست عند أول تحميل
        if (performance.now() > 2000) { 
             dataLayer.showSmartToast(`🎉 مرحباً بعودتك، ${userName}!`, 'success');
        }
    } else {
        // حالة الزائر
        requestAnimationFrame(() => { // 🟢 لضمان سلاسة تحديث الواجهة
            if (elements.profileName) elements.profileName.textContent = 'زائر';
            if (elements.headerName) elements.headerName.textContent = 'زائر';
            if (elements.userEmail) elements.userEmail.textContent = 'سجّل الدخول';
            if (elements.loginMenuItem) elements.loginMenuItem.style.display = 'block';
            if (elements.logoutMenuItem) elements.logoutMenuItem.style.display = 'none';
            if (elements.headerProfile) elements.headerProfile.src = 'https://i.ibb.co/YRShYmn/avatar.png';
        });
    }
}

/**
 * @brief إعداد واجهة المستخدم الأساسية
 */
function setupBasicUI() {
    // زر العودة للأعلى
    setupScrollToTop();
    
    // القائمة المنسدلة للمستخدم
    setupUserDropdown();
    
    // الشريط الجانبي
    setupSidebar();
    
    // التنقل السفلي
    setupBottomNavigation();
    
    // 🟢 تفويض حدث النقر العام للبطاقات
    setupCardClickDelegation();
    
    // 🟢 إضافة مستمع لزر تسجيل الخروج
    const logoutBtn = document.getElementById('logoutMenuItem');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await signOut(auth);
                dataLayer.showSmartToast('👋 تم تسجيل الخروج بنجاح', 'info');
            } catch (error) {
                console.error('Logout error:', error);
                dataLayer.showSmartToast('❌ فشل تسجيل الخروج', 'error');
            }
        });
    }
}

/**
 * @brief إعداد نظام البحث الذكي
 */
function setupSearchSystem() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        // 🟢 استخدام Debounce مُحسَّن
        const debouncedSearch = debounce((searchValue) => {
            if (window.aniListManager && typeof window.aniListManager.searchAnime === 'function') {
                window.aniListManager.searchAnime(searchValue);
                logEvent(analytics, 'search', { search_term: searchValue }); // 🟢 تسجيل الحدث
            }
        }, 300);

        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            
            // 🟢 تأثيرات بصرية أثناء البحث
            requestAnimationFrame(() => { // 🟢 تحديث بصري سلس
                 if (value.length > 0) {
                    searchInput.classList.add('searching');
                } else {
                    searchInput.classList.remove('searching');
                }
            });
           
            debouncedSearch(value);
        });

        // 🟢 اختصارات لوحة المفاتيح
        searchInput.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') { // دعم MetaKey (Cmd على Mac)
                e.preventDefault();
                searchInput.focus();
            }
        });
    }
}

/**
 * @brief إعداد زر العودة للأعلى
 */
function setupScrollToTop() {
    const toHomeBtn = document.querySelector('.to-home-btn');
    if (toHomeBtn) {
        toHomeBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // 🟢 استخدام مُستمع مُخفَّض ومؤقت (Passive)
        window.addEventListener('scroll', debounce(() => {
            const isVisible = window.scrollY > 400;
            // 🟢 تحديث مرئي في requestAnimationFrame
            requestAnimationFrame(() => { 
                toHomeBtn.style.opacity = isVisible ? '1' : '0';
                toHomeBtn.style.visibility = isVisible ? 'visible' : 'hidden';
                toHomeBtn.style.transform = isVisible ? 'scale(1)' : 'scale(0.8)';
            });
        }, 100), { passive: true });
    }
}

/**
 * @brief إعداد القائمة المنسدلة
 */
function setupUserDropdown() {
    const userInfo = document.getElementById('userInfo');
    const userMenu = document.getElementById('userMenu');
    
    if (userInfo && userMenu) {
        userInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            // 🟢 استخدام aria-expanded لتعزيز إمكانية الوصول
            const isShown = userMenu.classList.toggle('show');
            userInfo.setAttribute('aria-expanded', isShown);
        });

        document.addEventListener('click', (e) => {
            if (!userInfo.contains(e.target)) {
                userMenu.classList.remove('show');
                userInfo.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * @brief إعداد الشريط الجانبي
 */
function setupSidebar() {
    const settingsToggle = document.getElementById('settingsToggle');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    
    [settingsToggle, closeSidebarBtn].forEach(element => {
        if (element) {
            element.addEventListener('click', () => {
                if (window.aniListManager && typeof window.aniListManager.toggleSidebar === 'function') {
                    window.aniListManager.toggleSidebar();
                }
            });
        }
    });
}

/**
 * @brief إعداد التنقل السفلي
 */
function setupBottomNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // 🟢 تأثيرات النقر في requestAnimationFrame
            requestAnimationFrame(() => {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    });
}

/**
 * @brief تفويض أحداث النقر على بطاقة الأنمي
 */
function setupCardClickDelegation() {
    document.body.addEventListener('click', (e) => {
        const card = e.target.closest('.anime-card[data-anime-id]');
        const favoriteBtn = e.target.closest('.favorite-btn');

        if (favoriteBtn) {
            const favCard = favoriteBtn.closest('.anime-card[data-anime-id]');
            if (favCard) {
                e.preventDefault();
                e.stopPropagation();
                
                // 🟢 استخراج البيانات المطلوبة بشكل حكيم
                const animeData = {
                    id: favCard.dataset.animeId,
                    title: favCard.dataset.animeTitle || 'غير معروف',
                    imageUrl: favCard.dataset.animeImage
                    // ... يمكن إضافة المزيد من البيانات الضرورية
                };
                
                dataLayer.toggleFavorite(animeData);
            }
        } else if (card) {
            e.preventDefault();
            e.stopPropagation();
            const animeId = card.dataset.animeId;
            const animeUrl = card.dataset.animeUrl || `anime.html?id=${animeId}`;
            
            // 🟢 توجيه سريع وتوثيق الحدث
            logEvent(analytics, 'view_anime', { anime_id: animeId, source: 'card' });
            window.location.href = animeUrl;
        }
    });
}

/**
 * @brief إعداد التحسينات الإضافية
 */
function setupEnhancements() {
    // 🟢 التحميل المسبق الذكي
    setupSmartPreloading();
    
    // 🟢 إعدادات الأداء
    setupPerformanceOptimizations();
    
    // 🟢 (إضافة: تم تمكين التتبع الأولي لحجم حزمة SDK)
    logEvent(analytics, 'sdk_load_time', { duration_ms: performance.now() });
}

/**
 * @brief التحميل المسبق المحسن
 */
function setupSmartPreloading() {
    // 🟢 استخدام requestIdleCallback أو setTimeout في حال عدم توفره
    const preloadAction = (link) => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'prefetch';
        linkElement.href = link;
        document.head.appendChild(linkElement);
    };

    document.body.addEventListener('mouseover', function(e) {
        const card = e.target.closest('.anime-card');
        if (card && card.dataset.animeId) {
            const animeId = card.dataset.animeId;
            const link = card.dataset.animeUrl || `anime.html?id=${animeId}`;
            
            if (document.head.querySelector(`link[rel="prefetch"][href="${link}"]`)) {
                return; // تجنب الإضافة المتكررة
            }
            
            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(() => preloadAction(link), { timeout: 1000 }); // مهلة قصوى
            } else {
                setTimeout(() => preloadAction(link), 300);
            }
        }
    }, { passive: true });
}

// 🔴🔴🔴 تم إزالة دالة setupSmartCardClicks بالكامل لحل التعارض (القسم 10) 🔴🔴🔴


/**
 * @brief إعدادات تحسين الأداء
 */
function setupPerformanceOptimizations() {
    // 🟢 تقليل استخدام الذاكرة (إعادة التنفيذ الأفضل)
    window.addEventListener('beforeunload', () => {
        dataLayer.cleanupListeners();
    });

    // 🟢 تحميل كسول للصور (استخدام IntersectionObserver فقط)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // 🟢 استخدام مصدر عالي الجودة أو مُحسَّن
                    const highResSrc = img.dataset.src || img.dataset.highResSrc; 
                    if (highResSrc) {
                        img.src = highResSrc;
                        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
                        img.onload = () => { img.classList.add('loaded'); }; // 🟢 تأثير بصري عند التحميل
                        observer.unobserve(img);
                    }
                }
            });
        }, { rootMargin: '0px 0px 200px 0px' }); // 🟢 تحميل مسبق بـ 200px قبل الظهور

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 🟢 Fallback بسيط للمتصفحات القديمة
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// 🟢 تصدير الدوال للاستخدام العالمي
window.oraaDataLayer = dataLayer;
window.oraaHelpers = {
    debounce,
    updateFavoritesCount,
    generateUniqueId,
    updateUserInterface // 🟢 تصدير لتحديث الواجهة من أي مكان
};

console.log('🎯 Oraa Slayer Main.js loaded successfully (MAX Performance & Integration)');
