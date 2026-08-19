/**
 * LENOX Restaurant-Bar — Events Quote Buttons
 * Boutons "Demander un devis" : stockent event_type dans sessionStorage
 * et naviguent vers #contact pour pré-remplir le formulaire (Phase 8)
 */

(function () {
  'use strict';

  const EVENT_TYPE_KEY = 'lenox-event-type';
  const CONTACT_SECTION_ID = '#contact';

  /**
   * Gérer le clic sur un bouton de devis
   * @param {HTMLButtonElement} button - Le bouton cliqué
   */
  function handleQuoteClick(button) {
    const eventType = button.dataset.eventType;
    if (!eventType) return;

    // Stocker le type d'événement dans sessionStorage (disponible pour Phase 8)
    try {
      sessionStorage.setItem(EVENT_TYPE_KEY, eventType);
    } catch (e) {
      console.warn('[events] Impossible d\'écrire dans sessionStorage:', e);
    }

    // Naviguer vers la section contact avec scroll smooth
    const contactSection = document.querySelector(CONTACT_SECTION_ID);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Focus sur le premier champ du formulaire (Phase 8)
      setTimeout(() => {
        const firstInput = contactSection.querySelector('input, select, textarea');
        if (firstInput) {
          firstInput.focus({ preventScroll: true });
        }
      }, 400);
    }

    // Émettre un événement personnalisé pour d'autres modules
    document.dispatchEvent(new CustomEvent('lenox:quote-requested', {
      detail: { eventType }
    }));
  }

  /**
   * Initialiser tous les boutons de devis
   */
  function initEventQuotes() {
    const quoteButtons = document.querySelectorAll('.event-quote');

    quoteButtons.forEach((button) => {
      // Clic
      button.addEventListener('click', () => handleQuoteClick(button));

      // Clavier (Entrée / Espace)
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleQuoteClick(button);
        }
      });
    });
  }

  /**
   * Récupérer le type d'événement stocké (pour Phase 8 - formulaire)
   * @returns {string|null}
   */
  function getStoredEventType() {
    try {
      return sessionStorage.getItem(EVENT_TYPE_KEY);
    } catch (e) {
      return null;
    }
  }

  /**
   * Effacer le type d'événement stocké (après soumission formulaire)
   */
  function clearStoredEventType() {
    try {
      sessionStorage.removeItem(EVENT_TYPE_KEY);
    } catch (e) {
      // ignoré
    }
  }

  // Initialisation au DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventQuotes);
  } else {
    initEventQuotes();
  }

  // API publique
  window.LenoxEvents = {
    getStoredEventType,
    clearStoredEventType
  };

})();