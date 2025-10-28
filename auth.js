// نستخدم CryptoJS من CDN، لذا تأكد من إضافته في HTML

const USERS_KEY = "mikaiAnimeUsers";
const SESSIONS_KEY = "mikaiAnimeSessions";
const VERIFICATION_TOKENS_KEY = "mikaiAnimeVerificationTokens";
const PASSWORD_RESET_TOKENS_KEY = "mikaiAnimePasswordResetTokens";

// دالة لتسجيل مستخدم جديد
function register(userData) {
  const { username, email, password } = userData;
  
  if (!username || !email || !password) {
    throw new Error("جميع الحقول مطلوبة");
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("البريد الإلكتروني غير صالح");
  }
  
  if (password.length < 6) {
    throw new Error("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
  }
  
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  
  if (users.some(u => u.email === email)) {
    throw new Error("البريد الإلكتروني مسجل مسبقاً");
  }
  
  if (users.some(u => u.username === username)) {
    throw new Error("اسم المستخدم مسجل مسبقاً");
  }
  
  // تجزئة كلمة المرور باستخدام SHA-256
  const hashedPassword = CryptoJS.SHA256(password).toString();
  
  const newUser = {
    id: generateId(),
    username,
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    verified: false
  };
  
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  // إنشاء رمز التحقق وإرساله (محاكاة)
  sendVerificationEmail(newUser);
  
  return newUser;
}

// دالة تسجيل الدخول
function login(email, password, rememberMe = false) {
  if (!email || !password) {
    throw new Error("البريد الإلكتروني وكلمة المرور مطلوبان");
  }
  
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(u => u.email === email);
  
  if (!user) {
    throw new Error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }
  
  const hashedPassword = CryptoJS.SHA256(password).toString();
  
  if (user.password !== hashedPassword) {
    throw new Error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }
  
  if (!user.verified) {
    throw new Error("حسابك غير مفعل، يرجى التحقق من بريدك الإلكتروني");
  }
  
  // إنشاء جلسة
  createSession(user, rememberMe);
  
  return user;
}

// دالة إنشاء جلسة
function createSession(user, rememberMe) {
  const session = {
    userId: user.id,
    token: generateToken(user),
    createdAt: new Date().toISOString(),
    expiresAt: rememberMe ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  };
  
  let sessions = JSON.parse(localStorage.getItem(SESSIONS_KEY)) || [];
  sessions.push(session);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  
  // تخزين الجلسة الحالية في sessionStorage أو localStorage بناء على rememberMe
  if (rememberMe) {
    localStorage.setItem('currentSession', JSON.stringify(session));
  } else {
    sessionStorage.setItem('currentSession', JSON.stringify(session));
  }
}

// دالة إنهاء الجلسة (تسجيل الخروج)
function logout() {
  // إزالة الجلسة الحالية
  sessionStorage.removeItem('currentSession');
  localStorage.removeItem('currentSession');
  
  // توجيه المستخدم إلى صفحة الرئيسية
  window.location.href = 'index.html';
}

// دالة التحقق من البريد الإلكتروني
function verifyEmail(token) {
  const tokens = JSON.parse(localStorage.getItem(VERIFICATION_TOKENS_KEY)) || [];
  const verificationToken = tokens.find(t => t.token === token);
  
  if (!verificationToken) {
    throw new Error("رمز التحقق غير صالح أو منتهي");
  }
  
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(u => u.id === verificationToken.userId);
  
  if (!user) {
    throw new Error("المستخدم غير موجود");
  }
  
  user.verified = true;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  // إزالة رمز التحقق المستخدم
  const updatedTokens = tokens.filter(t => t.token !== token);
  localStorage.setItem(VERIFICATION_TOKENS_KEY, JSON.stringify(updatedTokens));
  
  return user;
}

// دالة طلب إعادة تعيين كلمة المرور
function requestPasswordReset(email) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(u => u.email === email);
  
  if (!user) {
    throw new Error("لا يوجد حساب مرتبط بهذا البريد الإلكتروني");
  }
  
  const token = generateRandomToken();
  const resetToken = {
    userId: user.id,
    token,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString() // ينتهي بعد ساعة
  };
  
  let resetTokens = JSON.parse(localStorage.getItem(PASSWORD_RESET_TOKENS_KEY)) || [];
  resetTokens.push(resetToken);
  localStorage.setItem(PASSWORD_RESET_TOKENS_KEY, JSON.stringify(resetTokens));
  
  // محاكاة إرسال البريد الإلكتروني
  console.log(`إرسال رابط إعادة تعيين كلمة المرور إلى ${email}: ${token}`);
  // في التطبيق الحقيقي، نرسل بريداً إلكترونياً يحتوي على الرابط والرمز
  
  return true;
}

// دالة إعادة تعيين كلمة المرور
function resetPassword(token, newPassword) {
  if (newPassword.length < 6) {
    throw new Error("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
  }
  
  const resetTokens = JSON.parse(localStorage.getItem(PASSWORD_RESET_TOKENS_KEY)) || [];
  const resetToken = resetTokens.find(t => t.token === token && new Date(t.expiresAt) > new Date());
  
  if (!resetToken) {
    throw new Error("رمز إعادة التعيين غير صالح أو منتهي");
  }
  
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const user = users.find(u => u.id === resetToken.userId);
  
  if (!user) {
    throw new Error("المستخدم غير موجود");
  }
  
  // تجزئة كلمة المرور الجديدة
  const hashedPassword = CryptoJS.SHA256(newPassword).toString();
  user.password = hashedPassword;
  
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  // إزالة رمز إعادة التعيين المستخدم
  const updatedTokens = resetTokens.filter(t => t.token !== token);
  localStorage.setItem(PASSWORD_RESET_TOKENS_KEY, JSON.stringify(updatedTokens));
  
  return user;
}

// دوال مساعدة
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function generateToken(user) {
  // نقوم بإنشاء token مبسط باستخدام Base64
  const tokenData = {
    userId: user.id,
    email: user.email,
    createdAt: new Date().toISOString()
  };
  return btoa(JSON.stringify(tokenData));
}

function generateRandomToken() {
  return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}

function sendVerificationEmail(user) {
  const token = generateRandomToken();
  const verificationToken = {
    userId: user.id,
    token,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // ينتهي بعد 24 ساعة
  };
  
  let tokens = JSON.parse(localStorage.getItem(VERIFICATION_TOKENS_KEY)) || [];
  tokens.push(verificationToken);
  localStorage.setItem(VERIFICATION_TOKENS_KEY, JSON.stringify(tokens));
  
  // محاكاة إرسال البريد الإلكتروني
  console.log(`إرسال رابط التحقق إلى ${user.email}: ${token}`);
  // في التطبيق الحقيقي، نرسل بريداً إلكترونياً يحتوي على الرابط والرمز
}