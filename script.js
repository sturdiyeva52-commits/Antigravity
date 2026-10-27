/**
 * MUQOVA — O'zbekiston Nashriyotlari Milliy Kitob Maydoni
 * Client-side Store, State Management, and UI Interactions
 */

// ==========================================================================
// 1. INITIAL SEED DATABASE (Real publishers & books of Uzbekistan)
// ==========================================================================
const DEFAULT_PUBLISHERS = [
  { id: 'hilol', name: 'Hilol Nashr', color: '#0D5C3A', icon: 'fa-book-quran', desc: 'Diniy-ma\'rifiy, ilmiy va axloqiy kitoblar' },
  { id: 'asaxiy', name: 'Asaxiy Books', color: '#004085', icon: 'fa-globe', desc: 'Jahon bestsellerlari va zamonaviy tarjimalar' },
  { id: 'factor', name: 'Factor Books', color: '#B91C1C', icon: 'fa-bolt-lightning', desc: 'Biznes, shaxsiy rivojlanish va tafakkur' },
  { id: 'akadem', name: 'Akademnashr', color: '#5B21B6', icon: 'fa-graduation-cap', desc: 'Mumtoz va zamonaviy o\'zbek adabiyoti' },
  { id: 'nihol', name: 'Nihol Nashr', color: '#047857', icon: 'fa-seedling', desc: 'Bolalar va o\'smirlar adabiyoti xazinasi' },
  { id: 'yangi-asr', name: 'Yangi Asr Avlodi', color: '#C2410C', icon: 'fa-feather', desc: 'Tarixiy, badiiy va ensiklopedik nashrlar' }
];

const PRESET_COVERS = [
  'assets/images/atom_odatlar.jpg',
  'assets/images/otkan_kunlar.jpg',
  'assets/images/ijtimoiy_odoblar.jpg',
  'assets/images/shamol_ortidan.jpg',
  'assets/images/kichik_shahzoda.jpg',
  'assets/images/alximik.jpg',
  'assets/images/diqqat.svg',
  'assets/images/riyozus_solihiyn.svg',
  'assets/images/yulduzli_tunlar.svg',
  'assets/images/dune.svg'
];

const DEFAULT_BOOKS = [
  {
    id: 'book-1',
    title: 'Atom Odatlar',
    author: 'Jeyms Klir',
    publisher: 'Asaxiy Books',
    category: 'biznes',
    categoryName: 'Biznes & Rivojlanish',
    price: 55000,
    oldPrice: 65000,
    rating: 4.9,
    reviewsCount: 312,
    pages: 352,
    format: 'Yumshoq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-23-145-2',
    year: 2023,
    salesCount: 1420,
    isSpotlight: true,
    cover: 'assets/images/atom_odatlar.jpg',
    description: 'Kichik o\'zgarishlar qanday qilib hayratlanarli natijalarga olib kelishi mumkin? Xulq-atvoringizni yaxshilash va salbiy odatlardan qutulishning isbotlangan eng samarali tizimi.'
  },
  {
    id: 'book-2',
    title: 'Ijtimoiy Odoblar',
    author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    publisher: 'Hilol Nashr',
    category: 'diniy',
    categoryName: 'Diniy-ma\'rifiy',
    price: 72000,
    oldPrice: 80000,
    rating: 5.0,
    reviewsCount: 540,
    pages: 480,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-45-789-1',
    year: 2022,
    salesCount: 2200,
    isSpotlight: false,
    cover: 'assets/images/ijtimoiy_odoblar.jpg',
    description: 'Insonning jamiyatda, oilada va kundalik munosabatlarda o\'zini tutishi, muomala madaniyati va odob-axloq qoidalariga oid bebaho qo\'llanma.'
  },
  {
    id: 'book-3',
    title: 'Shamol Ortidan Yugurib',
    author: 'Xolid Husayniy',
    publisher: 'Asaxiy Books',
    category: 'badiiy',
    categoryName: 'Badiiy adabiyot',
    price: 58000,
    oldPrice: 68000,
    rating: 4.8,
    reviewsCount: 280,
    pages: 416,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-23-889-4',
    year: 2021,
    salesCount: 980,
    isSpotlight: false,
    cover: 'assets/images/shamol_ortidan.jpg',
    description: 'Do\'stlik, xiyonat, sadoqat va gunohlarni yuvish haqidagi dunyoni larzaga keltirgan, ko\'z yoshsiz o\'qib bo\'lmaydigan qalb romani.'
  },
  {
    id: 'book-4',
    title: 'Diqqat: Chalg\'ituvchi Dunyoda Muvaffaqiyat',
    author: 'Kel Nyuport',
    publisher: 'Factor Books',
    category: 'biznes',
    categoryName: 'Biznes & Rivojlanish',
    price: 62000,
    oldPrice: null,
    rating: 4.7,
    reviewsCount: 195,
    pages: 304,
    format: 'Yumshoq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-67-123-0',
    year: 2023,
    salesCount: 810,
    isSpotlight: false,
    cover: 'assets/images/diqqat.svg',
    description: 'Ijtimoiy tarmoqlar va shovqinlar asrida chuqur diqqatni jamlash qobiliyati XXI asrning super-kuchiga aylandi. Buni qanday shakllantirish kerak?'
  },
  {
    id: 'book-5',
    title: 'O\'tkan Kunlar',
    author: 'Abdulla Qodiriy',
    publisher: 'Akademnashr',
    category: 'tarix',
    categoryName: 'Tarixiy & Badiiy',
    price: 48000,
    oldPrice: 55000,
    rating: 5.0,
    reviewsCount: 720,
    pages: 400,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-52-441-2',
    year: 2023,
    salesCount: 3100,
    isSpotlight: false,
    cover: 'assets/images/otkan_kunlar.jpg',
    description: 'O\'zbek romanchiligining gultoji. Otabek va Kumushning fojiali sevgisi fonida Turkiston xonliklari davridagi murakkab ijtimoiy-siyosiy hayot tasvirlanadi.'
  },
  {
    id: 'book-6',
    title: 'Riyozus-Solihiyn Sharhi (1-Jild)',
    author: 'Imom Navaviy',
    publisher: 'Hilol Nashr',
    category: 'diniy',
    categoryName: 'Diniy-ma\'rifiy',
    price: 88000,
    oldPrice: 100000,
    rating: 5.0,
    reviewsCount: 410,
    pages: 640,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-45-112-9',
    year: 2022,
    salesCount: 1650,
    isSpotlight: false,
    cover: 'assets/images/riyozus_solihiyn.svg',
    description: 'Hadis ilmining durdonalaridan biri bo\'lgan mashhur to\'plamning to\'liq va batafsil sharhi. Har bir musulmon xonadonining ma\'naviy javonida bo\'lishi lozim bo\'lgan manba.'
  },
  {
    id: 'book-7',
    title: 'Kichik Shahzoda',
    author: 'Antuan de Sent-Ekzyuperi',
    publisher: 'Nihol Nashr',
    category: 'bolalar',
    categoryName: 'Bolalar kitoblari',
    price: 35000,
    oldPrice: 42000,
    rating: 4.9,
    reviewsCount: 350,
    pages: 112,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-77-901-3',
    year: 2023,
    salesCount: 1890,
    isSpotlight: false,
    cover: 'assets/images/kichik_shahzoda.jpg',
    description: 'Bolalar va kattalar uchun birdek sevimli, mehr, mas\'uliyat va insoniylik falsafasi haqidagi go\'zal illyustratsiyali ertak-qissa.'
  },
  {
    id: 'book-8',
    title: 'Alximik',
    author: 'Paulo Koelo',
    publisher: 'Factor Books',
    category: 'badiiy',
    categoryName: 'Badiiy adabiyot',
    price: 42000,
    oldPrice: 50000,
    rating: 4.7,
    reviewsCount: 290,
    pages: 224,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-67-554-7',
    year: 2022,
    salesCount: 1200,
    isSpotlight: false,
    cover: 'assets/images/alximik.jpg',
    description: 'O\'z orzusi va taqdiri yo\'lidan borayotgan andalusiyalik cho\'pon Santyagoning Misr ehromlari tomon qilgan sirli va ibratli sayohati.'
  },
  {
    id: 'book-9',
    title: 'Yulduzli Tunlar',
    author: 'Pirimqul Qodirov',
    publisher: 'Yangi Asr Avlodi',
    category: 'tarix',
    categoryName: 'Tarixiy adabiyot',
    price: 68000,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 460,
    pages: 560,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-08-332-1',
    year: 2023,
    salesCount: 1750,
    isSpotlight: false,
    cover: 'assets/images/yulduzli_tunlar.svg',
    description: 'Zahiriddin Muhammad Boburning murakkab va jo\'shqin hayoti, shoh va shoir sifatidagi ziddiyatli taqdiri mahorat bilan qalamga olingan mumtoz roman.'
  },
  {
    id: 'book-10',
    title: 'Ruhiy Xotirjamlik Sari',
    author: 'Oiz al-Qarniy',
    publisher: 'Hilol Nashr',
    category: 'psixologiya',
    categoryName: 'Psixologiya & Jamiyat',
    price: 65000,
    oldPrice: 75000,
    rating: 4.9,
    reviewsCount: 380,
    pages: 368,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-45-901-7',
    year: 2022,
    salesCount: 1400,
    isSpotlight: false,
    cover: 'assets/images/ruhiy_xotirjamlik.svg',
    description: 'G\'am-tashvishlarni yengish, hayotdan quvonch topish va iymon asosida botiniy xotirjamlikka erishish sirlari haqidagi ilhomlantiruvchi asar.'
  },
  {
    id: 'book-11',
    title: 'Dune: Sahro Sayyorasi',
    author: 'Frenk Gerbert',
    publisher: 'Asaxiy Books',
    category: 'badiiy',
    categoryName: 'Badiiy adabiyot',
    price: 85000,
    oldPrice: 98000,
    rating: 4.8,
    reviewsCount: 215,
    pages: 688,
    format: 'Qattiq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-23-991-0',
    year: 2023,
    salesCount: 920,
    isSpotlight: false,
    cover: 'assets/images/dune.svg',
    description: 'Ilmiy-fantastika janrining mutlaq durdonasi. Arrakis sayyorasi, ziravor manbalari va Pol Atreydesning kosmik taqdiri.'
  },
  {
    id: 'book-12',
    title: 'Tom Soyerning Sarguzashtlari',
    author: 'Mark Tven',
    publisher: 'Nihol Nashr',
    category: 'bolalar',
    categoryName: 'Bolalar kitoblari',
    price: 40000,
    oldPrice: 48000,
    rating: 4.7,
    reviewsCount: 180,
    pages: 240,
    format: 'Yumshoq',
    lang: 'O\'zbekcha',
    isbn: '978-9943-77-224-5',
    year: 2022,
    salesCount: 780,
    isSpotlight: false,
    cover: 'assets/images/tom_soyer.svg',
    description: 'Sho\'x va dovyurak Tom Soyer hamda uning do\'stlarining Missisipi daryosi bo\'yidagi unutilmas, qiziqarli sarguzashtlari.'
  }
];

