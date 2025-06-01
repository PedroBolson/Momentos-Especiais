/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'dancing': ['Dancing Script', 'cursive'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'greatvibes': ['Great Vibes', 'cursive'],
            },
            colors: {
                'pink-custom': {
                    50: '#fef7f7',
                    100: '#fce4ec',
                    200: '#f8bbd0',
                    300: '#e1bee7',
                },
            },
            animation: {
                'gradient': 'gradient 6s ease infinite',
                'fadeIn': 'fadeIn 0.8s ease forwards',
                'arrowPulse': 'arrowPulse 1s infinite ease-in-out',
                'heartFloat': 'heartFloat 15s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0% 50%' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                arrowPulse: {
                    '0%, 100%': { transform: 'translateY(-50%) scale(1)' },
                    '50%': { transform: 'translateY(-50%) scale(1.2)' },
                },
                heartFloat: {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
}
