import React, { useEffect } from "react";
import AOS from "aos";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/common/styles/theme";
import Layout from "@/common/components/layouts";

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
		<div className="bg-white dark:bg-dark">
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</div>
	);
};

export default App;
