import { gql } from '@apollo/client'

export const projectEntryFragment = gql(/* GraphQL */ `
  fragment ProjectEntryFragment on projects_project_Entry {
    id
    title
    slug
    projectFeatured
    projectHeaderImage {
      url
    }
    stacks {
      ... on stacks_Category {
        id
        stackHandle
        title
      }
    }
  }
`)

export const getProjectsDocument = gql/* GraphQL */ `
  ${projectEntryFragment}

  query GetProjects {
    projectsEntries {
      ...ProjectEntryFragment
    }
  }
`
