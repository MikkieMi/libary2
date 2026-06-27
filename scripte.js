// =============================================
// БАЗА ДАННЫХ КНИГ
// cover: "img/otkan_kunlar.jpg" — papkaga rasm qo'yib, shu yerda yo'lni yozing
// cover: "" — bo'sh qoldirsangiz, kulrang placeholder ko'rsatiladi
// =============================================
const books = [
    {
        id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy",
        category: "Badiiy adabiyot", genre: "badiiy", year: 1926, pages: 320,
        rating: 4.9, readers: 12450,
        cover: "img/otkan_kunlar.jpg", // <-- rasm yo'lini shu yerga yozing
        description: "O'zbek adabiyotining eng mashhur romanlaridan biri. 20-asr boshlarida O'zbekiston hayotini tasvirlaydi.",
        isPopular: true, isNew: false,
        text: `<p class="lead text-center mb-4"><strong>1-BOB. ХОН КИЗИНИНГ ТЎЙИ КУНИДА</strong></p>
            <p>1264-нчи ҳижрий, далв ойининг ўн еттинчиси, қишқи кунларнинг бири, қуёш ботқан, теваракдан шом азони эшитилмақда эди...</p>
            <p>Марғилоннинг машҳур савдогарлар растаси ёпилиб, карвонсаройларга одамлар ўрнаша бошлаган бир пайт. Тошкандлик ёш савдогар Отабек ўз ҳужрасида чуқур ўйға ботқан ҳолда ўтирарди.</p>
            <p>— Отабек, ўғлим, ухламадингми? — дея ичкарига Раҳмат ака кириб келди. — Шаҳарда катта гап юрибди.</p>
            <p>Отабек оғир хўрсинди. У юртнинг келажаги ҳақида ўйларди...</p>`
    },
    { id: 2,  title: "Boburnoma",              author: "Zahiriddin Muhammad Bobur", category: "Tarixiy",          genre: "tarixiy",   year: 1530, pages: 450, rating: 4.8, readers: 8900,  cover: "img/boburnoma.jpg",           description: "Boburning o'z hayoti va davri haqidagi memuarlari.",                          isPopular: true,  isNew: false },
    { id: 3,  title: "Sariq devni minib",      author: "Xudoyberdi To'xtaboyev",   category: "Badiiy adabiyot", genre: "badiiy",     year: 1958, pages: 280, rating: 4.6, readers: 6700,  cover: "img/sariq_dev.jpg",           description: "Bolalar uchun yozilgan qiziqarli qissa.",                                      isPopular: true,  isNew: false },
    { id: 4,  title: "Kecha va kunduz",        author: "Cho'lpon",                 category: "Badiiy adabiyot", genre: "badiiy",     year: 1936, pages: 360, rating: 4.7, readers: 7200,  cover: "img/kecha_kunduz.jpg",        description: "20-asr boshlarida O'zbekiston hayotini aks ettiruvchi roman.",                 isPopular: true,  isNew: false },
    { id: 5,  title: "Dunyoning ishlari",      author: "O'tkir Hoshimov",          category: "Badiiy adabiyot", genre: "badiiy",     year: 1990, pages: 380, rating: 4.9, readers: 15600, cover: "img/dunyoning_ishlari.jpg",   description: "Zamonaviy o'zbek romanining eng yaxshi namunalaridan biri.",                   isPopular: true,  isNew: false },
    { id: 6,  title: "Ulug'bek xazinasi",      author: "Oybek",                    category: "Tarixiy",          genre: "tarixiy",   year: 1974, pages: 420, rating: 4.7, readers: 8100,  cover: "img/ulugbek_xazinasi.jpg",    description: "Ulug'bek davri haqidagi tarixiy roman.",                                       isPopular: false, isNew: false },
    { id: 7,  title: "Yulduzli tunlar",        author: "G'afur G'ulom",            category: "Badiiy adabiyot", genre: "badiiy",     year: 1958, pages: 290, rating: 4.5, readers: 5900,  cover: "img/yulduzli_tunlar.jpg",     description: "She'rlar to'plami. G'afur G'ulomning eng yaxshi asarlari.",                    isPopular: false, isNew: false },
    { id: 8,  title: "Mehrobdan chayon",       author: "Abdulla Qahhor",           category: "Badiiy adabiyot", genre: "badiiy",     year: 1960, pages: 310, rating: 4.4, readers: 5300,  cover: "img/mehrobdan_chayon.jpg",    description: "Hikoyalar to'plami.",                                                          isPopular: false, isNew: false },
    { id: 9,  title: "Shum bola",              author: "G'afur G'ulom",            category: "Badiiy adabiyot", genre: "badiiy",     year: 1958, pages: 180, rating: 4.6, readers: 6800,  cover: "img/shum_bola.jpg",           description: "Bolalar uchun yozilgan qiziqarli hikoyalar.",                                  isPopular: true,  isNew: false },
    { id: 10, title: "O'zbek tili grammatikasi", author: "A. Gulomov",             category: "Ilmiy",            genre: "ilmiy",     year: 2015, pages: 520, rating: 4.3, readers: 4200,  cover: "img/grammatika.jpg",          description: "O'zbek tilining to'liq grammatik qoidalari.",                                  isPopular: false, isNew: false },
    { id: 11, title: "Matematika 10-sinf",     author: "M. Yusupov",               category: "Ilmiy",            genre: "ilmiy",     year: 2020, pages: 280, rating: 4.2, readers: 3800,  cover: "img/matematika.jpg",          description: "10-sinf matematika darsligi.",                                                 isPopular: false, isNew: true  },
    { id: 12, title: "Fizika asoslari",        author: "S. Tursunov",              category: "Ilmiy",            genre: "ilmiy",     year: 2018, pages: 340, rating: 4.4, readers: 3100,  cover: "img/fizika.jpg",              description: "Fizikaning asosiy qonunlari va tamoyillari.",                                  isPopular: false, isNew: false },
    { id: 13, title: "Jahon tarixi",           author: "P. Johnson",               category: "Tarixiy",          genre: "tarixiy",   year: 2019, pages: 680, rating: 4.7, readers: 5600,  cover: "img/jahon_tarixi.jpg",        description: "Jahon tarixining qisqacha kursi.",                                             isPopular: true,  isNew: true  },
    { id: 14, title: "Yulduzlar jangi",        author: "A. Clarke",                category: "Fantastika",       genre: "fantastika", year: 2021, pages: 420, rating: 4.5, readers: 7800, cover: "img/yulduzlar_jangi.jpg",     description: "Koinot fazosida bo'lib o'tadigan epik jang haqidagi roman.",                  isPopular: true,  isNew: true  },
    { id: 15, title: "Sherlock Holmes",        author: "Arthur Conan Doyle",       category: "Detektiv",         genre: "detektiv",  year: 1887, pages: 560, rating: 4.9, readers: 22000, cover: "img/sherlock.jpg",            description: "Dunyoning eng mashhur detektiv romanlaridan biri.",                            isPopular: true,  isNew: false },
    { id: 16, title: "Navoiy",                 author: "Oybek",                    category: "Tarixiy",          genre: "tarixiy",   year: 1944, pages: 390, rating: 4.8, readers: 9300,  cover: "img/navoiy.jpg",              description: "Alisher Navoiy hayoti va ijodi haqidagi roman.",                               isPopular: true,  isNew: false }
];