// ==========================================================================
// 2. APP STATE STORE
// ==========================================================================
const AppState = {
  books: [],
  cart: [],        // [{ id, quantity }]
  wishlist: [],    // [id]
  filters: {
    search: '',
    category: 'all',
    publishers: [],
    minPrice: null,
    maxPrice: null,
    formats: [],
    langs: ["O'zbekcha"],
    sort: 'featured',
    viewMode: 'grid'
  },
  promoApplied: false,
  promoDiscount: 0,
  promoCodeName: ''
};

// ==========================================================================
// 3. PERSISTENCE & LOCALSTORAGE HELPERS
// ==========================================================================
function loadPersistedData() {
  try {
    const savedBooks = localStorage.getItem('muqova_books');
    if (savedBooks) {
      AppState.books = JSON.parse(savedBooks);
      // Migrate existing books to exact matching new covers
      AppState.books.forEach(b => {
        const def = DEFAULT_BOOKS.find(d => d.id === b.id);
        if (def && (!b.cover || b.cover.includes('unsplash.com'))) {
          b.cover = def.cover;
        }
      });
      persistBooks();
    } else {
      AppState.books = [...DEFAULT_BOOKS];
      persistBooks();
    }

    const savedCart = localStorage.getItem('muqova_cart');
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
    }

    const savedWishlist = localStorage.getItem('muqova_wishlist');
    if (savedWishlist) {
      AppState.wishlist = JSON.parse(savedWishlist);
    }
  } catch (err) {
    console.warn('LocalStorage error:', err);
    AppState.books = [...DEFAULT_BOOKS];
  }
}

// ==========================================================================
// 3.1 THEME MANAGER (Dark & Light Mode)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('muqova_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(activeTheme, false);
}

