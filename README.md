# rickecon.com — personal website of Richard W. Evans, PhD

A fast, modern, static website built with [Astro](https://astro.build). Content lives in
plain markdown and one data file, so day-to-day updates need no coding.

**Live site:** https://www.rickecon.com

---

## Quick start (run it locally)

Requires [Node.js](https://nodejs.org) 18.14 or newer.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start a local preview at http://localhost:4321
npm run build    # produce the production site in ./dist
npm run preview  # preview the built site locally
```

---

## How to edit the site

### 1. Your name, positions, contact, education, fields, and quote

All of this lives in one file: [`src/data/site.ts`](src/data/site.ts). Open it, change the
text between the quotes, save. To swap the **quote** on the home page, edit the `quote` block.

### 2. The three "recent items" lists (Publications, Works in Progress, Links & News)

Each list is a folder of small markdown files. **Add a file → it appears automatically**,
sorted newest-first. The home page shows the 4 most recent from each; the Research and Links
pages show them all.

| List on the site        | Folder                             |
| ----------------------- | ---------------------------------- |
| Recent Publications     | `src/content/publications/`        |
| Works in Progress       | `src/content/works-in-progress/`   |
| Other Links & News      | `src/content/news/`                |

Each file looks like this (only `title` and `date` are required):

```markdown
---
title: "My new paper title"
date: 2026-03-01
authors: "with Jane Coauthor"   # optional
venue: "Journal of Economics"    # optional (journal / outlet / publisher)
note: "revise and resubmit"      # optional badge
url: "https://example.com/paper" # optional link
featured: true                   # optional — pin to top of the home-page preview
---
```

Copy an existing file in the folder as a template. To **remove** an item, delete its file.

### 3. Your headshot and CV

- **Headshot:** replace [`src/assets/headshot.png`](src/assets/headshot.png) (square image works best).
- **CV:** replace [`public/cv/EvansCV.pdf`](public/cv/EvansCV.pdf) (keep the same filename, or update
  `cvPath` in `src/data/site.ts`).

### 4. Navigation menu

Edit the `nav` array at the bottom of [`src/data/site.ts`](src/data/site.ts) to add, remove, or
reorder menu items.

### 5. Subpage text (Bio, Teaching, Media & Talks, Links)

These are regular pages in [`src/pages/`](src/pages/). The prose is plain HTML you can edit
directly (e.g. `src/pages/bio.astro`).

---

## Project structure

```
public/            # served as-is (CV pdf, favicon, CNAME for the custom domain)
src/
  assets/          # images optimized at build time (headshot)
  components/      # Nav, Footer
  content/         # markdown lists: publications, works-in-progress, news
  data/site.ts     # <- edit for name, positions, contact, education, quote, nav
  layouts/Base.astro   # shared page shell (header, footer, theme toggle, SEO tags)
  pages/           # one file per page (index, bio, research, teaching, media, links)
  styles/global.css    # the design system (colors, type, light/dark theme)
```

---

## Deploying to GitHub Pages at www.rickecon.com

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
deploys automatically on every push to the **`main`** branch.

**One-time setup:**

1. Push this repository to `main` on GitHub.
2. In the repo: **Settings -> Pages -> Build and deployment -> Source -> GitHub Actions**.
3. DNS for `rickecon.com` (at your domain registrar):
   - Add a `CNAME` record: `www` -> `rickecon.github.io`
   - For the apex `rickecon.com`, add four `A` records pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (and/or the matching `AAAA` records — see GitHub's Pages custom-domain docs).
4. In **Settings -> Pages -> Custom domain**, confirm `www.rickecon.com` and enable
   **Enforce HTTPS**. The [`public/CNAME`](public/CNAME) file already sets this.

> This project also works on Netlify or Vercel with zero config — point them at the repo and
> they auto-detect Astro. If you host somewhere other than a custom-domain root, adjust `site`
> (and possibly `base`) in `astro.config.mjs`.

---

## Notes

- The current git branch is `init`. Rename/merge to `main` (or update the workflow's branch)
  so the deploy action runs.
- Some list items have no `url` yet — add links in the markdown frontmatter as they become
  available.
