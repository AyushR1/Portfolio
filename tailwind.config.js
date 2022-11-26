/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "ui-sans-serif"],
			fira: ["Fira Code", "ui-sans-serif"],
		},
		extend: {
			colors: {
				gray: "#abb2bf",
				green: "#00a09a",
				black: "#222221",
			},
			backgroundImage: {
				"project1": "url('/src/assets/img/saarthi.png')",
				"project2": "url('/src/assets/img/upasththi.png')",
				"project3": "url('/src/assets/img/arb.png')",
				"project4": "url('/src/assets/img/dic.png')",
				"project5": "url('/src/assets/img/dic.png')",
				"project6": "url('/src/assets/img/project.png')",
			
			
			},
			boxShadow: {
				card: "0 10px 30px -10px rgba(34, 34, 33, 0.2)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
