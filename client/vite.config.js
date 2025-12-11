import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    minify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // NextUI components (large UI library)
          if (id.includes('node_modules/@nextui-org')) {
            return 'nextui';
          }
          // Framer Motion animations
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          // React Helmet for SEO
          if (id.includes('node_modules/react-helmet-async')) {
            return 'react-helmet';
          }
          // Icons library
          if (id.includes('node_modules/react-icons')) {
            return 'react-icons';
          }
          // Analytics and tracking
          if (id.includes('node_modules/@vercel/analytics')) {
            return 'analytics';
          }
          // Other vendor dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@nextui-org/react', 'framer-motion']
  }
})
