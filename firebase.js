// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDMFcCvthKNkHUrEbgYY1Uc80KTPpS01M",
  authDomain: "oraa-slayer-anime.firebaseapp.com",
  projectId: "oraa-slayer-anime",
  storageBucket: "oraa-slayer-anime.firebasestorage.app",
  messagingSenderId: "426607460785",
  appId: "1:426607460785:web:c8d9844253c9111ad3bd90"
};

// 🟢 إضافة: استخدام التكوين المقدم من البيئة (if available)
const environmentConfig = typeof __firebase_config !== 'undefined' ?
  JSON.parse(__firebase_config) :
  firebaseConfig;

// 🟢 إضافة: تهيئة Firebase بالتكوين الصحيح باستخدام اسم مختلف لتفادي تكرار التهيئة
const CORRECTED_APP = initializeApp(environmentConfig, 'correctedFirebaseApp');
const CORRECTED_AUTH = getAuth(CORRECTED_APP);
const CORRECTED_DB = getFirestore(CORRECTED_APP);

// تهيئة Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🟢 إضافة: تصدير الخدمات المصححة بأسماء المتغيرات الأصلية (Aliasing) لضمان استخدام الإعدادات الصحيحة
export { CORRECTED_APP as app, CORRECTED_AUTH as auth, CORRECTED_DB as db };