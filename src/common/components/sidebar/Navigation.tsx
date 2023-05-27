import React, { FC } from "react";
import Menu from "./Menu";
import { MENU_ITEMS, SOCIAL_MEDIA } from "@/common/constant/menu";
import Breakline from "../elements/Breakline";

const Navigation: FC = () => {
	return (
		<>
			<Menu list={MENU_ITEMS} />
			<Breakline />
			<Menu title="Let's Connect" list={SOCIAL_MEDIA} />
		</>
	);
};

export default Navigation;
