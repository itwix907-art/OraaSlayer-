// auth.js
import { auth, db } from './firebase-init.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

class AuthManager {
  constructor() {
    this.currentUser = null;
    this.initAuthListener();
  }
  
  initAuthListener() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        await this.updateUserData(user);
        this.onUserSignedIn(user);
      } else {
        this.currentUser = null;
        this.onUserSignedOut();
      }
    });
  }
  
  async register(email, password, username) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update profile with username
      await updateProfile(user, {
        displayName: username
      });
      
      // Send email verification
      await sendEmailVerification(user);
      
      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        verified: false,
        profileComplete: false
      });
      
      return { success: true, user: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update last login time
      await this.updateUserData(user);
      
      return { success: true, user: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  async updateUserData(user) {
    try {
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        await setDoc(userRef, {
          lastLogin: serverTimestamp(),
          email: user.email,
          displayName: user.displayName
        }, { merge: true });
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  }
  
  async resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  async logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  onUserSignedIn(user) {
    // يمكنك إضافة أي كود تريد تنفيذه عند تسجيل الدخول
    console.log("User signed in:", user.email);
    
    // إعادة التوجيه إذا لزم الأمر
    if (window.location.pathname.includes('login.html') ||
      window.location.pathname.includes('register.html')) {
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    }
  }
  
  onUserSignedOut() {
    console.log("User signed out");
  }
  
  getCurrentUser() {
    return this.currentUser;
  }
  
  isUserVerified() {
    return this.currentUser ? this.currentUser.emailVerified : false;
  }
}

// إنشاء instance واحدة من AuthManager
const authManager = new AuthManager();
export default authManager;