(function() {
  'use strict';

  // ============================================================
  // LA HERENCIA JOYAS — Site Enhancement Script v3
  // ============================================================

  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function() {

    // -------------------------------------------------------
    // 1. CUSTOM CSS
    // -------------------------------------------------------
    var css = document.createElement('style');
    css.id = 'lh-custom-styles';
    css.textContent = [

      // — Google Fonts —
      '@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Raleway:wght@300;400;500;600;700&display=swap");',

      // — Global typography —
      'body, .theme-font-text { font-family: "Raleway", "Helvetica Neue", sans-serif !important; font-weight: 400; letter-spacing: 0.01em; line-height: 1.7; }',
      'h1, h2, h3, h4, h5, h6, .theme-font-title, .product-card__title, .section__title { font-family: "Cormorant Garamond", Georgia, serif !important; font-weight: 500; letter-spacing: 0.04em; }',
      'h1, .section__title { font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; font-size: 1.8rem; }',
      'h2 { font-weight: 500; letter-spacing: 0.05em; }',

      // — Navigation bar — dark background, light text, high specificity —
      '.header-navigation { background: #3B2A24 !important; }',
      'nav.header-nav { background: #3B2A24 !important; }',
      '.header-nav__menu { gap: 0 !important; justify-content: center !important; }',
      '.header-nav__item { position: relative; }',
      '.header-nav__item + .header-nav__item::before { content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 1px; height: 18px; background: rgba(237,228,217,0.2); }',

      // — Nav anchor override — must beat: .header-nav__anchor:not(...){color:var(--color-main)!important} —
      'nav.header-nav .header-nav__anchor:not(.header-nav__anchor--categories.header__button) { color: #EDE4D9 !important; }',
      'nav.header-nav .header-nav__anchor { font-family: "Raleway", sans-serif !important; font-weight: 500 !important; font-size: 0.72rem !important; text-transform: uppercase !important; letter-spacing: 0.14em !important; padding: 0 1.8rem !important; transition: all 0.3s ease !important; }',
      'nav.header-nav .header-nav__anchor:hover { color: #D6A678 !important; background: rgba(237,228,217,0.06) !important; }',

      // — Header bottom border —
      '.header { border-bottom: none !important; }',

      // — Product cards —
      '.product-card { transition: transform 0.3s ease, box-shadow 0.3s ease; border-radius: 4px; overflow: hidden; }',
      '.product-card:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(139,94,60,0.12); }',
      '.product-card__title { font-size: 1rem; font-weight: 500; letter-spacing: 0.02em; }',
      '.product-card__price { font-family: "Raleway", sans-serif !important; font-weight: 600; letter-spacing: 0.02em; }',

      // — Buttons —
      '.btn, .button:not(.header-nav__anchor), [class*="btn-primary"], .theme-button { font-family: "Raleway", sans-serif !important; font-weight: 600 !important; letter-spacing: 0.1em !important; text-transform: uppercase !important; font-size: 0.78rem !important; border-radius: 2px !important; transition: all 0.3s ease !important; }',

      // — Section spacing —
      '.section { padding-top: 3.5rem; padding-bottom: 3.5rem; }',
      '.section__title { margin-bottom: 2rem; }',

      // — Footer base —
      'footer, .footer { font-family: "Raleway", sans-serif !important; font-size: 0.85rem; letter-spacing: 0.02em; }',

      // — Trust banner —
      '.lh-trust-banner { background: #3B2A24; color: #EDE4D9; padding: 2.5rem 1rem; text-align: center; font-family: "Raleway", sans-serif; }',
      '.lh-trust-banner__inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; }',
      '.lh-trust-item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; min-width: 180px; }',
      '.lh-trust-item__icon { font-size: 1.6rem; opacity: 0.9; }',
      '.lh-trust-item__title { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: 1rem; letter-spacing: 0.06em; text-transform: uppercase; color: #EDE4D9; }',
      '.lh-trust-item__text { font-size: 0.78rem; opacity: 0.8; letter-spacing: 0.02em; line-height: 1.5; }',

      // — Footer nav —
      '.lh-footer-nav { background: #EDE4D9; border-top: 1px solid rgba(139,94,60,0.2); padding: 2rem 1rem; text-align: center; }',
      '.lh-footer-nav__inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; }',
      '.lh-footer-nav a { font-family: "Raleway", sans-serif; font-size: 0.8rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: #3B2A24; text-decoration: none; transition: color 0.3s ease; padding: 0.3rem 0; border-bottom: 1px solid transparent; }',
      '.lh-footer-nav a:hover { color: #8B5E3C; border-bottom-color: #8B5E3C; }',

      // — Top bar —
      '.lh-top-bar { background: #8B5E3C; color: #EDE4D9; text-align: center; padding: 0.5rem 1rem; font-family: "Raleway", sans-serif; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; }',

      // — Hide Jumpseller branding —
      'a[href*="jumpseller.com"]:not([class]) { display: none !important; }',

      // — Smooth scroll —
      'html { scroll-behavior: smooth; }',

      // — Page content —
      '.page__body p, .page__body li { font-size: 0.95rem; line-height: 1.8; color: #3B2A24; }',
      '.page__body h2 { font-family: "Cormorant Garamond", serif !important; font-weight: 600; font-size: 1.5rem; color: #3B2A24; margin-top: 2rem; margin-bottom: 1rem; }',
      '.page__body h3 { font-family: "Cormorant Garamond", serif !important; font-weight: 500; font-size: 1.2rem; color: #8B5E3C; }',

      // — Mobile —
      '@media (max-width: 768px) {',
      '  .lh-trust-banner__inner { flex-direction: column; gap: 1.5rem; align-items: center; }',
      '  .lh-footer-nav__inner { flex-direction: column; gap: 0.8rem; }',
      '  .lh-top-bar { font-size: 0.65rem; letter-spacing: 0.08em; }',
      '  nav.header-nav .header-nav__anchor { font-size: 0.68rem !important; padding: 0 0.8rem !important; letter-spacing: 0.1em !important; }',
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
    // 3. TOP ANNOUNCEMENT BAR
    // -------------------------------------------------------
    var header = document.querySelector('header, .header');
    if (header) {
      var topBar = document.createElement('div');
      topBar.className = 'lh-top-bar';
      topBar.innerHTML = 'Oro 18K certificado &nbsp;\u2022&nbsp; Hecho a mano por orfebres chilenos &nbsp;\u2022&nbsp; Env\u00edo seguro a todo Chile';
      header.parentNode.insertBefore(topBar, header);
    }

    // -------------------------------------------------------
    // 4. TRUST BADGES
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
      // 5. FOOTER NAVIGATION
      // -------------------------------------------------------
      var footerNav = document.createElement('div');
      footerNav.className = 'lh-footer-nav';
      footerNav.innerHTML = '<div class="lh-footer-nav__inner">'
        + '<a href="/quienes-somos-1">Qui\u00e9nes Somos</a>'
        + '<a href="/aros-de-oro-para-recien-nacida-guia-para-elegir-el-par-perfecto-y-seguro">Blog: Aros Reci\u00e9n Nacida</a>'
        + '<a href="/oro-18k-vs-14k-vs-10k-como-saber-cual-es-la-mejor-inversion-y-calidad-en-joyas">Blog: Oro 18K vs 14K</a>'
        + '<a href="/medallas-religiosas-oro-18k-significado">Blog: Medallas Religiosas</a>'
        + '<a href="/refund-policy">Cuidados y Recomendaciones</a>'
        + '<a href="/terminos-y-condiciones">T\u00e9rminos y Condiciones</a>'
        + '<a href="/privacy-policy">Pol\u00edtica de Privacidad</a>'
        + '</div>';
      footer.parentNode.insertBefore(footerNav, footer);
    }

  });
})();