function applyTheme(theme, showNotification = true) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('muqova_theme', theme);

  const isDark = theme === 'dark';
  const icon = document.getElementById('themeToggleIcon');
  const label = document.getElementById('themeToggleLabel');
  const mobIcon = document.getElementById('mobThemeToggleIcon');
  const mobLabel = document.getElementById('mobThemeToggleLabel');

  if (icon) {
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  if (label) {
    label.textContent = isDark ? 'Kunduzgi' : 'Tungi';
  }
  if (mobIcon) {
    mobIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  if (mobLabel) {
    mobLabel.textContent = isDark ? 'Kunduzgi' : 'Tungi';
  }

  if (showNotification) {
    showToast(isDark ? 'Tungi rejim yoqildi 🌙' : 'Kunduzgi rejim yoqildi ☀️');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme, true);
}

function persistCart() {
  try {
    localStorage.setItem('muqova_cart', JSON.stringify(AppState.cart));
  } catch (e) {}
}

function persistWishlist() {
  try {
    localStorage.setItem('muqova_wishlist', JSON.stringify(AppState.wishlist));
  } catch (e) {}
}

function persistBooks() {
  try {
    localStorage.setItem('muqova_books', JSON.stringify(AppState.books));
  } catch (e) {}
}

// Utility: Format currency in Uzbek So'm
function formatPrice(amount) {
  if (typeof amount !== 'number') return '0 so\'m';
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' so\'m';
}

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  
  const icon = type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-check';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 4. RENDERING FUNCTIONS
// ==========================================================================

// Render Publishers Showcase Grid
function renderPublishersGrid() {
  const container = document.getElementById('publishersGrid');
  if (!container) return;

  // Calculate book counts per publisher from current books
  const publisherCounts = {};
  AppState.books.forEach(b => {
    publisherCounts[b.publisher] = (publisherCounts[b.publisher] || 0) + 1;
  });

  container.innerHTML = DEFAULT_PUBLISHERS.map(pub => {
    const count = publisherCounts[pub.name] || 0;
    const isSelected = AppState.filters.publishers.includes(pub.name);

    return `
      <div class="publisher-card ${isSelected ? 'active' : ''}" data-publisher="${pub.name}">
        <div class="publisher-icon-badge" style="background-color: ${pub.color}">
          <i class="fa-solid ${pub.icon}"></i>
        </div>
        <h4 class="publisher-name">${pub.name}</h4>
        <span class="publisher-book-count">${count} ta kitob</span>
      </div>
    `;
  }).join('');

  // Attach click handler on publisher cards
  container.querySelectorAll('.publisher-card').forEach(card => {
    card.addEventListener('click', () => {
      const pubName = card.dataset.publisher;
      if (AppState.filters.publishers.includes(pubName)) {
        AppState.filters.publishers = AppState.filters.publishers.filter(p => p !== pubName);
      } else {
        AppState.filters.publishers = [pubName]; // Focus single publisher
      }
      
      // Update sidebar checkbox states
      syncPublisherCheckboxes();
      renderPublishersGrid();
      renderActiveFilterTags();
      renderBooksGrid();

      // Smooth scroll to catalog
      const catalogEl = document.getElementById('katalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Render Hero Spotlight Book Card
function renderSpotlightCard() {
  const container = document.getElementById('heroSpotlightBook');
  if (!container) return;

  const spotlightBook = AppState.books.find(b => b.isSpotlight) || AppState.books[0];
  if (!spotlightBook) return;

  const inWishlist = AppState.wishlist.includes(spotlightBook.id);
  const inCart = AppState.cart.some(item => item.id === spotlightBook.id);

  container.innerHTML = `
    <div class="spotlight-header">
      <span class="spotlight-tag"><i class="fa-solid fa-crown"></i> Hafta kitobi</span>
      <span class="spotlight-publisher-verified">
        <i class="fa-solid fa-circle-check"></i> ${spotlightBook.publisher}
      </span>
    </div>

    <div class="spotlight-content-flex">
      <img src="${spotlightBook.cover}" alt="${spotlightBook.title}" class="spotlight-book-cover" onerror="this.src='${PRESET_COVERS[0]}'">
      <div class="spotlight-book-info">
        <span class="spotlight-genre">${spotlightBook.categoryName} &bull; ${spotlightBook.format}</span>
        <h3 class="spotlight-title">${spotlightBook.title}</h3>
        <p class="spotlight-author">${spotlightBook.author}</p>
        
        <div class="spotlight-rating">
          <i class="fa-solid fa-star"></i>
          <strong>${spotlightBook.rating}</strong>
          <span>(${spotlightBook.reviewsCount} baho)</span>
        </div>

        <p class="qv-desc" style="font-size: 0.85rem; margin-bottom: 0.8rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${spotlightBook.description}
        </p>

        <div class="spotlight-price-row">
          <span class="spotlight-price">${formatPrice(spotlightBook.price)}</span>
          ${spotlightBook.oldPrice ? `<span class="spotlight-old-price">${formatPrice(spotlightBook.oldPrice)}</span>` : ''}
        </div>

        <div class="spotlight-actions">
          <button class="btn btn-primary" onclick="handleAddToCart('${spotlightBook.id}')">
            <i class="fa-solid fa-bag-shopping"></i> ${inCart ? 'Savatda mavjud' : 'Savatga qo\'shish'}
          </button>
          <button class="btn btn-outline" onclick="openQuickView('${spotlightBook.id}')">
            <i class="fa-solid fa-eye"></i> Ko'rish
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Sidebar Publisher Checkboxes
function renderSidebarPublishersList() {
  const container = document.getElementById('publisherFilterList');
  if (!container) return;

  // Extract all distinct publishers from database
  const pubSet = new Set(AppState.books.map(b => b.publisher));
  const publishers = Array.from(pubSet).sort();

  container.innerHTML = publishers.map(pubName => {
    const isChecked = AppState.filters.publishers.includes(pubName);
    const count = AppState.books.filter(b => b.publisher === pubName).length;

    return `
      <label class="custom-checkbox">
        <input type="checkbox" name="publisherFilter" value="${pubName}" ${isChecked ? 'checked' : ''}>
        <span class="checkmark"></span>
        <span class="filter-label-text">${pubName}</span>
        <span class="filter-count-badge">(${count})</span>
      </label>
    `;
  }).join('');

  // Event listener on checkboxes
  container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checkedBoxes = Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
      AppState.filters.publishers = checkedBoxes;
      renderPublishersGrid();
      renderActiveFilterTags();
      renderBooksGrid();
    });
  });
}

function syncPublisherCheckboxes() {
  const container = document.getElementById('publisherFilterList');
  if (!container) return;
  container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = AppState.filters.publishers.includes(cb.value);
  });
}

// Render Sidebar Category Filter List
function renderSidebarCategoriesList() {
  const container = document.getElementById('categoryFilterList');
  if (!container) return;

  const categories = [
    { key: 'all', name: 'Barchasi' },
    { key: 'badiiy', name: 'Badiiy adabiyot' },
    { key: 'biznes', name: 'Biznes & Rivojlanish' },
    { key: 'diniy', name: 'Diniy-ma\'rifiy' },
    { key: 'psixologiya', name: 'Psixologiya' },
    { key: 'bolalar', name: 'Bolalar kitoblari' },
    { key: 'tarix', name: 'Tarixiy adabiyot' },
    { key: 'ilmiy', name: 'Ilmiy-ommabop' }
  ];

  container.innerHTML = categories.map(cat => {
    const count = cat.key === 'all' 
      ? AppState.books.length 
      : AppState.books.filter(b => b.category === cat.key).length;
    const isChecked = AppState.filters.category === cat.key;

    return `
      <label class="custom-checkbox">
        <input type="radio" name="sidebarCategoryRadio" value="${cat.key}" ${isChecked ? 'checked' : ''}>
        <span class="checkmark" style="border-radius: 50%;"></span>
        <span class="filter-label-text">${cat.name}</span>
        <span class="filter-count-badge">(${count})</span>
      </label>
    `;
  }).join('');

  container.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      setCategoryFilter(e.target.value);
    });
  });
}

// Render Active Filter Tags (chips with 'x' to dismiss)
function renderActiveFilterTags() {
  const container = document.getElementById('activeFilterTagsContainer');
  if (!container) return;

  const tags = [];

  if (AppState.filters.search) {
    tags.push({
      label: `Qidiruv: "${AppState.filters.search}"`,
      clear: () => {
        AppState.filters.search = '';
        const searchInput = document.getElementById('globalSearchInput');
        if (searchInput) searchInput.value = '';
        document.getElementById('clearSearchBtn').style.display = 'none';
      }
    });
  }

  if (AppState.filters.category !== 'all') {
    const catLabels = {
      badiiy: 'Badiiy adabiyot',
      biznes: 'Biznes & Rivojlanish',
      diniy: 'Diniy-ma\'rifiy',
      psixologiya: 'Psixologiya',
      bolalar: 'Bolalar kitoblari',
      tarix: 'Tarixiy adabiyot',
      ilmiy: 'Ilmiy-ommabop'
    };
    tags.push({
      label: catLabels[AppState.filters.category] || AppState.filters.category,
      clear: () => setCategoryFilter('all')
    });
  }

  AppState.filters.publishers.forEach(pub => {
    tags.push({
      label: pub,
      clear: () => {
        AppState.filters.publishers = AppState.filters.publishers.filter(p => p !== pub);
        syncPublisherCheckboxes();
        renderPublishersGrid();
      }
    });
  });

  if (AppState.filters.minPrice || AppState.filters.maxPrice) {
    const minText = AppState.filters.minPrice ? formatPrice(AppState.filters.minPrice) : '0';
    const maxText = AppState.filters.maxPrice ? formatPrice(AppState.filters.maxPrice) : '∞';
    tags.push({
      label: `Narx: ${minText} — ${maxText}`,
      clear: () => {
        AppState.filters.minPrice = null;
        AppState.filters.maxPrice = null;
        document.getElementById('minPriceInput').value = '';
        document.getElementById('maxPriceInput').value = '';
      }
    });
  }

  if (tags.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = tags.map((t, idx) => `
    <div class="active-filter-tag">
      <span>${t.label}</span>
      <button type="button" data-tag-idx="${idx}" aria-label="Olib tashlash">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.tagIdx, 10);
      if (tags[idx] && tags[idx].clear) {
        tags[idx].clear();
        renderActiveFilterTags();
        renderBooksGrid();
      }
    });
  });
}

// Main Book Filtering and Sorting Engine
function getFilteredAndSortedBooks() {
  return AppState.books.filter(book => {
    // 1. Search Query (title, author, publisher, isbn)
    if (AppState.filters.search) {
      const q = AppState.filters.search.toLowerCase().trim();
      const matchTitle = book.title.toLowerCase().includes(q);
      const matchAuthor = book.author.toLowerCase().includes(q);
      const matchPublisher = book.publisher.toLowerCase().includes(q);
      const matchIsbn = (book.isbn || '').toLowerCase().includes(q);
      if (!matchTitle && !matchAuthor && !matchPublisher && !matchIsbn) {
        return false;
      }
    }

    // 2. Category
    if (AppState.filters.category !== 'all' && book.category !== AppState.filters.category) {
      return false;
    }

    // 3. Publishers
    if (AppState.filters.publishers.length > 0 && !AppState.filters.publishers.includes(book.publisher)) {
      return false;
    }

    // 4. Price range
    if (AppState.filters.minPrice !== null && book.price < AppState.filters.minPrice) {
      return false;
    }
    if (AppState.filters.maxPrice !== null && book.price > AppState.filters.maxPrice) {
      return false;
    }

    // 5. Format (Qattiq / Yumshoq)
    if (AppState.filters.formats.length > 0 && !AppState.filters.formats.includes(book.format)) {
      return false;
    }

    // 6. Language
    if (AppState.filters.langs.length > 0 && !AppState.filters.langs.includes(book.lang)) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (AppState.filters.sort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'sales':
        return (b.salesCount || 0) - (a.salesCount || 0);
      case 'newest':
        return (b.year || 2020) - (a.year || 2020);
      case 'featured':
      default:
        return (b.isSpotlight ? 1 : 0) - (a.isSpotlight ? 1 : 0) || (b.salesCount || 0) - (a.salesCount || 0);
    }
  });
}

// Render Book Grid & Cards
function renderBooksGrid() {
  const container = document.getElementById('booksGrid');
  const emptyState = document.getElementById('emptyResultsState');
  const countHeading = document.getElementById('resultsCountHeading');
  const countSub = document.getElementById('resultsCountSub');
  const mobileCount = document.getElementById('mobileCountInfo');
  if (!container) return;

  const filteredBooks = getFilteredAndSortedBooks();

  // Update counts
  const total = filteredBooks.length;
  const countText = `${total} ta kitob mavjud`;
  if (countSub) countSub.textContent = countText;
  if (mobileCount) mobileCount.textContent = countText;

  if (AppState.filters.category !== 'all') {
    const chip = document.querySelector(`.category-chip[data-category="${AppState.filters.category}"]`);
    if (countHeading && chip) countHeading.textContent = chip.textContent;
  } else if (AppState.filters.publishers.length === 1) {
    if (countHeading) countHeading.textContent = AppState.filters.publishers[0];
  } else {
    if (countHeading) countHeading.textContent = 'Barcha kitoblar';
  }

  // Handle empty state
  if (total === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  } else {
    if (emptyState) emptyState.style.display = 'none';
  }

  // Set view mode class
  container.className = `books-grid ${AppState.filters.viewMode === 'list' ? 'list-view' : ''}`;

  container.innerHTML = filteredBooks.map(book => {
    const inWishlist = AppState.wishlist.includes(book.id);
    const inCart = AppState.cart.some(item => item.id === book.id);
    const discountPercent = book.oldPrice ? Math.round(((book.oldPrice - book.price) / book.oldPrice) * 100) : 0;

    return `
      <article class="book-card" data-book-id="${book.id}">
        
        <!-- Cover Container -->
        <div class="book-cover-container">
          <img 
            src="${book.cover}" 
            alt="${book.title} kitobi muqovasi" 
            class="book-cover-img" 
            loading="lazy"
            onerror="this.src='${PRESET_COVERS[1]}'"
          >
          
          <span class="book-publisher-pill" title="Nashriyot: ${book.publisher}">
            <i class="fa-solid fa-building-columns"></i> ${book.publisher}
          </span>

          ${discountPercent > 0 ? `
            <span class="book-discount-badge">-${discountPercent}%</span>
          ` : ''}

          <button 
            type="button" 
            class="book-wishlist-toggle ${inWishlist ? 'in-wishlist' : ''}" 
            onclick="handleToggleWishlist('${book.id}', event)"
            aria-label="${inWishlist ? 'Sevimlilardan o\'chirish' : 'Sevimlilarga qo\'shish'}"
            title="Sevimlilarga saqlash"
          >
            <i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>

          <button 
            type="button" 
            class="book-quick-view-btn" 
            onclick="openQuickView('${book.id}')"
          >
            <i class="fa-solid fa-eye"></i> Tezkor ko'rish
          </button>
        </div>

        <!-- Book Details Info -->
        <div class="book-info">
          <div class="book-genre-format">
            <span>${book.categoryName || book.category}</span>
            <span>&bull;</span>
            <span>${book.format}</span>
          </div>

          <h4 class="book-title" onclick="openQuickView('${book.id}')" title="${book.title}">
            ${book.title}
          </h4>

          <p class="book-author" title="${book.author}">
            <i class="fa-solid fa-pen-nib" style="font-size: 0.7rem; opacity: 0.6;"></i> ${book.author}
          </p>

          <div class="book-rating-row">
            <i class="fa-solid fa-star"></i>
            <strong>${book.rating}</strong>
            <span class="rating-count">(${book.reviewsCount || 0})</span>
          </div>

          <div class="book-pricing-row">
            <span class="current-price">${formatPrice(book.price)}</span>
            ${book.oldPrice ? `<span class="old-price">${formatPrice(book.oldPrice)}</span>` : ''}
          </div>

          <button 
            type="button" 
            class="btn-add-to-cart ${inCart ? 'in-cart' : ''}" 
            onclick="handleAddToCart('${book.id}', event)"
          >
            <i class="fa-solid ${inCart ? 'fa-circle-check' : 'fa-bag-shopping'}"></i>
            <span>${inCart ? 'Savatda mavjud' : 'Savatga olish'}</span>
          </button>
        </div>

      </article>
    `;
  }).join('');
}

// Category filter switch helper
function setCategoryFilter(categoryKey) {
  AppState.filters.category = categoryKey;

  // Update quick category chips active state
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === categoryKey);
  });

  // Update sidebar radio button
  const radio = document.querySelector(`input[name="sidebarCategoryRadio"][value="${categoryKey}"]`);
  if (radio) radio.checked = true;

  renderActiveFilterTags();
  renderBooksGrid();
}

