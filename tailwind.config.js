module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--jakartaSans-font)"],
				emoji: ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
			},
			colors: {
				darkText: "#FFFFFF",
				dark: "#171717",
				light: "#fafafa",
			},
		},
	},
	plugins: [],
};