// =============================================
// HOLAT O'ZGARUVCHILARI
// =============================================
let currentFilter = 'all';
let currentGenre  = 'all';
let searchTerm    = '';
let currentPage   = 1;
const BOOKS_PER_PAGE = 9999; // Barcha kitoblarni bir sahifada ko'rsatish

// =============================================
// YORDAMCHI FUNKSIYALAR
// =============================================
function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    let h = '';
    for (let i = 0; i < full; i++) h += '<i class="bi bi-star-fill"></i>';
    if (half) h += '<i class="bi bi-star-half"></i>';
    return h;
}

function getFilteredBooks() {
    return books.filter(book => {
        const mF = currentFilter === 'all' ||
                   (currentFilter === 'popular' && book.isPopular) ||
                   (currentFilter === 'new' && book.isNew);
        const mG = currentGenre === 'all' || book.genre === currentGenre;
        const mS = searchTerm === '' ||
                   book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   book.author.toLowerCase().includes(searchTerm.toLowerCase());
        return mF && mG && mS;
    });
}

// =============================================
// KITOBLAR RENDER
// =============================================
function renderBooks() {
    const filtered  = getFilteredBooks();
    const total     = Math.ceil(filtered.length / BOOKS_PER_PAGE);
    if (currentPage > total) currentPage = 1;
    const start     = (currentPage - 1) * BOOKS_PER_PAGE;
    const pageBooks = filtered.slice(start, start + BOOKS_PER_PAGE);

    document.getElementById('books-count').textContent =
        `${filtered.length} ta kitob topildi`;

    const container = document.getElementById('books-container');

    if (pageBooks.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#6b7280;">
                <i class="bi bi-search" style="font-size:2rem;display:block;margin-bottom:12px;"></i>
                Kitob topilmadi
            </div>`;
    } else {
        container.innerHTML = pageBooks.map(book => {
            const badge = book.isNew ? '<span class="book-badge">Yangi</span>' :
                          book.isPopular ? '<span class="book-badge">Mashhur</span>' : '';

            // Muqova: fayl yo'li bormi yoki placeholder?
            const src = book.cover || '';
            let coverHtml;
            if (src) {
                coverHtml = `<img class="book-cover-img" src="${src}" alt="${book.title}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="book-no-cover" style="display:none;">
                        <i class="bi bi-image"></i>
                        <span>Muqova yo'q</span>
                    </div>`;
            } else {
                coverHtml = `<div class="book-no-cover">
                    <i class="bi bi-image"></i>
                    <span>Muqova yo'q</span>
                </div>`;
            }

            return `
            <div class="book-card" onclick="showBookDetails(${book.id})">
                <div class="book-cover">
                    ${badge}
                    ${coverHtml}
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-desc">${book.description}</div>
                    <div class="book-footer">
                        <div class="book-rating">${renderStars(book.rating)} ${book.rating}</div>
                        <button class="btn-read-sm"
                            onclick="event.stopPropagation(); simulateReading(${book.id})">
                            O'qish
                        </button>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    renderPagination(total);
}

// =============================================
// PAGINATSIYA
// =============================================
function renderPagination(totalPages) {
    const c = document.getElementById('pagination-container');
    if (totalPages <= 1) { c.innerHTML = ''; return; }

    let h = `<button class="page-btn" onclick="goToPage(${currentPage-1})"
                ${currentPage===1?'disabled style="opacity:.4;cursor:not-allowed;"':''}>
                <i class="bi bi-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        h += `<button class="page-btn ${i===currentPage?'active':''}"
                onclick="goToPage(${i})">${i}</button>`;
    }

    h += `<button class="page-btn" onclick="goToPage(${currentPage+1})"
            ${currentPage===totalPages?'disabled style="opacity:.4;cursor:not-allowed;"':''}>
            <i class="bi bi-chevron-right"></i></button>`;

    c.innerHTML = h;
}

function goToPage(page) {
    const total = Math.ceil(getFilteredBooks().length / BOOKS_PER_PAGE);
    if (page < 1 || page > total) return;
    currentPage = page;
    renderBooks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================
// KITOB BATAFSIL MODAL
// =============================================
function showBookDetails(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    const src = book.cover || '';
    const coverHtml = src
        ? `<img src="${src}" alt="${book.title}"
               style="width:100%;height:100%;object-fit:cover;border-radius:8px;"
               onerror="this.outerHTML='<div style=\'width:100%;height:100%;background:#e5e7eb;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#9ca3af;gap:8px\'><i class=\'bi bi-image\' style=\'font-size:2rem\'></i><span style=\'font-size:.8rem\'>Muqova yo\'q</span></div>'">`
        : `<div style="width:100%;height:100%;background:#e5e7eb;border-radius:8px;
                display:flex;flex-direction:column;align-items:center;justify-content:center;
                color:#9ca3af;gap:8px;">
               <i class="bi bi-image" style="font-size:2rem;"></i>
               <span style="font-size:.8rem;">Muqova yo'q</span>
           </div>`;

    document.getElementById('bookReaderModalLabel').textContent = book.title;
    document.getElementById('bookReaderContent').innerHTML = `
        <div class="row g-3">
            <div class="col-md-4">
                <div style="aspect-ratio:3/4;overflow:hidden;border-radius:8px;">${coverHtml}</div>
            </div>
            <div class="col-md-8">
                <h5 class="fw-bold mb-1">${book.title}</h5>
                <p class="text-muted small mb-2">${book.author} · ${book.year}</p>
                <div class="d-flex gap-3 mb-3" style="font-size:.8rem;color:#6b7280;flex-wrap:wrap;">
                    <span><i class="bi bi-file-text me-1"></i>${book.pages} sahifa</span>
                    <span><i class="bi bi-people me-1"></i>${book.readers.toLocaleString()} o'quvchi</span>
                    <span><i class="bi bi-star-fill me-1 text-warning"></i>${book.rating}</span>
                </div>
                <p style="font-size:.875rem;line-height:1.7;color:#374151;">${book.description}</p>
                <div class="d-flex gap-2 mt-3 flex-wrap">
                    <button class="btn btn-primary btn-sm" onclick="simulateReading(${book.id})">
                        <i class="bi bi-play-circle me-1"></i> O'qishni boshlash
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" onclick="showSimilarBooks(${book.id})">
                        <i class="bi bi-books me-1"></i> O'xshash kitoblar
                    </button>
                </div>
            </div>
        </div>`;

    new bootstrap.Modal(document.getElementById('bookReaderModal')).show();
}

// =============================================
// O'QISH OYNASI
// =============================================
function simulateReading(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('reading-book-title').textContent  = book.title;
    document.getElementById('reading-book-author').textContent = book.author;
    document.getElementById('reading-book-chapter').textContent = '1-BOB';

    document.getElementById('reading-book-text').innerHTML = book.text || `
        <p class="lead"><strong>"${book.title}"</strong> — ${book.description}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <p>${book.author} tomonidan yozilgan ushbu asar jami ${book.pages} sahifadan iborat.</p>
        <p>Keyingi yangilanishda to'liq matn qo'shiladi.</p>`;

    const first = bootstrap.Modal.getInstance(document.getElementById('bookReaderModal'));
    if (first) first.hide();

    setTimeout(() => {
        new bootstrap.Modal(document.getElementById('bookReadingWindow')).show();
        showNotification(`"${book.title}" ochildi`, 'success');
    }, 350);

    book.readers += 1;
    renderBooks();
}

// =============================================
// O'XSHASH KITOBLAR
// =============================================
function showSimilarBooks(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    const similar = books.filter(b => b.id !== bookId && b.genre === book.genre).slice(0, 3);
    if (!similar.length) { showNotification("O'xshash kitoblar topilmadi", 'info'); return; }
    let msg = `"${book.title}" ga o'xshash kitoblar:\n\n`;
    similar.forEach(b => { msg += `• ${b.title} (${b.author})\n`; });
    alert(msg);
}

// =============================================
// BILDIRISHNOMA
// =============================================
function showNotification(message, type = 'info') {
    const div = document.createElement('div');
    div.className = `alert alert-${type} alert-dismissible fade show notification`;
    div.innerHTML = `${message}<button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>`;
    document.body.appendChild(div);
    setTimeout(() => { if (div.parentElement) div.remove(); }, 4000);
}

// =============================================
// MOBIL SIDEBAR
// =============================================
function setupMobileSidebar() {
    const burger  = document.getElementById('burgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarCloseBtn');

    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', openSidebar);
    overlay.addEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    // Janr/kategoriya bosilganda mobilda sidebar yopilsin
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) closeSidebar();
        });
    });
}

