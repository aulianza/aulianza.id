import React, { FC } from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { MenuItemProps } from "@/common/types/menu";

type MenuProps = {
	list: MenuItemProps[];
};

const Menu: FC<MenuProps> = ({ list }) => {
	return (
		<div className="flex flex-col space-y-1">
			{list?.map((item: MenuItemProps, index: number) => (
				<MenuItem key={index} {...item} />
			))}
		</div>
	);
};

export default Menu;
