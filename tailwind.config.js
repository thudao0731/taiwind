/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//> npx tailwindcss -i ./src/tailwind.css -o ./src/main.css --watch