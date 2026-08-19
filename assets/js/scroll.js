/**
 * LENOX Restaurant-Bar — Smooth Scroll Enhancement
 * Gestion du scroll des ancres avec offset dynamique pour header sticky
 * Remplace le scroll natif pour un comportement plus fluide et précis
 */

(function () {
  'use strict';

  const HEADER_SCROLL_Y_OFFSET = 68; // hauteur header quand scrollé
  const HEADER_DEFAULT_Y_OFFSET = 88; // hauteur header par défaut
  const SCROLL_BUFFER = 24; // marge supplémentaire en px
  const SCROLL_DURATION = 560; // durée du scroll en ms (smooth mais pas trop long)

  let isScrollingSmooth = false;

  /**
   * Calculer l'offset actuel pour le scroll
   */
  function getScrollOffset() {
    const header = document.querySelector('.site-header');
    if (!header) return HEADER_DEFAULT_Y_OFFSET + SCROLL_BUFFER;

    const isScrolled = header.classList.contains('is-scrolled');
    const headerHeight = isScrolled ? HEADER_SCROLL_Y_OFFSET : HEADER_DEFAULT_Y_OFFSET;
    return headerHeight + SCROLL_BUFFER;
  }

  /**
   * Scroll smooth vers un élément avec offset
   * @param {Element} target - L'élément cible
   */
  function scrollToElement(target) {
    if (!target) return;

    const offset = getScrollOffset();
    const targetRect = target.getBoundingClientRect();
    const targetPosition = targetRect.top + window.scrollY - offset;

    // Utiliser scrollTo avec comportement smooth pour contrôle fin
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  /**
   * Gestionnaire pour les clics sur les ancres
   */
  function handleAnchorClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const id = href.slice(1); // supprimer le #
    const target = document.getElementById(id);

    if (target) {
      e.preventDefault();
      isScrollingSmooth = true;

      scrollToElement(target);

      // Reset flag après le scroll
      setTimeout(() => {
        isScrollingSmooth = false;
      }, SCROLL_DURATION + 100);
    }
  }

  /**
   * Intercepter les ancres pour un scroll plus fluide
   */
  function initAnchorScroll() {
    // Gérer les clics sur les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick, { passive: false });
    });

    // Gérer les anciennes routes avec ?lang=fr#section
    window.addEventListener('DOMContentLoaded', () => {
      // Vérifier si un hash est présent au chargement
      if (window.location.hash && window.location.hash !== '#') {
        setTimeout(() => {
          const id = window.location.hash.slice(1);
          const target = document.getElementById(id);
          if (target) {
            scrollToElement(target);
          }
        }, 100);
      }
    });
  }

  /**
   * Mettre à jour dynamiquement les offsets lorsque le header change
   */
  function initHeaderScrollObserver() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // Observer les changements de classe (is-scrolled)
    const resizeObserver = new ResizeObserver(() => {
      const style = getComputedStyle(document.documentElement);
      const currentPadding = parseInt(style.getPropertyValue('scroll-padding-top') || '108', 10);
      const newPadding = getScrollOffset();

      if (Math.abs(currentPadding - newPadding) > 5) {
        document.documentElement.style.scrollPaddingTop = newPadding + 'px';
      }
    });

    resizeObserver.observe(header);
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAnchorScroll();
      initHeaderScrollObserver();
    });
  } else {
    initAnchorScroll();
    initHeaderScrollObserver();
  }

  // API publique
  window.LenoxScroll = {
    scrollTo: scrollToElement,
    getOffset: getScrollOffset,
    isSmoothScrolling: () => isScrollingSmooth
  };

})();