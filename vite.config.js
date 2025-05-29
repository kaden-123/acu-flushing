import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSitemap from 'vite-plugin-sitemap' // Default import, not named
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    
    // Image Optimization
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 85 },
      webp: { lossless: false, quality: 85 },
      avif: { lossless: false, quality: 70 },
    }),

    // Compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),

    // Sitemap (corrected usage)
    viteSitemap({
      hostname: 'https://www.acuflushing.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/faq',
      ],
      generateRobotsTxt: true,
      robots: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/admin', '/private'] },
      ],
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }),
  ],
})