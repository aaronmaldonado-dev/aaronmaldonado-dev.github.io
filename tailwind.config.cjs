/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Source Sans Pro', 'sans-serif'],
				'serif': ['Frank Ruhl Libre', 'serif'],
			}
		},
	},
	plugins: [],
}
