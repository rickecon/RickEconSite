// ─────────────────────────────────────────────────────────────────────────────
//  SITE DATA — edit this file to update the home page and site-wide info.
//  Everything here is plain text/links, so no coding knowledge is required.
//  The three "recent items" lists (Publications, Works in Progress, News) do NOT
//  live here — those come from markdown files in src/content/ (add a file, it
//  shows up automatically, newest first).
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Richard W. Evans, PhD',
  shortName: 'Richard W. Evans',
  tagline:
    'Macroeconomist · Public economics · Computational economics · International economics · Open source policy modeling',
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
    substack: { handle: 'Econosseur', url: 'https://rickecon.substack.com/' },
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
  ],

  // ── Education ───────────────────────────────────────────────────────────────
  education: [
    { degree: 'Ph.D., Economics', school: 'University of Texas at Austin', year: '2008' },
    { degree: 'M.S., Economics', school: 'University of Texas at Austin', year: '2005' },
    { degree: 'M.A., Public Policy', school: 'Brigham Young University', year: '2003' },
    { degree: 'B.A., Economics', school: 'Brigham Young University', year: '1998' },
  ],

  // ── A recent quote that strikes me ──────────────────────────────────────────
  //  Swap this out whenever a new quote catches your eye.
  quote: {
    text: 'Economics is a science of thinking in terms of models joined to the art of choosing models which are relevant to the contemporary world.',
    author: 'John Maynard Keynes',
    source: 'Letter to Roy Harrod, 1938',
  },
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
