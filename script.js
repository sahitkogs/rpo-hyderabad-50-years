(() => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

  // Video card click — when a real YouTube ID is present, lazy-load the iframe.
  // Until then, cards are inert "Coming soon" placeholders.
  document.querySelectorAll('.video-card[data-video-id]').forEach((card) => {
    const id = card.getAttribute('data-video-id');
    if (!id) return;

    const thumb = card.querySelector('.video-thumb');
    if (!thumb) return;

    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.style.cursor = 'pointer';

    const load = () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      iframe.title = card.querySelector('h3')?.textContent || 'Video';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';

      const wrapper = document.createElement('div');
      wrapper.className = 'video-thumb video-thumb--loaded';
      wrapper.appendChild(iframe);
      thumb.replaceWith(wrapper);
    };

    card.addEventListener('click', load);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        load();
      }
    });
  });
})();
