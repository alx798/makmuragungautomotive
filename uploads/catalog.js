/* ============================================================
   catalog.js — Aozoom Product Catalog
   Reads data/products.json and renders product cards with
   category filtering. No frameworks, no build step.
   ============================================================ */

(function () {
  'use strict';

  const CONTACT_PAGE = 'contact.html'; // adjust if your contact page has a different name

  // ── Helpers ────────────────────────────────────────────────

  function formatRupiah(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
  }

  function tagLabel(tag) {
    const map = {
      'new-arrival':   'New Arrival',
      'laser':         'Laser',
      'plug-and-play': 'Plug & Play',
    };
    return map[tag] || tag;
  }

  function tagClass(tag) {
    return 'tag tag--' + tag;
  }

  // ── Card builder ───────────────────────────────────────────

  function buildCard(product) {
    const tags = product.tags.map(t =>
      `<span class="${tagClass(t)}">${tagLabel(t)}</span>`
    ).join('');

    const waterproof = product.waterproof
      ? `<span class="spec-badge">${product.waterproof}</span>`
      : '';

    const priceNote = product.price_note
      ? `<p class="price-note">⚠ ${product.price_note}</p>`
      : '';

    const vehicleList = product.vehicles
      ? `<p class="vehicle-fit">Fits: ${product.vehicles.join(', ')}</p>`
      : '';

    return `
      <article class="product-card" data-category="${product.category}">
        <div class="card-header">
          <div class="card-tags">${tags} ${waterproof}</div>
          <p class="card-type">${product.type}</p>
          <h3 class="card-name">${product.name}</h3>
          ${vehicleList}
        </div>

        <div class="card-specs">
          <div class="spec-row">
            <span class="spec-label">Size</span>
            <span class="spec-value">${product.size}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Colour Temp</span>
            <span class="spec-value">${product.color_temp}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Low Beam</span>
            <span class="spec-value">${product.specs.low_beam_w}W</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">High Beam</span>
            <span class="spec-value">${product.specs.high_beam_w}W</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Chip</span>
            <span class="spec-value">${product.specs.chip}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Warranty</span>
            <span class="spec-value">${product.warranty_years} Years</span>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-price">
            <span class="price-label">from</span>
            <span class="price-amount">${formatRupiah(product.price_idr)}</span>
          </div>
          ${priceNote}
          <a href="${CONTACT_PAGE}?product=${encodeURIComponent(product.name)}"
             class="btn-inquire">Inquire / Book Install</a>
        </div>
      </article>
    `;
  }

  // ── Filter controls ────────────────────────────────────────

  function buildFilters(categories) {
    const container = document.getElementById('catalog-filters');
    if (!container) return;

    const allBtn = `<button class="filter-btn active" data-category="all">All Products</button>`;
    const catBtns = categories.map(cat =>
      `<button class="filter-btn" data-category="${cat.id}">${cat.label}</button>`
    ).join('');

    container.innerHTML = allBtn + catBtns;

    container.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      // update active state
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selected = btn.dataset.category;
      filterCards(selected);
    });
  }

  function filterCards(category) {
    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    const countEl = document.getElementById('catalog-count');
    if (countEl) countEl.textContent = visibleCount + ' product' + (visibleCount !== 1 ? 's' : '');
  }

  // ── Main init ──────────────────────────────────────────────

  function init(data) {
    buildFilters(data.categories);

    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    grid.innerHTML = data.products.map(buildCard).join('');

    const countEl = document.getElementById('catalog-count');
    if (countEl) countEl.textContent = data.products.length + ' products';
  }

  // ── Bootstrap ──────────────────────────────────────────────

  fetch('data/products.json')
    .then(function (res) {
      if (!res.ok) throw new Error('Could not load product data.');
      return res.json();
    })
    .then(init)
    .catch(function (err) {
      const grid = document.getElementById('catalog-grid');
      if (grid) grid.innerHTML = '<p class="load-error">Product data could not be loaded. Please try refreshing.</p>';
      console.error(err);
    });

})();
