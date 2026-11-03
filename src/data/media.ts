// ─────────────────────────────────────────────────────────────────────────────
//  MEDIA & TALKS DATA — edit this file to update the four Media & Talks pages:
//    /talks/             → talks
//    /authoredarticles/  → authoredArticles
//    /mediacites/        → mediaCites
//    /videos/            → videos
//
//  Order does not matter: every page sorts newest first and groups by year.
//  To add an item, copy any line in the right list and change it.
//
//  `date` is 'YYYY-MM-DD'. Use 'YYYY-MM-01' when you only know the month, or
//  just 'YYYY' when you only know the year (it then lists last in that year).
//
//  `text` is shown as written. Two bits of light markup are allowed:
//    [link label](https://example.com)   → a link (opens in a new tab)
//    *Washington Post*                   → italics
//  Put a backslash before an apostrophe inside the quotes: 'Don\'t'.
// ─────────────────────────────────────────────────────────────────────────────

export type Entry = { date: string; text: string };

export type Video = {
  date: string;
  title: string;
  text: string; // description, same light markup as above
  // YouTube video ID (the part after "v=" or "youtu.be/"). The thumbnail and the
  // watch link are built from it. Leave empty and fill `url` for other sources.
  youtube?: string;
  start?: number; // optional start time in seconds
  url?: string; // watch link for non-YouTube videos (leave out if none exists)
  thumbnail?: string; // image for non-YouTube videos (leave out for a placeholder)
};

