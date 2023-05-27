import React, { ReactNode } from "react";

type ContainerProps = {
	children: ReactNode;
	className?: string;
	[propName: string]: any;
};

const Container = ({ children, className = "", ...others }: ContainerProps) => {
	return (
		<div className={`mt-20 lg:mt-0 p-8 ${className} `} {...others}>
			{children}
		</div>
	);
};

export default Container;
