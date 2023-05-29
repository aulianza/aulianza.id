import React, { FC } from "react";
import BlogCard from "./BlogCard";
import { BlogItemProps } from "@/common/types/blog";

const BLOG_DATA = [
	{
		title: "Next.js Authentication using Higher-Order Components",
		category: "Programming",
		image: "/images/placeholder.png",
		views: 12324,
		date: "2023-05-27",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor leo a sagittis rutrum. Nullam finibus tellus non ex condimentum cursus. Sed ac leo justo.",
		slug: "exploring-the-wonders-of-nature",
	},
	{
		title: "7 Form Components For React Hook Form I Always Use",
		category: "Tips & Tricks",
		image: "/images/placeholder.png",
		views: 6745,
		date: "2023-05-26",
		content:
			"Regular exercise has numerous benefits for both physical and mental health. It helps in maintaining a healthy weight, reducing the risk of chronic diseases, and improving mood and overall well-being.",
		slug: "the-benefits-of-regular-exercise",
	},
	{
		title: "React Core Concept II: useEffect",
		category: "Programming",
		image: "/images/placeholder.png",
		views: 33123,
		date: "2023-05-25",
		content:
			"If you're planning your next vacation, consider these top 10 travel destinations for 2023. From stunning beaches to vibrant cities, these destinations offer unique experiences and unforgettable adventures.",
		slug: "top-10-travel-destinations-in-2023",
	},
];

const BlogList: FC = () => {
	return (
		<div className="flex flex-col gap-6 sm:gap-4">
			{BLOG_DATA?.map((item: BlogItemProps, index: number) => (
				<BlogCard key={index} {...item} />
			))}
		</div>
	);
};

export default BlogList;
