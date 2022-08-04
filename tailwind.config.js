module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1c3996",
          "secondary": "#ea33a1",
          "accent": "#98d3e2",
          "neutral": "#382E38",
          "base-100": "#F7F6F8",
          "info": "#9EC3EA",
          "success": "#137C62",
          "warning": "#9F7A09",
          "error": "#F64A37",
        },
      },
    ],
  },
}
