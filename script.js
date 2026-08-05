/* =========================================================
   SHUBHAM — PORTFOLIO SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loading Screen ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('loaded'), 500);
  });

  /* ---------- AOS Init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  /* ---------- Typed.js Hero Roles ---------- */
  if (window.Typed) {
    new Typed('#typed-text', {
      strings: [
        'Cybersecurity Enthusiast',
        'Web Developer',
        'Problem Solver',
        'Computer Science Student'
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      showCursor: false
    });
  }

  /* ---------- Particles.js Background ---------- */
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 45, density: { enable: true, value_area: 900 } },
        color: { value: ['#8B5CF6', '#22D3EE', '#C084FC'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 2.5, random: true },
        line_linked: { enable: true, distance: 130, color: '#8B5CF6', opacity: 0.15, width: 1 },
        move: { enable: true, speed: 1, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          resize: true
        },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
      },
      retina_detect: true
    });
  }

  /* ---------- Active nav link on scroll (declared early: onScroll below needs these) ---------- */
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    links.forEach(link => {
      link.classList.toggle('active-link', link.getAttribute('href') === `#${current}`);
    });
  }

  /* ---------- Back to Top (declared early: onScroll below needs this) ---------- */
  const backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    backToTop.classList.toggle('show', window.scrollY > 500);
  }

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    updateActiveLink();
    toggleBackToTop();
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Unified Menu (single trigger, all links in one panel) ---------- */
  const menuTrigger = document.getElementById('menuTrigger');
  const menuPanel = document.getElementById('menuPanel');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const navLinks = document.getElementById('navLinks');

  function openMenu() {
    menuPanel.classList.add('open');
    menuBackdrop.classList.add('open');
    menuTrigger.classList.add('open');
    menuTrigger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    menuPanel.classList.remove('open');
    menuBackdrop.classList.remove('open');
    menuTrigger.classList.remove('open');
    menuTrigger.setAttribute('aria-expanded', 'false');
  }

  menuTrigger.addEventListener('click', () => {
    menuPanel.classList.contains('open') ? closeMenu() : openMenu();
  });
  menuBackdrop.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Theme Toggle (dark default, light on demand) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  const root = document.documentElement;

  function applyTheme(isLight) {
    if (isLight) {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    themeIcon.classList.toggle('fa-moon', !isLight);
    themeIcon.classList.toggle('fa-sun', isLight);
  }

  themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = root.getAttribute('data-theme') === 'light';
    applyTheme(!isCurrentlyLight);
  });

  /* ---------- Cursor Glow ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });

  /* ---------- Skill Bars Animation (on scroll into view) ---------- */
  const bars = document.querySelectorAll('.bar-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--w', `${level}%`);
        bar.classList.add('filled');
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(bar => barObserver.observe(bar));

  /* ---------- Animated Achievement Counters ---------- */
  const counters = document.querySelectorAll('.achieve-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1500;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Project Card Tilt ---------- */
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---------- Magnetic Buttons ---------- */
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  /* ---------- Back to Top (click handler) ---------- */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Contact Form (sends via Formspree — no backend needed) ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('.form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      status.textContent = 'Contact form not connected yet — see README.md for the 2-minute Formspree setup.';
      status.style.color = '#f87171';
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    status.style.color = '';
    status.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "Message sent — I'll get back to you soon!";
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try emailing me directly instead.';
        status.style.color = '#f87171';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try emailing me directly instead.';
      status.style.color = '#f87171';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });

});