// ==========================================================================
// 5. SHOPPING CART SYSTEM
// ==========================================================================

function handleAddToCart(bookId, event) {
  if (event) event.stopPropagation();

  const book = AppState.books.find(b => b.id === bookId);
  if (!book) return;

  const existing = AppState.cart.find(item => item.id === bookId);
  if (existing) {
    existing.quantity += 1;
    showToast(`"${book.title}" soni savatda oshirildi (${existing.quantity} dona)`);
  } else {
    AppState.cart.push({ id: bookId, quantity: 1 });
    showToast(`"${book.title}" savatga qo'shildi!`);
  }

  persistCart();
  updateHeaderBadges();
  renderBooksGrid();
  renderSpotlightCard();
  renderCartDrawer();
}

function handleUpdateCartQuantity(bookId, delta) {
  const item = AppState.cart.find(i => i.id === bookId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    AppState.cart = AppState.cart.filter(i => i.id !== bookId);
    showToast('Kitob savatdan olib tashlandi');
  }

  persistCart();
  updateHeaderBadges();
  renderBooksGrid();
  renderCartDrawer();
}

function handleRemoveFromCart(bookId) {
  AppState.cart = AppState.cart.filter(i => i.id !== bookId);
  persistCart();
  updateHeaderBadges();
  renderBooksGrid();
  renderCartDrawer();
  showToast('Kitob savatdan o\'chirildi');
}

