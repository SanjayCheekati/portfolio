module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',    // Purple 500 - Professional, modern
        accent: '#3b82f6',     // Blue 500 - Trust, tech
        dark: '#0f172a',       // Slate 900
        darker: '#020617',     // Slate 950
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    }
  },
  plugins: []
}
