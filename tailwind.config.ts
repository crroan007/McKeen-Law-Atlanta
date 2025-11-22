import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brandGreen: {
                    900: '#242b33', // Rich Charcoal (Primary)
                    800: '#2f3740', // Lighter Charcoal variant
                },
                cream: {
                    DEFAULT: '#FBF9F3',
                },
                gold: {
                    500: '#b2934f', // Logo Gold (Primary)
                    600: '#9d7f43', // Darker variant for hover
                },
            },
            fontFamily: {
                serif: ['trajan-pro-3', 'adobe-garamond-pro', 'Georgia', 'serif'],
                sans: ['trajan-pro-3', 'proxima-nova', 'system-ui', 'sans-serif'],
                display: ['trajan-pro-3', 'adobe-garamond-pro', 'serif'], // For logo and major headings
            },
        },
    },
    plugins: [],
};
export default config;
