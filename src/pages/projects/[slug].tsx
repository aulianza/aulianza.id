import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import ProjectDetail from "@/modules/projects/components/ProjectDetail";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

import { ProjectItemProps } from "@/common/types/projects";

const PAGE_TITLE = "Projects Details";
const PAGE_DESCRIPTION =
  "Showcasing my passion for technology, design, and problem-solving through code.";

const ProjectsDetailPage: NextPage<ProjectItemProps> = (project) => {
  console.log("🚀 aulianza ~ project => ", project);

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;
