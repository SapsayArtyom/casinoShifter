/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./src/**/*.{html,js}",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            white: '#fff',
            orange: '#DC7000',
            orangeGradient: 'linear-gradient(92.48deg, #FA8305 2.08%, #FB9E3C 117.25%)',
            background: '#070707',
            mainBgr: 'linear-gradient(to top, #08070A, #271E4E)',
            greyForm: '#89878F',
            greyBorder: '#CECECE',
            transparent: 'rgba(0, 0, 0, 0)'
        },
        extend: {},
    },
    plugins: [],
}

