import React, { FC } from "react";
import styled from "@emotion/styled";

const Introduction: FC = () => {
	const currentyear = new Date().getFullYear();
	const workStart = 2019;
	const codingStart = 2014;

	return (
		<StyledSection className="space-y-5">
			<h1 className="text-2xl lg:text-3xl font-semibold">
				Hey, I&apos;m Ryan 👋
			</h1>
			<div className="space-y-3 bg-light dark:bg-dark">
				<>
					<ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
						<li>life-long learner</li>
						<li>
							Based in Jakarta <span className="ml-1">🇮🇩</span>
						</li>
					</ul>
				</>
				<p className="leading-loose dark:text-neutral-300">
					Experienced Software Engineer, specializing in frontend development,
					with {currentyear - workStart} years of professional experience and a
					total of {currentyear - codingStart} years in web development since{" "}
					{codingStart}. Skilled in JavaScript, TypeScript, and PHP, with
					proficiency in various frameworks such as React.js, Angular, Vue.js,
					Node.js, and Laravel.
				</p>
			</div>
			{/* <div className="space-y-4">
				<p className="leading-loose">
					Experienced Software Engineer | Frontend Specialist | JavaScript |
					React.js | Angular | Vue.js | Node.js | Laravel
				</p>
				<p className="leading-loose">
					Highly skilled and results-driven Software Engineer with a focus on
					frontend development. Offering 4 years of professional experience and
					a total of 8 years in web development since 2014. Proficient in
					JavaScript, TypeScript, and PHP, with expertise in a wide range of
					frameworks, including React.js, Angular, Vue.js, Node.js, and Laravel.
				</p>
				<p className="leading-loose">
					Throughout my career, I have demonstrated a strong ability to
					transform design concepts into seamless and interactive user
					interfaces. With a keen eye for detail and a passion for delivering
					exceptional user experiences, I excel at implementing responsive
					designs that adapt to various devices and screen sizes.
				</p>
				<p className="leading-loose">
					I have a proven track record of collaborating effectively with
					cross-functional teams, including designers and backend developers, to
					create robust and scalable web applications. My in-depth knowledge of
					frontend technologies and frameworks allows me to contribute to the
					full development lifecycle, from planning and design to deployment and
					maintenance.
				</p>
				<p className="leading-loose">
					Constantly staying updated with the latest industry trends and best
					practices, I am committed to delivering cutting-edge solutions that
					meet and exceed client expectations. My strong problem-solving skills
					and attention to detail enable me to tackle complex challenges and
					drive innovation in every project I undertake.
				</p>
				<p className="leading-loose">
					If you are seeking a dedicated and experienced Software Engineer with
					a frontend specialization, I would welcome the opportunity to discuss
					how my skills and expertise can contribute to your organization's
					success. Let's connect and explore potential collaborations.
				</p>
			</div> */}
		</StyledSection>
	);
};

export default Introduction;

const StyledSection = styled.section`
	background-image: url("/images/background.svg");
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 480px) {
		background-image: unset;
	}
`;
