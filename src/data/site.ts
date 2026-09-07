// ─────────────────────────────────────────────────────────────────────────────
//  SITE DATA — edit this file to update the home page and site-wide info.
//  Everything here is plain text/links, so no coding knowledge is required.
//  The favorite quotes on the home page do NOT live here — they come from the
//  markdown file src/data/quotes.md (that file explains its own format).
//  Neither do the three "recent items" lists (Publications, Works in Progress,
//  News) — those come from markdown files in src/content/ (add a file, it shows
//  up automatically, newest first).
// ─────────────────────────────────────────────────────────────────────────────

// The quotes file is read as plain text at build time and parsed below.
import quotesMarkdown from './quotes.md?raw';

export type Quote = { text: string; author: string; source: string };

// ── Quote file parser ────────────────────────────────────────────────────────
//  A quote is a `## ` heading (the author), a `> ` blockquote (the quote text,
//  which may wrap over several lines), and an optional `Source: ` line. Only
//  lines that start at the left margin count, so indented or fenced examples in
//  the file's instructions are ignored, as is every other line.
function parseQuotes(markdown: string): Quote[] {
  const quotes: Quote[] = [];
  let current: { author: string; text: string[]; source: string } | undefined;
  let fenced = false;

  const finish = () => {
    if (current && current.text.length) {
      quotes.push({ text: current.text.join(' '), author: current.author, source: current.source });
    }
    current = undefined;
  };

  for (const line of markdown.split(/\r?\n/)) {
    if (/^(```|~~~)/.test(line)) {
      fenced = !fenced;
      continue;
    }
    if (fenced) continue;

    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      finish();
      current = { author: heading[1], text: [], source: '' };
      continue;
    }
    if (!current) continue;

    const quoted = /^>\s?(.*)$/.exec(line);
    if (quoted) {
      const part = quoted[1].trim();
      if (part) current.text.push(part);
      continue;
    }
    const source = /^Source:\s*(.*)$/.exec(line);
    if (source) current.source = source[1].trim();
  }
  finish();

  return quotes;
}

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Richard W. Evans, PhD',
  shortName: 'Richard W. Evans',
  tagline:
    'Macroeconomy · Public economics · Computational economics · International economics · Open source policy modeling',
  url: 'https://www.rickecon.com',

  // Path to your CV (lives in public/cv/). Replace the PDF there to update it.
  cvPath: '/cv/EvansCV.pdf',

  // ── Contact (no cell phone, per request) ────────────────────────────────────
  contact: {
    email: 'rick@abundance.institute',
    affiliation: 'Abundance Institute',
    address: ['303 S Chipeta Way, 4th floor', 'Salt Lake City, UT 84108'],
    // Social / professional links
    x: { handle: '@RickEcon', url: 'https://x.com/RickEcon' },
    github: { handle: 'rickecon', url: 'https://github.com/rickecon' },
    linkedin: { handle: 'rickecon', url: 'https://www.linkedin.com/in/rickecon/' },
    substack: { handle: 'Econosseur', url: 'https://econosseur.rickecon.com/' },
    scholar: { url: '' }, // add a Google Scholar URL here if desired
  },

  // ── Current positions ───────────────────────────────────────────────────────
  positions: [
    {
      title: 'Senior Economist',
      org: 'Abundance Institute',
      url: 'https://abundance.institute',
      note: 'Salt Lake City, Utah',
    },
    {
      title: 'Director and Founder',
      org: 'Open Source Economics Laboratory (OSE Lab)',
      url: 'https://github.com/OpenSourceEcon',
      note: '',
    },
    {
      title: 'President and Co-Founder',
      org: 'Open Research Group, Inc. (OpenRG)',
      url: '',
      note: '',
    },
  ],

  // ── Fields of specialization ────────────────────────────────────────────────
  fields: [
    'Macroeconomics',
    'Public economics',
    'Computational economics',
    'International macroeconomics',
    'Open source policy modeling',
  ],

  // ── Education ───────────────────────────────────────────────────────────────
  education: [
    { degree: 'Ph.D., Economics', school: 'University of Texas at Austin', year: '2008' },
    { degree: 'M.S., Economics', school: 'University of Texas at Austin', year: '2005' },
    { degree: 'M.A., Public Policy', school: 'Brigham Young University', year: '2003' },
    { degree: 'B.A., Economics', school: 'Brigham Young University', year: '1998' },
  ],

  // ── Favorite quotes ─────────────────────────────────────────────────────────
  //  These live in src/data/quotes.md — open that file to add, edit, or reorder
  //  them. It explains the format at the top; no editing is needed here.
  quotes: parseQuotes(quotesMarkdown),

  //  How long each quote stays on screen, in milliseconds (12000 = 12 seconds).
  quoteIntervalMs: 12000,
};

// Top navigation. Add/remove/reorder freely. `external: true` opens in a new tab
// (used for the CV PDF). Order here is the order shown in the menu.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Bio', href: '/bio/' },
  { label: 'Research', href: '/research/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Media & Talks', href: '/media/' },
  { label: 'Links', href: '/links/' },
  { label: 'CV', href: '/cv/EvansCV.pdf', external: true },
];
