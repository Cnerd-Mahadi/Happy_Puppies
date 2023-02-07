/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Rubik", "sans-serif"],
			},
			// backgroundImage: {
			// 	hero: "url('/src/images/bg-hero.jpg')",
			// },
		},
	},
	plugins: [],
};
