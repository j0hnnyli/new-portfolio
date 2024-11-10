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
  			primary_green: '#15803d',
				HTML_color: '#ea580c',
				CSS_color: '#2563eb',
				HTMLCSS_mix: '#6b7280',
				Javascript_color: '#eab308',
				Typescript_color: '#1d4ed8',
				Nodejs_color: '#166534',
				React_color: '#38bdf8',
				Nextjs_color: '#334155',
				Tailwind_color: '#38bdf8',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
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
