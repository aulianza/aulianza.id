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
        <p className="leading-loose text-neutral-800 dark:text-neutral-300">
          Experienced Software Engineer, specializing in frontend development,
          with {currentyear - workStart} years of professional experience and a
          total of {currentyear - codingStart} years in web development since{" "}
          {codingStart}. Skilled in JavaScript, TypeScript, and PHP, with
          proficiency in various frameworks such as React.js, Angular, Vue.js,
          Node.js, and Laravel.
        </p>
      </div>
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
