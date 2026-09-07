# Favorite quotes

The home page shows these one at a time, in the order listed below, advancing
every 12 seconds and looping back to the top. Readers can also step through them
with the back/forward buttons under the quote. Add as many as you like — just
copy the block below and paste it in. The `Source:` line is optional (leave it
out to omit it).

    ## Insert author here

    > Insert quote here.

    Source: Insert source here

Each quote is one `##` heading (the author), one `>` blockquote (the quote
itself), and an optional line beginning with `Source:`. Blank lines between
them are required; anything else in this file is ignored, so notes to yourself
are safe to leave lying around. With only one quote listed, the section simply
displays it and does not cycle. How long each quote stays on screen is set by
`quoteIntervalMs` in `src/data/site.ts`.

To hyperlink text in a source, wrap it in [square brackets] followed by the
address in (parentheses). Link the whole thing, or just part of it:

    Source: [Testimony, House Oversight Committee](https://example.com/hearing)
    Source: Testimony, [House Oversight Committee](https://example.com), July 22, 2025

Use as many links in one source as you like. Links to other sites open in a new
tab; paths starting with / stay on this site. Anything that is not a web address
is left as plain text.

To italicize words, put *asterisks* around them. This works in the quote, the
author, and the source, including inside a link label:

    > A model is a *simplification*, never the thing itself.

    Source: Review of *The General Theory*, 1936
    Source: [*The Economic Journal*](https://example.com), 1936

Note the quote itself is displayed in italic type, so *asterisks* there make
those words upright instead — either way they stand out from the rest.

---

## George E. P. Box, Statistician

> Since all models are wrong the scientist must be alert to what is importantly wrong. It is inappropriate to be concerned about mice when there are tigers abroad.

Source: in his paper, "[Science and Statistics](https://www.tandfonline.com/doi/abs/10.1080/01621459.1976.10480949)", *Journal of the American Statistical Association*, 71:356, p. 792, May 1976

## Sir David R. Cox, Statistician

> ...it does not seem helpful just to say that all models are wrong. The very word model implies simplification and idealization. The idea that complex physical, biological or sociological systems can be exactly described by a few formulae is patently absurd. The construction of idealized representations that capture important stable aspects of such systems is, however, a vital part of general scientific analysis and statistical models, especially substantive ones....

Source: in his discussion of paper, Chatfield, Chris, "[Model Uncertainty, Data Mining and Statistical Inference](https://academic.oup.com/jrsssa/article/158/3/444/7106866)", *Journal of the Royal Statistical Society, Series A (Statistics in Society)*, 158:3, p. 456, May 1995

## Roger Federer, Hall of Fame Tennis Player

> The secret to sustained success isn’t outworking everyone. It is building a life around your craft you never want to escape from.

Source: paraphrase of Steve Kerr’s recollection of [Federer’s comments](https://www.youtube.com/watch?v=IRAaCq3nAMs) to Golden State Warriors in Shanghai, China, Oct. 2017. Paraphrase from [Josh Chambers’ X post](https://x.com/JoshChambers/status/2096776782993055746).

## Anna Schwarz, Economist

> For example, [Milton] Friedman’s style as a debater reveals an aspect of his personality. He was always courteous to his opponents in a debate, never attacked ad hominem. He concentrated on weaknesses of the opponent’s arguments and invariably emerged as the victor in the debate.

Source: in her book review, "[Milton Friedman: A Biography by Lanny Ebenstein](https://www.aeaweb.org/articles?id=10.1257/jel.47.2.482)", 2009

## Herbert Hoover, 31st President of the United States

> Blessed are the young, for they shall inherit the national debt.

Source: address to the Nebraska Republican Conference in Lincoln, Nebraska, Jan. 16, 1936

## John F. Kennedy, 35th President of the United States

> When written in Chinese, the word ‘crisis’ is composed of two characters. One represents danger and the other represents opportunity.

Source: [Speech](https://www.jfklibrary.org/archives/other-resources/john-f-kennedy-speeches/india-and-the-us-conference-washington-dc-19590504), Convocation of the United Negro College Fund, 1959. Kennedy’s interpretation of the second Chinese character meaning ‘opportunity’ is considered a stretch.

## Adam Smith, Economist

> Consumption is the sole end and purpose of all production.

Source: *Wealth of Nations*, 1776

## Robert Mundell, Economist, Nobel Laureate

> The world is still a closed economy, but its regions and countries are becoming increasingly open.... The international economic climate has changed in the direction of financial integration, and this has important implications for economic policy.

Source: in article "[Capital Mobility and Stabilization Policy under Fixed and Flexible Exchange Rates](https://www.cambridge.org/core/journals/canadian-journal-of-economics-and-political-science-revue-canadienne-de-economiques-et-science-politique/article/abs/capital-mobility-and-stabilization-policy-under-fixed-and-flexible-exchange-rates/1C0D6743C46645F447F2338146CA61B9)," 1963

## John Bates Clark, Economist

> The modern world regards business crises much as the ancient Egyptian regarded the overflowing of the Nile. The phenomenon recurs at intervals; it is of great importance to everyone, and natural causes of it are not in sight.

Source: in his introduction to Rodbertus, *Overproduction and Crises*, English translation, 1898

## Robert E. Lucas, Jr., Economist and Nobel Laureate

> Is there some action a government of India could take that would lead the Indian economy to grow like Indonesia’s or Egypt’s? If so, what, exactly? If not, what is it about the ‘nature of India’ that makes it so? The consequences for human welfare involved in questions like these are simply staggering: Once one starts to think about them, it is hard to think about anything else.

Source: in "[On the Mechanics of Economic Development](https://www.sciencedirect.com/science/article/abs/pii/0304393288901687)," 1988

## Benjamin Franklin

> No nation was ever ruined by trade, even seemingly the most disadvantageous.

Source: in "Principles of Trade" pamphlet, 1774

## Albert Einstein, Physicist

> The whole of science is nothing more than a refinement of everyday thinking.

Source: in "[Physics and Reality](https://www.sciencedirect.com/science/article/abs/pii/S0016003236910475)," 1936

## Hugo Rossi, Mathematician

> In the fall of 1972, President Nixon announced that the rate of increase of inflation was decreasing. This was the first time a sitting president used the third derivative to advance his case for reelection.

Source: in, “[Mathematics Is an Edifice, Not a Toolbox](https://studylib.net/doc/18597562/mathematics-is-an-edifice--not-a-toolbox),” 1996

## Frank Zappa, Musician and Composer

> Without deviation from the norm, progress is not possible.

Source: Dutch television interview, Feb. 11, 1971 and in Zappa and Occhiogrosso, 1989, ch. 8

## William Stein, Mathematician and Computer Scientist

> Mathematics is the art of reducing any problem to linear algebra.

Source: attributed by multiple colleagues in sources viewed by Stein, earliest reference 2008.

## Stephen Boyd and Lieven Vandenberghe

> If we can formulate a problem as a convex optimization problem, then we can solve it efficiently.... With only a bit of exaggeration, we can say that, if you formulate a practical problem as a convex optimization problem, then you have solved the original problem.

Source: [*Convex Optimization*](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf), 2004, p. 8

## Igor Stravinsky, Composer

> My freedom will be so much the greater and more meaningful the more narrowly I limit my field of action and the more I surround myself with obstacles. Whatever diminishes constraint diminishes strength. The more constraints one imposes, the more one frees one’s self of the chains that shackle the spirit.

Source: Charles Eliot Norton Lectures at Harvard, delivered in 1939-40

## John von Neumann, Mathematician and Computer Scientist

> If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.

Source: Franz L. Alt 1972 [recollection](https://homepage.divms.uiowa.edu/~jorgen/vonneumannquotesource.html) of von Neumann comment at first national meeting of the Association for Computing Machinery in 1947

## Linus Torvalds, Creator of Linux

> Bad programmers worry about the code. Good programmers worry about data structures and their relationships.

Source: [message](https://marc.info/?l=git&m=115401850825206&w=2) to Git mailing list, Jul. 27, 2006

## Nick Trefethen, Mathematician and Computer Scientist, University of Oxford

> The fundamental law of computer science: As machines become more powerful, the efficiency of algorithms grows more important, not less.

Source: from his "[Maxims about Numerical Mathematics, Computers, Science, and Life](https://people.maths.ox.ac.uk/trefethen/publication/PDF/1998_76.pdf)," 1988

## Josh Smith

> Prosperity is energy intensive.

Source: [Testimony](https://oversight.house.gov/wp-content/uploads/2025/07/Smith-Written-Testimony.pdf), House Oversight Committee, Subcommittee on Economic Growth, Energy Policy, and Regulatory Affairs, July 22, 2025

## Rick Rubin

> In terms of priority, inspiration comes first. You come next. The audience comes last.

Source: *The Creative Act: A Way of Being*, 2023, p. 130

## Confucius, 551-479 BC

> If one wishes to know whether a kingdom is well governed, examine the character of its music.

Source: Paraphrase from the *Book of Rites (Liji)*, from the chapter "[Record of Music](https://ctext.org/text.pl?node=416567&if=en)"

## Romney Evans, CMO and Co-founder of True Fit

> The hardest job for an artist is to create a work that other people love.

Source: at Abundance Institute Creative Frontiers Summit, Jul. 14, 2026

## Steve Jobs

> …every good product that I’ve ever seen… is because a group of people cared deeply about making something wonderful that they and their friends wanted…. That’s how almost everything I know that’s good has come about.

Source: [Fireside Chat Q&A Session](https://www.youtube.com/watch?v=_LsvdlaF5_k&t=388s), Apple WWDC, 1997

## Richard W. Evans

> Open source policy models are fundamentally apolitical because of their transparency, accessibility, and replicability.

Source: Open Source Policy Center presentation, American Enterprise Institute, Washington, DC, Apr. 2, 2015

## Richard W. Evans

> Even small demographic changes have a bigger macroeconomic impact than any fiscal reform I have ever simulated.

Source: UN DESA OG-Core training in Cape Town, South Africa, Aug. 1, 2024
