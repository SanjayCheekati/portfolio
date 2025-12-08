const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
          },
        },
      },
    }),
  ],
}
