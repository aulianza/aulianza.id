import React, { FC, useContext } from "react";
import ToggleMode from "./ToggleMode";
import { ToggleModeContext } from "@/common/context/ToggleModeContext";

const ToogleModeButton: FC = () => {
	const { toggleDarkMode, isDarkMode } = useContext(ToggleModeContext);

	return <ToggleMode onToggleChange={toggleDarkMode} isDarkMode={isDarkMode} />;
};

export default ToogleModeButton;
