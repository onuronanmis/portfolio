# Portfolio – Onur Onanmis

Personal portfolio website of Onur Onanmis, Fullstack Developer in training at the Developer Akademie.

**Live:** https://www.onur-onanmis.de

## Features

- Responsive design for desktop, tablet and mobile
- Multilingual: English, German and Turkish (ngx-translate)
- Contact form with validation (Reactive Forms)
- Project showcase with hover and tap overlays
- Legal notice and privacy policy pages

## Tech Stack

- Angular 22 (standalone components, signals)
- TypeScript
- SCSS
- ngx-translate

## Getting Started

```bash
npm install
ng serve
```

Open `http://localhost:4200/` in your browser.

## Build & Deployment

```bash
ng build
```

The production build is configured for the domain root `/` (`baseHref` in `angular.json`).
Upload the contents of `dist/portfolio/browser/` (including `.htaccess`) to the server.

## Project Structure

```
src/app/
├── core/        header, menu, footer
├── sections/    hero, about, skills, portfolio, references, contact
├── pages/       home, imprint, privacy
├── shared/      reusable components (back, language, scroll, socials) and interfaces
└── data/        projects, references and skills
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/onur-onanmis-1b5563451/)
- [GitHub](https://github.com/onuronanmis)
