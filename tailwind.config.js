// tailwind.config.js
import tailwindcssNoScrollbar from 'tailwindcss-no-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
    extend: {},
 },
 plugins: [
    tailwindcssNoScrollbar
 ],
}