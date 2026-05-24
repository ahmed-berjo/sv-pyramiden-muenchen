# SV Pyramiden München — Official Website

Official website for SV Pyramiden München, an amateur football club based in Munich, Germany.

## Live Site

[www.pyramiden-muenchen.com](https://www.pyramiden-muenchen.com)

## Tech Stack

- HTML, CSS, JavaScript (no frameworks)
- Hosted on GitHub Pages
- Custom domain via Namecheap
- Contact form via Formspree

## Project Structure

```
├── index.html          # Main website
├── styles.css          # All styles
├── main.js             # JS (language toggle, carousels, nav)
├── images/
│   └── players/        # Player and staff photos (WebP)
├── Logo-removebg-preview.png
├── stadium.svg
├── CNAME               # Custom domain config
└── process_images.py   # Script to crop/resize/convert player photos
```

## Features

- EN / DE language toggle
- Player carousels with dot indicators
- Contact form (Formspree)
- Google Maps link for home ground
- Fully responsive (mobile + desktop)

## Development

```bash
# Run locally
python3 -m http.server 8081

# Process new player images
python3 process_images.py ~/Desktop/raw_photos images/players
```

## Branching

- `main` — production (auto-deploys to GitHub Pages)
- `dev` — development branch, merge to main when ready
