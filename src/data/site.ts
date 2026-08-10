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
      text: 'For example, [Milton] Friedman’s style as a debater reveals an aspect of his personality. He was always courteous to his opponents in a debate, never attacked ad hominem. He concentrated on weaknesses of the opponent’s arguments and invariably emerged as the victor in the debate.',
      author: 'Anna Schwarz, Economist',
      source: 'in her book review, "[Milton Friedman: A Biography by Lanny Ebenstein](https://www.aeaweb.org/articles?id=10.1257/jel.47.2.482)", 2009',
    },
    {
      text: 'Blessed are the young, for they shall inherit the national debt.',
      author: 'Herbert Hoover, 31st President of the United States',
      source: 'address to the Nebraska Republican Conference in Lincoln, Nebraska, Jan. 16, 1936',
    },
    {
      text: 'When written in Chinese, the word ‘crisis’ is composed of two characters. One represents danger and the other represents opportunity.',
      author: 'John F. Kennedy, 35th President of the United States',
      source: '[Speech](https://www.jfklibrary.org/archives/other-resources/john-f-kennedy-speeches/india-and-the-us-conference-washington-dc-19590504), Convocation of the United Negro College Fund, 1959. Kennedy’s interpretation of the second Chinese character meaning ‘opportunity’ is considered a stretch.',
    },
    {
      text: 'Consumption is the sole end and purpose of all production.',
      author: 'Adam Smith, Economist',
      source: '*Wealth of Nations*, 1776',
    },
    {
      text: 'The world is still a closed economy, but its regions and countries are becoming increasingly open.... The international economic climate has changed in the direction of financial integration, and this has important implications for economic policy.',
      author: 'Robert Mundell, Economist, Nobel Laureate',
      source: 'in article "[Capital Mobility and Stabilization Policy under Fixed and Flexible Exchange Rates](https://www.cambridge.org/core/journals/canadian-journal-of-economics-and-political-science-revue-canadienne-de-economiques-et-science-politique/article/abs/capital-mobility-and-stabilization-policy-under-fixed-and-flexible-exchange-rates/1C0D6743C46645F447F2338146CA61B9)," 1963',
    },
    {
      text: 'The modern world regards business crises much as the ancient Egyptian regarded the overflowing of the Nile. The phenomenon recurs at intervals; it is of great importance to everyone, and natural causes of it are not in sight.',
      author: 'John Bates Clark, Economist',
      source: 'in his introduction to Rodbertus, *Overproduction and Crises*, English translation, 1898',
    },
    {
      text: 'Is there some action a government of India could take that would lead the Indian economy to grow like Indonesia’s or Egypt’s? If so, what, exactly? If not, what is it about the ‘nature of India’ that makes it so? The consequences for human welfare involved in questions like these are simply staggering: Once one starts to think about them, it is hard to think about anything else.',
      author: 'Robert E. Lucas, Jr., Economist and Nobel Laureate',
      source: 'in "[On the Mechanics of Economic Development](https://www.sciencedirect.com/science/article/abs/pii/0304393288901687)," 1988',
    },
    {
      text: 'No nation was ever ruined by trade, even seemingly the most disadvantageous.',
      author: 'Benjamin Franklin',
      source: 'in "Principles of Trade" pamphlet, 1774',
    },
    {
      text: 'The whole of science is nothing more than a refinement of everyday thinking.',
      author: 'Albert Einstein, Physicist',
      source: 'in "[Physics and Reality](https://www.sciencedirect.com/science/article/abs/pii/S0016003236910475)," 1936',
    },
    {
      text: 'In the fall of 1972, President Nixon announced that the rate of increase of inflation was decreasing. This was the first time a sitting president used the third derivative to advance his case for reelection.',
      author: 'Hugo Rossi, Mathematician',
      source: 'in, “[Mathematics Is an Edifice, Not a Toolbox](https://studylib.net/doc/18597562/mathematics-is-an-edifice--not-a-toolbox),” 1996',
    },
    {
      text: 'Without deviation from the norm, progress is not possible.',
      author: 'Frank Zappa, Musician and Composer',
      source: 'Dutch television interview, Feb. 11, 1971 and in Zappa and Occhiogrosso, 1989, ch. 8',
    },
    {
      text: 'Mathematics is the art of reducing any problem to linear algebra.',
      author: 'William Stein, Mathematician and Computer Scientist',
      source: 'attributed by multiple colleagues in sources viewed by Stein, earliest reference 2008.',
    },
    {
      text: 'If we can formulate a problem as a convex optimization problem, then we can solve it efficiently.... With only a bit of exaggeration, we can say that, if you formulate a practical problem as a convex optimization problem, then you have solved the original problem.',
      author: 'Stephen Boyd and Lieven Vandenberghe',
      source: '[*Convex Optimization*](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf), 2004, p. 8',
    },
    {
      text: 'My freedom will be so much the greater and more meaningful the more narrowly I limit my field of action and the more I surround myself with obstacles. Whatever diminishes constraint diminishes strength. The more constraints one imposes, the more one frees one’s self of the chains that shackle the spirit.',
      author: 'Igor Stravinsky, Composer',
      source: 'Charles Eliot Norton Lectures at Harvard, delivered in 1939-40',
    },
    {
      text: 'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
      author: 'John von Neumann, Mathematician and Computer Scientist',
      source: 'Franz L. Alt 1972 [recollection](https://homepage.divms.uiowa.edu/~jorgen/vonneumannquotesource.html) of von Neumann comment at first national meeting of the Association for Computing Machinery in 1947',
    },
    {
      text: 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.',
      author: 'Linus Torvalds, Creator of Linux',
      source: '[message](https://marc.info/?l=git&m=115401850825206&w=2) to Git mailing list, Jul. 27, 2006',
    },
    {
      text: 'The fundamental law of computer science: As machines become more powerful, the efficiency of algorithms grows more important, not less.',
      author: 'Nick Trefethen, Mathematician and Computer Scientist, University of Oxford',
      source: 'from his "[Maxims about Numerical Mathematics, Computers, Science, and Life](https://people.maths.ox.ac.uk/trefethen/publication/PDF/1998_76.pdf)," 1988',
    },
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
    {
      text: 'Open source policy models are fundamentally apolitical, because of their transparency, accessibility, and replicability.',
      author: 'Richard W. Evans',
      source: 'Open Source Policy Center presentation, American Enterprise Institute, Washington, DC, Apr. 2, 2015',
    },
    {
      text: 'Even small demographic changes have a bigger macroeconomic impact than any tax policy reform I have ever simulated.',
      author: 'Richard W. Evans',
      source: 'UN DESA OG-Core training in Cape Town, South Africa, Aug. 1, 2024',
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