// ── Talks and presentations ──────────────────────────────────────────────────
export const talks: Entry[] = [
  // 2024–2026 come from the CV, which lists only the hosts. Replace each with the
  // full talk title, place, and date when you have them.
  { date: '2026', text: 'Americans for Prosperity Utah.' },
  { date: '2026', text: 'Oklahoma Senate Agriculture and Wildlife Committee.' },
  { date: '2026', text: 'Illinois Policy Institute.' },
  { date: '2026', text: 'United Nations Department of Economic and Social Affairs, the Philippines and Ethiopia.' },
  { date: '2025', text: 'Roots of Progress.' },
  { date: '2025', text: 'Tech States.' },
  { date: '2025', text: 'Joint Economic Committee, U.S. Congress.' },
  { date: '2025', text: 'United Nations Department of Economic and Social Affairs, South Africa, Indonesia, and Ethiopia.' },
  { date: '2024', text: 'Antigua Forum.' },
  { date: '2024', text: 'United Nations Department of Economic and Social Affairs, South Africa, Indonesia, and the Philippines.' },
  { date: '2024', text: 'State Policy Network.' },
  { date: '2024', text: 'Americans for Prosperity, South Carolina, Arkansas, and Louisiana.' },
  { date: '2023-04-18', text: '"[FiscalSim: Introduction to Open Source State and National Policy Analysis](https://web.cvent.com/event/83c16f32-00c5-423d-8433-342074d2e007/websitePage:bff5bdac-1bfa-416c-b5e1-8ebd6139e873)", session title: Open Source Analysis of State and National Tax Policy, 47th Annual Meeting, Association of Private Enterprise Education, Cancún, Mexico, April 18, 2023.' },
  { date: '2023-04-07', text: '"FiscalSim: A CGO Open Source Microsimulation Model and Foundation of CGO\'s Open Policy Modeling", CGO Fellows Workshop, Center for Growth and Opportunity at Utah State University, Logan, Utah, April 7, 2023.' },
  { date: '2023-04-03', text: '"Demographics.py: A Python module for working with UN Population Data", PSL Demo Day, Policy Simulation Library, April 3, 2023. [[YouTube video](https://youtu.be/kZKhpvTmW_U)]' },
  { date: '2023-03-24', text: '"[Introduction to Dynamic Data Visualization](https://colab.research.google.com/drive/1xilPpio7zlQe-WuO_hkhnxmbHe5pHXt3?usp=sharing)", CGO Fellows Workshop, Center for Growth and Opportunity at Utah State University, Logan, Utah, March 24, 2023.' },
  { date: '2023-02-23', text: '"FiscalSim: Open source microsimulation model of US and state household tax and benefit policy and web application", CGO Winter Conference, Center for Growth and Opportunity at Utah State University, February 23, 2023.' },
  { date: '2022-05-16', text: '"The Secret Sauce of Stitching Functions: Parametric Functions for Natural and Smooth Imputation", PSL Demo Day, Policy Simulation Library, May 16, 2022. [[YouTube video](https://youtu.be/QytjgduvWGU)]' },
  { date: '2022-05-11', text: '"50-state Tax and Benefit Microsimulation Project", Center for Growth and Opportunity, Logan, UT, May 11, 2022.' },
  { date: '2022-03-25', text: '"OG-USA and OG-Core Demo and Tutorial", [Policy Simulation Library DC Workshop: Open Source Tools for Analyzing Tax Policy](https://blog.pslmodels.org/DC-workshop), Washington, DC, March 25, 2022.' },
  { date: '2021-12-15', text: '"US Debt, Deficits, and Strategies for Stabilization", PSL Demo Day, Policy Simulation Library, December 15, 2021. [[YouTube video](https://youtu.be/HGmZgCrjvu0)]' },
  { date: '2021-11-19', text: '"Open-source Collaboration, Research, and Policy Analysis", Center for Growth and Opportunity, Utah State University, Logan, Utah, November 19, 2021.' },
  { date: '2021-08-19', text: '"A General Equilibrium Analysis of UBI in the UK", Basic Income Earth Network BIEN Congress 2021, Glasgow, Scotland, August 19, 2021.' },
  { date: '2021-06-19', text: '"Dynamic and Distributional Analysis of a UBI in the United States", 2021 North American Basic Income Guarantee (NABIG) Congress, June 19, 2021.' },
  { date: '2021-01-11', text: '"[How to Use OG-USA](https://www.youtube.com/watch?v=EUS6QG6UjZY&t=22s)", PSL Demo Day, Policy Simulation Library, January 11, 2021. [[YouTube video](https://youtu.be/EUS6QG6UjZY)]' },
  { date: '2020-10-16', text: '"[Roundtable Dialogue: An Open Comparison of 2020 Presidential Candidate Tax Proposals](https://www.bakerinstitute.org/events/2157/)", Baker Institute webinar, October 16, 2020.' },
  { date: '2020-10-13', text: '"[2020 Election Series--Fiscal Policy and the U.S. Economy in the Wake of COVID-19: Taxes, Spending, and Economic Growth](https://www.bakerinstitute.org/events/2154/)", with Joyce Beebe, Jorge Barro, John Diamond, and Maya MacGuineas, Baker Institute webinar, October 13, 2020.' },
  { date: '2020-09-03', text: '"[Scaling Open Source Policy Models and Analyzing the Biden Plan](https://www.youtube.com/watch?v=B0LF1TuxBBA)", Science Thursday webcast with Matthew Rocklin and Hugo Bowne-Anderson, Coiled.io, September 3, 2020.' },
  { date: '2020-06-25', text: '"Analysis of an Employer Payroll Tax", with Jason DeBacker, Matt Jensen, and Don Boyd, Connecticut Department of Revenue, via Zoom meeting, June 25, 2020.' },
  { date: '2020-01-04', text: '"Public Debt, Interest Rates, and Negative Shocks," American Economic Association annual meeting, in session "[Is United States Deficit Policy Playing with Fire?](https://www.aeaweb.org/conference/2020/preliminary/2281?q=eNqrVipOLS7OzM8LqSxIVbKqhnGVrJQMlWp1lBKLi_OTgRwlHaWS1KJcXAgrJbESJK9rAhLNzAXqUwrwBbLLMlPLQWYUFRRcMIVMDUAGFCSmp0IMA1ww_ywfQw,,)", San Diego, California, January 4, 2020.' },
  { date: '2019-12-06', text: '"Public Debt, Interest Rates, and Negative Shocks," HEC Lausanne, Department of Finance, Lausanne, Switzerland, December 6, 2019.' },
  { date: '2019-11-22', text: '"Building a Student Mentored Research Program around Open Source Resources," Southern Utah University, Department of Economics, Cedar City, Utah, November 22, 2019.' },
  { date: '2019-09-20', text: '"[Advanced Git and GitHub Research Collaboration](https://github.com/nyupredocs/githubtutorial)," NYU Stern Economic Pre-docs Training Program, New York University, September 20-22, 2019.' },
  { date: '2019-08-19', text: '"OG-India: Overlapping generations model of fiscal policy for India," with Jason DeBacker, Tax Policy Research Unit of India, Delhi, India, August 19, 2019.' },
  { date: '2019-06-26', text: '"Open Source Modeling Tools for Fiscal Analysis," with Jason DeBacker, The World Bank, June 26, 2019.' },
  { date: '2019-05-30', text: '"Microsimulation Modeling: Data, Integration, Collaboration, and Transparency," Social Security Advisory Board, Informing Policy: A Review of Social Security\'s MINT Microsimulation Model, Washington, DC, May 30, 2019.' },
  { date: '2019-05-16', text: '"Overlapping Generations Model Roundtable: Model Comparisons from a Stylized Social Security Experiment", National Tax Association 49th Annual Spring Symposium, Washington, DC, May 16, 2019.' },
  { date: '2019-04-29', text: '"DeBacker-Evans OG-USA Model: Primer, Examples, and Contributor Guide," Tax Policy Center/Urban Institute, Washington, DC, April 29, 2019.' },
  { date: '2019-01-29', text: '"[DeBacker-Evans OG-USA Model: Intro, Primer, Examples, and Contributor Guide](https://youtu.be/jo_PMPipne0?t=575)," Policy Simulation Library (PSL) Meetup, American Enterprise Institute, Washington, DC, January 29, 2019. [[video](https://youtu.be/jo_PMPipne0?t=575), my talk starts at minute 10:29]' },
  { date: '2018-12-17', text: '"DeBacker-Evans OG-USA Model: Effects of a Social Security Benefit Cut." with Jason DeBacker. CBO Overlapping Generations Models Symposium, Congressional Budget Office, Washington, DC, December 17, 2018.' },
  { date: '2018-12-07', text: '"Discussant: Carbon Taxes: Output and Distributional Effects." Prospects for Economic Growth in the United States, Rice University, Baker Institute for Public Policy, Center for Public Finance, Houston, TX, December 7, 2018.' },
  { date: '2018-04-18', text: '"Open Source Dynamic Analysis: TCJA, EITC, and Beyond." Tax Economists Forum, Congressional Budget Office, Washington, DC, April 18, 2018.' },
  { date: '2018-04-17', text: '"Open Source Modeling and Government Revenue Estimators." Congressional Budget Office, senior leadership, Washington, DC, April 17, 2018.' },
  { date: '2018-02-01', text: '"Open Source Modeling for Policy Analysis, Research, and Teaching." University of Chicago, Computational Social Science Workshop, Chicago, IL, February 1, 2018. [[slides](https://github.com/uchicago-computation-workshop/richard_evans/blob/master/2018__evans__slides.pdf)] [[papers](https://github.com/uchicago-computation-workshop/richard_evans)]' },
  { date: '2016-09-21', text: '"Integrating Microsimulation Tax Functions into a DGE Macroeconomic Model: A Canonical Example." Fiscal Analysis section, Federal Reserve Board of Governors, Washington, DC, September 21, 2016.' },
  { date: '2016-07-18', text: '"Integrating Microsimulation Tax Functions into a DGE Macroeconomic Model: A Canonical Example." Initiative for Computational Economics, Hoover Institution, Stanford University, Stanford, California, July 18, 2016.' },
  { date: '2016-04-15', text: '"Introducing the Open Source Policy Center: Making Tax Policy Transparent, Accessible, and Collaborative." Russell Senate Office Building, Washington, DC, April 15, 2016.' },
  { date: '2016-04-14', text: '"[Introducing the Open Source Policy Center: Making Tax Policy Transparent, Accessible, and Collaborative](https://www.youtube.com/watch?v=hRswwKLsgg8)." American Enterprise Institute, Washington, DC, April 14, 2016.' },
  { date: '2016-02-10', text: '"The Distributional Effects of Redistributional Tax Policy." Federal Reserve Bank of Kansas City, Kansas City, Missouri, February 10, 2016.' },
  { date: '2016-01-15', text: '"The Distributional Effects of Redistributional Tax Policy." University of Chicago, Masters Program in Computational Social Sciences, January 15, 2016.' },
  { date: '2015-11-23', text: '"The Distributional Effects of Redistributional Tax Policy." Albers School of Business, Seattle University, Seattle, Washington, November 23, 2015.' },
  { date: '2015-07-13', text: '"The Distributional Effects of Redistributional Tax Policy." 22nd International Symposium on Mathematical Programming, Pittsburgh, Pennsylvania, July 13, 2015.' },
  { date: '2015-05-28', text: '"[The Mind of Pete Carroll: Tax Policy, Inequality, and State Competitiveness](https://youtu.be/TVIXSIfG0qE)." keynote address at Annual Dinner of the Washington Research Council, Seattle, Washington, May 28, 2015.' },
  { date: '2015-04-02', text: '"OSPC Dynamic Scoring Model: An Open Source Model for Dynamic Revenue Estimates." Congressional Budget Office, Washington, D.C., April 2, 2015.' },
  { date: '2015-04-02', text: '"OSPC Dynamic Scoring Model: An Open Source Model for Dynamic Revenue Estimates." PwC, Washington, D.C., April 2, 2015.' },
  { date: '2015-04-02', text: '"OSPC Dynamic Scoring Model: An Open Source Model for Dynamic Revenue Estimates." American Enterprise Institute, Washington, D.C., April 2, 2015.' },
  { date: '2015-04-01', text: '"OSPC Dynamic Scoring Model: An Open Source Model for Dynamic Revenue Estimates." Joint Committee on Taxation, Washington, D.C., April 1, 2015.' },
  { date: '2015-03-27', text: '"U.S. Healthcare Spending Trends from Aggregated Monthly Claims Data." Institute for Fiscal Studies, University College London, Medical Spending Across the Developed World, London, England, March 27, 2015.' },
  { date: '2014-11-14', text: '"The Distributional Effects of Redistributional Tax Policy." Utah State University, Logan, Utah, November 14, 2014.' },
  { date: '2014-07-30', text: '"A Big Data Approach to Optimal Sales Taxation." Stanford Institute for Theoretical Economics (SITE), Summer 2014 Workshop, Stanford, California, July 30, 2014.' },
  { date: '2014-07-09', text: '"A Big Data Approach to Optimal Taxation." Tax Economists Forum, Hall of the States, Washington, DC, July 9, 2014.' },
  { date: '2014-01-04', text: '"A Big Data Approach to Optimal Sales Taxation." American Economic Association annual meeting, Philadelphia, Pennsylvania, January 4, 2014.' },
  { date: '2013-12-12', text: '"A Markov Regime-switching Approach to Estimating Health Care Cost Dynamics." BYU Computational Public Economics Conference 2013, Park City, Utah, December 12, 2013.' },
  { date: '2013-07-30', text: '"Immiserating Fiscal Policy." Hoover Institution Summer 2013 Computational Economics Workshop, Stanford University, Stanford, California, July 30, 2013.' },
  { date: '2013-07-29', text: '"A Big Data Approach to Optimal Sales Taxation." Hoover Institution Summer 2013 Computational Economics Workshop, Stanford University, Stanford, California, July 29, 2013.' },
  { date: '2013-07-12', text: '"A Big Data Approach to Optimal Sales Taxation." Society for Computational Economics, International Conference on Computing in Economics and Finance, Vancouver, British Columbia, July 12, 2013.' },
  { date: '2013-01-24', text: '"Surprises in the U.S. economy in 2012 and what might surprise in 2013." Utah Economic Review, Utah Economic Council, hosted by the Salt Lake Chamber of Commerce and the Wasatch Front Economic Forum, Salt Lake City, Utah, January 24, 2013.' },
  { date: '2012-09-28', text: '"Europe in a Nutshell: Will it Crack? (Economy and Crisis Panel)," Center for the Study of Europe, Wheatley Institution, and Kennedy Center for International Studies, Brigham Young University, September 28, 2012.' },
  { date: '2012-07-26', text: '"U.S. Recovery, Interest Rates, European Debt/Banking Crisis, and Chinese Slowdown," Association for Financial Professionals of Utah, Salt Lake City, Utah, July 26, 2012.' },
  { date: '2012-05-16', text: '"Fiscal Multipliers and Time-inconsistent Preferences," Quantitative Society for Pensions and Savings, Summer Workshop, Utah State University, Logan, Utah, May 16, 2012.' },
  { date: '2012-05-12', text: '"Fiscal Multipliers and Time-inconsistent Preferences," Midwest Macro Meetings, Notre Dame, South Bend, Indiana, May 12, 2012.' },
  { date: '2012-04-17', text: '"Determinants of Short-run Consumer Lending Interest Rates," Wasatch Front Economic Forum luncheon, Salt Lake City, Utah, April 17, 2012.' },
  { date: '2012-01-12', text: '"The Effects of the European Debt Crisis on the United States and Utah," Utah Economic Review, Salt Lake Chamber of Commerce, Wasatch Front Economic Forum, Salt Lake City, Utah, January 12, 2012.' },
  { date: '2012-01-06', text: '"When will the Social Security Trust Fund Run Out? Simulation by Linearization around the Current State," joint with Jeremy Perdue and Kerk Phillips, American Economic Association Annual Meeting, Chicago, Illinois, January 6, 2012.' },
  { date: '2011-10-05', text: '"[Is the Euro Toast?](https://www.youtube.com/watch?v=9tJuJGqMx70)" joint with Wade Jacoby, Center for the Study of Europe and Kennedy Center for International Studies, Brigham Young University, October 5, 2011.' },
  { date: '2011-07-15', text: '"Game Over: Simulating and Quantifying Fiscal Limits," joint with Laurence J. Kotlikoff and Kerk L. Phillips. National Bureau of Economic Research, Fiscal Policy after the Financial Crisis pre-conference, Boston, Massachusetts, July 15, 2011.' },
  { date: '2011-06-29', text: '"OLG Life Cycle Model Transition Paths," joint with Kerk L. Phillips. Society for Computational Economics, 17th International Conference on Computing in Economics and Finance, San Francisco, California, June 29, 2011.' },
  { date: '2011-04-28', text: '"National Recovery, Fiscal Woes, No Inflation, and Bank Lending," Utah CEO Forum, Salt Lake Chamber of Commerce, Salt Lake City, Utah, April 28, 2011.' },
  { date: '2011-01-19', text: '"Utah\'s Fiscal Comparative Advantage Emerging from Recession," Utah Economic Review, Salt Lake Chamber of Commerce, Governors Office of Planning and Budget, Wasatch Front Economic Forum, Salt Lake City, Utah, January 19, 2011.' },
  { date: '2010-09-21', text: '"Utah Exports and the World Economy," Utah CEO Forum, Salt Lake Chamber of Commerce, Salt Lake City, Utah, September 21, 2010.' },
  { date: '2010-05-20', text: '"Bailouts and Regulation," joint with Scott Condie. Quantitative Society for Pensions and Savings, Summer Workshop, Utah State University, Logan, Utah, May 20-21, 2010.' },
  { date: '2010-04-30', text: '"Bailouts and Regulation," joint with Scott Condie. Midwest Macro Meetings, Michigan State University, East Lansing, Michigan, April 30-May 2, 2010.' },
  { date: '2010-03-12', text: '"The Cost of Capital: Monetary Policy, Government Spending, and Inflation Expectations," ACG Utah (private equity association) 2010 Growth Conference and Capital Connection, Salt Lake City, Utah, March 12, 2010.' },
  { date: '2009-05-21', text: '"OLG Life Cycle Models: New Solution Methods and Applications," joint with Kerk Phillips. Quantitative Society for Pensions and Savings, Summer Workshop, Utah State University, Logan, Utah, May 21-22, 2009.' },
  { date: '2008-10-15', text: '"The Current Economic Crisis," with James R. Kearl and David E. Spencer, Brigham Young University, Provo, Utah, October 15, 2008.' },
  { date: '2008-01-01', text: '"Openness and Inflation with Imperfect Competition: Theory and Evidence," Office of Tax Analysis, U.S. Department of the Treasury, Washington, D.C., January 2008.' },
  { date: '2008-01-01', text: '"Openness and Inflation with Imperfect Competition: Theory and Evidence," Department of Economics, University of Memphis, Memphis, Tennessee, January 2008.' },
  { date: '2007-04-27', text: '"Optimal Monetary Policy in a Two-country Overlapping Generations Model with Imperfect Competition," Midwest Macro Meetings, Federal Reserve Bank of Cleveland, Cleveland, Ohio, April 27–29, 2007.' },
  { date: '2006-02-25', text: '"The Fertility Effect of Catastrophe: Myth or Measurable," joint with Yingyao Hu. Texas Econometrics Camp XI, Huntsville, Texas, February 25–26, 2006.' },];

