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

  // ── Favorite quotes ─────────────────────────────────────────────────────────
  //  The home page shows these one at a time, in the order listed here, advancing
  //  every 12 seconds and looping back to the top. Add as many as you like — just
  //  copy the block below and paste it in. `source` is optional (use '' to omit).
  //
  //    {
  //      text: 'Insert quote here.',
  //      author: 'Insert author here',
  //      source: 'Insert source here',
  //    },
  //
  //  With only one quote listed, the section simply displays it and does not cycle.
  //
  //  To hyperlink text in `source`, wrap it in [square brackets] followed by the
  //  address in (parentheses). Link the whole thing, or just part of it:
  //
  //    source: '[Testimony, House Oversight Committee](https://example.com/hearing)',
  //    source: 'Testimony, [House Oversight Committee](https://example.com), July 22, 2025',
  //
  //  Use as many links in one source as you like. Links to other sites open in a
  //  new tab; paths starting with / stay on this site. Anything that is not a web
  //  address is left as plain text.
  //
  //  To italicize words, put *asterisks* around them. This works in `text`,
  //  `author`, and `source`, including inside a link label:
  //
  //    text: 'A model is a *simplification*, never the thing itself.',
  //    source: 'Review of *The General Theory*, 1936',
  //    source: '[*The Economic Journal*](https://example.com), 1936',
  //
  //  Note the quote itself is displayed in italic type, so *asterisks* there make
  //  those words upright instead — either way they stand out from the rest.
  quotes: [
    {
      text: 'Prosperity is energy intensive.',
      author: 'Josh Smith',
      source: '[Testimony](https://oversight.house.gov/wp-content/uploads/2025/07/Smith-Written-Testimony.pdf), House Oversight Committee, Subcommittee on Economic Growth, Energy Policy, and Regulatory Affairs, July 22, 2025',
    },
    {
      text: 'In terms of priority, inspiration comes first. You come next. The audience comes last.',
      author: 'Rick Rubin',
      source: '*The Creative Act: A Way of Being*, 2023, p. 130',
    },
    {
      text: 'If one wishes to know whether a kingdom is well governed, examine the character of its music.',
      author: 'Confucius, 551-479 BC',
      source: 'Paraphrase from the *Book of Rites (Liji)*, from the chapter "[Record of Music](https://ctext.org/text.pl?node=416567&if=en)"',
    },
    {
      text: 'The hardest job for an artist is to create a work that other people love.',
      author: 'Romney Evans, CMO and Co-founder of True Fit',
      source: 'Abundance Institute Creative Frontiers Summit, Jul. 14, 2026',
    },
    {
      text: '…every good product that I’ve ever seen… is because a group of people cared deeply about making something wonderful that they and their friends wanted…. That’s how almost everything I know that’s good has come about.',
      author: 'Steve Jobs',
      source: '[Fireside Chat Q&A Session](https://www.youtube.com/watch?v=_LsvdlaF5_k&t=388s), Apple WWDC, 1997',
    },
  ],

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
