// @ts-check
import { defineConfig } from 'astro/config';

// The production site URL. Used to generate absolute URLs (sitemap, canonical, RSS).
// Because the site is served from a custom domain root (www.rickecon.com), `base`
// stays at the default '/'. If you ever host at https://rickecon.github.io/RickEconSite
// instead, set `base: '/RickEconSite'`.
export default defineConfig({
  site: 'https://www.rickecon.com',
  build: {
    format: 'directory',
  },
});