// =============================================
// MOBIL QIDIRUV
// =============================================
function setupMobileSearch() {
    const btn = document.getElementById('mobileSearchBtn');
    const bar = document.getElementById('mobileSearchBar');
    const input = document.getElementById('searchInputMobile');

    btn.addEventListener('click', () => {
        bar.classList.toggle('open');
        if (bar.classList.contains('open')) input.focus();
    });

    input.addEventListener('input', e => {
        searchTerm = e.target.value;
        // Asosiy input bilan sinxron
        document.getElementById('searchInput').value = searchTerm;
        currentPage = 1;
        renderBooks();
    });
}

// =============================================
// SAHIFA YUKLANGANDA
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    renderBooks();
    setupMobileSidebar();
    setupMobileSearch();

    // Desktop qidiruv
    document.getElementById('searchInput').addEventListener('input', function (e) {
        searchTerm = e.target.value;
        document.getElementById('searchInputMobile').value = searchTerm;
        currentPage = 1;
        renderBooks();
    });
    document.getElementById('searchButton').addEventListener('click', function () {
        searchTerm = document.getElementById('searchInput').value;
        currentPage = 1;
        renderBooks();
    });

    // Filtr tugmalari
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderBooks();
        });
    });

    // Sidebar kategoriyalar
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentFilter = this.getAttribute('data-category');
            currentGenre  = 'all';
            currentPage   = 1;
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            renderBooks();
        });
    });

    // Janrlar
    document.querySelectorAll('.genre-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentGenre  = this.getAttribute('data-genre');
            currentFilter = 'all';
            currentPage   = 1;
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            renderBooks();
        });
    });

    // Sevimlilar
    document.getElementById('favorites-link').addEventListener('click', function (e) {
        e.preventDefault();
        showNotification("Sevimlilar bo'limi keyingi yangilanishlarda qo'shiladi", 'info');
    });
});
