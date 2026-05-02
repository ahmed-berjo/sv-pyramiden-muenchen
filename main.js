// Language toggle
const translations = {
  en: {
    nav_home: 'Home', nav_club: 'Club', nav_squad: 'Squad', nav_contact: 'Contact',
    nav_sub: 'Munich',
    hero_eyebrow: 'Founded 2025 · Munich',
    hero_title: 'Where Heritage<br />Meets the<br /><em>Beautiful Game</em>',
    hero_desc: 'An amateur football club connecting cultures, building community, and playing with heart in the heart of Bavaria.',
    hero_cta1: 'Meet the Squad', hero_cta2: 'Get in Touch',
    info_founded: 'Year Founded', info_city: 'Home City',
    info_level: 'C-Class', info_level_label: 'Level', info_ground: 'Home Ground',
    about_eyebrow: 'Our Story',
    about_title: 'More Than a Football Club',
    about_p1: 'SV Pyramiden München is an amateur football club in Munich, founded by Egyptians with the aim of connecting cultures through sport and fostering a strong community spirit.',
    about_p2: 'By combining a passion for football with a deep sense of heritage, the club promotes diversity, mutual respect, and integration within the wider Munich community.',
    squad_eyebrow: 'The Team', squad_title: 'Squad',
    coaching_staff: 'Coaching Staff',
    head_coach: 'Head Coach', asst_coach: 'Assistant Coach',
    pos_goalkeepers: 'Goalkeepers', pos_defenders: 'Defenders',
    pos_midfielders: 'Midfielders', pos_forwards: 'Forwards',
    pos_goalkeeper: 'Goalkeeper', pos_defender: 'Defender',
    pos_midfielder: 'Midfielder', pos_forward: 'Forward',
    contact_eyebrow: 'Reach Out', contact_title: 'Contact Us',
    contact_desc: "Whether you want to join the club, ask a question, or just say hello — we'd love to hear from you.",
    instagram_btn: 'Follow on Instagram',
    form_name: 'Full Name', form_name_ph: 'Your name',
    form_email: 'Email Address',
    form_msg: 'Message', form_msg_ph: 'How can we help?',
    form_submit: 'Send Message',
    footer_founded: 'Founded 2025',
    footer_copy: '© 2025 SV Pyramiden München. All rights reserved.'
  },
  de: {
    nav_home: 'Start', nav_club: 'Verein', nav_squad: 'Kader', nav_contact: 'Kontakt',
    nav_sub: 'München',
    hero_eyebrow: 'Gegründet 2025 · München',
    hero_title: 'Fußball verbindet –<br />Kulturen<br /><em>auch</em>',
    hero_desc: 'Ein Amateurverein aus München, der Kulturen durch Sport zusammenbringt und ein starkes Gemeinschaftsgefühl fördert.',
    hero_cta1: 'Zum Kader', hero_cta2: 'Kontakt aufnehmen',
    info_founded: 'Gründungsjahr', info_city: 'Heimatstadt',
    info_level: 'C-Klasse', info_level_label: 'Spielklasse', info_ground: 'Heimstadion',
    about_eyebrow: 'Unsere Geschichte',
    about_title: 'Mehr als nur ein Fußballverein',
    about_p1: 'SV Pyramiden München ist ein Amateurverein aus München, der von Ägyptern gegründet wurde – mit dem Ziel, Kulturen durch den Sport zu verbinden und ein starkes Gemeinschaftsgefühl zu schaffen.',
    about_p2: 'Mit einer Leidenschaft für Fußball und einem tiefen Bezug zur eigenen Herkunft setzt sich der Verein für Vielfalt, gegenseitigen Respekt und Integration in der Münchner Stadtgesellschaft ein.',
    squad_eyebrow: 'Die Mannschaft', squad_title: 'Kader',
    coaching_staff: 'Trainerstab',
    head_coach: 'Trainer', asst_coach: 'Co-Trainer',
    pos_goalkeepers: 'Torwart', pos_defenders: 'Verteidiger',
    pos_midfielders: 'Mittelfeldspieler', pos_forwards: 'Stürmer',
    pos_goalkeeper: 'Torwart', pos_defender: 'Verteidiger',
    pos_midfielder: 'Mittelfeldspieler', pos_forward: 'Stürmer',
    contact_eyebrow: 'Schreib uns', contact_title: 'Kontakt',
    contact_desc: 'Ob du dem Verein beitreten möchtest, eine Frage hast oder einfach Hallo sagen willst – wir freuen uns von dir zu hören.',
    instagram_btn: 'Auf Instagram folgen',
    form_name: 'Vollständiger Name', form_name_ph: 'Dein Name',
    form_email: 'E-Mail-Adresse',
    form_msg: 'Nachricht', form_msg_ph: 'Wie können wir dir helfen?',
    form_submit: 'Nachricht senden',
    footer_founded: 'Gegründet 2025',
    footer_copy: '© 2025 SV Pyramiden München. Alle Rechte vorbehalten.'
  }
};

// Position label map for both directions
const posMap = {
  'goalkeeper': 'pos_goalkeeper', 'defender': 'pos_defender',
  'midfielder': 'pos_midfielder', 'forward': 'pos_forward',
  'torwart': 'pos_goalkeeper', 'verteidiger': 'pos_defender',
  'mittelfeldspieler': 'pos_midfielder', 'stürmer': 'pos_forward'
};

function applyLang(lang) {
  const t = translations[lang];

  // Standard i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Player position labels
  document.querySelectorAll('.player-pos').forEach(el => {
    const key = posMap[el.textContent.trim().toLowerCase()];
    if (key && t[key]) el.textContent = t[key];
  });

  // Munich / München city name in info strip
  document.querySelectorAll('.info-num').forEach(el => {
    const val = el.textContent.trim();
    if (val === 'Munich' || val === 'München') {
      el.textContent = lang === 'de' ? 'München' : 'Munich';
    }
  });

  // Toggle active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(localStorage.getItem('lang') || 'en');

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

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav highlight on scroll
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
