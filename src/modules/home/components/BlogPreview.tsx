import React, { FC } from "react";
import Icon from "supercons";

import BlogList from "@/modules/blog/components/BlogList";
import Link from "next/link";

const BlogPreview: FC = () => {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Latest Articles</h2>
				<Link href="/blog">
					<div className="flex gap-1 hover:gap-3 transition-all duration-300 cursor-pointer text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-300">
						<span>View All Articles</span>
						<Icon glyph="enter" size={22} />
					</div>
				</Link>
			</div>
			<BlogList />
		</div>
	);
};

export default BlogPreview;
