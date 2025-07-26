/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '0' },
                    '60%': { backgroundPosition: '100%' },
                    '100%': { backgroundPosition: '200px' },
                },
            },
            animation: {
                shine: 'shine 3s linear infinite forwards',
            },
        }
    },
    plugins: [],
};