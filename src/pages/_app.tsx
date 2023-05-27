import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import AOS from "aos";

import Layout from "@/common/components/layouts";
import { jakartaSans } from "@/common/styles/fonts";

import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import "@/common/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			delay: 50,
		});
	}, []);

	return (
		<>
			<style jsx global>
				{`
					html {
						--jakartaSans-font: ${jakartaSans.style.fontFamily};
					}
				`}
			</style>
			<ThemeProvider attribute="class" defaultTheme="dark">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
};

export default App;
