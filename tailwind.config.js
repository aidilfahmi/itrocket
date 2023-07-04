/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./styles/**/*.{js,ts,jsx,tsx,css,scss}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: []
}
