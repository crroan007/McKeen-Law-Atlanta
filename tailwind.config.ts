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
                    900: '#183a2a', // Deep Green (Primary)
                    800: '#23523b', // Lighter Green variant
                },
                cream: {
                    DEFAULT: '#FBF9F3',
                },
                gold: {
                    500: '#b5944a', // Legacy Gold
                    600: '#a0823e', // Darker variant for hover
                },
            },
            fontFamily: {
                serif: ['adobe-garamond-pro', 'Georgia', 'serif'],
                sans: ['proxima-nova', 'system-ui', 'sans-serif'],
                display: ['trajan-pro-3', 'adobe-garamond-pro', 'serif'], // For logo and major headings
            },
        },
    },
    plugins: [],
};
export default config;
