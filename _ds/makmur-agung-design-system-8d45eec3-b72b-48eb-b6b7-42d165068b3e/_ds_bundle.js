/* @ds-bundle: {"format":3,"namespace":"MakmurAgungDesignSystem_8d45ee","components":[],"sourceHashes":{"ui_kits/storefront/app.jsx":"48d4ff31cd7c","ui_kits/storefront/components.jsx":"a7b81d722abb","ui_kits/storefront/data.js":"21ef64cd45bf","ui_kits/storefront/screens.jsx":"17098c69aaec","ui_kits/storefront/screens2.jsx":"63113f2ffd77"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MakmurAgungDesignSystem_8d45ee = window.MakmurAgungDesignSystem_8d45ee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/storefront/app.jsx
try { (() => {
/* Makmur Agung storefront — app shell + state router */
function App() {
  useLucide();
  const [screen, setScreen] = React.useState('home');
  const [product, setProduct] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const go = s => {
    setScreen(s);
    window.scrollTo(0, 0);
  };
  const openProduct = p => {
    setProduct(p);
    go('product');
  };
  const addToCart = p => setCart(c => {
    const ex = c.find(i => i.id === p.id);
    if (ex) return c.map(i => i.id === p.id ? {
      ...i,
      qty: i.qty + 1
    } : i);
    return [...c, {
      ...p,
      qty: 1
    }];
  });
  const removeItem = idx => setCart(c => c.filter((_, i) => i !== idx));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopNav, {
    nav: screen,
    go: go,
    cartCount: cartCount,
    onCart: () => go('cart')
  }), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    openProduct: openProduct
  }), screen === 'catalog' && /*#__PURE__*/React.createElement(CatalogScreen, {
    openProduct: openProduct
  }), screen === 'product' && /*#__PURE__*/React.createElement(ProductScreen, {
    p: product,
    go: go,
    addToCart: addToCart
  }), screen === 'booking' && /*#__PURE__*/React.createElement(BookingScreen, {
    go: go
  }), screen === 'cart' && /*#__PURE__*/React.createElement(CartScreen, {
    cart: cart,
    go: go,
    removeItem: removeItem
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(WhatsAppFab, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/components.jsx
try { (() => {
/* Makmur Agung storefront — shared primitives.
   Exposed on window for the screens + app scripts. */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ---- Lucide icon wrapper ---- */
function Icon({
  name,
  size = 20,
  color,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    className: className,
    style: {
      width: size,
      height: size,
      color,
      display: 'inline-flex',
      ...style
    }
  });
}
/* Re-run lucide after every commit so freshly-rendered <i> become svgs */
function useLucide() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

/* ---- Brand glyphs (WhatsApp / Instagram) via Simple Icons CDN ---- */
function BrandIcon({
  name,
  color = 'ffffff',
  size = 18
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.simpleicons.org/${name}/${color}`,
    width: size,
    height: size,
    alt: name,
    style: {
      display: 'block'
    }
  });
}

/* ---- Beam divider ---- */
function Beam({
  width = '100%',
  sweep,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'beam' + (sweep ? ' beam-sweep' : ''),
    style: {
      width,
      ...style
    }
  });
}

/* ---- Logo lockup ---- */
function Logo({
  size = 'md',
  onClick
}) {
  const s = size === 'sm' ? 38 : 46;
  const fs = size === 'sm' ? 22 : 28;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s,
      height: s,
      position: 'relative',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--beam-gradient)',
      clipPath: 'polygon(0 100%, 0 64%, 52% 64%, 52% 30%, 100% 0, 100% 100%)',
      boxShadow: 'var(--beam-glow)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 0.85
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      color: 'var(--on-dark)',
      whiteSpace: 'nowrap'
    }
  }, "Makmur Agung"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size === 'sm' ? 9 : 10,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginTop: 4
    }
  }, "Autoshop \xB7 Aozoom")));
}

/* ---- Buttons ---- */
function Button({
  children,
  variant = 'outline',
  size,
  block,
  icon,
  onClick,
  type
}) {
  const cls = ['btn', variant === 'fill' ? 'btn--fill' : variant === 'ghost' ? 'btn--ghost' : '', size === 'sm' ? 'btn--sm' : '', block ? 'btn--block' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    onClick: onClick
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }));
}
function IconBtn({
  name,
  onClick,
  title
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClick,
    title: title
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 20
  }));
}
function TextLink({
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "tlink",
    onClick: onClick,
    style: {
      cursor: 'pointer'
    }
  }, children, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }));
}

/* ---- Brand contact links (replace with real handles) ---- */
const WA_LINK = 'https://wa.me/6281234567890?text=Halo%20Aozoom%20Malang%2C%20saya%20mau%20tanya%20produk%2Fretrofit';
const IG_LINK = 'https://instagram.com/aozoom.malang';

/* ---- Photo: real image when `src` given, else branded placeholder ---- */
function Photo({
  ratio = '16/10',
  label = 'Foto Produk',
  src,
  overlay = 'left',
  pos = 'center 40%',
  glowAt = {
    top: '26%',
    left: '60%',
    w: '46%',
    h: '44%'
  },
  children,
  style
}) {
  const overlays = {
    left: 'linear-gradient(90deg, rgba(8,9,11,.9) 0%, rgba(8,9,11,.6) 42%, rgba(8,9,11,.12) 100%)',
    right: 'linear-gradient(270deg, rgba(8,9,11,.9) 0%, rgba(8,9,11,.55) 44%, rgba(8,9,11,.12) 100%)',
    center: 'linear-gradient(180deg, rgba(8,9,11,.55), rgba(8,9,11,.78))',
    none: 'linear-gradient(180deg, rgba(8,9,11,.18), rgba(8,9,11,.42))'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      aspectRatio: ratio,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: pos
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: overlays[overlay]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      boxShadow: 'inset 0 0 120px 30px rgba(255,90,31,.10)',
      pointerEvents: 'none'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      top: glowAt.top,
      left: glowAt.left,
      width: glowAt.w,
      height: glowAt.h
    }
  }), children || !src && /*#__PURE__*/React.createElement("span", {
    className: "ph"
  }, label));
}

/* ---- WhatsApp floating launcher ---- */
function WhatsAppFab() {
  return /*#__PURE__*/React.createElement("a", {
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    title: "Order via WhatsApp",
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 80,
      height: 56,
      padding: '0 22px 0 18px',
      borderRadius: 9999,
      background: 'var(--aozoom-orange)',
      color: '#1a0600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      boxShadow: '0 8px 28px rgba(255,90,31,.45)'
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "whatsapp",
    color: "1a0600",
    size: 22
  }), " Order WhatsApp");
}

/* ---- Product card ---- */
function ProductCard({
  p,
  onOpen
}) {
  const D = window.MA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      cursor: 'pointer'
    },
    onClick: () => onOpen && onOpen(p)
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "16/10"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, p.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      textTransform: 'uppercase',
      color: 'var(--on-dark)',
      margin: '7px 0 5px',
      lineHeight: 1.05
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--body)'
    }
  }, [p.power, p.lumens !== '—' && p.lumens, p.kelvin !== '—' && p.kelvin].filter(Boolean).join(' · ')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--on-dark)',
      whiteSpace: 'nowrap'
    }
  }, D.rupiah(p.price)), /*#__PURE__*/React.createElement("span", {
    className: 'badge-stock' + (p.stock ? '' : ' out')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.stock ? 'circle-check' : 'circle-slash',
    size: 13
  }), p.stock ? 'Ready' : 'Inden'))));
}

/* ---- Spec cell ---- */
function SpecCell({
  value,
  unit,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--on-dark)',
      lineHeight: 1
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--beam-cyan)'
    }
  }, " ", unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginTop: 10
    }
  }, label));
}

/* ---- Top navigation ---- */
function TopNav({
  nav,
  go,
  cartCount,
  onCart
}) {
  const items = [['catalog', 'Produk'], ['booking', 'Retrofit'], ['catalog', 'Beam Pattern'], ['catalog', 'Garansi']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(8,9,11,.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm",
    onClick: () => go('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 34
    }
  }, items.map(([dest, label], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => go(dest),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: nav === dest ? 'var(--on-dark)' : 'var(--body)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "search",
    title: "Cari"
  }), /*#__PURE__*/React.createElement("a", {
    href: IG_LINK,
    target: "_blank",
    rel: "noopener",
    className: "icon-btn",
    title: "Instagram"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "instagram",
    color: "ffffff",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onCart,
    title: "Keranjang",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-cart",
    size: 20
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      background: 'var(--aozoom-orange)',
      color: '#1a0600',
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("a", {
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    className: "btn btn--fill btn--sm",
    style: {
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "whatsapp",
    color: "1a0600",
    size: 16
  }), "Order WA"))));
}

/* ---- Footer ---- */
function Footer() {
  const cols = [['Produk', ['Bi-LED Projector', 'HID Xenon', 'Ballast', 'Bohlam LED', 'DRL & Fog']], ['Layanan', ['Booking Retrofit', 'Konsultasi Beam', 'Garansi Klaim', 'Status Order']], ['Workshop', ['Lokasi & Jam', 'Galeri Pemasangan', 'Tentang Kami', 'Karir']], ['Bantuan', ['Cara Order', 'Pengiriman', 'Hubungi Kami', 'FAQ']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--canvas)',
      borderTop: '1px solid var(--hairline)',
      paddingTop: 64,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: 240,
      fontSize: 14
    }
  }, "Reseller resmi Aozoom & workshop retrofit lampu mobil di Malang. Lebih terang, lebih jauh, lebih tajam."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    className: "btn btn--fill btn--sm"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "whatsapp",
    color: "1a0600",
    size: 16
  }), "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: IG_LINK,
    target: "_blank",
    rel: "noopener",
    className: "btn btn--ghost btn--sm"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "instagram",
    color: "e6e9ed",
    size: 16
  }), "Instagram"))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--on-dark)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "\xA9 2026 Makmur Agung Autoshop \xB7 Authorized Aozoom Reseller \xB7 E-MARK \xB7 DOT \xB7 ISO 9001"), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "Bahasa Indonesia \xB7 IDR"))));
}

/* ---- Category tabs ---- */
function CategoryTabs({
  active,
  onPick
}) {
  const D = window.MA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      borderBottom: '1px solid var(--hairline)'
    }
  }, D.cats.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    onClick: () => onPick(c.key),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: active === c.key ? 'var(--on-dark)' : 'var(--body)',
      padding: '0 0 14px',
      position: 'relative',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, c.label, active === c.key && /*#__PURE__*/React.createElement("span", {
    className: "beam",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 2
    }
  }))));
}
Object.assign(window, {
  Icon,
  BrandIcon,
  useLucide,
  Beam,
  Logo,
  Button,
  IconBtn,
  TextLink,
  Photo,
  WhatsAppFab,
  ProductCard,
  SpecCell,
  TopNav,
  Footer,
  CategoryTabs,
  WA_LINK,
  IG_LINK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* Fake catalog + booking data for the Makmur Agung storefront kit.
   Prices in IDR. Specs reflect real Aozoom product lines (Bi-LED
   projectors A5+/A6/CLPD/laser AAPD, HID kits, ballasts, LED bulbs,
   DRLs). Plain JS — attached to window for the JSX scripts. */
(function () {
  const products = [{
    id: 'a6',
    name: 'Aozoom A6 3.0″ Bi-LED',
    cat: 'Bi-LED',
    tag: 'Bi-LED Projector',
    price: 2450000,
    power: '35W',
    lumens: '7200 lm',
    kelvin: '5500K',
    range: '—',
    stock: true,
    blurb: 'Cutoff tajam, hotspot terfokus. Dirancang untuk jalan lurus dan tol — terang maksimal tanpa menyilaukan lawan arah.'
  }, {
    id: 'a5plus',
    name: 'Aozoom A5+ 3.0″ Bi-LED',
    cat: 'Bi-LED',
    tag: 'Non-Destructive',
    price: 1950000,
    power: '35W',
    lumens: '3600 lm',
    kelvin: '5500K',
    range: '—',
    stock: true,
    blurb: 'Versi non-destructive — tinggal pasang ke reflektor tanpa potong housing. Plug & Play.'
  }, {
    id: 'aapd02',
    name: 'Aozoom AAPD-02 Laser Bi-LED',
    cat: 'Bi-LED',
    tag: 'Laser',
    price: 3900000,
    power: '50W',
    lumens: '—',
    kelvin: '5500K',
    range: '850 m',
    stock: true,
    blurb: 'High beam laser ultra long-range 850 meter, ~10× intensitas LED biasa. Teknologi retrofit terbaru.'
  }, {
    id: 'clpd01',
    name: 'Aozoom CLPD-01 3.0″',
    cat: 'Bi-LED',
    tag: 'AI Driver',
    price: 2150000,
    power: '68W',
    lumens: '—',
    kelvin: '6000K',
    range: '—',
    stock: true,
    blurb: 'Driver board AI cerdas, 61W low / 68W high. 5× lebih terang dari lampu standar.'
  }, {
    id: 'hid55',
    name: 'Aozoom D2S HID Xenon Kit',
    cat: 'HID',
    tag: 'Bi-Xenon',
    price: 1250000,
    power: '35W',
    lumens: '3200 lm',
    kelvin: '6000K',
    range: '—',
    stock: true,
    blurb: 'Bi-xenon projector kit dengan ballast Rapid Start. Pilihan klasik retrofit yang terbukti.'
  }, {
    id: 'ballast',
    name: 'Aozoom ABN Rapid-Start Ballast',
    cat: 'Ballast',
    tag: 'Digital',
    price: 650000,
    power: '35W',
    lumens: '—',
    kelvin: '—',
    range: '—',
    stock: true,
    blurb: 'Digital ballast rapid-start. Nyala instan, stabil, tahan getaran.'
  }, {
    id: 'led-h4',
    name: 'Aozoom LED Bulb H4 Canbus',
    cat: 'Bulb',
    tag: 'Plug & Play',
    price: 480000,
    power: '40W',
    lumens: '5500 lm',
    kelvin: '6000K',
    range: '—',
    stock: true,
    blurb: 'Bohlam LED Canbus plug-and-play. Upgrade cepat dari halogen tanpa error dashboard.'
  }, {
    id: 'flp2030',
    name: 'Aozoom FLP-2030 Fog Projector',
    cat: 'DRL',
    tag: 'Fog Lamp',
    price: 890000,
    power: '90W',
    lumens: '—',
    kelvin: '5500K',
    range: '—',
    stock: false,
    blurb: 'Fog lamp projector dual-beam 2.0″. Menembus kabut dan hujan dengan cutoff bersih.'
  }];
  const cats = [{
    key: 'Semua',
    label: 'Semua'
  }, {
    key: 'Bi-LED',
    label: 'Bi-LED'
  }, {
    key: 'HID',
    label: 'HID'
  }, {
    key: 'Ballast',
    label: 'Ballast'
  }, {
    key: 'Bulb',
    label: 'Bohlam'
  }, {
    key: 'DRL',
    label: 'DRL & Fog'
  }];
  const cars = ['Toyota Avanza', 'Honda Brio', 'Mitsubishi Xpander', 'Toyota Fortuner', 'Honda HR-V', 'Suzuki Ertiga', 'Daihatsu Rocky', 'Lainnya'];
  const packages = [{
    id: 'pkg-pnp',
    name: 'Plug & Play LED',
    price: 750000,
    time: '± 1 jam',
    desc: 'Ganti bohlam LED Canbus. Tanpa bongkar housing.'
  }, {
    id: 'pkg-std',
    name: 'Retrofit Bi-LED Standar',
    price: 2900000,
    time: '± 3 jam',
    desc: 'A5+ projector, tanpa potong. Cutoff rapi, garansi 2 tahun.'
  }, {
    id: 'pkg-pro',
    name: 'Retrofit Bi-LED Pro',
    price: 4200000,
    time: '± 5 jam',
    desc: 'A6 projector + shroud custom + angel eye. Hasil show-quality.'
  }, {
    id: 'pkg-laser',
    name: 'Laser High-Beam Build',
    price: 6500000,
    time: '± 6 jam',
    desc: 'AAPD-02 laser, jangkauan 850 m. Build premium untuk tol & touring.'
  }];
  const slots = ['Sen 10:00', 'Sen 14:00', 'Sel 10:00', 'Sel 14:00', 'Rab 10:00', 'Kam 14:00', 'Jum 10:00', 'Sab 09:00'];
  window.MA_DATA = {
    products,
    cats,
    cars,
    packages,
    slots,
    rupiah: n => 'Rp ' + n.toLocaleString('id-ID')
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/screens.jsx
try { (() => {
/* Makmur Agung storefront — Home + Catalog screens */
const {
  useState: useStateS
} = React;
function HomeScreen({
  go,
  openProduct
}) {
  const D = window.MA_DATA;
  const featured = D.products.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "auto",
    src: "../../assets/install-rocky.jpg",
    overlay: "left",
    pos: "center 62%",
    style: {
      aspectRatio: '21/9',
      minHeight: 460,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      fontSize: 12
    }
  }, "Authorized Aozoom Partner \xB7 Malang"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 76,
      margin: '14px 0 0',
      maxWidth: 760
    }
  }, "Lebih Terang.", /*#__PURE__*/React.createElement("br", null), "Lebih Jauh.", /*#__PURE__*/React.createElement("br", null), "Lebih Tajam."), /*#__PURE__*/React.createElement(Beam, {
    width: "120px",
    sweep: true,
    style: {
      margin: '24px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: 480,
      color: 'var(--body-strong)'
    }
  }, "Retrofit Bi-LED Aozoom resmi \u2014 cutoff presisi, tanpa menyilaukan lawan arah. Dipasang teknisi bersertifikat, garansi 2 tahun."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    onClick: () => go('booking')
  }, "Booking Retrofit"), /*#__PURE__*/React.createElement("a", {
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    className: "btn"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "whatsapp",
    color: "ffffff",
    size: 16
  }), "Order via WhatsApp"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-soft)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      padding: '26px 48px',
      flexWrap: 'wrap'
    }
  }, [['shield-check', 'Garansi resmi 2 tahun'], ['badge-check', 'E-MARK & DOT'], ['wrench', 'Teknisi bersertifikat'], ['zap', 'Plug & Play tersedia']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--beam-cyan)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--body-strong)'
    }
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44
    }
  }, "Produk Unggulan"), /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go('catalog')
  }, "Lihat Semua Produk")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: openProduct
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      borderTop: '1px solid var(--hairline)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "auto",
    src: "../../assets/install-fortuner.jpg",
    overlay: "right",
    pos: "center 40%",
    style: {
      aspectRatio: '21/8',
      minHeight: 380,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "Halogen vs Bi-LED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '12px 0 16px'
    }
  }, "Cutoff Tajam.", /*#__PURE__*/React.createElement("br", null), "Bukan Silau."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16
    }
  }, "Projector Aozoom membuat garis cutoff bersih \u2014 terang penuh ke jalan Anda, gelap ke arah lawan. Bukan sekadar bohlam putih yang menyebar dan menyilaukan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go('catalog')
  }, "Pelajari Beam Pattern")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "auto",
    src: "../../assets/install-rocky.jpg",
    overlay: "center",
    pos: "center 38%",
    style: {
      aspectRatio: '21/7',
      minHeight: 300,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 46
    }
  }, "Siap Upgrade Lampu Mobil Anda?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      margin: '14px auto 28px',
      maxWidth: 520
    }
  }, "Booking slot retrofit di workshop kami. Konsultasi beam gratis sebelum pasang."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    onClick: () => go('booking')
  }, "Booking Retrofit"), /*#__PURE__*/React.createElement("a", {
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    className: "btn"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "whatsapp",
    color: "ffffff",
    size: 16
  }), "Order via WhatsApp"))))));
}
function CatalogScreen({
  openProduct
}) {
  const D = window.MA_DATA;
  const [cat, setCat] = useStateS('Semua');
  const list = cat === 'Semua' ? D.products : D.products.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '56px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      fontSize: 12
    }
  }, "Katalog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      margin: '10px 0 8px'
    }
  }, "Lighting Hardware"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      marginBottom: 36
    }
  }, "Bi-LED projector, HID xenon, ballast, bohlam LED, dan DRL Aozoom resmi. Semua bergaransi."), /*#__PURE__*/React.createElement(CategoryTabs, {
    active: cat,
    onPick: setCat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 36
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: openProduct
  }))));
}
Object.assign(window, {
  HomeScreen,
  CatalogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/screens2.jsx
try { (() => {
/* Makmur Agung storefront — Product detail, Booking, Cart screens */
const {
  useState: useStateS2
} = React;
function ProductScreen({
  p,
  go,
  addToCart
}) {
  const D = window.MA_DATA;
  const [added, setAdded] = useStateS2(false);
  const thumbs = [0, 1, 2, 3];
  const [active, setActive] = useStateS2(0);
  if (!p) return null;
  const specs = [p.power && {
    v: p.power.replace('W', ''),
    u: 'W',
    l: 'Daya'
  }, p.lumens !== '—' && {
    v: p.lumens.replace(' lm', ''),
    u: 'lm',
    l: 'Lumens'
  }, p.kelvin !== '—' && {
    v: p.kelvin.replace('K', ''),
    u: 'K',
    l: 'Color Temp'
  }, p.range !== '—' && {
    v: p.range.replace(' m', ''),
    u: 'm',
    l: 'Jangkauan'
  }, {
    v: '2',
    u: 'thn',
    l: 'Garansi'
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '40px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 28
    },
    className: "caption"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer'
    }
  }, "BERANDA"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => go('catalog'),
    style: {
      cursor: 'pointer'
    }
  }, "KATALOG"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--body)'
    }
  }, p.name.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4/3",
    src: "../../assets/install-rocky.jpg",
    overlay: "none",
    pos: "center 42%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 12
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setActive(i),
    style: {
      cursor: 'pointer',
      border: active === i ? '1px solid var(--aozoom-orange)' : '1px solid var(--hairline)'
    }
  }, i === 0 ? /*#__PURE__*/React.createElement(Photo, {
    ratio: "4/3",
    src: "../../assets/install-rocky.jpg",
    overlay: "none",
    pos: "center 42%"
  }) : i === 1 ? /*#__PURE__*/React.createElement(Photo, {
    ratio: "4/3",
    src: "../../assets/install-fortuner.jpg",
    overlay: "none",
    pos: "center 40%"
  }) : /*#__PURE__*/React.createElement(Photo, {
    ratio: "4/3",
    label: "",
    glowAt: {
      top: '30%',
      left: '45%',
      w: '50%',
      h: '46%'
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, p.tag), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      margin: '8px 0 6px',
      lineHeight: 1.02
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: 'badge-stock' + (p.stock ? '' : ' out')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.stock ? 'circle-check' : 'circle-slash',
    size: 14
  }), p.stock ? 'Ready Stock' : 'Inden 7–10 hari'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 16
    }
  }, p.blurb), /*#__PURE__*/React.createElement(Beam, {
    width: "80px",
    style: {
      margin: '28px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      color: 'var(--on-dark)',
      whiteSpace: 'nowrap'
    }
  }, D.rupiah(p.price)), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "belum termasuk pemasangan")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    onClick: () => {
      addToCart(p);
      setAdded(true);
    }
  }, added ? 'Ditambahkan ✓' : 'Tambah ke Keranjang'), /*#__PURE__*/React.createElement("a", {
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    className: "btn"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "whatsapp",
    color: "ffffff",
    size: 16
  }), "Order WA")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['truck', 'Gratis ongkir se-Jabodetabek di atas Rp 1.5jt'], ['shield-check', 'Garansi resmi 2 tahun, klaim di workshop'], ['wrench', 'Pemasangan oleh teknisi bersertifikat']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, t)))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      margin: '72px 0 24px'
    }
  }, "Spesifikasi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${specs.length}, 1fr)`,
      gap: 1,
      background: 'var(--hairline)',
      border: '1px solid var(--hairline)'
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement(SpecCell, {
    key: i,
    value: s.v,
    unit: s.u,
    label: s.l
  }))));
}
function BookingScreen({
  go
}) {
  const D = window.MA_DATA;
  const [car, setCar] = useStateS2(D.cars[0]);
  const [pkg, setPkg] = useStateS2(D.packages[1].id);
  const [slot, setSlot] = useStateS2(D.slots[0]);
  const [done, setDone] = useStateS2(false);
  const chosen = D.packages.find(p => p.id === pkg);
  if (done) return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '120px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 56,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      margin: '24px 0 12px'
    }
  }, "Booking Diterima"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      maxWidth: 460,
      margin: '0 auto 8px'
    }
  }, chosen.name, " untuk ", car, ", slot ", slot, ". Tim kami akan konfirmasi via WhatsApp dalam 1 jam."), /*#__PURE__*/React.createElement(Beam, {
    width: "100px",
    style: {
      margin: '28px auto'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    onClick: () => go('home')
  }, "Kembali ke Beranda"));
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '56px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      fontSize: 12
    }
  }, "Workshop"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      margin: '10px 0 8px'
    }
  }, "Booking Retrofit"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      marginBottom: 44
    }
  }, "Pilih mobil, paket, dan slot pemasangan. Konsultasi beam gratis sebelum eksekusi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "field-label"
  }, "01 \xB7 Mobil Anda"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, D.cars.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: 'pill' + (car === c ? ' pill--on' : ''),
    onClick: () => setCar(c),
    style: {
      cursor: 'pointer'
    }
  }, c)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "field-label"
  }, "02 \xB7 Paket Retrofit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, D.packages.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => setPkg(p.id),
    style: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 20px',
      background: 'var(--surface-card)',
      border: pkg === p.id ? '1px solid var(--beam-cyan)' : '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      textTransform: 'uppercase',
      color: 'var(--on-dark)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginTop: 4
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      marginTop: 8
    }
  }, "ESTIMASI ", p.time.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--on-dark)',
      whiteSpace: 'nowrap',
      marginLeft: 16
    }
  }, D.rupiah(p.price)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "field-label"
  }, "03 \xB7 Slot Pemasangan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, D.slots.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: 'pill' + (slot === s ? ' pill--on' : ''),
    onClick: () => setSlot(s),
    style: {
      cursor: 'pointer'
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96,
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "Ringkasan"), /*#__PURE__*/React.createElement(Beam, {
    width: "48px",
    style: {
      margin: '16px 0'
    }
  }), [['Mobil', car], ['Paket', chosen.name], ['Estimasi', chosen.time], ['Slot', slot]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, k.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--on-dark)',
      textAlign: 'right',
      maxWidth: 160
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--body)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--on-dark)'
    }
  }, D.rupiah(chosen.price))), /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    block: true,
    onClick: () => setDone(true)
  }, "Konfirmasi Booking"), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      marginTop: 14,
      textAlign: 'center'
    }
  }, "Pembayaran DP saat konfirmasi via WhatsApp"))));
}
function CartScreen({
  cart,
  go,
  removeItem
}) {
  const D = window.MA_DATA;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (!cart.length) return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '120px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-cart",
    size: 48,
    color: "var(--muted)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      margin: '20px 0 10px'
    }
  }, "Keranjang Kosong"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 28
    }
  }, "Belum ada produk. Jelajahi katalog lighting kami."), /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    onClick: () => go('catalog')
  }, "Lihat Produk"));
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '56px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      marginBottom: 36
    }
  }, "Keranjang"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--hairline)'
    }
  }, cart.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 18,
      padding: 18,
      borderBottom: idx < cart.length - 1 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      flex: '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4/3",
    label: "",
    glowAt: {
      top: '28%',
      left: '48%',
      w: '50%',
      h: '48%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, i.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      textTransform: 'uppercase',
      color: 'var(--on-dark)',
      margin: '4px 0'
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, [i.power, i.kelvin !== '—' && i.kelvin].filter(Boolean).join(' · ')), /*#__PURE__*/React.createElement("span", {
    onClick: () => removeItem(idx),
    className: "caption",
    style: {
      cursor: 'pointer',
      marginTop: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 12
  }), " HAPUS")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--on-dark)'
    }
  }, D.rupiah(i.price * i.qty))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "Ringkasan"), /*#__PURE__*/React.createElement(Beam, {
    width: "48px",
    style: {
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "SUBTOTAL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--on-dark)'
    }
  }, D.rupiah(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "ONGKIR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--success)'
    }
  }, "GRATIS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--body)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--on-dark)'
    }
  }, D.rupiah(total))), /*#__PURE__*/React.createElement(Button, {
    variant: "fill",
    block: true
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    block: true,
    onClick: () => go('booking')
  }, "+ Sekalian Pasang di Workshop")))));
}
Object.assign(window, {
  ProductScreen,
  BookingScreen,
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/screens2.jsx", error: String((e && e.message) || e) }); }

})();
