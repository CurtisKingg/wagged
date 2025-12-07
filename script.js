const revealables = document.querySelectorAll(
  '.panel, .panel--alt, .stories, .cta, .story-card, .timeline__item, .card, .hero__visual, .hero__content'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealables.forEach((el) => observer.observe(el));

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const offset = Math.min(scrolled / 12, 28);
  hero.style.setProperty('transform', `translateY(${offset * -0.2}px)`);
});
