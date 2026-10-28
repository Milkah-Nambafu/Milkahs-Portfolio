/**
 * MILKAH NAMBAFU — PERSONAL PORTFOLIO
 * Vanilla JavaScript (ES6+)
 * 
 * Features:
 *  1. Header state on scroll
 *  2. Mobile drawer navigation with accessibility
 *  3. Smooth scrolling with active section indicator
 *  4. Project gallery category filter
 *  5. Project detail modal view
 *  6. Scroll-triggered reveal animations (IntersectionObserver)
 *  7. Email copy-to-clipboard with toast alert
 *  8. Interactive contact form validation
 *  9. Back-to-top button
 * 10. Dynamic footer copyright year
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. PROJECT DATA REPOSITORY (Easily customizable by the user)
     -------------------------------------------------------------------------- */
  const projectsData = {
    1: {
      id: "REF // 01",
      title: "Custom Tailored Blazer Study",
      category: "Tailoring & Design",
      badge: "CRAFT",
      description: "An in-depth garment construction exploration focused on mastering clean lapel curvature, balanced shoulder pads, and chest canvas structure. Explored traditional bespoke canvas techniques paired with contemporary relaxed tailoring aesthetics.",
      tags: ["Garment Construction", "Pattern Drafting", "Bespoke Fit", "Structural Tailoring"],
      svg: `
        <svg viewBox="0 0 200 150" fill="none" class="art-svg">
          <path d="M60 40 L85 25 L115 25 L140 40 L125 70 L135 130 L65 130 L75 70 Z" stroke="var(--color-accent)" stroke-width="2.5" fill="rgba(204,255,0,0.06)"/>
          <line x1="100" y1="25" x2="100" y2="130" stroke="var(--color-border-bright)" stroke-dasharray="4 3"/>
          <line x1="75" y1="70" x2="125" y2="70" stroke="var(--color-accent)" stroke-width="1.8" stroke-dasharray="2 2"/>
          <path d="M45 40 L45 130" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"/>
          <text x="30" y="90" fill="var(--color-accent)" font-size="11" font-family="monospace">90CM</text>
        </svg>
      `
    },
    2: {
      id: "REF // 02",
      title: "Personal Portfolio Interface",
      category: "Digital & Tech",
      badge: "TECH",
      description: "A production-grade, fast, and accessible portfolio website engineered using purely semantic HTML5, modern CSS3 variables, and vanilla JavaScript. Features a custom 'Minimalist × Graffiti' design language blending high-fashion elegance with raw street-art accents.",
      tags: ["HTML5", "Modern CSS3", "Vanilla JavaScript", "Responsive Design", "Accessibility"],
      svg: `
        <svg viewBox="0 0 200 150" fill="none" class="art-svg">
          <rect x="30" y="25" width="140" height="100" rx="6" stroke="var(--color-accent)" stroke-width="2.2" fill="rgba(204,255,0,0.05)"/>
          <line x1="30" y1="45" x2="170" y2="45" stroke="var(--color-border-bright)"/>
          <circle cx="42" cy="35" r="3.5" fill="var(--color-accent)"/>
          <circle cx="54" cy="35" r="3.5" fill="rgba(255,255,255,0.3)"/>
          <rect x="42" y="60" width="45" height="50" rx="3" stroke="rgba(255,255,255,0.4)" stroke-dasharray="3 2"/>
          <rect x="95" y="60" width="65" height="22" rx="3" fill="rgba(204,255,0,0.2)"/>
          <rect x="95" y="88" width="65" height="22" rx="3" stroke="rgba(255,255,255,0.2)"/>
        </svg>
      `
    },
    3: {
      id: "REF // 03",
      title: "Streetwear Silhouette Series",
      category: "Concepts & Sketches",
      badge: "SKETCH",
      description: "Concept sketches that reimagine classic utility wear through high-contrast street-culture angles. Exploring dropped shoulders, modular pocket attachments, oversized hood contours, and raw-edge seam details for a youth capsule collection.",
      tags: ["Fashion Illustration", "Capsule Concept", "Silhouette Research", "Creative Ideation"],
      svg: `
        <svg viewBox="0 0 200 150" fill="none" class="art-svg">
          <path d="M100 20 Q 95 35 100 50 Q 75 75 80 130 Q 100 135 120 130 Q 125 75 100 50" stroke="var(--color-accent)" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M85 65 C 100 68, 105 68, 115 65" stroke="var(--color-text)" stroke-width="2"/>
          <path d="M70 120 L130 125" stroke="var(--color-accent)" stroke-width="1.8" stroke-dasharray="4 4"/>
          <circle cx="100" cy="22" r="8" stroke="var(--color-text-muted)" stroke-dasharray="2 2"/>
        </svg>
      `
    },
    4: {
      id: "REF // 04",
      title: "Fabric Drape & Hemming Prototype",
      category: "Tailoring & Design",
      badge: "CRAFT",
      description: "An experimental hands-on study testing how varying textile weights (wool blends, linen, heavy cotton twill) respond to different stitch tensions, bias grain lines, and hem stabilizers to achieve crisp, drape-retaining garments.",
      tags: ["Textile Study", "Hemming Precision", "Edge Finishing", "Seam Strength"],
      svg: `
        <svg viewBox="0 0 200 150" fill="none" class="art-svg">
          <rect x="40" y="30" width="120" height="90" rx="4" stroke="var(--color-border-bright)" stroke-width="1.5"/>
          <line x1="40" y1="60" x2="160" y2="60" stroke="var(--color-accent)" stroke-dasharray="6 3"/>
          <line x1="40" y1="90" x2="160" y2="90" stroke="var(--color-accent)" stroke-dasharray="6 3"/>
          <line x1="80" y1="30" x2="80" y2="120" stroke="var(--color-border-bright)"/>
          <line x1="120" y1="30" x2="120" y2="120" stroke="var(--color-border-bright)"/>
          <circle cx="100" cy="75" r="16" stroke="var(--color-accent)" stroke-width="2"/>
        </svg>
      `
    },
    5: {
      id: "REF // 05",
      title: "Tailor’s Measurement Notebook Concept",
      category: "Digital & Tech",
      badge: "TECH",
      description: "A digital workspace prototype created to simplify client intake, record garment body dimensions (bust, waist, inseam, sleeve), catalog fabric swatches, and track delivery milestones for independent dressmakers and tailors.",
      tags: ["Digital Product Concept", "UI Wireframing", "Tailoring Tech", "Workflow Optimization"],
      svg: `
        <svg viewBox="0 0 200 150" fill="none" class="art-svg">
          <rect x="35" y="30" width="130" height="90" rx="6" stroke="var(--color-border-bright)" stroke-width="1.5"/>
          <circle cx="65" cy="75" r="22" stroke="var(--color-accent)" stroke-width="2"/>
          <line x1="65" y1="53" x2="65" y2="60" stroke="var(--color-accent)" stroke-width="2"/>
          <line x1="65" y1="90" x2="65" y2="97" stroke="var(--color-accent)" stroke-width="2"/>
          <line x1="100" y1="60" x2="150" y2="60" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
          <line x1="100" y1="75" x2="140" y2="75" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
          <line x1="100" y1="90" x2="130" y2="90" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
        </svg>
      `
    },
    6: {
      id: "REF // 06",
      title: "Street-Art Graphic Identity Experiment",
      category: "Concepts & Sketches",
      badge: "GRAPHIC",
      description: "Visual exploration incorporating spray stencils, barcode labels, and clean geometric typography. Intended for custom clothing tags, inner brand labels, and promotional material for modern independent apparel.",
      tags: ["Brand Identity", "Street Art Stencil", "Typography", "Packaging Concept"],
      svg: `
        <svg viewBox="0 0 200 150" fill="none" class="art-svg">
          <text x="35" y="80" fill="var(--color-accent)" font-size="28" font-family="'Permanent Marker', cursive" letter-spacing="2">CREATE</text>
          <path d="M30 95 L 165 92" stroke="var(--color-text)" stroke-width="3" stroke-linecap="round"/>
          <circle cx="160" cy="40" r="14" stroke="var(--color-accent)" stroke-dasharray="4 2"/>
          <path d="M152 40 L168 40" stroke="var(--color-accent)" stroke-width="2"/>
        </svg>
      `
    }
  };

  /* --------------------------------------------------------------------------
     2. DYNAMIC FOOTER YEAR
     -------------------------------------------------------------------------- */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     3. HEADER SHADOW ON SCROLL
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('site-header');
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* --------------------------------------------------------------------------
     4. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openMobileMenu = () => {
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile drawer when clicking any link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });

    // Close when clicking outside menu container
    document.addEventListener('click', (e) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. ACTIVE NAVIGATION LINK INDICATOR (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], header[id="hero"]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* --------------------------------------------------------------------------
     6. PROJECT GALLERY FILTER
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set active filter button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      // Filter project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. PROJECT DETAILS MODAL
     -------------------------------------------------------------------------- */
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalId = document.getElementById('modal-id');
  const modalArtView = document.getElementById('modal-art-view');
  const modalDescription = document.getElementById('modal-description');
  const modalTags = document.getElementById('modal-tags');
  let lastActiveElement = null;

  const openProjectModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    lastActiveElement = document.activeElement;

    // Populate modal contents
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalId.textContent = data.id;
    modalArtView.innerHTML = data.svg;
    modalDescription.textContent = data.description;

    // Render tags
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'pill-tag';
      tagSpan.textContent = tag;
      modalTags.appendChild(tagSpan);
    });

    // Display modal
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  };

  const closeProjectModal = () => {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  // Attach event listeners to project trigger buttons and card cards
  document.querySelectorAll('.project-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  projectCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      // If clicking inside the card (except directly on button which has its own handler)
      if (!e.target.closest('.project-action-btn')) {
        const id = index + 1;
        openProjectModal(id);
      }
    });

    // Keyboard accessibility for card
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const id = index + 1;
        openProjectModal(id);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeProjectModal);
  }

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeProjectModal();
    }
  });

  /* --------------------------------------------------------------------------
     8. TOAST NOTIFICATION HELPER
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');
  const showToast = (message, icon = '✓') => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3200);
  };

  /* --------------------------------------------------------------------------
     9. COPY EMAIL TO CLIPBOARD
     -------------------------------------------------------------------------- */
  const copyBtn = document.getElementById('copy-email-btn');
  const emailElem = document.getElementById('email-address');

  if (copyBtn && emailElem) {
    copyBtn.addEventListener('click', async () => {
      const email = emailElem.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email address copied to clipboard!', '📋');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email address copied to clipboard!', '📋');
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. SCROLL REVEAL (IntersectionObserver with Reduced Motion check)
     -------------------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fadeElements = document.querySelectorAll('.fade-in');

  if (prefersReducedMotion) {
    fadeElements.forEach(el => el.classList.add('is-revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers without IntersectionObserver
    fadeElements.forEach(el => el.classList.add('is-revealed'));
  }

  /* --------------------------------------------------------------------------
     11. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. INTERACTIVE CONTACT FORM VALIDATION & HANDLING
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('user-name');
      const emailInput = document.getElementById('user-email');
      const messageInput = document.getElementById('user-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Email (simple regex)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (!isValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill out all required fields with valid details.';
        return;
      }

      // Simulated successful delivery
      formStatus.className = 'form-status success';
      formStatus.innerHTML = `✓ <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message has been received. I look forward to connecting with you.`;
      
      showToast('Message sent successfully!', '✉️');

      // Reset form fields
      contactForm.reset();

      // Clear success alert after 6 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
      }, 6000);
    });

    // Real-time error removal on input
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form-group').classList.remove('has-error');
      });
    });
  }

});
