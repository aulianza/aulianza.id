import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Projects from "@/modules/projects";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

interface ProjectsPageProps {
  fallback: any;
}

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION =
  "Showcasing my passion for technology, design, and problem-solving through code.";

const ProjectsPage: NextPage<ProjectsPageProps> = ({ fallback }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects />
      </Container>
    </>
  );
};

export default ProjectsPage;
