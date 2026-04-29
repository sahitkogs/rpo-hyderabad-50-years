(() => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language toggle: flip the .lang-en / .lang-te class on <html>, and keep
  // the html[lang] attribute in sync so screen readers and search engines
  // see the right language. The CSS handles which translation is visible;
  // this just swaps the master switch.
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const isEn = html.classList.contains('lang-en');
      html.classList.toggle('lang-en', !isEn);
      html.classList.toggle('lang-te', isEn);
      html.lang = isEn ? 'te' : 'en';
    });
  }

  // Mobile nav toggle
  const toggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scrollspy — highlight nav link for the section currently in view
  const navLinks = Array.from(document.querySelectorAll('header nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const byId = new Map(navLinks.map((l) => [l.getAttribute('href').slice(1), l]));
    const setActive = (id) => {
      navLinks.forEach((l) => l.classList.remove('is-active'));
      const link = byId.get(id);
      if (link) link.classList.add('is-active');
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
  }

})();
