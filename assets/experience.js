/* ============================================================
   MAKMUR AGUNG — Interactive experience engine  (STUDIO rebuild)
   --------------------------------------------------------------
   Progressive-enhancement layer for the homepage:
     • Minimal light preloader (counts up, beam fills, curtain lifts)
     • Lenis smooth scroll wired into GSAP ScrollTrigger
     • Three.js INTERACTIVE LIGHT FIELD behind the floating car —
       drifting luminous dust + a soft volumetric key glow that
       parallaxes toward the cursor (the hero's "wow")
     • GSAP studio reveal: car floats in, headlights ignite,
       kinetic headline assembles
     • Custom cursor, magnetic buttons, scroll-fill manifesto,
       pinned product rail, beam-line process, counters, comparison
   If Three / GSAP / Lenis are missing, every block bails quietly
   and the static site (site.css + site.js) stays intact.
   Honors prefers-reduced-motion throughout.
   ============================================================ */
(function () {
  'use strict';

  var mm = window.matchMedia;
  var prefersReduced = mm && mm('(prefers-reduced-motion: reduce)').matches;
  var isTouch = mm && mm('(hover: none)').matches;
  var FINE = mm && mm('(hover: hover) and (pointer: fine)').matches;
  var hasGSAP = !!window.gsap;
  var hasST = hasGSAP && !!window.ScrollTrigger;
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function cssVar(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function rupiah(n) { return 'Rp ' + (n || 0).toLocaleString('id-ID'); }
  function waLinkFor(name) {
    var base = (window.MA && window.MA.WA_NUMBER) ? window.MA.WA_NUMBER : '6281220599998';
    var msg = 'Halo Aozoom Malang, saya tertarik dengan ' + name + '. Bisa info stok & estimasi pasang?';
    return 'https://wa.me/' + base + '?text=' + encodeURIComponent(msg);
  }
  function $(s, c) { return (c || document).querySelector(s); }
  function $all(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }

  var ORANGE = cssVar('--aozoom-orange', '#FF5A1F');

  /* ============================================================
     SMOOTH SCROLL (Lenis) wired into ScrollTrigger
     ============================================================ */
  var lenis = null;
  function initLenis() {
    if (prefersReduced || !window.Lenis) return null;
    try {
      lenis = new Lenis({ duration: 1.1, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true });
    } catch (e) { return null; }
    document.documentElement.classList.add('lenis');
    window.__maLenis = lenis;
    lenis.stop();
    lenis.on('scroll', function () { if (window.ScrollTrigger) ScrollTrigger.update(); });
    if (hasGSAP) {
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
    $all('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        lenis.scrollTo(t, { offset: -76 });
      });
    });
    return lenis;
  }

  /* ============================================================
     MINIMAL PRELOADER — light curtain
     ============================================================ */
  function unlock() {
    document.documentElement.classList.remove('is-loading');
    if (lenis) lenis.start();
    if (hasST) ScrollTrigger.refresh();
  }
  function hidePreloader(el) {
    if (!el) return;
    el.classList.add('is-done');
    el.style.display = 'none';
  }

  function initPreloader(done) {
    var el = $('#preloader');
    var seen = false;
    try { seen = sessionStorage.getItem('ma_intro') === '1'; } catch (e) {}
    // Only play the intro curtain once per session — repeat visits to the
    // homepage skip straight to content so navigation feels instant.
    if (!el || prefersReduced || !hasGSAP || seen) { hidePreloader(el); unlock(); done(); return; }
    try { sessionStorage.setItem('ma_intro', '1'); } catch (e) {}

    var fill = $('#plFill'), pct = $('#plPct');
    var words = $all('[data-pl="line"]', el);
    var counter = { v: 0 };

    var tl = gsap.timeline({ onComplete: function () { hidePreloader(el); done(); } });
    tl.to(words, { y: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out' }, 0)
      .to(fill, { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, 0.2)
      .to(counter, {
        v: 100, duration: 1.4, ease: 'power2.inOut',
        onUpdate: function () { if (pct) pct.textContent = Math.round(counter.v); }
      }, 0.2)
      .to(words, { y: '-110%', duration: 0.5, stagger: 0.06, ease: 'power3.in' }, '+=0.12')
      .add(unlock, '-=0.05')
      .to(el, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '-=0.25');
  }

  function initMagnetic() {
    if (!FINE || prefersReduced || !hasGSAP) return;
    $all('.fx-magnetic').forEach(function (btn) {
      var qx = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      var qy = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        qx((e.clientX - (r.left + r.width / 2)) * 0.35);
        qy((e.clientY - (r.top + r.height / 2)) * 0.35);
      });
      btn.addEventListener('pointerleave', function () { qx(0); qy(0); });
    });
  }

  /* ============================================================
     SCROLL CHOREOGRAPHY (ScrollTrigger)
     ============================================================ */
  function initScrollFX() {
    if (!hasST || prefersReduced) return;

    var bar = $('.scroll-beam');
    if (bar) gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

    // parallax imagery
    $all('[data-parallax]').forEach(function (el) {
      var amt = parseFloat(el.getAttribute('data-parallax')) || 12;
      gsap.fromTo(el, { yPercent: -amt }, {
        yPercent: amt, ease: 'none',
        scrollTrigger: { trigger: el.closest('.cta, .g') || el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    // marquee reacts to scroll velocity
    var track = $('.marquee__track');
    if (track) {
      var skew = gsap.quickSetter(track, 'skewX', 'deg');
      ScrollTrigger.create({
        onUpdate: function (self) {
          skew(gsap.utils.clamp(-12, 12, self.getVelocity() / -260));
          gsap.to(track, { skewX: 0, duration: 0.6, ease: 'power3', overwrite: true });
        }
      });
    }

    // CTA headline pop
    gsap.fromTo('.cta__h', { scale: 0.94, opacity: 0.4 }, {
      scale: 1, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta', start: 'top 75%' }
    });

    // sec-head headings: subtle line lift
    $all('.sec-head__h').forEach(function (h) {
      gsap.from(h, { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 86%' } });
    });
  }

  /* ============================================================
     STAT COUNTERS
     ============================================================ */
  function runCount(node) {
    var end = parseFloat(node.getAttribute('data-count')) || 0;
    var dec = parseInt(node.getAttribute('data-dec') || '0', 10);
    var sep = node.getAttribute('data-sep') === 'dot';
    function render(v) {
      var s = v.toFixed(dec);
      if (sep) s = Math.round(v).toLocaleString('id-ID');
      node.textContent = s;
    }
    if (!hasGSAP || prefersReduced) { render(end); return; }
    var obj = { v: 0 };
    gsap.to(obj, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: function () { render(obj.v); } });
  }
  function initCounters() {
    $all('.count').forEach(function (node) {
      if (hasST && !prefersReduced) {
        ScrollTrigger.create({ trigger: node, start: 'top 92%', once: true, onEnter: function () { runCount(node); } });
      } else { runCount(node); }
    });
  }

  /* ============================================================
     SERVICE CARDS — 3D tilt + reactive glow
     ============================================================ */
  function initServiceTilt() {
    $all('.svc[data-tilt]').forEach(function (card) {
      var glow = $('.svc__glow', card);
      if (FINE && hasGSAP && !prefersReduced) {
        card.style.transformPerspective = '900px';
        var qx = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3' });
        var qy = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3' });
        card.addEventListener('pointermove', function (e) {
          var r = card.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          qx((px - 0.5) * 10); qy(-((py - 0.5) * 10));
          if (glow) { glow.style.setProperty('--gx', px * 100 + '%'); glow.style.setProperty('--gy', py * 100 + '%'); }
        });
        card.addEventListener('pointerleave', function () { qx(0); qy(0); });
      }
    });
  }

  /* ============================================================
     COMPARISON SLIDER (Halogen vs Bi-LED)
     ============================================================ */
  function initCompare() {
    var el = $('#beamCompare');
    if (!el) return;
    var handle = $('.compare__handle', el);
    var dragging = false;

    function set(pct) {
      pct = Math.max(2, Math.min(98, pct));
      el.style.setProperty('--pos', pct + '%');
      if (handle) handle.setAttribute('aria-valuenow', Math.round(pct));
    }
    function fromEvent(e) {
      var r = el.getBoundingClientRect();
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      set(((clientX - r.left) / r.width) * 100);
    }
    el.addEventListener('pointerdown', function (e) { dragging = true; el.classList.add('is-drag'); fromEvent(e); });
    window.addEventListener('pointermove', function (e) { if (dragging) { fromEvent(e); if (e.cancelable) e.preventDefault(); } }, { passive: false });
    window.addEventListener('pointerup', function () { dragging = false; el.classList.remove('is-drag'); });

    if (handle) {
      handle.setAttribute('tabindex', '0');
      handle.setAttribute('role', 'slider');
      handle.setAttribute('aria-valuemin', '0');
      handle.setAttribute('aria-valuemax', '100');
      handle.addEventListener('keydown', function (e) {
        var c = parseFloat(getComputedStyle(el).getPropertyValue('--pos')) || 50;
        if (e.key === 'ArrowLeft') { set(c - 4); e.preventDefault(); }
        else if (e.key === 'ArrowRight') { set(c + 4); e.preventDefault(); }
      });
    }
    set(50);

    if (hasST && !prefersReduced) {
      ScrollTrigger.create({
        trigger: el, start: 'top 78%', once: true,
        onEnter: function () {
          var o = { p: 82 };
          gsap.timeline({ defaults: { onUpdate: function () { set(o.p); } } })
            .to(o, { p: 30, duration: 1.4, ease: 'power2.inOut' })
            .to(o, { p: 52, duration: 0.9, ease: 'power2.out' }, '+=0.3');
        }
      });
    }
  }

  /* ============================================================
     PRODUCT RAIL — data-driven cards + pinned horizontal scroll
     ============================================================ */
  var PRODUCTS = [
    { name: 'Megatron', img: 'megatron', cat: 'Premium Laser', type: 'Premium Laser Projector · 3"', temp: '5500K', low: 70, high: 90, price: 26000000, tag: 'LASER' },
    { name: 'Prime', img: 'prime', cat: 'Premium Laser', type: 'Premium Laser Projector · 3"', temp: '5500K', low: 60, high: 85, price: 22000000, tag: 'LASER' },
    { name: 'Innova Zenix', img: 'innova-zenix', cat: 'Plug & Play', type: 'Headlamp Plug & Play Kit · OEM Fit', temp: '6000K', low: 145, high: 171, price: 15750000, tag: 'PLUG & PLAY' },
    { name: 'Omega Laser', img: 'omega-laser', cat: 'Laser', type: 'Laser Projector Headlight · 3"', temp: '5500K', low: 70, high: 80, price: 7000000, tag: 'LASER' },
    { name: 'Leo', img: 'leo', cat: 'Headlamp', type: 'Car LED Projector Headlight · 3"', temp: '5000K', low: 70, high: 78, price: 4975000, tag: 'BARU' },
    { name: 'Captain', img: 'captain', cat: 'Matrix', type: 'Matrix LED Projector · 1.8"', temp: '5500K', low: 104, high: 136, price: 3700000, tag: '' },
    { name: 'White Wolf', img: 'white-wolf', cat: 'Headlamp', type: 'Car LED Projector Headlight · 2.5"', temp: '5000K', low: 96, high: 106, price: 3050000, tag: 'BARU' }
  ];

  function buildRail() {
    var track = $('#railTrack');
    if (!track) return;
    var html = PRODUCTS.map(function (p) {
      var badge = p.tag ? '<span class="pcard__badge">' + p.tag + '</span>' : '';
      return '<article class="pcard" role="listitem">' +
        '<div class="pcard__media">' +
          '<span class="pcard__beam"></span>' +
          (badge ? '<div class="pcard__tags">' + badge + '</div>' : '') +
          '<span class="pcard__catTag">' + p.cat + '</span>' +
          '<img src="assets/product-images/' + p.img + '.jpg" alt="' + p.name + ' Aozoom" loading="lazy" decoding="async">' +
        '</div>' +
        '<div><h3 class="pcard__name">' + p.name + '</h3><p class="pcard__type">' + p.type + '</p></div>' +
        '<div class="pcard__specs">' +
          '<span class="pcard__spec">' + p.temp + '</span>' +
          '<span class="pcard__spec">Low <b>' + p.low + 'W</b></span>' +
          '<span class="pcard__spec">High <b>' + p.high + 'W</b></span>' +
        '</div>' +
        '<div class="pcard__foot">' +
          '<a class="pcard__wa" href="' + waLinkFor(p.name) + '" target="_blank" rel="noopener" data-cursor="Chat" aria-label="Tanya ' + p.name + ' via WhatsApp">' +
            '<span class="pcard__wa-ico" aria-hidden="true"><img src="https://cdn.simpleicons.org/whatsapp/06210f" width="14" height="14" alt=""></span>' +
            '<span class="pcard__wa-txt"><b>Tanya via WhatsApp</b><small>Cek stok &amp; estimasi pasang</small></span>' +
          '</a>' +
          '<a class="pcard__cta" href="/produk" data-cursor="Detail" aria-label="Lihat ' + p.name + '"><i data-lucide="arrow-up-right"></i></a>' +
        '</div>' +
      '</article>';
    }).join('');
    html += '<article class="pcard pcard--all" role="listitem">' +
      '<h3 class="pcard__name">Lihat<br>Semua</h3>' +
      '<p class="pcard__type" style="min-height:0">29+ projector di katalog Aozoom</p>' +
      '<a class="pcard__cta" href="/produk" data-cursor="Katalog" aria-label="Lihat semua produk"><i data-lucide="arrow-right"></i></a>' +
    '</article>';
    track.innerHTML = html;

    if (window.lucide) window.lucide.createIcons();
    if (window.__maCursorBind) window.__maCursorBind();

    var rail = $('#rail');
    if (!hasST || prefersReduced || isTouch) return;

    var bar = $('#railBar');
    var distance = function () { return Math.max(0, track.scrollWidth - window.innerWidth + 48); };
    if (distance() < 60) return;

    rail.classList.add('is-pinnable');
    var setH = function () { rail.style.height = (window.innerHeight + distance()) + 'px'; };
    setH();
    gsap.to(track, {
      x: function () { return -distance(); }, ease: 'none',
      scrollTrigger: {
        trigger: rail, start: 'top top', end: function () { return '+=' + distance(); },
        scrub: 1, invalidateOnRefresh: true,
        onRefresh: setH,
        onUpdate: function (self) { if (bar) bar.style.width = (self.progress * 100) + '%'; }
      }
    });
  }

  /* ============================================================
     PROCESS — beam-line draw + ignite steps
     ============================================================ */
  function initProcess() {
    var fill = $('#stepsFill');
    if (hasST && !prefersReduced) {
      if (fill) gsap.to(fill, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 72%', end: 'bottom 78%', scrub: 0.4 } });
      $all('.step').forEach(function (s) {
        ScrollTrigger.create({ trigger: s, start: 'top 80%', onEnter: function () { s.classList.add('is-lit'); }, onLeaveBack: function () { s.classList.remove('is-lit'); } });
      });
    } else {
      if (fill) fill.style.transform = 'scaleX(1)';
      $all('.step').forEach(function (s) { s.classList.add('is-lit'); });
    }
  }

  /* ============================================================
     Robust scroll-reveal safety net (never leave content hidden)
     ============================================================ */
  function initRevealSafety() {
    var els = $all('.reveal');
    if (!els.length) return;
    var ticking = false;
    function show(el) { el.style.opacity = '1'; el.style.transform = 'none'; el.classList.add('in'); }
    function check() {
      ticking = false;
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = els.length - 1; i >= 0; i--) {
        var r = els[i].getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) { show(els[i]); els.splice(i, 1); }
      }
      if (!els.length) { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(check); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', check);
    check();
    setTimeout(check, 700);
    setTimeout(function () { els.slice().forEach(show); els.length = 0; }, 4200);
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function boot() {
    initMagnetic();
    initScrollFX();
    initCounters();
    initServiceTilt();
    initCompare();
    initProcess();
    buildRail();
    initRevealSafety();
    if (window.lucide) window.lucide.createIcons();

    if (hasST) {
      window.addEventListener('load', function () { ScrollTrigger.refresh(); });
      setTimeout(function () { ScrollTrigger.refresh(); }, 900);
    }
  }

  function start() {
    initLenis();
    initPreloader(boot);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