function calculateCartTotals() {
  let subtotal = 0;
  let itemCount = 0;

  AppState.cart.forEach(item => {
    const book = AppState.books.find(b => b.id === item.id);
    if (book) {
      subtotal += book.price * item.quantity;
      itemCount += item.quantity;
    }
  });

  // Free delivery rule: Free if subtotal >= 150 000 so'm, else 20 000 so'm
  const deliveryThreshold = 150000;
  const isFreeDelivery = subtotal >= deliveryThreshold || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : 20000;

  // Promo code discount
  let discount = 0;
  if (AppState.promoApplied) {
    discount = Math.round(subtotal * 0.1); // 10% promo discount
  }

  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  return {
    subtotal,
    itemCount,
    deliveryFee,
    isFreeDelivery,
    deliveryThreshold,
    discount,
    grandTotal
  };
}

function updateHeaderBadges() {
  const { itemCount, subtotal } = calculateCartTotals();

  // Cart Badge & Header Total
  const cartBadge = document.getElementById('cartCountBadge');
  const mobCartBadge = document.getElementById('mobCartBadge');
  const cartTotalPreview = document.getElementById('cartHeaderTotal');
  if (cartBadge) cartBadge.textContent = itemCount;
  if (mobCartBadge) mobCartBadge.textContent = itemCount;
  if (cartTotalPreview) cartTotalPreview.textContent = formatPrice(subtotal);

  // Wishlist Badge
  const wishCount = AppState.wishlist.length;
  const wishBadge = document.getElementById('wishlistCountBadge');
  const mobWishBadge = document.getElementById('mobWishlistBadge');
  if (wishBadge) wishBadge.textContent = wishCount;
  if (mobWishBadge) mobWishBadge.textContent = wishCount;
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsContainer');
  const drawerCount = document.getElementById('cartDrawerCount');
  const subtotalText = document.getElementById('cartSubtotalText');
  const discountRow = document.getElementById('discountLine');
  const discountText = document.getElementById('cartDiscountText');
  const deliveryFeeText = document.getElementById('cartDeliveryFeeText');
  const grandTotalText = document.getElementById('cartGrandTotalText');
  const deliveryMeterFill = document.getElementById('deliveryMeterFill');
  const deliveryMeterText = document.getElementById('deliveryMeterText');
  const cartFooter = document.getElementById('cartFooter');

  if (!container) return;

  const { subtotal, itemCount, deliveryFee, isFreeDelivery, deliveryThreshold, discount, grandTotal } = calculateCartTotals();

  if (drawerCount) drawerCount.textContent = `${itemCount} ta kitob`;

  // Free delivery progress meter
  if (subtotal >= deliveryThreshold) {
    if (deliveryMeterText) deliveryMeterText.innerHTML = '<span class="text-success"><i class="fa-solid fa-circle-check"></i> Sizga bepul yetkazib berish xizmati taqdim etildi!</span>';
    if (deliveryMeterFill) deliveryMeterFill.style.width = '100%';
  } else {
    const diff = deliveryThreshold - subtotal;
    const percent = Math.min(100, Math.round((subtotal / deliveryThreshold) * 100));
    if (deliveryMeterText) deliveryMeterText.innerHTML = `<span>Bepul yetkazishgacha yana <strong>${formatPrice(diff)}</strong> xarid qiling</span>`;
    if (deliveryMeterFill) deliveryMeterFill.style.width = `${percent}%`;
  }

  // Empty cart display
  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; color: var(--color-ink-faint); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Savatchangiz bo'sh</h4>
        <p style="color: var(--color-ink-muted); font-size: 0.85rem; margin-bottom: 1.5rem;">
          O'zingizga ma'qul kitoblarni tanlab, savatga qo'shing.
        </p>
        <button class="btn btn-primary" onclick="closeCartDrawer();">
          <i class="fa-solid fa-book-open"></i> Kitob tanlash
        </button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  // Render items
  container.innerHTML = AppState.cart.map(item => {
    const book = AppState.books.find(b => b.id === item.id);
    if (!book) return '';

    return `
      <div class="cart-item">
        <img src="${book.cover}" alt="${book.title}" class="cart-item-img" onerror="this.src='${PRESET_COVERS[0]}'">
        
        <div class="cart-item-details">
          <span class="cart-item-publisher">${book.publisher}</span>
          <h5 class="cart-item-title">${book.title}</h5>
          <span class="cart-item-price">${formatPrice(book.price)}</span>
          
          <div class="cart-item-qty-controls">
            <button class="qty-btn" onclick="handleUpdateCartQuantity('${book.id}', -1)" aria-label="Kamaytirish">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="handleUpdateCartQuantity('${book.id}', 1)" aria-label="Oshirish">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <button class="cart-item-remove-btn" onclick="handleRemoveFromCart('${book.id}')" aria-label="O'chirish" title="O'chirish">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  // Update summary lines
  if (subtotalText) subtotalText.textContent = formatPrice(subtotal);
  if (deliveryFeeText) deliveryFeeText.textContent = isFreeDelivery ? 'Bepul' : formatPrice(deliveryFee);
  if (grandTotalText) grandTotalText.textContent = formatPrice(grandTotal);

  if (discountRow && discountText) {
    if (AppState.promoApplied && discount > 0) {
      discountRow.style.display = 'flex';
      discountText.textContent = `-${formatPrice(discount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
}

// Open/Close Cart Drawer
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartBackdrop').classList.add('active');
  document.getElementById('cartDrawer').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartBackdrop').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 6. WISHLIST SYSTEM
// ==========================================================================

function handleToggleWishlist(bookId, event) {
  if (event) event.stopPropagation();

  const book = AppState.books.find(b => b.id === bookId);
  if (!book) return;

  const idx = AppState.wishlist.indexOf(bookId);
  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    showToast(`"${book.title}" sevimlilardan olib tashlandi`);
  } else {
    AppState.wishlist.push(bookId);
    showToast(`"${book.title}" sevimlilarga qo'shildi!`);
  }

  persistWishlist();
  updateHeaderBadges();
  renderBooksGrid();
  renderSpotlightCard();
  renderWishlistDrawer();
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistItemsContainer');
  const countBadge = document.getElementById('wishlistDrawerCount');
  const footer = document.getElementById('wishlistFooter');
  if (!container) return;

  if (countBadge) countBadge.textContent = `${AppState.wishlist.length} ta`;

  if (AppState.wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i class="fa-regular fa-heart" style="font-size: 3rem; color: var(--color-ink-faint); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Sevimlilar ro'yxati bo'sh</h4>
        <p style="color: var(--color-ink-muted); font-size: 0.85rem;">
          O'zingizga yoqqan kitoblarning yurakchasini bosib, keyinroq xarid qilish uchun saqlab qo'yishingiz mumkin.
        </p>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  container.innerHTML = AppState.wishlist.map(bookId => {
    const book = AppState.books.find(b => b.id === bookId);
    if (!book) return '';

    return `
      <div class="cart-item">
        <img src="${book.cover}" alt="${book.title}" class="cart-item-img" onerror="this.src='${PRESET_COVERS[0]}'">
        
        <div class="cart-item-details">
          <span class="cart-item-publisher">${book.publisher}</span>
          <h5 class="cart-item-title">${book.title}</h5>
          <span class="cart-item-price">${formatPrice(book.price)}</span>
          
          <button class="btn btn-sm btn-primary" style="margin-top: 0.4rem; width: fit-content;" onclick="handleAddToCart('${book.id}')">
            <i class="fa-solid fa-bag-shopping"></i> Savatga olish
          </button>
        </div>

        <button class="cart-item-remove-btn" onclick="handleToggleWishlist('${book.id}')" aria-label="O'chirish" title="O'chirish">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');
}

function openWishlistDrawer() {
  renderWishlistDrawer();
  document.getElementById('wishlistBackdrop').classList.add('active');
  document.getElementById('wishlistDrawer').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
  document.getElementById('wishlistBackdrop').classList.remove('active');
  document.getElementById('wishlistDrawer').classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 7. QUICK VIEW / BOOK DETAILS MODAL
// ==========================================================================

function openQuickView(bookId) {
  const book = AppState.books.find(b => b.id === bookId);
  if (!book) return;

  const content = document.getElementById('quickViewContent');
  const pubBadge = document.getElementById('qvPublisherBadge');
  if (!content) return;

  if (pubBadge) pubBadge.innerHTML = `<i class="fa-solid fa-building-columns"></i> ${book.publisher}`;

  const inCart = AppState.cart.some(item => item.id === book.id);
  const inWishlist = AppState.wishlist.includes(book.id);

  content.innerHTML = `
    <div class="qv-grid">
      <div>
        <img src="${book.cover}" alt="${book.title}" class="qv-cover" onerror="this.src='${PRESET_COVERS[0]}'">
      </div>

      <div>
        <div class="book-genre-format">
          <span>${book.categoryName || book.category}</span>
          <span>&bull;</span>
          <span>${book.format}</span>
        </div>

        <h2 class="qv-title">${book.title}</h2>
        <p class="qv-author">Muallif: <strong>${book.author}</strong></p>

        <div class="qv-rating-strip">
          <i class="fa-solid fa-star"></i>
          <strong>${book.rating}</strong>
          <span style="color: var(--color-ink-muted);">(${book.reviewsCount || 0} ta sharh)</span>
          <span style="margin: 0 0.5rem; opacity: 0.3;">|</span>
          <span style="color: var(--color-brand-primary); font-size: 0.8rem; font-weight: 600;">
            <i class="fa-solid fa-truck-fast"></i> 24 soatda yetkaziladi
          </span>
        </div>

        <div class="qv-specs-table">
          <div class="qv-spec-item">
            <strong>Nashriyot:</strong>
            <span>${book.publisher}</span>
          </div>
          <div class="qv-spec-item">
            <strong>Chop etilgan yili:</strong>
            <span>${book.year || 2023}</span>
          </div>
          <div class="qv-spec-item">
            <strong>Sahifalar soni:</strong>
            <span>${book.pages || '—'} bet</span>
          </div>
          <div class="qv-spec-item">
            <strong>Muqova turi:</strong>
            <span>${book.format}</span>
          </div>
          <div class="qv-spec-item">
            <strong>Nashr tili:</strong>
            <span>${book.lang || 'O\'zbekcha'}</span>
          </div>
          <div class="qv-spec-item">
            <strong>ISBN kodi:</strong>
            <span>${book.isbn || 'Mavjud'}</span>
          </div>
        </div>

        <div class="qv-desc">
          <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--color-ink); margin-bottom: 0.35rem;">
            Kitob haqida:
          </h4>
          <p>${book.description}</p>
        </div>

        <div class="qv-price-actions">
          <div>
            <div class="qv-price">${formatPrice(book.price)}</div>
            ${book.oldPrice ? `<span class="old-price" style="font-size: 0.95rem;">${formatPrice(book.oldPrice)}</span>` : ''}
          </div>

          <button class="btn btn-primary btn-lg" onclick="handleAddToCart('${book.id}'); closeQuickView(); openCartDrawer();">
            <i class="fa-solid fa-bag-shopping"></i> ${inCart ? 'Savatga yana qo\'shish' : 'Savatga qo\'shish'}
          </button>

          <button class="btn btn-outline" onclick="handleToggleWishlist('${book.id}')">
            <i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: ${inWishlist ? 'var(--color-danger)' : 'inherit'};"></i>
          </button>
        </div>

      </div>
    </div>
  `;

  document.getElementById('quickViewBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 8. PUBLISHER BOOK UPLOAD MODAL ("Kitob Sotish")
// ==========================================================================

function openPublisherModal() {
  renderPresetCovers();
  document.getElementById('publisherModalBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePublisherModal() {
  document.getElementById('publisherModalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function renderPresetCovers() {
  const container = document.getElementById('presetCoversBar');
  if (!container) return;

  container.innerHTML = PRESET_COVERS.map(url => `
    <img src="${url}" class="preset-thumb" onclick="selectPresetCover('${url}', this)" alt="Muqova namunasi">
  `).join('');
}

function selectPresetCover(url, thumbEl) {
  const input = document.getElementById('newBookCover');
  if (input) input.value = url;
  
  document.querySelectorAll('.preset-thumb').forEach(el => el.classList.remove('selected'));
  if (thumbEl) thumbEl.classList.add('selected');
}

function handleAddBookSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('newBookTitle').value.trim();
  const author = document.getElementById('newBookAuthor').value.trim();
  let publisher = document.getElementById('newBookPublisher').value;
  
  if (publisher === 'Boshqa nashriyot') {
    const customPub = document.getElementById('newCustomPublisher').value.trim();
    publisher = customPub || 'Mustaqil Nashriyot';
  }

  const category = document.getElementById('newBookCategory').value;
  const price = parseInt(document.getElementById('newBookPrice').value, 10);
  const pages = parseInt(document.getElementById('newBookPages').value, 10) || 280;
  const format = document.getElementById('newBookFormat').value;
  const lang = document.getElementById('newBookLang').value;
  let cover = document.getElementById('newBookCover').value.trim();
  const description = document.getElementById('newBookDesc').value.trim() || 'Ushbu kitob muallif va nashriyot tomonidan bevosita kitobxonlar uchun taqdim etildi.';

  if (!cover) {
    cover = PRESET_COVERS[Math.floor(Math.random() * PRESET_COVERS.length)];
  }

  const catNames = {
    badiiy: 'Badiiy adabiyot',
    biznes: 'Biznes & Rivojlanish',
    diniy: 'Diniy-ma\'rifiy',
    psixologiya: 'Psixologiya & Jamiyat',
    bolalar: 'Bolalar kitoblari',
    tarix: 'Tarixiy adabiyot',
    ilmiy: 'Ilmiy-ommabop'
  };

  const newBook = {
    id: `custom-book-${Date.now()}`,
    title,
    author,
    publisher,
    category,
    categoryName: catNames[category] || 'Boshqa',
    price,
    oldPrice: null,
    rating: 5.0,
    reviewsCount: 1,
    pages,
    format,
    lang,
    isbn: `978-9943-${Math.floor(10 + Math.random() * 89)}-${Math.floor(100 + Math.random() * 899)}-0`,
    year: new Date().getFullYear(),
    salesCount: 0,
    isSpotlight: false,
    cover,
    description
  };

  // Add to top of the catalog
  AppState.books.unshift(newBook);
  persistBooks();

  // Reset form
  document.getElementById('addBookForm').reset();
  closePublisherModal();

  // Refresh views
  renderPublishersGrid();
  renderSidebarPublishersList();
  renderSidebarCategoriesList();
  renderBooksGrid();

  showToast(`"${title}" nashriyot nomidan sotuvga muvaffaqiyatli joylandi!`);

  // Scroll to catalog to see it live
  const catalogEl = document.getElementById('katalog');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================================================
// 9. CHECKOUT SYSTEM (Tezkor buyurtma berish)
// ==========================================================================

function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('Savatchangiz bo\'sh. Avval kitob tanlang!', 'error');
    return;
  }

  closeCartDrawer();

  // Render items preview in checkout
  const previewContainer = document.getElementById('checkoutItemsPreview');
  const coSubtotal = document.getElementById('coSubtotal');
  const coDiscountRow = document.getElementById('coDiscountRow');
  const coDiscount = document.getElementById('coDiscount');
  const coDelivery = document.getElementById('coDelivery');
  const coTotal = document.getElementById('coTotal');

  const { subtotal, deliveryFee, isFreeDelivery, discount, grandTotal } = calculateCartTotals();

  if (previewContainer) {
    previewContainer.innerHTML = AppState.cart.map(item => {
      const book = AppState.books.find(b => b.id === item.id);
      if (!book) return '';
      return `
        <div class="checkout-preview-row">
          <img src="${book.cover}" alt="${book.title}" onerror="this.src='${PRESET_COVERS[0]}'">
          <span class="checkout-preview-row-title">${book.title} (x${item.quantity})</span>
          <strong>${formatPrice(book.price * item.quantity)}</strong>
        </div>
      `;
    }).join('');
  }

  if (coSubtotal) coSubtotal.textContent = formatPrice(subtotal);
  if (coDelivery) coDelivery.textContent = isFreeDelivery ? 'Bepul' : formatPrice(deliveryFee);
  if (coTotal) coTotal.textContent = formatPrice(grandTotal);

  if (coDiscountRow && coDiscount) {
    if (AppState.promoApplied && discount > 0) {
      coDiscountRow.style.display = 'flex';
      coDiscount.textContent = `-${formatPrice(discount)}`;
    } else {
      coDiscountRow.style.display = 'none';
    }
  }

  // Ensure default form view is visible
  document.getElementById('checkoutBody').style.display = 'block';
  document.getElementById('checkoutSuccessScreen').style.display = 'none';

  document.getElementById('checkoutBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkoutBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const region = document.getElementById('orderRegion').value;
  const address = document.getElementById('orderAddress').value.trim();
  const payMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  const orderId = `MQ-${Math.floor(10000 + Math.random() * 90000)}`;

  // Transition to success screen
  document.getElementById('checkoutBody').style.display = 'none';
  const successScreen = document.getElementById('checkoutSuccessScreen');
  successScreen.style.display = 'block';

  document.getElementById('successOrderId').textContent = `#${orderId}`;
  document.getElementById('successPhoneDisplay').textContent = phone;

  // Clear cart
  AppState.cart = [];
  AppState.promoApplied = false;
  AppState.promoDiscount = 0;
  persistCart();
  updateHeaderBadges();
  renderBooksGrid();
}

// ==========================================================================
// 10. SEARCH & FILTERS CONTROLLERS
// ==========================================================================

function setupSearchListeners() {
  const input = document.getElementById('globalSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const triggerBtn = document.getElementById('searchTriggerBtn');

  if (!input) return;

  let debounceTimer = null;

  input.addEventListener('input', (e) => {
    const val = e.target.value;
    clearBtn.style.display = val ? 'block' : 'none';

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      AppState.filters.search = val;
      renderActiveFilterTags();
      renderBooksGrid();
    }, 250);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    AppState.filters.search = '';
    renderActiveFilterTags();
    renderBooksGrid();
    input.focus();
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      AppState.filters.search = input.value;
      renderActiveFilterTags();
      renderBooksGrid();
      const catalogEl = document.getElementById('katalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function setupFilterListeners() {
  // Price filter apply button
  const applyPriceBtn = document.getElementById('applyPriceBtn');
  if (applyPriceBtn) {
    applyPriceBtn.addEventListener('click', () => {
      const minVal = parseInt(document.getElementById('minPriceInput').value, 10);
      const maxVal = parseInt(document.getElementById('maxPriceInput').value, 10);

      AppState.filters.minPrice = isNaN(minVal) ? null : minVal;
      AppState.filters.maxPrice = isNaN(maxVal) ? null : maxVal;

      renderActiveFilterTags();
      renderBooksGrid();
    });
  }

  // Format filter checkboxes (Qattiq / Yumshoq)
  document.querySelectorAll('input[name="formatFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="formatFilter"]:checked')).map(c => c.value);
      AppState.filters.formats = checked;
      renderActiveFilterTags();
      renderBooksGrid();
    });
  });

  // Language filter checkboxes
  document.querySelectorAll('input[name="langFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="langFilter"]:checked')).map(c => c.value);
      AppState.filters.langs = checked;
      renderActiveFilterTags();
      renderBooksGrid();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
      renderBooksGrid();
    });
  }

  // View Mode buttons (Grid vs List)
  const gridBtn = document.getElementById('viewModeGrid');
  const listBtn = document.getElementById('viewModeList');

  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', () => {
      AppState.filters.viewMode = 'grid';
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
      renderBooksGrid();
    });

    listBtn.addEventListener('click', () => {
      AppState.filters.viewMode = 'list';
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
      renderBooksGrid();
    });
  }

  // Reset Filters button
  const resetBtn = document.getElementById('resetFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  function resetAllFilters() {
    AppState.filters.search = '';
    AppState.filters.category = 'all';
    AppState.filters.publishers = [];
    AppState.filters.minPrice = null;
    AppState.filters.maxPrice = null;
    AppState.filters.formats = [];
    AppState.filters.langs = ["O'zbekcha"];
    AppState.filters.sort = 'featured';

    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) searchInput.value = '';
    const clearSearch = document.getElementById('clearSearchBtn');
    if (clearSearch) clearSearch.style.display = 'none';

    document.getElementById('minPriceInput').value = '';
    document.getElementById('maxPriceInput').value = '';
    if (sortSelect) sortSelect.value = 'featured';

    // Reset checkboxes
    syncPublisherCheckboxes();
    document.querySelectorAll('input[name="formatFilter"]').forEach(c => c.checked = false);
    document.querySelectorAll('input[name="langFilter"]').forEach(c => c.checked = c.value === "O'zbekcha");

    // Quick chips
    document.querySelectorAll('.category-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.category === 'all');
    });

    renderPublishersGrid();
    renderActiveFilterTags();
    renderBooksGrid();
    showToast('Barcha filtrlar tozalandi');
  }

  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  // Quick Category Bar Chips
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      setCategoryFilter(chip.dataset.category);
    });
  });

  // Category menu toggle button
  const catMenuBtn = document.getElementById('categoryMenuToggle');
  if (catMenuBtn) {
    catMenuBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('catalogSidebar');
      if (window.innerWidth <= 1024) {
        sidebar.classList.add('active');
      } else {
        const catalogEl = document.getElementById('katalog');
        if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Mobile Filter Drawer toggle
  const mobFilterOpenBtn = document.getElementById('mobileFilterOpenBtn');
  const mobFilterCloseBtn = document.getElementById('mobileFilterCloseBtn');
  const sidebar = document.getElementById('catalogSidebar');

  if (mobFilterOpenBtn && sidebar) {
    mobFilterOpenBtn.addEventListener('click', () => sidebar.classList.add('active'));
  }
  if (mobFilterCloseBtn && sidebar) {
    mobFilterCloseBtn.addEventListener('click', () => sidebar.classList.remove('active'));
  }

  // Promo code in cart
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const input = document.getElementById('promoInput');
      const msg = document.getElementById('promoMessage');
      const code = (input.value || '').trim().toUpperCase();

      if (code === 'KITOBXON' || code === 'MUQOVA') {
        AppState.promoApplied = true;
        AppState.promoCodeName = code;
        msg.className = 'promo-msg success';
        msg.textContent = 'Tabriklaymiz! 10% chegirma faollashtirildi.';
        renderCartDrawer();
      } else {
        msg.className = 'promo-msg error';
        msg.textContent = 'Noto\'g\'ri promokod. Namunaviy: KITOBXON';
      }
    });
  }
}

