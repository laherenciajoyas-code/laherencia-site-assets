(function() {
  'use strict';

  // ============================================================
  // LA HERENCIA JOYAS — Site Enhancement Script v5
  // Inspired by: Bibi van der Velden, TANE, Mejuri
  // ============================================================

  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function() {

    // -------------------------------------------------------
    // 1. CUSTOM CSS — Luxury-inspired refinements
    // -------------------------------------------------------
    var css = document.createElement('style');
    css.id = 'lh-custom-styles';
    css.textContent = [

      // — Google Fonts —
      '@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Raleway:wght@300;400;500;600;700&display=swap");',

      // — Override theme CSS variables — white-dominant palette —
      ':root { --color-background: #FFFFFF !important; --color-main: #2C2C2C !important; --color-secondary: #96722E !important; --color-links: #96722E !important; --color-background-contrast: #1A1A1A !important; }',

      // — Anti-aliasing —
      'body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #FFFFFF !important; color: #2C2C2C !important; }',

      // — Global typography —
      'body, .theme-font-text { font-family: "Raleway", "Helvetica Neue", sans-serif !important; font-weight: 400; letter-spacing: 0.01em; line-height: 1.7; color: #2C2C2C !important; }',
      'h1, h2, h3, h4, h5, h6, .theme-font-title, .product-card__title, .theme-section__title { font-family: "Cormorant Garamond", Georgia, serif !important; font-weight: 500; letter-spacing: 0.04em; color: #1A1A1A !important; }',
      'h1, .theme-section__title { font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; font-size: 1.8rem; }',
      'h2 { font-weight: 500; letter-spacing: 0.05em; }',

      // — White background for main content areas —
      '.theme-section { background-color: #FFFFFF !important; }',
      '.header-top, .header { background-color: #FFFFFF !important; }',

      // — Navigation bar — deep charcoal, TANE-inspired —
      '.header-navigation { background: #1A1A1A !important; }',
      'nav.header-nav { background: #1A1A1A !important; }',
      '.header-nav__menu { gap: 0 !important; justify-content: center !important; }',
      '.header-nav__item { position: relative; }',
      '.header-nav__item + .header-nav__item::before { content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 1px; height: 18px; background: rgba(255,255,255,0.15); }',
      'nav.header-nav .header-nav__anchor:not(.header-nav__anchor--categories.header__button) { color: #F5F5F3 !important; }',
      'nav.header-nav .header-nav__anchor { font-family: "Raleway", sans-serif !important; font-weight: 500 !important; font-size: 0.72rem !important; text-transform: uppercase !important; letter-spacing: 0.14em !important; padding: 0 1.8rem !important; transition: all 0.3s ease !important; }',
      'nav.header-nav .header-nav__anchor:hover { color: #C9A96E !important; background: rgba(255,255,255,0.05) !important; }',
      '.header { border-bottom: none !important; }',

      // — Section titles — Mejuri-inspired: clean, centered, generous spacing —
      '.theme-section__title { position: relative; display: inline-block; padding-bottom: 0.75rem; margin-bottom: 2rem !important; font-family: "Cormorant Garamond", Georgia, serif !important; color: #1A1A1A !important; }',
      '.theme-section__subtitle { font-family: "Raleway", sans-serif !important; font-size: 0.75rem !important; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 400; color: #6B6B6B !important; opacity: 1 !important; }',
      '.theme-section__description { font-family: "Raleway", sans-serif !important; font-size: 0.88rem; line-height: 1.8; color: #4A4A4A !important; opacity: 1 !important; }',

      // — Section dividers — subtle, Mejuri-like —
      '.theme-section + .theme-section { border-top: 1px solid #EBEBEB; }',
      '.theme-section { padding-top: 4rem !important; padding-bottom: 4rem !important; }',

      // — Slider/Hero — text legibility over photos —
      '.theme-slider .theme-section__subtitle { font-family: "Raleway", sans-serif !important; font-weight: 300 !important; letter-spacing: 0.2em !important; font-size: 0.75rem !important; text-transform: uppercase; color: #FFFFFF !important; text-shadow: 0 1px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3) !important; }',
      '.theme-slider .theme-section__title { font-family: "Cormorant Garamond", Georgia, serif !important; font-weight: 300 !important; letter-spacing: 0.08em !important; font-size: 3rem !important; color: #FFFFFF !important; text-shadow: 0 2px 12px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.3) !important; }',
      '.theme-slider .theme-section__description { color: #FFFFFF !important; text-shadow: 0 1px 6px rgba(0,0,0,0.5) !important; }',
      '.theme-slider .btn, .theme-slider .button, .theme-slider .theme-button { background: #FFFFFF !important; color: #1A1A1A !important; border: none !important; text-shadow: none !important; }',
      '.theme-slider .btn:hover, .theme-slider .button:hover, .theme-slider .theme-button:hover { background: #F5F5F3 !important; color: #96722E !important; }',

      // — Product cards — Mejuri-inspired: minimal, clean hover, white bg —
      '.product-card { transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.1, 0.25, 1); border-radius: 0 !important; overflow: hidden; background: #FFFFFF !important; }',
      '.product-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }',
      '.product-card__title { font-size: 0.92rem; font-weight: 500; letter-spacing: 0.02em; line-height: 1.4; color: #2C2C2C !important; }',
      '.product-card__price { font-family: "Raleway", sans-serif !important; font-weight: 600; letter-spacing: 0.03em; font-size: 0.85rem; color: #1A1A1A !important; }',

      // — Article/Blog cards — editorial look —
      '.article-block { border-radius: 0 !important; overflow: hidden; }',
      '.article-block__wrapper { transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1); }',
      '.article-block:hover .article-block__wrapper { transform: translateY(-2px); }',
      '.article-block__title { font-family: "Cormorant Garamond", Georgia, serif !important; font-weight: 500; font-size: 1.1rem; letter-spacing: 0.02em; line-height: 1.4; color: #2C2C2C !important; }',
      '.article-block__date { font-family: "Raleway", sans-serif !important; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: #8A8A8A !important; opacity: 1 !important; }',

      // — Buttons — sharp, no radius (BVV + TANE) —
      '.btn, .button:not(.header-nav__anchor):not(.header__link):not(.header__button):not(.theme-tabs__tab), [class*="btn-primary"], .theme-button { font-family: "Raleway", sans-serif !important; font-weight: 600 !important; letter-spacing: 0.12em !important; text-transform: uppercase !important; font-size: 0.72rem !important; border-radius: 0 !important; transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) !important; }',

      // — Tabs (blog section) — refined —
      '.theme-tabs__tab { font-family: "Raleway", sans-serif !important; font-size: 0.72rem !important; letter-spacing: 0.1em !important; text-transform: uppercase !important; border-radius: 0 !important; }',

      // — Footer base —
      'footer, .footer { font-family: "Raleway", sans-serif !important; font-size: 0.85rem; letter-spacing: 0.02em; }',

      // — Trust banner — deep charcoal with warm gold accents —
      '.lh-trust-banner { background: #1A1A1A; color: #F5F5F3; padding: 3.5rem 1rem; text-align: center; font-family: "Raleway", sans-serif; }',
      '.lh-trust-banner__inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; gap: 3.5rem; flex-wrap: wrap; }',
      '.lh-trust-item { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; min-width: 180px; }',
      '.lh-trust-item__icon { font-size: 1.4rem; color: #C9A96E; opacity: 1; }',
      '.lh-trust-item__title { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: 0.95rem; letter-spacing: 0.08em; text-transform: uppercase; color: #F5F5F3; }',
      '.lh-trust-item__text { font-size: 0.72rem; color: #B0B0B0; letter-spacing: 0.03em; line-height: 1.5; opacity: 1; }',

      // — Footer nav — light, clean —
      '.lh-footer-nav { background: #FAFAF8; border-top: 1px solid #EBEBEB; padding: 2.5rem 1rem; text-align: center; }',
      '.lh-footer-nav__inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; }',
      '.lh-footer-nav a { font-family: "Raleway", sans-serif; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em; color: #2C2C2C; text-decoration: none; transition: all 0.3s ease; padding: 0.3rem 0; border-bottom: 1px solid transparent; }',
      '.lh-footer-nav a:hover { color: #96722E; border-bottom-color: #96722E; }',

      // — Top bar — warm gold, prestigious —
      '.lh-top-bar { background: #96722E; color: #FFFFFF; text-align: center; padding: 0.55rem 1rem; font-family: "Raleway", sans-serif; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; }',

      // — Hide Jumpseller branding —
      'a[href*="jumpseller.com"]:not([class]) { display: none !important; }',

      // — Smooth scroll & transitions —
      'html { scroll-behavior: smooth; }',
      '* { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); }',

      // — Page content — readable dark text on white —
      '.page__body p, .page__body li { font-size: 0.92rem; line-height: 1.85; color: #2C2C2C; }',
      '.page__body h2 { font-family: "Cormorant Garamond", serif !important; font-weight: 600; font-size: 1.5rem; color: #1A1A1A; margin-top: 2.5rem; margin-bottom: 1rem; letter-spacing: 0.04em; }',
      '.page__body h3 { font-family: "Cormorant Garamond", serif !important; font-weight: 500; font-size: 1.15rem; color: #96722E; letter-spacing: 0.03em; }',

      // — Image treatments — subtle zoom on hover (BVV) —
      '.product-card__image img, .article-block img { transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) !important; }',
      '.product-card:hover .product-card__image img, .article-block:hover img { transform: scale(1.03) !important; }',

      // — Banner blocks — text over images legibility —
      '.banner-block__title, .banner-block__subtitle { text-shadow: 0 1px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.2) !important; }',

      // — Mobile —
      '@media (max-width: 768px) {',
      '  .lh-trust-banner__inner { flex-direction: column; gap: 1.5rem; align-items: center; }',
      '  .lh-footer-nav__inner { flex-direction: column; gap: 0.8rem; }',
      '  .lh-top-bar { font-size: 0.6rem; letter-spacing: 0.08em; padding: 0.45rem 0.5rem; }',
      '  nav.header-nav .header-nav__anchor { font-size: 0.68rem !important; padding: 0 0.8rem !important; letter-spacing: 0.1em !important; }',
      '  .theme-slider .theme-section__title { font-size: 2rem !important; }',
      '  .theme-section { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }',
      '}'

    ].join('\n');
    document.head.appendChild(css);

    // -------------------------------------------------------
    // 2. SIMPLIFY NAVIGATION NAMES
    // -------------------------------------------------------
    var navRenames = {
      'Oro 18 quilates disponibles para entrega inmediata': 'Oro 18K Inmediato',
      'Oro 18 quilates a pedido': 'Oro 18K a Pedido',
      'Aros 18 quilates': 'Aros',
      'Joyería Plata 950 & Paladio': 'Plata 950'
    };

    document.querySelectorAll('.header-nav__anchor, #mobile-menu a, .sidebar-accordion a').forEach(function(link) {
      var text = link.textContent.trim();
      if (navRenames[text]) {
        link.textContent = navRenames[text];
      }
    });

    // -------------------------------------------------------
    // 3. RENAME SECTION TITLES & SLIDER TAGLINES
    // -------------------------------------------------------
    var textRenames = {
      // Section titles
      'Productos destacados': 'Nuestra Selecci\u00f3n',
      'Productos MAS VENDIDOS': 'Los M\u00e1s Elegidos',
      'CONSEJOS DE ORFEBRE': 'Consejos de Orfebre',
      'Enc\u00faentranos': 'Vis\u00edtanos',
      'Nuestras tiendas': 'Puntos de Retiro',
      // Slider subtitles
      'calidad en cada pieza': 'Joyas que cuentan tu historia',
      'Accesorios que marcan tendencia': 'Orfebrer\u00eda artesanal chilena',
      'AMULETOS, F\u00c9 Y RELIGI\u00d3N': 'Fe, tradici\u00f3n y protecci\u00f3n'
    };

    document.querySelectorAll('.theme-section__title, .theme-section__subtitle').forEach(function(el) {
      var text = el.textContent.trim();
      if (textRenames[text]) {
        el.textContent = textRenames[text];
      }
    });

    // -------------------------------------------------------
    // 4. TOP ANNOUNCEMENT BAR
    // -------------------------------------------------------
    var header = document.querySelector('header, .header');
    if (header) {
      var topBar = document.createElement('div');
      topBar.className = 'lh-top-bar';
      topBar.innerHTML = 'Oro 18K certificado &nbsp;\u2022&nbsp; Hecho a mano por orfebres chilenos &nbsp;\u2022&nbsp; Env\u00edo seguro a todo Chile';
      header.parentNode.insertBefore(topBar, header);
    }

    // -------------------------------------------------------
    // 5. TRUST BADGES
    // -------------------------------------------------------
    var footer = document.querySelector('footer, .footer');
    if (footer) {
      var trustBanner = document.createElement('div');
      trustBanner.className = 'lh-trust-banner';
      trustBanner.innerHTML = '<div class="lh-trust-banner__inner">'
        + '<div class="lh-trust-item"><div class="lh-trust-item__icon">\u25C6</div><div class="lh-trust-item__title">Oro 18K Certificado</div><div class="lh-trust-item__text">75% de oro puro en cada pieza</div></div>'
        + '<div class="lh-trust-item"><div class="lh-trust-item__icon">\u270D</div><div class="lh-trust-item__title">Artesan\u00eda Chilena</div><div class="lh-trust-item__text">Hecho a mano por orfebres locales</div></div>'
        + '<div class="lh-trust-item"><div class="lh-trust-item__icon">\u2665</div><div class="lh-trust-item__title">Hipoalerg\u00e9nico</div><div class="lh-trust-item__text">Seguro para pieles sensibles</div></div>'
        + '<div class="lh-trust-item"><div class="lh-trust-item__icon">\u2713</div><div class="lh-trust-item__title">Garant\u00eda de Calidad</div><div class="lh-trust-item__text">Piezas que duran generaciones</div></div>'
        + '</div>';
      footer.parentNode.insertBefore(trustBanner, footer);

      // -------------------------------------------------------
      // 6. FOOTER NAVIGATION
      // -------------------------------------------------------
      var footerNav = document.createElement('div');
      footerNav.className = 'lh-footer-nav';
      footerNav.innerHTML = '<div class="lh-footer-nav__inner">'
        + '<a href="/quienes-somos-1">Qui\u00e9nes Somos</a>'
        + '<a href="/guia-de-tallas">Gu\u00eda de Tallas</a>'
        + '<a href="/regalos-por-ocasion">Regalos por Ocasi\u00f3n</a>'
        + '<a href="/refund-policy">Cuidados</a>'
        + '<a href="/terminos-y-condiciones">T\u00e9rminos</a>'
        + '<a href="/privacy-policy">Privacidad</a>'
        + '</div>';
      footer.parentNode.insertBefore(footerNav, footer);
    }

    // -------------------------------------------------------
    // 7. WHATSAPP — improved with pre-filled message
    // -------------------------------------------------------
    var waLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    waLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf('text=') === -1 && href.indexOf('56988377115') !== -1) {
        link.setAttribute('href', 'https://wa.me/56988377115?text=Hola%2C%20me%20interesan%20las%20joyas%20de%20La%20Herencia.%20%C2%BFPodr%C3%ADan%20ayudarme%3F');
      }
    });

  });
})();
