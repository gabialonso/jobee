/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        atkinson: ['"Atkinson Hyperlegible"', "sans-serif"],
      },
      colors: {
        softHoney: "#FFF8E7",
        creamyYellow: "#FFF0C2",
        darkCian: "#1F2937",
        graphiteGray: "#4B5563",
        lightGray: "#E5E7EB",
        linkBlue: "#1769E0",
        darkTurquoise: "#0B7285",
        hardRed: "#DC2626",
        golden: "#E69C00",
        terracottaBlue: "#374151",
        alternativeMagenta: "#C21D6B",
        disturbingBlack: "#111827",
        coldBlue: "#D1D5DB",
        darkMagenta: "#9B1756",
        vibrantBlue: "#3B82F6",
        lightRed: "#F87171",
        brightHoney: "#F3B61F",
      },
      maxWidth: {
        'container': 'min(90%, 1400px)',
      },
    },
  },
  plugins: [],
};
