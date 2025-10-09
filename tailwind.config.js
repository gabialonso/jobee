/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "!./node_modules/**/*",
    "!./dist/**/*"
  ],
  theme: {
    extend:{
      fontFamily: {
        atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'],
      },
      colors: {
//----------------------Paleta de colores Claros---------------------
        "soft-honey": "#FFF8E7",   // Miel Diluida
        "creamy-yellow": "#FFF0C2", // Amarillo Cremoso
        "dark-cian": "#1F2937",    // Cian Oscuro
        "graphite-gray": "#4B5563",   // Gris Grafito
        "light-gray": "#E5E7EB", // Azul Grisáceo Claro
        "link-blue": "#1769E0",   // Azul (para los links)
        "dark-turquoise": "#0B7285", // Turquesa Oscuro
        "hard-red": "#DC2626", // Rojo Fuerte
        "golden": "#E69C00",   // Dorado
        "terracotta-blue": "#374151", // Azul Terracota
        "alternative-magenta": "#C21D6B", // Magenta
//---------------------Paleta de colores Oscuros---------------------
        "disturbing-black": "#111827", // Negro Inquietante  
        "cold-blue": "#D1D5DB", // Azul Frio 
        "dark-magenta": "#9B1756", // Magenta Oscuro
        "vibrant-blue": "#3B82F6", // Azul Vibrante 
        "light-red": "#F87171", // Rojo Claro
        "bright-honey": "#F3B61F", // Miel Brillante
      },
    },
  },
  plugins: [],
}