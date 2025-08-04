/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            animation: {
                shine: 'shine 2s linear infinite',
            },
        }
    },
    plugins: [],
};