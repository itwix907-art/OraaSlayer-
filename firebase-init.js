// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDMFcCvthKNkHUrEbgYY1Uc80KTPpS01M",
  authDomain: "oraa-slayer-anime.firebaseapp.com",
  projectId: "oraa-slayer-anime",
  storageBucket: "oraa-slayer-anime.firebasestorage.app",
  messagingSenderId: "426607460785",
  appId: "1:426607460785:web:c8d9844253c9111ad3bd90",
  measurementId: "G-VNHP64HXD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };