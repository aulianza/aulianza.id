import { FC } from "react";
import Icon from "supercons";

interface MobileMenuButtonProps {
	expandMenu: boolean;
	setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({
	expandMenu,
	setExpandMenu,
}) => {
	return (
		<div className="flex items-center justify-end">
			<button
				className="block hover:text-gray-900 dark:text-white"
				onClick={() => setExpandMenu(!expandMenu)}
			>
				{!expandMenu ? (
					<Icon glyph="menu" size={40} />
				) : (
					<Icon glyph="view-close" size={40} />
				)}
			</button>
		</div>
	);
};

export default MobileMenuButton;
