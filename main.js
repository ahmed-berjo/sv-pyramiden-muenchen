// Carousels
document.querySelectorAll('.carousel-wrap').forEach(wrap => {
  const track = wrap.querySelector('.carousel-track');
  const cardWidth = () => {
    const card = track.querySelector('.player-card');
    return card ? card.offsetWidth + parseInt(getComputedStyle(track).gap) : 176;
  };
  wrap.querySelector('.prev').addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
  });
  wrap.querySelector('.next').addEventListener('click', () => {
    track.scrollBy({ left: cardWidth(), behavior: 'smooth' });
  });
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
