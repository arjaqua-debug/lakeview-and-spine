/* ============================================================
   LAKEVIEW SPINE & WELLNESS — Main JavaScript
   Version: 1.0 | April 2026
   ============================================================ */

(function () {
  'use strict';

  /* ── HEADER SCROLL BEHAVIOR ──────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  const menuBtn   = document.querySelector('.header-menu-btn');
  const closeBtn  = document.querySelector('.mobile-menu__close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__links a, .mobile-menu__cta a');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.focus();
  }

  if (menuBtn)  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close when a link is clicked
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  /* ── ACCORDION ───────────────────────────────────────────── */
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((item) => {
    const btn  = item.querySelector('.accordion__btn');
    const body = item.querySelector('.accordion__body');
    if (!btn || !body) return;

    // Set ARIA attributes
    const id = 'accordion-body-' + Math.random().toString(36).slice(2, 8);
    body.id = id;
    btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
    btn.setAttribute('aria-controls', id);

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Optional: close all others in the same accordion (single-open mode)
      // Comment out the next 4 lines to allow multiple open at once
      const parentAccordion = item.closest('.accordion');
      if (parentAccordion) {
        parentAccordion.querySelectorAll('.accordion__item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.accordion__btn').setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  /* ── NETLIFY FORM SUCCESS MESSAGE ────────────────────────── */
  // Show inline success message if returning from a Netlify form redirect
  // (alternative approach: use the `action` attribute redirect instead)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('form') === 'success') {
    const form = document.querySelector('.form');
    if (form) {
      form.innerHTML = `
        <div style="text-align:center; padding: 40px 0;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4A7C6F" stroke-width="2" style="margin: 0 auto 16px;">
            <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
          </svg>
          <h3 style="margin-bottom:8px;">Thank you — message received.</h3>
          <p style="color:#5C5C56;">We'll get back to you within one business day.<br>
          Need to reach us sooner? Call <a href="tel:6165550192">(616) 555-0192</a>.</p>
        </div>
      `;
    }
  }

  /* ── ACTIVE NAV LINK ─────────────────────────────────────── */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.header-nav__links a, .mobile-menu__links a').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.style.color = 'var(--color-accent)';
    }
  });

  /* ── SMOOTH SCROLL POLYFILL (for older iOS) ──────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
