import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';
import { ROUTES_SEO, SITE_URL } from './src/seo/routesMeta.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function cloudflareSeoBuildPlugin(): Plugin {
  return {
    name: 'cloudflare-seo-static-pages',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
      const buildDate = new Date().toISOString().slice(0, 10);

      // 1. Pre-generate route-specific HTML files (/about -> about.html, etc.)
      // so search crawlers receive accurate title/description/canonical/OG/BreadcrumbList pre-JS.
      for (const route of ROUTES_SEO) {
        if (route.page === 'home') continue;

        const safeTitle = escapeHtmlAttr(route.title);
        const safeDesc = escapeHtmlAttr(route.description);
        const safeCanonical = escapeHtmlAttr(route.canonical);

        const breadcrumbLd = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: route.breadcrumbLabel,
              item: route.canonical,
            },
          ],
        };

        let routeHtml = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
          .replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="description" content="${safeDesc}" />`
          )
          .replace(
            /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
            `<link rel="canonical" href="${safeCanonical}" />`
          )
          .replace(
            /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:url" content="${safeCanonical}" />`
          )
          .replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:title" content="${safeTitle}" />`
          )
          .replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:description" content="${safeDesc}" />`
          )
          .replace(
            /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:url" content="${safeCanonical}" />`
          )
          .replace(
            /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:title" content="${safeTitle}" />`
          )
          .replace(
            /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:description" content="${safeDesc}" />`
          )
          .replace(
            /<\/head>/,
            `    <script id="route-breadcrumb-ldjson" type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>\n  </head>`
          );

        fs.writeFileSync(path.join(distDir, route.fileName), routeHtml, 'utf-8');
      }

      // 2. Generate 404.html with noindex and no canonical so invalid paths return HTTP 404 cleanly.
      const notFoundHtml = baseHtml
        .replace(/<title>[\s\S]*?<\/title>/, `<title>Page Not Found (404) | Hemant Thakur</title>`)
        .replace(
          /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="description" content="The requested page could not be found on hemantthakur.in." />`
        )
        .replace(
          /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
          `<meta name="robots" content="noindex, nofollow" />`
        )
        .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>\s*/, '')
        .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>\s*/, '')
        .replace(
          /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:title" content="Page Not Found (404) | Hemant Thakur" />`
        )
        .replace(
          /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:description" content="The requested page could not be found on hemantthakur.in." />`
        )
        .replace(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>\s*/, '')
        .replace(
          /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
          `<meta name="twitter:title" content="Page Not Found (404) | Hemant Thakur" />`
        )
        .replace(
          /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="twitter:description" content="The requested page could not be found on hemantthakur.in." />`
        );

      fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');

      // 3. Auto-generate XML sitemap directly from ROUTES_SEO authoritative config.
      const urlNodes = ROUTES_SEO.map(
        (route) => `  <url>
    <loc>${route.canonical}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
      ).join('\n');

      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;
      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
      fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), cloudflareSeoBuildPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/three')) {
              return 'vendor-three';
            }
            if (id.includes('node_modules/motion')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor-react';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
