# Shubham — Portfolio Website

A premium, futuristic personal portfolio for Shubham, a B.Tech Computer Science
Engineering student at Shree Ram Swaroop Memorial University (SRMU), Lucknow,
built with plain HTML, CSS, and JavaScript.

## Folder Structure

```
portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── assets/
│   ├── profile.png      ← add your real photo here (see below)
│   ├── resume.pdf        ← add your resume here
│   ├── favicon.png
│   ├── projects/         ← optional real project screenshots
│   └── icons/
```

## Before you deploy — 3 things left to add

### 1. Your resume
Drop your PDF into `assets/resume.pdf` — the "Download Resume" buttons
already point there.

Your profile photo is already in place at `assets/profile.png` and wired
into the hero section.

### 2. Make the contact form actually work (so clients can reach you)

The form is wired to [Formspree](https://formspree.io) — a free service
that emails you every submission with **no backend or server needed**.

1. Go to [formspree.io](https://formspree.io) and sign up free.
2. Create a new form and set it to send to your email.
3. Copy the form endpoint it gives you — it looks like
   `https://formspree.io/f/abcdwxyz`.
4. In `index.html`, find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your real ID.
5. Done — submissions will now land straight in your inbox. Formspree's
   free tier includes 50 submissions/month, which is plenty for a
   portfolio.

Until you do this, the form will show a friendly reminder instead of
silently failing.

### 3. Add your real reference links

The new **References & Inspiration** section (between Certificates and
Journey) currently has 4 placeholder cards. Open `index.html`, find the
`<section id="references">` block, and replace each `href="#"` with the
actual URL to your reference photo or video (YouTube, Google Drive,
Pinterest, Behance, etc.). Edit the title/description text and swap icons
(`fa-image` / `fa-video`) as needed. Add or remove `.ref-card` blocks
freely — the grid adjusts automatically.

## Customizing

- **Colors**: All theme colors live as CSS variables at the top of
  `style.css` under `:root`. Change `--primary`, `--secondary`, etc. to
  re-theme the whole site instantly.
- **Content**: Project cards, skills, timeline entries, and certificates are
  plain HTML blocks in `index.html` — copy/paste a block and edit the text to
  add more.
- **Contact form**: The form is UI-only right now (no backend). To make it
  functional, connect it to a service like [Formspree](https://formspree.io)
  or your own backend endpoint, and update the `fetch`/`action` logic in
  `script.js`.

## Running locally

No build step required — just open `index.html` in a browser, or serve the
folder with any static server, e.g.:

```bash
npx serve .
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set the source to your main branch, root folder.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Font Awesome](https://fontawesome.com) — icons
- [Google Fonts](https://fonts.google.com) — Space Grotesk, Inter, JetBrains Mono
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [Typed.js](https://github.com/mattboldt/typed.js) — hero typing effect
- [Particles.js](https://vincentgarreau.com/particles.js/) — ambient background particles

---
Made with ❤️ by Shubham · © 2026