// ── Authored media articles ──────────────────────────────────────────────────
export const authoredArticles: Entry[] = [
  { date: '2020-03-25', text: '*Washington Post*, "[We might see a coronavirus baby blip — not a boom](https://www.washingtonpost.com/opinions/2020/03/25/were-stuck-home-with-nothing-do-should-we-expect-coronavirus-baby-boom/)" (March 25, 2020).' },
  { date: '2012-10-29', text: '*Deseret News* (Salt Lake City, Utah), "[Punishing China for currency manipulation could hurt the U.S.](http://www.deseretnews.com/article/765614151/Punishing-China-for-currency-manipulation-could-hurt-the-US.html)," joint with Kerk L. Phillips (October 29, 2012).' },
  { date: '2012-05-04', text: 'VoxEU.org, "[Shattering the American dream: The U.S. government\'s Ponzi scheme](http://www.voxeu.org/index.php?q=node/7947)," joint with Laurence J. Kotlikoff and Kerk L. Phillips (May 4, 2012).' },
  { date: '2012-05-01', text: '*Deseret News* (Salt Lake City, Utah), "[2010 pension reform a plus for retirement fund solvency](http://www.deseretnews.com/article/865554955/2010-pension-reform-a-plus-for-retirement-fund-solvency.html)," joint with Kerk L. Phillips (May 1, 2012).' },
  { date: '2011-12-20', text: '*Deseret News* (Salt Lake City, Utah), "[Data show short-term lending not predatory](http://www.deseretnews.com/article/700208467/Data-show-short-term-lending-not-predatory.html)" (December 20, 2011).' },
];

