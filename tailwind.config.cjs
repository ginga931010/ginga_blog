/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        // pixel: ['"Cubic 11"', 'sans-serif'],

        sans: ['"Sarasa Gothic TC"', "sans-serif", ...defaultTheme.fontFamily.sans],
        
        // 新增這行，讓 Tailwind 認識你的像素字體
        pixel: ['"Cubic 11"', 'sans-serif'],
        // 1. 全站預設大洗牌！讓所有的 UI、導覽列、清單都自動變成像素風
        
        // sans: ['"Cubic 11"', "sans-serif", ...defaultTheme.fontFamily.sans],
        
        // // 2. 建立一個文章專用的設定 (留著備用)
        // reading: ['"Sarasa Gothic TC"', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
