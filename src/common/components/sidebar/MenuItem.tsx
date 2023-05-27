import React, { FC, useContext, useState } from "react";
import Link from "next/link";
import Icon from "supercons";
import { useRouter } from "next/router";

import { MenuItemProps } from "@/common/types/menu";
import { MenuContext } from "@/common/context/MenuContext";

const MenuItem: FC<MenuItemProps> = ({ name, href, icon }) => {
	const { hideNavbar } = useContext(MenuContext);

	const router = useRouter();
	const isActive = router.pathname === href;
	const isExternalUrl = href?.includes("http");
	const targetUrl = isExternalUrl ? "_blank" : "";

	const [isHovered, setIsHovered] = useState<boolean>(false);

	const activeClasses = isActive
		? "bg-gray-200 rounded-lg dark:bg-zinc-800"
		: "hover:dark:bg-zinc-800 md:hover:bg-gray-200 md:hover:rounded-lg md:hover:scale-105 lg:transition-all lg:duration-300";

	const handleClick = () => {
		hideNavbar();
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<Link href={href} target={targetUrl} onClick={handleClick}>
			<div
				className={`flex items-center gap-2 py-2 px-3 ${activeClasses}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div>{icon}</div>
				<div className="flex-grow">{name}</div>
				{isExternalUrl && isHovered && (
					<Icon
						glyph="enter"
						size={22}
						className="text-gray-500 -rotate-45 lg:transition-all lg:duration-300"
					/>
				)}
			</div>
		</Link>
	);
};

export default MenuItem;
