import { gql } from '@apollo/client'

export const projectEntryStackCategoryFragment = gql(/* GraphQL */ `
  fragment ProjectEntryStackCategoryFragment on stacks_Category {
    id
    stackHandle
    title
  }
`)
export const projectEntryFragment = gql(/* GraphQL */ `
  fragment ProjectEntryFragment on projects_project_Entry {
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

export const getProjectsDocument = gql/* GraphQL */ `
  ${projectEntryStackCategoryFragment}
  ${projectEntryFragment}

  query GetProjects {
    projectsEntries {
      ...ProjectEntryFragment
    }
  }
`
