/**
 * LENOX Restaurant-Bar — Onglets de menu
 * Navigation par onglets ARIA-compliant pour la section "La Carte"
 * Role tablist / tab / tabpanel — navigation clavier incluse
 */

(function () {
  'use strict';

  function initMenuTabs() {
    var tabList = document.querySelector('[role="tablist"]');
    if (!tabList) return;

    var tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
    if (tabs.length === 0) return;

    // ============================================================
    // ACTIVER UN ONGLET
    // ============================================================
    function activateTab(tab) {
      // Désactiver tous les onglets
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });

      // Masquer tous les panneaux
      var allPanels = document.querySelectorAll('[role="tabpanel"]');
      allPanels.forEach(function (panel) {
        panel.hidden = true;
      });

      // Activer l'onglet cliqué
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      tab.focus();

      // Afficher le panneau correspondant
      var panelId = tab.getAttribute('aria-controls');
      if (panelId) {
        var panel = document.getElementById(panelId);
        if (panel) {
          panel.hidden = false;
        }
      }
    }

    // ============================================================
    // NAVIGATION CLAVIER (flèches gauche/droite, Home, End)
    // ============================================================
    tabList.addEventListener('keydown', function (e) {
      var currentIndex = tabs.indexOf(document.activeElement);
      if (currentIndex === -1) return;

      var nextIndex = currentIndex;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = tabs.length - 1;
      } else {
        return; // Ignorer les autres touches
      }

      activateTab(tabs[nextIndex]);
    });

    // ============================================================
    // CLIC SUR UN ONGLET
    // ============================================================
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tab);
      });
    });

    // ============================================================
    // ÉTAT INITIAL — activer le premier onglet si aucun n'est sélectionné
    // ============================================================
    var selectedTab = tabs.find(function (t) {
      return t.getAttribute('aria-selected') === 'true';
    });

    if (!selectedTab) {
      // Initialiser le premier onglet comme actif
      activateTab(tabs[0]);
    } else {
      // Appliquer l'état initial proprement
      tabs.forEach(function (t) {
        t.setAttribute('tabindex', t === selectedTab ? '0' : '-1');
      });

      var allPanels = document.querySelectorAll('[role="tabpanel"]');
      allPanels.forEach(function (panel) {
        var controllingTab = tabs.find(function (t) {
          return t.getAttribute('aria-controls') === panel.id;
        });
        panel.hidden = !controllingTab || controllingTab.getAttribute('aria-selected') !== 'true';
      });
    }
  }

  // ============================================================
  // INITIALISATION
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenuTabs);
  } else {
    initMenuTabs();
  }

})();
