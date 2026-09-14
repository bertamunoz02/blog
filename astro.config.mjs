import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Si algún día hay dominio propio: site: 'https://elblogdeberta.com', base: '/'
export default defineConfig({
  site: 'https://bertamunoz02.github.io',
  base: '/blog',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
