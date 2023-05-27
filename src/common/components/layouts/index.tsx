import React, { FC, ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

import Sidebar from "./partials/Sidebar";
import Footer from "./partials/Footer";
import { ToggleModeContext } from "@/common/context/ToggleModeContext";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setIsDarkMode(prefersDarkMode);
	}, []);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ToggleModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			<div
				className={clsx(
					"max-w-6xl mx-auto lg:px-8 lg:py-4 xl:py-10",
					isDarkMode ? "dark text-darkText" : ""
				)}
			>
				<div className="flex flex-col lg:flex-row lg:gap-5">
					<header className="lg:w-1/5">
						<Sidebar />
					</header>
					<main className="lg:w-4/5 transition-all duration-300">
						{children}
						{/* <Footer /> */}
					</main>
				</div>
			</div>
		</ToggleModeContext.Provider>
	);
};

export default Layout;
