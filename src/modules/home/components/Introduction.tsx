import React, { FC } from "react";

const Introduction: FC = () => {
	return (
		<div className="space-y-5">
			<h2 className="text-2xl lg:text-3xl font-bold">Hey, I'm Ryan 👋</h2>
			<>
				<ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
					<li>life-long learner</li>
					<li>
						Jakarta, Indonesia <span className="ml-1">🇮🇩</span>
					</li>
				</ul>
			</>
			<p className="leading-relaxed font-medium">
				Experienced Software Engineer, specializing in frontend development,
				with 4 years of professional experience and a total of 8 years in web
				development since 2014. Skilled in JavaScript, TypeScript, and PHP, with
				proficiency in various frameworks such as React.js, Angular, Vue.js,
				Node.js, and Laravel.
			</p>
		</div>
	);
};

export default Introduction;