// ==========================================================================
// 11. INITIALIZATION & EVENT BINDINGS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Load data
  loadPersistedData();

  // Initialize Theme (Dark / Light Mode)
  initTheme();
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  const mobThemeToggleBtn = document.getElementById('mobThemeToggleBtn');
  if (mobThemeToggleBtn) {
    mobThemeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Render initial components
  renderSpotlightCard();
  renderPublishersGrid();
  renderSidebarPublishersList();
  renderSidebarCategoriesList();
  renderBooksGrid();
  updateHeaderBadges();

  // Setup controllers
  setupSearchListeners();
  setupFilterListeners();

  // Cart modal handlers
  document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('cartBackdrop').addEventListener('click', closeCartDrawer);
  document.getElementById('mobOpenCartBtn').addEventListener('click', openCartDrawer);
  document.getElementById('footerCartLink').addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  });

  // Wishlist modal handlers
  document.getElementById('openWishlistBtn').addEventListener('click', openWishlistDrawer);
  document.getElementById('closeWishlistBtn').addEventListener('click', closeWishlistDrawer);
  document.getElementById('wishlistBackdrop').addEventListener('click', closeWishlistDrawer);
  document.getElementById('mobOpenWishlistBtn').addEventListener('click', openWishlistDrawer);
  document.getElementById('footerWishlistLink').addEventListener('click', (e) => {
    e.preventDefault();
    openWishlistDrawer();
  });

  const moveWishToCartBtn = document.getElementById('moveAllWishlistToCartBtn');
  if (moveWishToCartBtn) {
    moveWishToCartBtn.addEventListener('click', () => {
      AppState.wishlist.forEach(id => {
        if (!AppState.cart.some(item => item.id === id)) {
          AppState.cart.push({ id, quantity: 1 });
        }
      });
      AppState.wishlist = [];
      persistWishlist();
      persistCart();
      updateHeaderBadges();
      closeWishlistDrawer();
      openCartDrawer();
      showToast('Barcha sevimlilar savatga ko\'chirildi!');
    });
  }

  // Publisher upload modal handlers
  document.getElementById('openPublisherModalBtn').addEventListener('click', openPublisherModal);
  document.getElementById('closePublisherModalBtn').addEventListener('click', closePublisherModal);
  document.getElementById('cancelAddBookBtn').addEventListener('click', closePublisherModal);
  document.getElementById('heroAddBookBtn').addEventListener('click', openPublisherModal);
  document.getElementById('mobOpenPublisherBtn').addEventListener('click', openPublisherModal);
  document.getElementById('footerAddBookLink').addEventListener('click', (e) => {
    e.preventDefault();
    openPublisherModal();
  });

  document.getElementById('newBookPublisher').addEventListener('change', (e) => {
    const customBox = document.getElementById('customPublisherBox');
    if (customBox) {
      customBox.style.display = e.target.value === 'Boshqa nashriyot' ? 'block' : 'none';
    }
  });

  document.getElementById('pickPresetCoverBtn').addEventListener('click', () => {
    const bar = document.getElementById('presetCoversBar');
    bar.style.display = bar.style.display === 'none' ? 'flex' : 'none';
  });

  document.getElementById('addBookForm').addEventListener('submit', handleAddBookSubmit);

  // Quick view modal handlers
  document.getElementById('closeQuickViewBtn').addEventListener('click', closeQuickView);
  document.getElementById('quickViewBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'quickViewBackdrop') closeQuickView();
  });

  // Checkout modal handlers
  document.getElementById('proceedToCheckoutBtn').addEventListener('click', openCheckoutModal);
  document.getElementById('closeCheckoutBtn').addEventListener('click', closeCheckoutModal);
  document.getElementById('checkoutBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'checkoutBackdrop') closeCheckoutModal();
  });
  document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('successDoneBtn').addEventListener('click', () => {
    closeCheckoutModal();
    const catalogEl = document.getElementById('katalog');
    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeWishlistDrawer();
      closePublisherModal();
      closeQuickView();
      closeCheckoutModal();
      const sidebar = document.getElementById('catalogSidebar');
      if (sidebar) sidebar.classList.remove('active');
    }
  });
});
