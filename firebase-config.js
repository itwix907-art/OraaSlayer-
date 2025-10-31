// 🟢 تحديث: استخدام إصدار موحد ومتقدم لـ Firebase SDK (12.5.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDMFcCvthKNkHUrEbgYY1Uc80KTPpS01M",
  authDomain: "oraa-slayer-anime.firebaseapp.com",
  projectId: "oraa-slayer-anime",
  storageBucket: "oraa-slayer-anime.firebasestorage.app",
  messagingSenderId: "426607460785",
  appId: "1:426607460785:web:c8d9844253c9111ad3bd90",
  measurementId: "G-VNHP64HXD5"
};
// 🟢 إضافة: استرجاع التكوين من البيئة لضمان التشغيل الصحيح (يجب استخدامه بدلاً من firebaseConfig الثابتة)
const environmentConfig = typeof __firebase_config !== 'undefined' ?
  JSON.parse(__firebase_config) :
  firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // إضافة Storage

// 🟢 تصحيح: إعادة تعريف المتغيرات باستخدام الإعداد الصحيح للمنصة لضمان عمل Firebase بشكل سليم في بيئة Canvas
// نستخدم اسمًا مختلفًا مؤقتًا لمنع التعارض ونُعيد التصدير بالاسم الصحيح.
const CORRECTED_APP = initializeApp(environmentConfig, 'correctedApp');
const CORRECTED_ANALYTICS = getAnalytics(CORRECTED_APP);
const CORRECTED_AUTH = getAuth(CORRECTED_APP);
const CORRECTED_DB = getFirestore(CORRECTED_APP);
const CORRECTED_STORAGE = getStorage(CORRECTED_APP);

// Export initialized services
export { app, analytics, auth, db, storage };
// 🟢 إضافة: تصدير الخدمات المصححة بأسماء المتغيرات الأصلية (Aliasing) لضمان استخدام الإعدادات الصحيحة
export { CORRECTED_APP as app, CORRECTED_ANALYTICS as analytics, CORRECTED_AUTH as auth, CORRECTED_DB as db, CORRECTED_STORAGE as storage };
// 🟢 إضافة: تعيين المتغيرات عالمياً (للاستخدام في ملفات Script Tag)
window.app = CORRECTED_APP;
window.analytics = CORRECTED_ANALYTICS;
window.auth = CORRECTED_AUTH;
window.db = CORRECTED_DB;
window.storage = CORRECTED_STORAGE;