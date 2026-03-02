// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui']
			},
			colors: {
				primary: '#2563eb',
				secondary: '#4f46e5',
				accent: '#facc15'
			},
			boxShadow: {
				glow: '0 0 40px rgba(37,99,235,0.35)'
			},
			backgroundImage: {
				'hero-gradient':
					'linear-gradient(135deg, rgba(37,99,235,0.25), rgba(168,85,247,0.25))'
			}
		}
	},
	plugins: []
};