import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Profile from "../../sidebar/Profile";
import Breakline from "../../elements/Breakline";
import Navigation from "../../sidebar/Navigation";
import ToggleMode from "../../elements/ToggleMode";

import useIsMobile from "@/common/hooks/use-is-mobile";

const Sidebar = () => {
	const isMobile = useIsMobile();
	const [isSticky, setIsSticky] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			const sidebar = document.getElementById("sidebar");
			if (sidebar) {
				const { top } = sidebar.getBoundingClientRect();
				setIsSticky(top <= 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="sidebar"
			className={clsx(
				"sticky ",
				isSticky && "lg:py-14 transition-all duration-300",
				"top-0 z-10 flex flex-col m-0 lg:mt-6"
			)}
		>
			<Profile />
			{!isMobile && (
				<>
					<Breakline />
					<Navigation />
					<Breakline />
					<ToggleMode />
				</>
			)}
		</div>
	);
};

export default Sidebar;
