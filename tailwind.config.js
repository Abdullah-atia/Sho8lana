const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
    darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    addVariablesForColors,
    require("tw-elements-react/dist/plugin.cjs"),
    require('flowbite/plugin'),
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}