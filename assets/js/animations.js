/**
 * LENOX Restaurant-Bar — Animations
 * Scroll reveal (IntersectionObserver), parallax hero, hero scroll indicator
 * Respecte prefers-reduced-motion globalement
 */

(function () {
  'use strict';

  // ============================================================
  // DÉTECTION REDUCED MOTION
  // ============================================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Si reduced motion, tout rendre visible immédiatement
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('is-visible');
    });
    // Toujours cacher l'indicateur de scroll hero
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.classList.add('is-hidden');
    }
    return; // Ne pas initialiser les autres animations
  }

  // ============================================================
  // SCROLL REVEAL — IntersectionObserver
  // ============================================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length === 0) return;

    // Options : déclencher quand 15% de l'élément est visible
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Gérer les délais échelonnés (data-reveal-delay en ms)
          const delay = parseInt(el.dataset.revealDelay || '0', 10);
          if (delay > 0) {
            el.style.transitionDelay = `${delay}ms`;
          }

          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));
  }

  // ============================================================
  // PARALLAX HERO — Image de fond qui bouge au scroll
  // ============================================================
  function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const heroBgImg = hero?.querySelector('.hero-bg img');
    if (!hero || !heroBgImg) return;

    let ticking = false;
    const heroHeight = () => hero.offsetHeight;

    function updateParallax() {
      const scrollY = window.scrollY;
      const heroRect = hero.getBoundingClientRect();

      // Ne faire du parallax que si le hero est visible
      if (heroRect.bottom < 0 || heroRect.top > window.innerHeight) {
        ticking = false;
        return;
      }

      // Vitesse du parallax : 0.3 = 30% de la vitesse du scroll
      const speed = 0.3;
      const offset = scrollY * speed;

      // Limiter l'offset pour ne pas dépasser l'image
      const maxOffset = heroHeight() * 0.3;
      const clampedOffset = Math.min(Math.max(offset, 0), maxOffset);

      heroBgImg.style.transform = `translateY(${clampedOffset}px)`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ============================================================
  // HERO SCROLL INDICATOR — Disparaît au premier scroll
  // ============================================================
  function initHeroScrollIndicator() {
    const indicator = document.querySelector('.hero-scroll-indicator');
    if (!indicator) return;

    let hasScrolled = false;

    function onScroll() {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        indicator.classList.add('is-hidden');
        window.removeEventListener('scroll', onScroll, { passive: true });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ============================================================
  // TACTILE — Neutraliser parallax sur mobile si besoin
  // ============================================================
  // Le parallax est gardé sur mobile car c'est subtil et pas gourmand

  // ============================================================
  // AMéliorer le scroll des ancres pour éviter les sauts
  // Gère le header sticky qui change de hauteur (88px -> 68px)
  // ============================================================
  function initAnchorScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // Calculer l'offset dynamique basé sur l'état du header
    function getHeaderHeight() {
      return header.classList.contains('is-scrolled') ? 68 : 88;
    }

    // Modifier le scroll-padding-top pour être toujours cohérent
    function updateScrollPadding() {
      const offset = getHeaderHeight() + 20; // +20px de marge
      document.documentElement.style.setProperty('--scroll-offset', offset + 'px');
    }

    // Listen to scroll to update padding
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollPadding();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    updateScrollPadding();
  }

  // ============================================================
  // INITIALISATION
  // ============================================================
  function init() {
    initScrollReveal();
    initHeroParallax();
    initHeroScrollIndicator();
    initAnchorScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API publique
  window.LenoxAnimations = {
    initScrollReveal,
    initHeroParallax,
    initAnchorScroll
  };

})();