import { gql } from '@apollo/client'

export const projectEntryStackCategoryFragment = gql(/* GraphQL */ `
  fragment ProjectEntryStackCategoryFragment on stacks_Category {
    id
    stackHandle
    title
  }
`)
export const projectEntryFragment = gql(/* GraphQL */ `
  fragment ProjectEntryFragment on project_Entry {
    id
    title
    slug
    projectFeatured
    projectDescription
    projectHeaderImage {
      url
    }
    stacks {
      ...ProjectEntryStackCategoryFragment
    }
  }
`)

export const projectDetailFragment = gql(/* GraphQL */ `
  fragment ProjectDetailFragment on project_Entry {
    title
    slug
    dateCreated
    dateUpdated
    projectInformation
    projectDescription
    projectLiveDemoLink
    projectSourcecodeRepositoryLink
    projectHeaderImage {
      id
      url
    }
    stacks {
      ...ProjectEntryStackCategoryFragment
    }
  }
`)

export const getProjectsDocument = gql/* GraphQL */ `
  ${projectEntryStackCategoryFragment}
  ${projectEntryFragment}

  query GetProjects {
    projectsEntries {
      ...ProjectEntryFragment
    }
  }
`
export const getProjectDetailDocument = gql/* GraphQL */ `
  ${projectDetailFragment}
  ${projectEntryStackCategoryFragment}

  query GetProjectDetail($slug: [String]) {
    projectsEntries(slug: $slug) {
      ...ProjectDetailFragment
    }
  }
`
