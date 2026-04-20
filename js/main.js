/* ============================================================
   LAKEVIEW SPINE & WELLNESS — Main JavaScript
   Version: 1.1 | Antigravity Design Update
   ============================================================ */

(function () {
  'use strict';

  // Register ScrollTrigger
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ── GSAP MOTION ENGINE ──────────────────────────────────── */
  const initGSAP = () => {
    if (typeof gsap === 'undefined') return;

    // Generic Entrance Animations
    const fadeElements = document.querySelectorAll('[data-gsap="fade-up"], [data-gsap="fade-left"], [data-gsap="fade-right"]');
    fadeElements.forEach(el => {
      const effect = el.getAttribute('data-gsap');
      let x = 0, y = 0;
      
      if (effect === 'fade-up') y = 60;
      if (effect === 'fade-left') x = 60;
      if (effect === 'fade-right') x = -60;

      gsap.from(el, {
        x: x,
        y: y,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    // Staggered Entrance for Grids/Lists
    const staggerContainers = document.querySelectorAll('[data-gsap-stagger]');
    staggerContainers.forEach(container => {
      gsap.from(container.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%"
        }
      });
    });

    // Parallax Effects for Images
    const parallaxImages = document.querySelectorAll('.depth-float img');
    parallaxImages.forEach(img => {
      gsap.to(img, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Hero column parallax
    const heroParallax = document.querySelector('[data-gsap-parallax]');
    if (heroParallax) {
      gsap.to(heroParallax, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroParallax,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  };

  /* ── HEADER SCROLL BEHAVIOR ──────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 50) {
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
  const mobileLinks = document.querySelectorAll('.mobile-menu__links a');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (typeof gsap === 'undefined') return;
    gsap.from('.mobile-menu__links a', {
      x: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2
    });
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn)  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  /* ── ACCORDION ───────────────────────────────────────────── */
  const accordionItems = document.querySelectorAll('.accordion__item');
  accordionItems.forEach((item) => {
    const btn  = item.querySelector('.accordion__btn');
    const body = item.querySelector('.accordion__body');
    if (!btn || !body) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
    });
  });

  /* ── SERVICE JUMP NAV ACTIVE PILL ───────────────────────── */
  const servicePills = document.querySelectorAll('.service-pill');
  if (servicePills.length && typeof ScrollTrigger !== 'undefined') {
    servicePills.forEach(pill => {
      const target = document.querySelector(pill.getAttribute('href'));
      if (!target) return;
      ScrollTrigger.create({
        trigger: target,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => { servicePills.forEach(p => p.classList.remove('active')); pill.classList.add('active'); },
        onEnterBack: () => { servicePills.forEach(p => p.classList.remove('active')); pill.classList.add('active'); }
      });
    });
  }

  /* ── ON LOAD ─────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', () => {
    initGSAP();
  });

})();
