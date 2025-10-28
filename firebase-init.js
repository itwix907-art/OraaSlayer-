// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAW2SN4-a_8SBCbCHelc2sBkvPAXywYDy0",
  authDomain: "oraaslayer.firebaseapp.com",
  projectId: "oraaslayer",
  storageBucket: "oraaslayer.firebasestorage.app",
  messagingSenderId: "349117618057",
  appId: "1:349117618057:web:dba5e21031d409a1143358",
  measurementId: "G-3LKYCN0YK2"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
