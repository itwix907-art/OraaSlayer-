// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  where,
  limit,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAW2SN4-a_8SBCbCHelc2sBkvPAXywYDy0",
  authDomain: "oraaslayer.firebaseapp.com",
  projectId: "oraaslayer",
  storageBucket: "oraaslayer.firebasestorage.app",
  messagingSenderId: "349117618057",
  appId: "1:349117618057:web:dba5e21031d409a1143358",
  measurementId: "G-3LKYCN0YK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Collections
export const MESSAGES_COLLECTION = "chatMessages";
export const USERS_COLLECTION = "users";
export const ANIME_COLLECTION = "anime";
export const FAVORITES_COLLECTION = "favorites";
export const REVIEWS_COLLECTION = "reviews";
export const NEWS_COLLECTION = "news";

// Export Firebase functions
export {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  where,
  limit,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
  getDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
};// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  where,
  limit,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAW2SN4-a_8SBCbCHelc2sBkvPAXywYDy0",
  authDomain: "oraaslayer.firebaseapp.com",
  projectId: "oraaslayer",
  storageBucket: "oraaslayer.firebasestorage.app",
  messagingSenderId: "349117618057",
  appId: "1:349117618057:web:dba5e21031d409a1143358",
  measurementId: "G-3LKYCN0YK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Collections
export const MESSAGES_COLLECTION = "chatMessages";
export const USERS_COLLECTION = "users";
export const ANIME_COLLECTION = "anime";
export const FAVORITES_COLLECTION = "favorites";
export const REVIEWS_COLLECTION = "reviews";
export const NEWS_COLLECTION = "news";

// Export Firebase functions
export {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  where,
  limit,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
  getDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
};