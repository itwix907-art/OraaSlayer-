auth.js// يُفترض أنك قمت باستيراد auth من firebase-init.js (أو firebase.js)
// مثال:
// import { auth } from './firebase-init.js';
// إذا كنت تستخدم نمط وحدة (Module)، يجب أن يكون الاستيراد موجودًا في بداية الملف.

// تأكد من استيراد الدوال الضرورية من مكتبة المصادقة:
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; 

// يتم استيراد كائن الـ auth من ملف firebase-init.js (يفترض أن الملف موجود ويحتوي على الكائن المهيأ)
// إذا كان `firebase-init.js` يُصدِّر الكائن `auth`:
import { auth } from './firebase-init.js'; 

// --- وظائف المصادقة الأساسية ---

// 1. وظيفة التسجيل (إنشاء مستخدم جديد)
export async function registerUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // تم التسجيل بنجاح
        console.log("User registered:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        // حدث خطأ في التسجيل
        console.error("Registration error:", error.message);
        throw error;
    }
}

// 2. وظيفة تسجيل الدخول
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // تم تسجيل الدخول بنجاح
        console.log("User logged in:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        // حدث خطأ في تسجيل الدخول
        console.error("Login error:", error.message);
        throw error;
    }
}

// 3. وظيفة تسجيل الخروج
export async function logoutUser() {
    try {
        await signOut(auth);
        // تم تسجيل الخروج بنجاح
        console.log("User signed out");
    } catch (error) {
        // حدث خطأ في تسجيل الخروج
        console.error("Logout error:", error.message);
        throw error;
    }
}

// 4. وظيفة إرسال بريد إلكتروني لإعادة تعيين كلمة المرور
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent to:", email);
    } catch (error) {
        console.error("Password reset error:", error.message);
        throw error;
    }
}

// 5. وظيفة مراقبة حالة المصادقة (مهمة لمعرفة ما إذا كان المستخدم مسجلاً دخوله)
// يمكن استخدامها في ملف main.js أو صفحات HTML للتحكم في واجهة المستخدم
export function subscribeToAuthChanges(callback) {
    return onAuthStateChanged(auth, callback);
}

// يمكنك استدعاء الوظائف السابقة في ملفات مثل register.html (لتسجيل المستخدم) و login.html (لتسجيل الدخول) و main.js (للوصول إلى حالة المستخدم).
