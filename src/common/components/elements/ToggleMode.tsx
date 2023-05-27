import useIsMobile from "@/common/hooks/useIsMobile";
import React, { FC } from "react";
import Icon from "supercons";

type ToggleModeProps = {
	onToggleChange: () => void;
	isDarkMode: boolean;
};

const ToggleMode: FC<ToggleModeProps> = ({ onToggleChange, isDarkMode }) => {
	const switchText = "Switch to ";

	return (
		<button
			onClick={onToggleChange}
			className="flex items-center gap-2 py-2 px-3 w-full lg:hover:dark:bg-zinc-800 lg:hover:bg-gray-200 lg:hover:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300"
		>
			<Icon glyph={isDarkMode ? "idea" : "moon-fill"} size={22} />
			<div className="flex">
				<span className="hidden xl:block xl:mr-1">{switchText}</span>
				{isDarkMode ? "Light Mode" : "Dark Mode"}
			</div>
		</button>
	);
};

export default ToggleMode;
