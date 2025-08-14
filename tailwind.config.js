/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            fontFamily: {
                fira: ['Fira Sans', 'sans-serif'],
            },
            colors: {
                primary: "#04c5e5",
            },
        }
    },
    plugins: [],
};