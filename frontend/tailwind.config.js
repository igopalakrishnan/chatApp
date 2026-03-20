// tailwind.config.js
import daisyui from 'daisyui';

/** @type {import{'tailwindcss'}.config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [

    ]
  }
}
