// Carousels
document.querySelectorAll('.carousel-wrap').forEach(wrap => {
  const track = wrap.querySelector('.carousel-track');
  const dotsContainer = wrap.closest('.squad-block').querySelector('.carousel-dots');
  const cards = track.querySelectorAll('.player-card');

  const cardW = () => cards[0].offsetWidth + 16;
  const visible = () => Math.max(1, Math.round(track.offsetWidth / cardW()));
  const pages = () => Math.max(1, Math.ceil(cards.length / visible()));

  const buildDots = () => {
    dotsContainer.innerHTML = '';
    const n = pages();
    if (n <= 1) return;
    for (let i = 0; i < n; i++) {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => {
        track.scrollTo({ left: cardW() * visible() * i, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }
  };
  buildDots();

  track.addEventListener('scroll', () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const n = pages();
    const active = Math.min(n - 1, Math.round(progress * (n - 1)));
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === active);
    });
  });

  wrap.querySelector('.prev').addEventListener('click', () => {
    track.scrollBy({ left: -cardW(), behavior: 'smooth' });
  });
  wrap.querySelector('.next').addEventListener('click', () => {
    track.scrollBy({ left: cardW(), behavior: 'smooth' });
  });

  window.addEventListener('resize', buildDots);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 4000);
}
