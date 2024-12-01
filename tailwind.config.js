/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75', // 175%
        '200': '2',    // 200%
        '250': '2.5',  // 250%
        '300': '3',    // 300%
      },
      colors: {
        salmonLight: '#FFA07A',    // Salmão Claro 
        aquaGreen: '#B0E0E6',      // Verde Água
        roseTea: '#F8B195',        // Rosa Chá
       
        paleLilac: '#D8BFD8',      // Lilás Pálido
        twilightBlue: '#4682B4',   // Azul Crepúsculo

        offWhite: '#F5F5F5',       // Branco Off-White
        lightBeige: '#D3B8AE',     // Bege Claro
      },
    },
  },
  plugins: [],
}
