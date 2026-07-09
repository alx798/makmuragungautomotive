/* ============================================================
   MAKMUR AGUNG AUTOMOTIVE — shared site behavior
   Injects nav + footer + WhatsApp FAB, wires the mobile drawer,
   Lucide icons, scroll-reveal, and the homepage hero switcher.
   Each page sets <body data-page="..."> to mark the active nav item.
   ============================================================ */
(function () {
  var WA_NUMBER = '6281220599998';
  var WA_TEXT = 'Halo%20Aozoom%20Malang%2C%20saya%20ingin%20konsultasi%20retrofit%20lampu%20mobil';
  var WA_LINK = 'https://wa.me/' + WA_NUMBER + '?text=' + WA_TEXT;
  var WA_DISPLAY = '0812-2059-9998';
  var IG_HANDLE = 'aozoom.malang';
  var IG_LINK = 'https://instagram.com/' + IG_HANDLE;
  var ADDRESS = 'Jl. Letjen Sutoyo No. 92 A, Bunulrejo, Kec. Blimbing, Kota Malang, Jawa Timur 65123';
  var MAPS_LINK = 'https://maps.google.com/?q=' + encodeURIComponent('Aozoom Malang, ' + ADDRESS);

  // expose for pages
  window.MA = { WA_NUMBER: WA_NUMBER, WA_LINK: WA_LINK, WA_DISPLAY: WA_DISPLAY, IG_LINK: IG_LINK, IG_HANDLE: IG_HANDLE, ADDRESS: ADDRESS, MAPS_LINK: MAPS_LINK };

  var PAGES = [
    ['beranda',   'Beranda',   'index.html'],
    ['layanan',   'Layanan',   'Layanan.html'],
    ['produk',    'Produk',    'Produk.html'],
    ['tentang',   'Tentang',   'Tentang.html'],
    ['testimoni', 'Testimoni', 'Testimoni.html'],
    ['kontak',    'Kontak',    'Kontak.html']
  ];

  function ig(size, color) {
    return '<img src="https://cdn.simpleicons.org/instagram/' + color + '" width="' + size + '" height="' + size + '" alt="Instagram">';
  }
  function wa(size, color) {
    return '<img src="https://cdn.simpleicons.org/whatsapp/' + color + '" width="' + size + '" height="' + size + '" alt="WhatsApp">';
  }

  var active = document.body.getAttribute('data-page') || 'beranda';

  function logo(extraSub) {
    return '<a class="logo" href="index.html" aria-label="Makmur Agung Automotive">' +
      '<img class="logo__mark" src="assets/ma-logo.png" alt="Makmur Agung" width="96" height="35">' +
      '<span class="logo__text">' +
        '<span class="logo__name">Makmur Agung</span>' +
        '<span class="logo__sub">Automotive \u00b7 Aozoom Malang</span>' +
      '</span></a>';
  }

  /* ---------- NAV ---------- */
  function buildNav() {
    var links = PAGES.map(function (p) {
      return '<a class="nav__link' + (p[0] === active ? ' is-active' : '') + '" href="' + p[2] + '">' + p[1] + '</a>';
    }).join('');

    var html =
      '<header class="nav"><div class="wrap"><div class="nav__inner">' +
        logo() +
        '<nav class="nav__links">' + links + '</nav>' +
        '<div class="nav__actions">' +
          '<a class="icon-btn" href="' + IG_LINK + '" target="_blank" rel="noopener" title="Instagram">' + ig(19, 'ffffff') + '</a>' +
          '<a class="btn btn--wa btn--sm nav-cta-hide" href="' + WA_LINK + '" target="_blank" rel="noopener">' + wa(16, '06210f') + 'Order WA</a>' +
          '<button class="icon-btn nav__burger" id="ma-burger" aria-label="Menu"><i data-lucide="menu"></i></button>' +
        '</div>' +
      '</div></div></header>';

    var drawerLinks = PAGES.map(function (p) {
      return '<a class="drawer__link' + (p[0] === active ? ' is-active' : '') + '" href="' + p[2] + '">' + p[1] + '<span class="ix"><i data-lucide="arrow-up-right"></i></span></a>';
    }).join('');

    html +=
      '<div class="drawer" id="ma-drawer">' +
        '<div class="drawer__scrim" data-close></div>' +
        '<div class="drawer__panel">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">' +
            logo() +
            '<button class="icon-btn" data-close aria-label="Tutup"><i data-lucide="x"></i></button>' +
          '</div>' +
          drawerLinks +
          '<a class="btn btn--wa btn--block" style="margin-top:22px" href="' + WA_LINK + '" target="_blank" rel="noopener">' + wa(17, '06210f') + 'Order via WhatsApp</a>' +
          '<a class="btn btn--ghost btn--block" style="margin-top:10px" href="' + IG_LINK + '" target="_blank" rel="noopener">' + ig(17, 'e6e9ed') + '@' + IG_HANDLE + '</a>' +
        '</div>' +
      '</div>';

    var mount = document.getElementById('ma-nav');
    if (mount) mount.outerHTML = html;
    else document.body.insertAdjacentHTML('afterbegin', html);
  }

  /* ---------- FOOTER ---------- */
  function buildFooter() {
    var html =
      '<footer class="footer"><div class="wrap">' +
        '<div class="footer__grid">' +
          '<div>' + logo() +
            '<p class="footer__blurb">Reseller resmi Aozoom & workshop retrofit lampu mobil di Malang. Lebih terang, lebih jauh, lebih tajam \u2014 dipasang teknisi bersertifikat.</p>' +
            '<div class="footer__social">' +
              '<a class="icon-btn" href="' + WA_LINK + '" target="_blank" rel="noopener" title="WhatsApp">' + wa(19, 'ffffff') + '</a>' +
              '<a class="icon-btn" href="' + IG_LINK + '" target="_blank" rel="noopener" title="Instagram">' + ig(19, 'ffffff') + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer__col"><h4>Navigasi</h4>' +
            PAGES.map(function (p) { return '<a href="' + p[2] + '">' + p[1] + '</a>'; }).join('') +
          '</div>' +
          '<div class="footer__col"><h4>Layanan</h4>' +
            '<a href="Layanan.html">Retrofit Bi-LED</a>' +
            '<a href="Layanan.html">Pasang HID / Xenon</a>' +
            '<a href="Layanan.html">Angel Eye & DRL</a>' +
            '<a href="Layanan.html">Restorasi Headlamp</a>' +
            '<a href="Layanan.html">Konsultasi Beam</a>' +
          '</div>' +
          '<div class="footer__col"><h4>Workshop</h4>' +
            '<p>' + ADDRESS + '</p>' +
            '<a href="tel:+' + WA_NUMBER + '">' + WA_DISPLAY + '</a>' +
            '<p>Senin\u2013Sabtu \u00b7 09.00\u201318.00<br>Minggu tutup</p>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom">' +
          '<span class="caption">\u00a9 2026 Makmur Agung Automotive \u00b7 Authorized Aozoom Reseller \u00b7 E-MARK \u00b7 DOT \u00b7 ISO 9001</span>' +
          '<span class="caption">Malang, Jawa Timur \u00b7 Bahasa Indonesia</span>' +
        '</div>' +
      '</div></footer>';

    var mount = document.getElementById('ma-footer');
    if (mount) mount.outerHTML = html;
    else document.body.insertAdjacentHTML('beforeend', html);

    // FAB
    document.body.insertAdjacentHTML('beforeend',
      '<a class="wa-fab" href="' + WA_LINK + '" target="_blank" rel="noopener">' + wa(23, '06210f') + 'Order WhatsApp</a>');
  }

  /* ---------- Drawer interactions ---------- */
  function wireDrawer() {
    var burger = document.getElementById('ma-burger');
    var drawer = document.getElementById('ma-drawer');
    if (!burger || !drawer) return;
    burger.addEventListener('click', function () { drawer.classList.add('is-open'); document.body.style.overflow = 'hidden'; });
    drawer.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close') || e.target.closest('[data-close]')) {
        drawer.classList.remove('is-open'); document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function wireReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Prefetch internal pages for instant navigation ---------- */
  function wirePrefetch() {
    var done = {};
    function add(href) {
      if (!href || done[href]) return;
      done[href] = 1;
      var l = document.createElement('link');
      l.rel = 'prefetch';
      l.href = href;
      document.head.appendChild(l);
    }
    function internalHref(a) {
      if (!a || a.target === '_blank') return null;
      var href = a.getAttribute('href') || '';
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) return null;
      return /\.html(\?|#|$)/.test(href) ? href.split('#')[0] : null;
    }
    // Warm a page the moment the user hovers/touches its link.
    document.addEventListener('pointerover', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      var href = internalHref(a);
      if (href) add(href);
    }, { passive: true });
    // Warm every nav target once the page is idle.
    var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 1200); };
    idle(function () { PAGES.forEach(function (p) { add(p[2]); }); }, { timeout: 3000 });
  }

  function init() {
    buildNav();
    buildFooter();
    wireDrawer();
    wireReveal();
    wirePrefetch();
    if (window.lucide) window.lucide.createIcons();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
