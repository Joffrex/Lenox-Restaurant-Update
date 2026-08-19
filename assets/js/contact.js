/**
 * LENOX Restaurant-Bar — Contact Form & Map Lazy-load
 * Validation, indicateur ouvert/fermé, carte à la demande, WhatsApp
 */

(function () {
  'use strict';

  // ============================================================
  // CONFIGURATION
  // ============================================================
  const HOURS = {
    open: 7,   // 07h00
    close: 23  // 23h00
  };

  // ============================================================
  // INDICATEUR OUVERT / FERMÉ
  // ============================================================
  function updateOpenIndicator() {
    const indicator = document.getElementById('open-indicator');
    if (!indicator) return;

    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= HOURS.open && hour < HOURS.close;

    if (isOpen) {
      indicator.textContent = indicator.dataset.i18nKey
        ? document.querySelector('[data-i18n="contact.open_now"]')?.textContent || 'Ouvert maintenant'
        : 'Ouvert maintenant';
      indicator.classList.remove('is-closed');
    } else {
      const nextOpen = HOURS.open;
      const timeStr = `${nextOpen.toString().padStart(2, '0')}h00`;
      indicator.textContent = `Fermé, ouvre à ${timeStr}`;
      indicator.classList.add('is-closed');
    }
  }

  // ============================================================
  // CARTE LAZY-LOAD
  // ============================================================
  function initMapLazyLoad() {
    const placeholder = document.getElementById('map-placeholder');
    const container = document.getElementById('map-iframe-container');
    const loadBtn = placeholder?.querySelector('.load-map');

    if (!placeholder || !container || !loadBtn) return;

    loadBtn.addEventListener('click', () => {
      // Créer l'iframe
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8123456789!2d29.9306!3d-3.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjUnMzUuMCJTIDI5wrAzNSc1MC4xIkU!5e0!3m2!1sfr!2sbi!4v1234567890';
      iframe.width = '100%';
      iframe.height = '400';
      iframe.style.border = '0';
      iframe.allowFullscreen = '';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.title = 'Carte Lenox Restaurant-Bar Gitega';

      container.appendChild(iframe);
      container.hidden = false;
      placeholder.hidden = true;
    });
  }

  // ============================================================
  // FORMULAIRE CONTACT
  // ============================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const eventTypeInput = document.getElementById('form-event-type');

    if (!form) return;

    // Pré-remplir event_type depuis sessionStorage (Phase 6)
    const storedEventType = window.LenoxEvents?.getStoredEventType?.();
    if (storedEventType && eventTypeInput) {
      eventTypeInput.value = storedEventType;
      // Aussi mettre à jour le select visible
      const select = form.querySelector('#event_type');
      if (select) {
        select.value = storedEventType;
      }
    }

    // Validation côté client
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Vérifier validité HTML5
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // État loading
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      // Collecter les données
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        // Simulation d'envoi (remplacer par vraie API)
        await simulateFormSubmit(data);

        // Succès
        showStatus('success', statusEl, submitBtn);
        form.reset();
        window.LenoxEvents?.clearStoredEventType?.();
      } catch (error) {
        // Erreur
        showStatus('error', statusEl, submitBtn);
      } finally {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
      }
    });

    // Validation en temps réel
    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('blur', () => {
        field.checkValidity();
      });

      field.addEventListener('input', () => {
        if (field.validity.valid) {
          field.setCustomValidity('');
        }
      });
    });
  }

  function simulateFormSubmit(data) {
    // Simuler un délai réseau
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 90% de succès pour démo
        if (Math.random() > 0.1) {
          console.log('[contact] Form submitted:', data);
          resolve();
        } else {
          reject(new Error('Network error'));
        }
      }, 1500);
    });
  }

  function showStatus(type, statusEl, submitBtn) {
    if (!statusEl) return;

    const successMsg = document.querySelector('[data-i18n="form.success_body"]')?.textContent
      || 'Merci. Notre équipe vous répond sous 24 heures. Pour une demande urgente, appelez le +257 65 186 498.';
    const errorMsg = document.querySelector('[data-i18n="form.error"]')?.textContent
      || 'L\'envoi a échoué. Réessayez ou appelez-nous directement.';

    statusEl.textContent = type === 'success' ? successMsg : errorMsg;
    statusEl.className = 'form-status ' + (type === 'success' ? 'is-success' : 'is-error');
    statusEl.hidden = false;

    // Scroll vers le message
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Cacher après 10s pour succès, 15s pour erreur
    setTimeout(() => {
      statusEl.hidden = true;
      statusEl.className = 'form-status';
    }, type === 'success' ? 10000 : 15000);
  }

  // ============================================================
  // INITIALISATION
  // ============================================================
  function init() {
    updateOpenIndicator();
    // Mettre à jour l'indicateur toutes les minutes
    setInterval(updateOpenIndicator, 60000);

    initMapLazyLoad();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API publique
  window.LenoxContact = {
    updateOpenIndicator,
    initMapLazyLoad
  };

})();