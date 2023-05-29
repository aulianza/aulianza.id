module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--jakartaSans-font)"],
				code: ["var(--firaCode-font)"],
				emoji: ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
			},
			colors: {
				darkText: "#E4E6EB",
				dark: "#121212",
				light: "#fafafa",
			},
		},
	},
	plugins: [],
};
