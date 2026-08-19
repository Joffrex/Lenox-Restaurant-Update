/**
 * LENOX Restaurant-Bar — Theme Toggle
 * Bascule clair/sombre avec persistance localStorage, transition douce, meta theme-color
 */

(function () {
  'use strict';

  // ============================================================
  // CONSTANTES & ÉTAT
  // ============================================================
  const STORAGE_KEY = 'lenox-theme';
  const THEME_ATTR = 'data-theme';
  const DEFAULT_THEME = 'light';
  const TRANSITION_DURATION = 260; // ms — correspond à CSS .theme-transitioning

  const root = document.documentElement;

  // ============================================================
  // INITIALISATION — Appliquer le thème stocké (ou défaut)
  // Note : l'anti-flash dans index.html a déjà posé l'attribut initial
  // Cette fonction assure la cohérence au chargement complet
  // ============================================================
  function initTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored, false); // false = pas de transition à l'init
    } else {
      applyTheme(DEFAULT_THEME, false);
    }
    updateToggleButton();
    updateMetaThemeColor();
  }

  // ============================================================
  // APPLIQUER UN THÈME
  // ============================================================
  function applyTheme(theme, withTransition = true) {
    if (withTransition) {
      root.classList.add('theme-transitioning');
    }
    root.setAttribute(THEME_ATTR, theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Attendre la fin de la transition CSS pour retirer la classe
    if (withTransition) {
      setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, TRANSITION_DURATION);
    }

    updateToggleButton();
    updateMetaThemeColor();

    // Événement personnalisé pour autres modules (ex: gallery, map)
    document.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme }
    }));
  }

  // ============================================================
  // METTRE À JOUR LE BOUTON DE BAScule
  // ============================================================
  function updateToggleButton() {
    const btn = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');

    if (!btn) return;

    const isDark = root.getAttribute(THEME_ATTR) === 'dark';

    // État ARIA
    btn.setAttribute('aria-pressed', String(isDark));

    // Label d'accessibilité
    if (label) {
      label.textContent = isDark ? 'Passer au thème clair' : 'Passer au thème sombre';
    }
  }

  // ============================================================
  // METTRE À JOUR META THEME-COLOR (barre d'adresse mobile)
  // ============================================================
  function updateMetaThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const isDark = root.getAttribute(THEME_ATTR) === 'dark';
      // Couleurs approximatives OKLCH converties en hex pour theme-color
      // Clair : oklch(97.5% 0.008 85) ≈ #faf7f2
      // Sombre : oklch(16% 0.018 155) ≈ #1a221d
      meta.setAttribute('content', isDark ? '#1a221d' : '#faf7f2');
    }
  }

  // ============================================================
  // BASculer LE THÈME
  // ============================================================
  function toggleTheme() {
    const current = root.getAttribute(THEME_ATTR);
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  }

  // ============================================================
  // GESTIONNAIRES D'ÉVÉNEMENTS
  // ============================================================
  function bindEvents() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }

    // Écouter les changements de préférence système (optionnel)
    // Note : on ne change PAS automatiquement — le choix utilisateur prime
    // Mais on peut détecter si l'utilisateur n'a jamais fait de choix
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const hasUserChoice = localStorage.getItem(STORAGE_KEY);
      if (!hasUserChoice) {
        // Pas de choix explicite — suivre le système
        applyTheme(e.matches ? 'dark' : 'light', true);
      }
    });
  }

  // ============================================================
  // API PUBLIQUE (pour autres modules)
  // ============================================================
  window.LenoxTheme = {
    getTheme: () => root.getAttribute(THEME_ATTR),
    setTheme: (theme) => {
      if (theme === 'light' || theme === 'dark') {
        applyTheme(theme, true);
      }
    },
    toggle: toggleTheme
  };

  // ============================================================
  // INITIALISATION AU CHARGEMENT DU DOM
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      bindEvents();
    });
  } else {
    initTheme();
    bindEvents();
  }

})();