import React, { FC } from "react";
import { motion } from "framer-motion";

const Status: FC = () => {
	return (
		<div className="flex items-center gap-2 pb-2 ">
			<motion.div
				className="h-2 w-2 rounded-full bg-green-600"
				animate={{ scale: [1, 1.2, 1] }}
				transition={{ duration: 0.5, repeat: Infinity }}
			/>
			<span className="font-medium text-sm animate-pulse">
				Available for hire.
			</span>
		</div>
	);
};

export default Status;
