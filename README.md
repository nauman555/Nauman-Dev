# Nauman Ali — Portfolio

A React + Tailwind portfolio built from your CV, styled after the reference design you shared (deep green / cream palette, serif headings, timeline layout).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`).

## 2. Customize

Almost all the text lives in one place: **`src/data/content.js`**. Edit names, bio, skills, project descriptions, and job history there — you won't need to touch the component files for content changes.

A few things worth doing before you launch:
- **Photo**: `src/components/Hero.jsx` has a placeholder circle where your photo goes — replace it with an `<img>` tag pointing at a photo in `/public`.
- **Projects**: the 4 project cards are inferred from your CV (forensic tool, automation work, APIs, dashboard). Swap in real project names, links, and screenshots once you have case studies to show.
- **Testimonial**: currently a placeholder — replace with a real quote from a colleague or supervisor when you have one.
- **CV download**: put your PDF in `/public` and update `resumeUrl` in `content.js` so the "Download CV" button links to it.

## 3. Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder.

## 4. Deploy for free

Same options we discussed earlier:

**GitHub Pages**
```bash
npm run build
# push the contents of dist/ to a gh-pages branch, or use the gh-pages package:
npm install -D gh-pages
# then add to package.json scripts: "deploy": "gh-pages -d dist"
npm run deploy
```

**Netlify** — drag and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo for auto-deploys on every push (build command: `npm run build`, publish directory: `dist`).

**Vercel** — import the repo at vercel.com; it auto-detects Vite and deploys with zero config.

## Project structure

```
src/
  data/content.js       ← all editable copy
  components/           ← one file per section
  App.jsx                ← assembles the page
  index.css              ← Tailwind + global styles
tailwind.config.js       ← color palette & fonts
```
