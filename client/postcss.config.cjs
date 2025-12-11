module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './index.html',
              './src/**/*.{js,jsx,ts,tsx}',
              './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
            ],
            defaultExtractor: (content) => {
              // Capture as many selectors as possible
              const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
              const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
              return broadMatches.concat(innerMatches);
            },
            safelist: {
              standard: [
                /^nextui-/,
                /^data-/,
                /^aria-/,
                /dark/,
                /light/,
                'html',
                'body'
              ],
              deep: [/^nextui/, /data-theme/],
              greedy: [/^bg-/, /^text-/, /^border-/, /^hover:/, /^focus:/, /^active:/]
            }
          }
        }
      : {})
  }
}