// ── Media citations and appearances ──────────────────────────────────────────
export const mediaCites: Entry[] = [
  { date: '2022-08-25', text: 'KSL News Radio, "[How will forgiving student loan debt impact the economy?](https://kslnewsradio.com/1974037/how-will-forgiving-student-loan-impact-the-economy/)" by Aimee Cobabe (Aug. 25, 2022).' },
  { date: '2022-03-26', text: 'Bloomberg, "[U.S. Oil Boom Towns Risk Ghost Town Future](https://www.bloomberg.com/news/features/2022-03-26/what-happens-to-u-s-oil-boom-towns-when-fossil-fuel-industries-go-away)," by David Wethe and Catarina Saraiva (Mar. 26, 2022). Cites analysis by [Barro, Diamond, and Evans (2021)](https://www.bakerinstitute.org/media/files/files/db24edef/cpf-pub-lowcarbon-102721.pdf).' },
  { date: '2021-11-10', text: 'Phys.org, "[Renewable energy transition requires forward-looking fiscal policies to maintain education funding](https://phys.org/news/2021-11-renewable-energy-transition-requires-forward-looking.html)" (Nov. 10, 2021). Cites analysis by [Barro, Diamond, and Evans (2021)](https://www.bakerinstitute.org/media/files/files/db24edef/cpf-pub-lowcarbon-102721.pdf).' },
  { date: '2021-11-08', text: 'Rice News, "[Manageable K-12 education funding shortfalls should not be an impediment to energy transition](https://news.rice.edu/news/2021/manageable-k-12-education-funding-shortfalls-should-not-be-impediment-energy-transition)", by Jeff Falk (Nov. 8, 2021). Cites analysis by [Barro, Diamond, and Evans (2021)](https://www.bakerinstitute.org/media/files/files/db24edef/cpf-pub-lowcarbon-102721.pdf).' },
  { date: '2021-07-21', text: 'TaxVox, Tax Policy Center Blog, Campaigns, Proposals, and Reforms, "[TPC Experiments with Another Model to Estimate the Economic Effects of Tax Law Changes](https://www.taxpolicycenter.org/taxvox/tpc-experiments-another-model-estimate-economic-effects-tax-law-changes)", by Benjamin R. Page (July 21, 2021). Cites [Page, et al (2021)](https://www.taxpolicycenter.org/publications/macroeconomic-analysis-former-vice-president-bidens-tax-proposals) and DeBacker, Evans, and Page ([2021a](https://www.taxpolicycenter.org/publications/detailed-macroeconomic-analysis-president-bidens-2020-campaign-tax-proposals) and [2021b](https://www.taxpolicycenter.org/publications/sensitivity-analysis-detailed-macroeconomic-analysis-president-bidens-2020-campaign-tax)).' },
  { date: '2020-07-31', text: 'Wall Street Journal, The Editorial Board, Opinion, "[Read Joe Biden\'s Lips: New Taxes](https://www.wsj.com/articles/read-joe-bidens-lips-new-taxes-11596235892)," cites analysis by Pomerleau, DeBacker, and Evans (July 31, 2020).' },
  { date: '2020-04-10', text: 'USA TODAY, "[Will coronavirus cause a baby boom, or is that just a myth? Prepare for jokes, if not babies!](https://www.usatoday.com/story/life/parenting/2020/04/02/coronavirus-fact-check-could-covid-19-cause-baby-boom/5105448002/)" by Maria Puente, (April 10, 2020).' },
  { date: '2020-04-08', text: 'New York Times, "[Don\'t Expect a Quarantine Baby Boom](https://www.nytimes.com/2020/04/08/us/coronavirus-baby-boom.html)", by Alan Yuhas (April 8, 2020). [also carried by Chicago Tribune on April 9, 2020]' },
  { date: '2020-03-31', text: 'Top of Mind with Julie Rose, BYU Radio, "[Rick Evans on the economic effects of the COVID-19 pandemic and the CARES Act stimulus package](http://www.byuradio.org/episode/9a938efd-adbb-4aac-8008-2e7592043855/top-of-mind-with-julie-rose-coronavirus-economy-space-lettuce-immune-system-myths?playhead=31&autoplay=true)," with Julie Rose, 0:31 to 17:39 (March 31, 2020).' },
  { date: '2018-09-30', text: 'Forbes, "[Can the U.S. Afford a Massive Wage Subsidy? A Macroeconomic Simulation](https://www.forbes.com/sites/gregoryferenstein/2018/09/30/can-the-us-afford-a-massive-wage-subsidy-a-macroeconomic-simulation/#56028d442502)" by Gregory Ferenstein (September 30, 2018).' },
  { date: '2016-10-14', text: 'Becker Friedman Institute, Economics Amplified podcast, "[Rick Evans on How Computer Science is Transforming Economics](http://bfi.uchicago.edu/news/feature-story/economics-amplified-rick-evans-how-computer-science-transforming-economics)," with Mark Riechers (October 14, 2016).' },
  { date: '2016-10-12', text: 'Becker Friedman Institute, News, "[Computation and the Classroom](https://bfi.uchicago.edu/news/feature-story/computation-and-classroom)," Mark Riechers (October 12, 2016).' },
  { date: '2016-08-11', text: 'Becker Friedman Institute, News, "[Bringing Computation into the Economist\'s Toolkit](https://bfi.uchicago.edu/news/feature-story/bringing-computation-economist%E2%80%99s-toolkit)," Mark Riechers (August 11, 2016).' },
  { date: '2016-04-26', text: 'The Matt Townsend Show, BYU Radio, "[Are Payday Loans Predatory?](http://www.byuradio.org/episode/8118ece9-36ed-4a33-8ffa-be84b53a81fd/the-matt-townsend-show-payday-loans-finding-meaning-in-life-the-leap), minutes 15:56 to 41:03 (April 26, 2016).' },
  { date: '2016-01-23', text: 'NPR All Things Considered, "[Sex and the Snowed-In Cities: Why this Blizzard Could Cause a Baby Bump](http://www.npr.org/2016/01/23/463999193/sex-and-the-snowed-in-cities-why-this-blizzard-could-cause-a-baby-bump)," 3:43 minutes (January 23, 2016).' },
  { date: '2016-01-23', text: 'NJ.com, "[Baby boom 9 months after a snow storm: Fact or fiction?](http://www.nj.com/news/index.ssf/2016/01/snow_storm_baby_boom_fact_or_fiction.html)" (January 23, 2016).' },
  { date: '2015-02-09', text: 'BYU Radio, "[Obama\'s Middle Class Economics and Economic Inequality](http://www.byuradio.org/episode/1b325375-a2e7-482b-9b60-299c2d876f11/top-of-mind-with-julie-rose-middle-class-economics-food-councils-printed-cars)," minute 7:11 to 26:08 (February 9, 2015).' },
  { date: '2014-11-05', text: 'BYU Radio, "[Turning Off the Money Spigot to the U.S. Economy](http://www.byuradio.org/episode/a4cc88e6-3101-4e80-b523-a358607e9218/the-morning-show-bacteria-money-presidency-palestine)," minute 37:39 to 52:07 (November 5, 2014).' },
  { date: '2014-06-16', text: 'State Tax Notes, "Economists Use Big Data Analytical Methods to Model Sales Tax Optimization," (June 16, 2014).' },
  { date: '2013-10-29', text: 'HuffPost Live, "[The Hurricane Sandy Baby Boom](http://live.huffingtonpost.com/r/segment/one-year-later-sandy-brings-a-baby-boom/526556f378c90a6d7e0004e9)," (October 29, 2013).' },
  { date: '2013-10-10', text: 'Salt Lake Tribune, "[Debt ceiling: What is it and why it\'s important to Utah investors](http://m.sltrib.com/sltrib/mobile3/56982600-219/debt-loans-economy-ceiling.html.csp)" (October 10, 2013).' },
  { date: '2013-07-24', text: 'CNN.com, "[Is the post-Sandy baby boom real?](http://www.cnn.com/2013/07/24/us/sandy-baby-boom)" (July 24, 2013).' },
  { date: '2013-07-23', text: 'ABC News Radio, "[Hurricane Sandy Baby Boom Hits Jersey Shore Hospitals](http://abcnewsradioonline.com/national-news/hurricane-sandy-baby-boom-hits-jersey-shore-hospitals.html)" (July 23, 2013).' },
  { date: '2013-07-23', text: 'CBSnews.com, "[Sandy babies? 9 months after superstorm, some hospitals see spike in births](http://www.cbsnews.com/8301-201_162-57595125/sandy-babies-9-months-after-superstorm-some-hospitals-see-spike-in-births/)" (July 23, 2013).' },
  { date: '2013-07-22', text: 'USA TODAY, "[Sandy baby boom due at Jersey Shore](http://www.usatoday.com/story/news/nation/2013/07/22/nj-sandy-baby-boom/2576741/)" (July 22, 2013).' },
  { date: '2012-11-10', text: 'Salt Lake Tribune, "[Increasing numbers of U.S. banks move from free to fee](http://www.sltrib.com/sltrib/home3/55171735-200/banks-fees-checking-bank.html.csp)" (November 10, 2012).' },
  { date: '2012-11-05', text: 'Slate.com, "[Will Sandy bring a baby boom or baby bust? How disasters change marriage, divorce, and birth rates](http://www.slate.com/articles/health_and_science/medical_examiner/2012/11/sandy_birth_divorce_and_marriage_rates_how_disasters_influence_families.single.html)" (November 5, 2012).' },
  { date: '2012-09-12', text: 'RealClearMarkets.com, "[Pension woe mounts as states forsake reform](http://www.realclearmarkets.com/articles/2012/09/12/pension_woe_mounts_as_states_forsake_reform_99876.html)" (September 12, 2012).' },
  { date: '2012-08-31', text: 'CapitalResearch.org, "[Best practices for reforming state employee pensions](http://www.capitalresearch.org/2012/08/best-practices-for-reforming-state-employee-pensions/)" (August 31, 2012).' },
  { date: '2012-06-18', text: 'Deseret News (Salt Lake City, Utah), "[Debt trap: breaking free from the cycle of payday loans](http://www.deseretnews.com/article/765584241/Debt-trap-Breaking-free-from-the-cycle-of-payday-loans.html)" (June 18, 2012).' },
  { date: '2012-05-21', text: 'Deseret News (Salt Lake City, Utah), "[Dangerous debt: consumer advocate groups are urging regulators to stop payday lending by banks](http://www.deseretnews.com/article/765577645/Dangerous-debt-consumer-advocate-groups-are-urging-regulators-to-stop-payday-lending-by-banks.html)" (May 21, 2012).' },
  { date: '2012-05-04', text: 'MarginalRevolution.com, "[Social Security, Savings and Stagnation](http://marginalrevolution.com/marginalrevolution/2012/05/savings-and-stagnation.html)" (May 4, 2012).' },
  { date: '2012-01-12', text: 'Salt Lake Tribune, "[Despite strengths, challenges lie ahead for Utah economy](http://www.sltrib.com/sltrib/money/53289773-79/utah-economy-gochnour-economist.html.csp)" (January 12, 2012).' },
  { date: '2012-01-12', text: 'Salt Lake Chamber of Commerce Blog, "[Utah\'s economy is growing, education key to long-term prosperity](http://slchamber.com/blog/utahs-economy-is-growing-education-key-to-long-term-prosperity-10002707.htm)" (January 12, 2012).' },
  { date: '2011-11-04', text: 'Chicago Tribune, "[Oh, baby, what happened to the blizzard boom?](http://articles.chicagotribune.com/2011-11-04/news/ct-met-blizzard-babies-20111104_1_blizzard-babies-immobilizing-event-spike)" (November 4, 2011).' },
  { date: '2011-09-02', text: 'LifesLittleMysteries.com, "[Baby booms & busts to follow hurricane Irene](http://www.lifeslittlemysteries.com/hurricane-baby-boom-bust-1994/)" (September 2, 2011).' },
  { date: '2011-08-30', text: 'Deseret News (Salt Lake City, Utah), "[Hurricane Irene may fuel baby boom](http://www.deseretnews.com/article/700174933/Hurricane-Irene-may-fuel-baby-boom.html)" (August 30, 2011).' },
  { date: '2011-08-29', text: 'History.com, "[Will hurricane Irene spawn a baby boom?](http://www.history.com/news/2011/08/29/will-hurricane-irene-spawn-a-baby-boom/)" (August 29, 2011).' },
  { date: '2011-07-24', text: 'Deseret News (Salt Lake City, Utah), "[Electronic currencies trying to be the online vehicle for cash](http://www.deseretnews.com/article/700165718/Electronic-currencies-trying-to-be-the-online-vehicle-for-cash.html)" (July 24, 2011).' },
  { date: '2011-04-29', text: 'Deseret News (Salt Lake City, Utah), "[Economists discuss jobs outlook](http://www.deseretnews.com/article/705371641/Experts-expect-economic-bounce-back-in-Utah-jobless-rate-is-biggest-concern.html)" (April 29, 2011).' },
  { date: '2011-04-28', text: 'Salt Lake Chamber of Commerce Blog, "[Utah Economic Council discusses warning signs, positives for economy](http://slchamber.com/blog/utah-economic-council-discusses-warning-signs-positives-for-economy-10002042.htm)" (April 28, 2011).' },
  { date: '2010-12-06', text: 'KSL News Television (Salt Lake City, Utah), "[Taxes going up for local businesses](http://www.ksl.com/index.php?nid=148&sid=13555137)" (December 6, 2010).' },
  { date: '2010-12-03', text: 'KSL News Radio (Salt Lake City, Utah), "The Utah and national unemployment outlook" (December 3, 2010).' },
  { date: '2010-09-27', text: 'Salt Lake Chamber of Commerce Blog, "[Utah Economic Council lauds Utah export performance](http://slchamber.com/blog/utah-economic-council-lauds-utah-export-performance-10001411.htm)" (September 27, 2010).' },
  { date: '2010-09-23', text: 'Salt Lake Chamber of Commerce Blog, "[Utah Economic Council lays out next steps](http://slchamber.com/blog/utah-economic-council-lays-out-next-steps-10001408.htm)" (September 23, 2010).' },
  { date: '2010-03-10', text: 'Medill Reports (Chicago, Illinois), "[Reform of college football\'s Bowl Championship Series stymied by financial interests](http://news.medill.northwestern.edu/chicago/news.aspx?id=161695)" (March 10, 2010).' },
  { date: '2009-07-15', text: 'Yahoo! Sports Blog, "[BCS economics in 60 seconds or less](http://rivals.yahoo.com/ncaa/football/blog/dr_saturday/post/BCS-economics-in-60-seconds-or-less?urn=ncaaf-176776)" (July 15, 2009).' },
  { date: '2009-07-14', text: 'ESPN.com National Football Nation Blog, "[An economic look at BCS bowls](http://espn.go.com/blog/ncfnation/post/_/id/4847/an-economic-look-at-bcs-bowls)" (July 14, 2009).' },
  { date: '2009-01-01', text: 'BYU Magazine, "[How It All Came Crashing Down](http://magazine.byu.edu/?act=view&a=2360)" (Winter 2009).' },
  { date: '2008-10-17', text: 'Deseret News (Salt Lake City, Utah), "[Stay in school during financial \'mess,\' college students told](http://www.deseretnews.com/article/705255791/Stay-in-school-during-financial-mess-college-students-told.html)," (October 17, 2008).' },
  { date: '2008-10-16', text: 'Daily Herald (Provo, Utah), "[BYU professors discuss economy](http://www.heraldextra.com/news/local/article_4ccfcba3-4802-54aa-b3d7-b73b9611a3e7.html)" (October 16, 2008).' },];

