// ====================================================================
// ✅ قائمة بيانات الأنمي (70 أنمي) - محسنة ومصنفة
// ====================================================================
const animeList = [
  // أنميات شونين (Shonen)
  { title: "Attack on Titan", rating: "9.1", img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg", year: "2013", genre: "شونين" },
  { title: "Demon Slayer", rating: "8.9", img: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg", year: "2019", genre: "شونين" },
  { title: "Naruto Shippuden", rating: "8.5", img: "https://cdn.myanimelist.net/images/anime/5/17407.jpg", year: "2007", genre: "شونين" },
  { title: "Jujutsu Kaisen", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", year: "2020", genre: "شونين" },
  { title: "One Piece", rating: "9.0", img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg", year: "1999", genre: "شونين" },
  { title: "Bleach: Thousand-Year Blood War", rating: "8.8", img: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg", year: "2022", genre: "شونين" },
  { title: "My Hero Academia", rating: "8.4", img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg", year: "2016", genre: "شونين" },
  { title: "Chainsaw Man", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg", year: "2022", genre: "شونين" },
  { title: "Black Clover", rating: "8.3", img: "https://cdn.myanimelist.net/images/anime/2/88336.jpg", year: "2017", genre: "شونين" },
  { title: "Hunter x Hunter", rating: "9.2", img: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg", year: "2011", genre: "شونين" },
  
  // أنميات سينين (Seinen)
  { title: "Tokyo Ghoul", rating: "8.0", img: "https://cdn.myanimelist.net/images/anime/5/64449.jpg", year: "2014", genre: "سينين" },
  { title: "Vinland Saga", rating: "8.9", img: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg", year: "2019", genre: "سينين" },
  { title: "Parasyte", rating: "8.6", img: "https://cdn.myanimelist.net/images/anime/3/73178.jpg", year: "2014", genre: "سينين" },
  { title: "Made in Abyss", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/6/86733.jpg", year: "2017", genre: "سينين" },
  { title: "Psycho-Pass", rating: "8.3", img: "https://cdn.myanimelist.net/images/anime/5/43399.jpg", year: "2012", genre: "سينين" },
  
  // أنميات أكشن ومغامرات
  { title: "Fullmetal Alchemist: Brotherhood", rating: "9.2", img: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg", year: "2009", genre: "أكشن" },
  { title: "One Punch Man", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/12/76049.jpg", year: "2015", genre: "أكشن" },
  { title: "Mob Psycho 100", rating: "8.5", img: "https://cdn.myanimelist.net/images/anime/8/80356.jpg", year: "2016", genre: "أكشن" },
  { title: "Sword Art Online", rating: "7.8", img: "https://cdn.myanimelist.net/images/anime/11/39717.jpg", year: "2012", genre: "أكشن" },
  { title: "Overlord", rating: "8.3", img: "https://cdn.myanimelist.net/images/anime/7/88019.jpg", year: "2015", genre: "أكشن" },
  
  // أنميات رومانسية وكوميدية
  { title: "Kaguya-sama: Love is War", rating: "8.5", img: "https://cdn.myanimelist.net/images/anime/1295/135431.jpg", year: "2019", genre: "رومانسي" },
  { title: "Horimiya", rating: "8.2", img: "https://cdn.myanimelist.net/images/anime/1698/110457.jpg", year: "2021", genre: "رومانسي" },
  { title: "Your Name", rating: "8.9", img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg", year: "2016", genre: "رومانسي" },
  { title: "A Silent Voice", rating: "8.8", img: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg", year: "2016", genre: "رومانسي" },
  { title: "Bunny Girl Senpai", rating: "8.1", img: "https://cdn.myanimelist.net/images/anime/1304/135827.jpg", year: "2018", genre: "رومانسي" },
  
  // أنميات خيال علمي
  { title: "Steins;Gate", rating: "9.1", img: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg", year: "2011", genre: "خيال علمي" },
  { title: "Cyberpunk: Edgerunners", rating: "8.6", img: "https://cdn.myanimelist.net/images/anime/1476/125540.jpg", year: "2022", genre: "خيال علمي" },
  { title: "86 EIGHTY-SIX", rating: "8.3", img: "https://cdn.myanimelist.net/images/anime/1981/117777.jpg", year: "2021", genre: "خيال علمي" },
  { title: "Vivy: Fluorite Eye's Song", rating: "8.4", img: "https://cdn.myanimelist.net/images/anime/1498/113857.jpg", year: "2021", genre: "خيال علمي" },
  
  // أنميات رياضية
  { title: "Haikyuu!!", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/7/76014.jpg", year: "2014", genre: "رياضي" },
  { title: "Blue Lock", rating: "8.3", img: "https://cdn.myanimelist.net/images/anime/1915/128065.jpg", year: "2022", genre: "رياضي" },
  { title: "Kuroko's Basketball", rating: "8.2", img: "https://cdn.myanimelist.net/images/anime/5/26263.jpg", year: "2012", genre: "رياضي" },
  
  // أنميات دراما
  { title: "Frieren", rating: "9.0", img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", year: "2023", genre: "دراما" },
  { title: "Violet Evergarden", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg", year: "2018", genre: "دراما" },
  { title: "Clannad: After Story", rating: "9.0", img: "https://cdn.myanimelist.net/images/anime/1299/110774.jpg", year: "2008", genre: "دراما" },
  
  // أنميات جديدة وشهيرة
  { title: "Spy x Family", rating: "8.6", img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg", year: "2022", genre: "كوميدي" },
  { title: "Oshi no Ko", rating: "8.7", img: "https://cdn.myanimelist.net/images/anime/1812/134736.jpg", year: "2023", genre: "دراما" },
  { title: "Hell's Paradise", rating: "8.0", img: "https://cdn.myanimelist.net/images/anime/1956/134755.jpg", year: "2023", genre: "أكشن" },
  { title: "Bocchi the Rock!", rating: "8.6", img: "https://cdn.myanimelist.net/images/anime/1448/127956.jpg", year: "2022", genre: "كوميدي" },
  { title: "Lycoris Recoil", rating: "8.2", img: "https://cdn.myanimelist.net/images/anime/1921/125367.jpg", year: "2022", genre: "أكشن" }
];

// ====================================================================
// ✅ متغيرات حالة التطبيق (State Management)
// ====================================================================
let currentAnimeList = [];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentSort = 'rating_desc';
let currentFilter = 'all';

// ====================================================================
// ✅ العناصر المُختارة من الـ DOM
const grid = document.getElementById("animeGrid");
const searchInput = document.getElementById('search');
const recentBox = document.getElementById('recentSearches');
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');
const settingsBtn = document.querySelector('.fa-cog');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const sortSelect = document.getElementById('sortOrder');
const filterSelect = document.getElementById('filterGenre');
const footerIcons = document.querySelectorAll("footer i");

// ====================================================================
// ✅ دوال مساعدة محسنة (Optimized Helper Functions)
// ====================================================================

/**
 * دالة Debouncing محسنة
 */
const debounce = (func, delay, immediate = false) => {
  let timeoutId;
  return function(...args) {
    const later = () => {
      timeoutId = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
    if (callNow) func.apply(this, args);
  };
};

/**
 * دالة الفرز المحسنة مع دعم أنواع متعددة
 */
function sortAnime(list, sortKey) {
  const listCopy = [...list];
  switch (sortKey) {
    case 'rating_desc':
      return listCopy.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    case 'rating_asc':
      return listCopy.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
    case 'title_asc':
      return listCopy.sort((a, b) => a.title.localeCompare(b.title));
    case 'title_desc':
      return listCopy.sort((a, b) => b.title.localeCompare(a.title));
    case 'year_desc':
      return listCopy.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    case 'year_asc':
      return listCopy.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    default:
      return listCopy;
  }
}

/**
 * دالة التصفية حسب النوع
 */
function filterAnime(list, filterKey) {
  if (filterKey === 'all') return list;
  return list.filter(anime => anime.genre === filterKey);
}

/**
 * دالة البحث الذكية
 */
function smartSearch(list, keyword) {
  if (!keyword) return list;
  
  const lowerKeyword = keyword.toLowerCase();
  return list.filter(anime => 
    anime.title.toLowerCase().includes(lowerKeyword) ||
    anime.genre.toLowerCase().includes(lowerKeyword) ||
    anime.year.includes(keyword)
  );
}

// ====================================================================
// ✅ وظائف العرض والتفاعل الأساسية المحسنة
// ====================================================================

/**
 * إنشاء بطاقة الأنمي مع تحسينات الأداء
 */
function createAnimeCard(anime) {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.setAttribute('data-rating', anime.rating);
  card.setAttribute('data-genre', anime.genre);
  card.setAttribute('data-year', anime.year);
  
  const isFavorite = favorites.some(fav => fav.title === anime.title);
  
  card.innerHTML = `
    <div class="anime-card-inner">
      <div class="anime-image-container">
        <img 
          src="${anime.img}" 
          alt="${anime.title}" 
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/200x280/1a1a2e/8b7bff?text=Anime+Image'"
        >
        <div class="anime-overlay">
          <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(event, ${JSON.stringify(anime).replace(/"/g, '&quot;')})">
            <i class="fa-solid fa-heart"></i>
          </button>
          <span class="anime-year">${anime.year}</span>
          <span class="anime-genre">${anime.genre}</span>
        </div>
      </div>
      <div class="anime-info">
        <h3>${anime.title}</h3>
        <div class="anime-meta">
          <span class="rating">⭐ ${anime.rating}</span>
          <span class="genre-badge">${anime.genre}</span>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (!e.target.closest('.favorite-btn')) {
      selectAnime(anime);
    }
  });
  
  return card;
}

/**
 * عرض قائمة الأنمي مع Virtual Scroll محسن
 */
function displayAnime(list) {
  if (!grid) return;
  
  const fragment = document.createDocumentFragment();

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-search"></i>
        <h3>لم يتم العثور على نتائج</h3>
        <p>حاول استخدام كلمات بحث مختلفة أو تغيير الفلتر</p>
      </div>
    `;
    return;
  }

  // عرض أول 20 عنصر فقط للأداء
  const itemsToShow = list.slice(0, 20);
  
  itemsToShow.forEach(anime => {
    fragment.appendChild(createAnimeCard(anime));
  });

  grid.innerHTML = "";
  grid.appendChild(fragment);

  // تحميل الباقي عند الحاجة
  if (list.length > 20) {
    setTimeout(() => loadMoreAnime(list, 20), 100);
  }

  // تطبيق تأثيرات الظهور
  applyScrollAnimations();
}

/**
 * تحميل المزيد من الأنميات (Lazy Loading)
 */
function loadMoreAnime(list, startIndex) {
  const remainingItems = list.slice(startIndex);
  const fragment = document.createDocumentFragment();
  
  remainingItems.forEach(anime => {
    fragment.appendChild(createAnimeCard(anime));
  });
  
  grid.appendChild(fragment);
  applyScrollAnimations();
}

/**
 * تطبيق البحث والتصفية والفرز
 */
function applyFilterAndDisplay() {
  const keyword = searchInput.value.trim();
  
  // 1. تطبيق التصفية حسب النوع
  let filteredList = filterAnime(animeList, currentFilter);
  
  // 2. تطبيق البحث
  filteredList = smartSearch(filteredList, keyword);
  
  // 3. تطبيق الفرز
  currentAnimeList = sortAnime(filteredList, currentSort);
  
  // 4. العرض
  displayAnime(currentAnimeList);
}

// ====================================================================
// ✅ إدارة المفضلة والتفاعلات
// ====================================================================

/**
 * تبديل حالة المفضلة
 */
function toggleFavorite(event, anime) {
  event.stopPropagation();
  
  const favoriteBtn = event.currentTarget;
  const isCurrentlyFavorite = favoriteBtn.classList.contains('active');
  
  if (isCurrentlyFavorite) {
    // إزالة من المفضلة
    favorites = favorites.filter(fav => fav.title !== anime.title);
    favoriteBtn.classList.remove('active');
    showToast('تمت الإزالة من المفضلة', 'info');
  } else {
    // إضافة إلى المفضلة
    favorites.push(anime);
    favoriteBtn.classList.add('active');
    showToast('تمت الإضافة إلى المفضلة', 'success');
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavoritesCount();
}

/**
 * تحديث عداد المفضلة
 */
function updateFavoritesCount() {
  const favoritesBadge = document.querySelector('.nav-badge');
  if (favoritesBadge) {
    favoritesBadge.textContent = favorites.length;
  }
}

/**
 * اختيار الأنمي للعرض
 */
function selectAnime(anime) {
  localStorage.setItem("selectedAnime", JSON.stringify(anime));
  window.location.href = "anime.html";
}

// ====================================================================
// ✅ إدارة سجل البحث المحسنة
// ====================================================================

function updateRecentSearches() {
  if (!recentBox) return;
  
  recentBox.innerHTML = '';

  if (searchHistory.length === 0) {
    recentBox.innerHTML = `
      <div class="empty-recent">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>لا يوجد سجل بحث بعد</p>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  searchHistory.slice(0, 8).forEach(term => {
    const item = document.createElement('div');
    item.className = 'recent-item';
    item.innerHTML = `
      <span>${term}</span>
      <div class="recent-actions">
        <button class="replay" title="إعادة البحث">
          <i class="fa-solid fa-rotate-right"></i>
        </button>
        <button class="remove" title="حذف">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
    `;

    // إعادة البحث
    item.querySelector('.replay').addEventListener('click', (e) => {
      e.stopPropagation();
      searchInput.value = term;
      applyFilterAndDisplay();
    });
    
    // حذف عنصر محدد
    item.querySelector('.remove').addEventListener('click', (e) => {
      e.stopPropagation();
      searchHistory = searchHistory.filter(t => t !== term);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      updateRecentSearches();
    });
    
    // البحث بالنقر على النص
    item.querySelector('span').addEventListener('click', () => {
      searchInput.value = term;
      applyFilterAndDisplay();
    });
    
    fragment.appendChild(item);
  });

  recentBox.appendChild(fragment);

  // زر مسح الكل
  const clearBtn = document.createElement('button');
  clearBtn.className = 'clear-all-btn';
  clearBtn.innerHTML = '<i class="fa-solid fa-trash"></i> مسح السجل';
  clearBtn.addEventListener('click', () => {
    if (confirm('هل تريد مسح سجل البحث بالكامل؟')) {
      localStorage.removeItem('searchHistory');
      searchHistory = [];
      updateRecentSearches();
      showToast('تم مسح سجل البحث', 'success');
    }
  });
  recentBox.appendChild(clearBtn);
}

function saveSearchTerm(keyword) {
  const term = keyword.trim();
  if (term && !searchHistory.includes(term)) {
    searchHistory.unshift(term);
    if (searchHistory.length > 10) searchHistory.pop();
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    updateRecentSearches();
  }
}

// ====================================================================
// ✅ تأثيرات وإشعارات محسنة
// ====================================================================

/**
 * تأثيرات الظهور عند التمرير
 */
function applyScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.6s ease-out";
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll(".anime-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    observer.observe(card);
  });
}

/**
 * عرض الإشعارات
 */
function showToast(message, type = 'info') {
  // إنشاء عنصر Toast إذا لم يكن موجوداً
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ====================================================================
// ✅ تهيئة التطبيق وتفعيل المستمعات المحسنة
// ====================================================================

function initializeApp() {
  // 1. تهيئة القوائم
  currentAnimeList = sortAnime(animeList, currentSort);
  
  // 2. العرض الأولي
  displayAnime(currentAnimeList);

  // 3. تحديث الواجهة
  updateRecentSearches();
  updateFavoritesCount();
  
  // 4. تعيين القيم الافتراضية
  if (sortSelect) sortSelect.value = currentSort;
  if (filterSelect) filterSelect.value = currentFilter;
  
  // 5. تحميل الإعدادات المحفوظة
  loadSavedSettings();
}

function loadSavedSettings() {
  const savedSettings = localStorage.getItem('appSettings');
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    if (settings.sort) {
      currentSort = settings.sort;
      if (sortSelect) sortSelect.value = currentSort;
    }
    if (settings.filter) {
      currentFilter = settings.filter;
      if (filterSelect) filterSelect.value = currentFilter;
    }
  }
}

function saveSettings() {
  const settings = {
    sort: currentSort,
    filter: currentFilter,
    theme: 'dark'
  };
  localStorage.setItem('appSettings', JSON.stringify(settings));
}

// ====================================================================
// ✅ تفعيل المستمعات (Event Listeners)
// ====================================================================

// 1. البحث (Debounced)
if (searchInput) {
  const debouncedSearch = debounce(() => {
    applyFilterAndDisplay();
  }, 300);
  
  searchInput.addEventListener('input', debouncedSearch);

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      saveSearchTerm(searchInput.value);
      applyFilterAndDisplay();
      searchInput.blur();
    }
  });
}

// 2. قائمة البروفايل
if (profileBtn && profileMenu) {
  profileBtn.addEventListener('click', e => {
    e.stopPropagation();
    profileMenu.classList.toggle('active');
  });
  
  document.addEventListener('click', e => {
    if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
      profileMenu.classList.remove('active');
    }
  });
}

// 3. لوحة الإعدادات
if (settingsBtn && settingsPanel && closeSettings) {
  settingsBtn.addEventListener('click', e => {
    e.stopPropagation();
    settingsPanel.classList.add('active');
  });
  
  closeSettings.addEventListener('click', () => {
    settingsPanel.classList.remove('active');
    saveSettings();
  });
  
  document.addEventListener('click', (e) => {
    if (settingsPanel.classList.contains('active') && 
        !settingsPanel.contains(e.target) && 
        !settingsBtn.contains(e.target)) {
      settingsPanel.classList.remove('active');
      saveSettings();
    }
  });
}

// 4. التحكم في الفرز
if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    applyFilterAndDisplay();
    settingsPanel.classList.remove('active');
  });
}

// 5. التحكم في التصفية
if (filterSelect) {
  filterSelect.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    applyFilterAndDisplay();
    settingsPanel.classList.remove('active');
  });
}

// 6. البار السفلي
if (footerIcons.length > 0) {
  footerIcons.forEach(icon => {
    icon.addEventListener("click", function() {
      footerIcons.forEach(i => i.classList.remove("active"));
      this.classList.add("active");
      
      // تأثير النقر
      this.style.transform = "scale(1.2)";
      setTimeout(() => this.style.transform = "scale(1)", 200);
    });
  });
}

// 7. إعادة تحميل الصور التالفة
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG' && e.target.classList.contains('anime-img')) {
    e.target.src = 'https://via.placeholder.com/200x280/1a1a2e/8b7bff?text=Anime+Image';
  }
}, true);

// 8. تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeApp);

// 9. تحسين الأداء عند تبديل التبويبات
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // توفير الموارد عندما تكون الصفحة غير مرئية
    document.querySelectorAll('img').forEach(img => {
      if (!img.classList.contains('lazy-loaded')) {
        img.loading = 'lazy';
      }
    });
  }
});

// ====================================================================
// ✅ CSS إضافي مقترح (يضاف لملف الـ CSS)
// ====================================================================
`
/* تحسينات البطاقات */
.anime-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.anime-card-inner {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(26, 26, 60, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 123, 255, 0.2);
}

.anime-image-container {
  position: relative;
  overflow: hidden;
}

.anime-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.8) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
}

.anime-card:hover .anime-overlay {
  opacity: 1;
}

.favorite-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;
}

.favorite-btn.active {
  background: var(--secondary-color);
  color: white;
}

.favorite-btn:hover {
  transform: scale(1.1);
}

.anime-year, .anime-genre {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
}

.anime-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.genre-badge {
  background: var(--gradient-primary);
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
}

/* حالة عدم وجود نتائج */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 255, 255, 0.7);
}

.empty-state i {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state h3 {
  margin-bottom: 10px;
  color: var(--text-light);
}

/* سجل البحث المحسن */
.empty-recent {
  text-align: center;
  padding: 30px 20px;
  color: rgba(255, 255, 255, 0.5);
}

.empty-recent i {
  font-size: 2rem;
  margin-bottom: 10px;
  opacity: 0.5;
}

.recent-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.recent-item:hover {
  background: rgba(139, 123, 255, 0.1);
  transform: translateX(-5px);
}

.recent-actions {
  display: flex;
  gap: 8px;
}

.recent-actions button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.recent-actions button:hover {
  color: var(--primary-color);
  background: rgba(139, 123, 255, 0.1);
}

.clear-all-btn {
  width: 100%;
  padding: 12px;
  background: rgba(255, 107, 157, 0.1);
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.clear-all-btn:hover {
  background: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
}

/* الإشعارات */
.toast {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background: rgba(45, 45, 75, 0.95);
  backdrop-filter: blur(20px);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-left: 4px solid var(--primary-color);
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s ease;
  z-index: 1000;
  max-width: 300px;
}

.toast.show {
  opacity: 1;
  transform: translateX(0);
}

.toast.success {
  border-left-color: var(--success-color);
}

.toast.error {
  border-left-color: var(--error-color);
}

.toast.info {
  border-left-color: var(--primary-color);
}

/* تحسينات التجاوب */
@media (max-width: 768px) {
  .anime-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .genre-badge {
    align-self: flex-start;
  }
  
  .toast {
    right: 10px;
    left: 10px;
    max-width: none;
  }
}
`
