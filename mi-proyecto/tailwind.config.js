/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'],
      },
      colors: {
//----------------------Paleta de colores Claros---------------------
        soft_honey: "#FFF8E7",   // Miel Diluida
        creamy_yellow: "#FFF0C2", // Amarillo Cremoso
        dark_cian: "#1F2937",    // Cian Oscuro
        graphite_gray: "#4B5563",   // Gris Grafito
        light_gray: "#E5E7EB", // Azul Grisáceo Claro
        link_blue: "#1769E0",   // Azul (para los links)
        dark_turquoise: "#0B7285", // Turquesa Oscuro
        hard_red: "#DC2626", // Rojo Fuerte
        golden: "#E69C00",   // Dorado
        terracotta_blue: "#374151", // Azul Terracota
        alternative_magenta: "#C21D6B", // Magenta
//---------------------Paleta de colores Oscuros---------------------
        disturbing_black: "#111827", // Negro Inquietante  
        cold_blue: "#D1D5DB", // Azul Frio 
        carbon_blue: "#374151", // Azul Carbón  
        vibrant_blue: "#3B82F6", // Azul Vibrante 
        light_red: "#F87171", // Rojo Claro
        bright_honey: "#F3B61F", // Miel Brillante
        softened_magenta: "#C21D6B", // Magenta Suavizado
      },
    },
  },
  plugins: [],
}