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
                    DEFAULT: '#F8F4E6',
                },
                gold: {
                    500: '#b5944a', // Legacy Gold
                    600: '#a0823e', // Darker variant for hover
                },
            },
            fontFamily: {
                serif: ['var(--font-eb-garamond)', 'serif'],
                sans: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