// ── Videos ───────────────────────────────────────────────────────────────────
export const videos: Video[] = [
  {
    date: '2021-01-11',
    title: 'How to Use OG-USA',
    text: 'Policy Simulation Library Demo Day webinar on how to use the OG-USA overlapping generations model (January 11, 2021).',
    youtube: 'EUS6QG6UjZY',
  },
  {
    date: '2020-10-13',
    title: 'Fiscal Policy and the U.S. Economy in the Wake of COVID-19: Taxes, Spending, and Economic Growth',
    text: 'Baker Institute [2020 Election Series webinar](https://www.bakerinstitute.org/events/2154/) with Joyce Beebe, Jorge Barro, John Diamond, and Maya MacGuineas, Center for Public Finance, Baker Institute (October 13, 2020).',
    youtube: 'CK6yQGxtBZo',
  },
  {
    date: '2020-09-03',
    title: 'Scaling Open Source Policy Models and Analyzing the Biden Plan',
    text: 'Science Thursday webcast with Matthew Rocklin and Hugo Bowne-Anderson, Coiled.io (September 3, 2020).',
    youtube: 'B0LF1TuxBBA',
  },
  {
    date: '2019-01-29',
    title: 'DeBacker-Evans OG-USA Model: Intro, Primer, Examples, and Contributor Guide',
    text: 'Talk at the Policy Simulation Library (PSL) Meetup at the American Enterprise Institute, Washington, DC (January 29, 2019). The video starts where my talk begins, at minute 10:29.',
    youtube: 'jo_PMPipne0',
    start: 575,
  },
  {
    date: '2016-04-14',
    title: 'Introducing the Open Source Policy Center: Making Tax Policy Transparent, Accessible, and Collaborative',
    text: 'American Enterprise Institute panel discussion, Washington, DC (April 14, 2016). At minutes 27:46 to 31:14, Jason DeBacker and I summarize the OG-USA overlapping generations model for dynamic revenue estimates. At minutes 47:38 to 50:25, Matt Jensen and I answer a question from Michael Hendrix of the U.S. Chamber of Commerce Foundation: "What does [OSPC] mean for how think tanks operate? And how does [OSPC] reflect Silicon Valley\'s influence on the policy process?"',
    youtube: 'hRswwKLsgg8',
  },
  {
    date: '2015-05-28',
    title: 'The Mind of Pete Carroll: Tax Policy, Inequality, and State Competitiveness',
    text: 'Keynote address at the Annual Dinner of the Washington Research Council, Seattle, Washington (May 28, 2015).',
    youtube: 'TVIXSIfG0qE',
  },
  {
    date: '2013-10-29',
    title: 'The Hurricane Sandy Baby Boom',
    text: 'HuffPost Live video segment referencing my research, "The Fertility Effect of Catastrophe: U.S. Hurricane Births" (October 29, 2013). HuffPost has since taken its HuffPost Live archive offline, so this segment is no longer available.',
  },
  {
    date: '2011-10-05',
    title: 'Is the Euro Toast?',
    text: 'BYU Kennedy Center talk, joint with Wade Jacoby, Brigham Young University, Provo, Utah (October 5, 2011).',
    youtube: '9tJuJGqMx70',
  },
];
