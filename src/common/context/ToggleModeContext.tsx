import React, { ReactNode, createContext, useState } from "react";

type ToggleModeContextType = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

export const ToggleModeContext = createContext<ToggleModeContextType>({
	isDarkMode: false,
	toggleDarkMode: () => {},
});
