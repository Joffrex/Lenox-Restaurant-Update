/**
 * LENOX Restaurant-Bar — Galerie & Lightbox
 * Filtres par catégorie, masonry, lightbox avec navigation clavier/tactile
 */

(function () {
  'use strict';

  // ============================================================
  // ÉTAT GLOBAL
  // ============================================================
  let currentFilter = 'all';
  let currentIndex = -1;
  let visibleItems = [];

  // ============================================================
  // FILTRAGE PAR CATÉGORIE
  // ============================================================
  function applyFilter(category) {
    const items = document.querySelectorAll('.gallery-item');
    visibleItems = [];

    items.forEach((item) => {
      const itemCategory = item.dataset.category;
      if (category === 'all' || itemCategory === category) {
        item.classList.remove('is-hidden');
        visibleItems.push(item);
      } else {
        item.classList.add('is-hidden');
      }
    });

    // Mettre à jour les chips
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      const isActive = chip.dataset.filter === category;
      chip.classList.toggle('is-active', isActive);
      chip.setAttribute('aria-pressed', String(isActive));
    });

    // Mettre à jour le compteur
    updateCounter();

    currentFilter = category;
  }

  // ============================================================
  // COMPTEUR GALERIE
  // ============================================================
  function updateCounter() {
    const counter = document.querySelector('.gallery-counter [data-i18n-template="gallery.counter"]');
    if (!counter) return;
    const total = visibleItems.length;
    counter.textContent = `${total} / ${total}`;
  }

  // ============================================================
  // LIGHTBOX — Ouverture / Fermeture
  // ============================================================
  const dialog = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');

  function openLightbox(index) {
    if (!dialog || visibleItems.length === 0) return;
    currentIndex = Math.max(0, Math.min(index, visibleItems.length - 1));
    updateLightboxContent();
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (!dialog) return;
    if (typeof dialog.close === 'function') {
      dialog.close();
      document.body.style.overflow = '';
    }
  }

  function updateLightboxContent() {
    if (!visibleItems[currentIndex]) return;
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');

    if (img && lightboxImage) {
      lightboxImage.src = img.src.replace(/\.jpeg$/, '.jpeg'); // same format
      lightboxImage.alt = img.alt;
    }
    if (caption && lightboxCaption) {
      lightboxCaption.textContent = caption.textContent;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
    }
  }

  function nextImage() {
    if (visibleItems.length === 0) return;
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightboxContent();
  }

  function prevImage() {
    if (visibleItems.length === 0) return;
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxContent();
  }

  // ============================================================
  // NAVIGATION CLAVIER
  // ============================================================
  function handleKeydown(e) {
    if (!dialog || !dialog.open) return;

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeLightbox();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextImage();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevImage();
        break;
    }
  }

  // ============================================================
  // GESTION DU SWIPE TACTILE
  // ============================================================
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    const deltaX = touchEndX - touchStartX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        nextImage(); // swipe gauche = suivant
      } else {
        prevImage(); // swipe droite = précédent
      }
    }
  }

  // ============================================================
  // INITIALISATION
  // ============================================================
  function initFilters() {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        applyFilter(chip.dataset.filter);
      });
    });
    // Initialiser avec "all"
    applyFilter('all');
  }

  function initGalleryItems() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        // Trouver l'index dans la liste visible
        const visibleIndex = visibleItems.indexOf(item);
        if (visibleIndex !== -1) {
          openLightbox(visibleIndex);
        }
      });
    });
  }

  function initLightboxControls() {
    if (!dialog) return;

    const closeBtn = dialog.querySelector('.lightbox-close');
    const prevBtn = dialog.querySelector('.lightbox-prev');
    const nextBtn = dialog.querySelector('.lightbox-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    // Fermer en cliquant sur le backdrop
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      if (!isInDialog) {
        closeLightbox();
      }
    });

    // Clavier global
    document.addEventListener('keydown', handleKeydown);

    // Swipe tactile
    dialog.addEventListener('touchstart', handleTouchStart, { passive: true });
    dialog.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Fermer quand la dialog se ferme (Escape)
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  }

  function init() {
    initFilters();
    initGalleryItems();
    initLightboxControls();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API publique
  window.LenoxGallery = {
    openLightbox,
    closeLightbox,
    applyFilter
  };

})();