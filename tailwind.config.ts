import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary_color: '#F9F6EE',
				secondary_color : '#363c45',
				third_color : '#8A4D9D',
				error_red: '#ef4444',
				Postgresql_color: '#336791',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
			fontFamily:{
				playfair: ['var(--playfair-font)', 'serif'],
			},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
