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
				HTML_color: '#ea580c',
				CSS_color: '#2563eb',
				HTMLCSS_mix: '#6b7280',
				Javascript_color: '#eab308',
				Typescript_color: '#1d4ed8',
				Nodejs_color: '#166534',
				React_color: '#38bdf8',
				Nextjs_color: '#334155',
				Tailwind_color: '#38bdf8',
				Github_color: '#24292e',
				Supabase_color: '#22c55e',
				MongoDB_color: '#023430',
				Framer_Motion_color: '#3b0764',
				Vue_color: '#41B883',
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
