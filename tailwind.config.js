/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:   "#FEFCF9",
        cream:   "#F8F4EE",
        blush:   "#F5EAEA",
        rose:    "#EDD5D5",
        dusty:   "#C5A8A8",
        gold:    "#C9A870",
        "gold-l":"#E8D5B0",
        "gold-d":"#A8875A",
        mocha:   "#3D2214",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        jost:      ["Jost", "sans-serif"],
      },
      animation: {
        "float-y":   "floatY 8s ease-in-out infinite",
        "fade-up":   "fadeUp 0.8s cubic-bezier(.25,.1,.25,1) both",
        "line-slide":"lineSlide 0.6s ease both",
      },
      keyframes: {
        floatY:    { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        fadeUp:    { from: { opacity: 0, transform: "translateY(36px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        lineSlide: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
    },
  },
  plugins: [],
};
