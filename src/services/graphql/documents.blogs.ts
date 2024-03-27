import { gql } from '@apollo/client'

export const blogOverviewFragment = gql(/* GraphQL */ `
  fragment BlogOverviewEntryFragment on blog_Entry {
    id
    title
    slug
    isFeatured
  }
`)

export const getBlogOverviewDocument = gql(/* GraphQL */ `
  ${blogOverviewFragment}

  query GetBlogs {
    blogsEntries {
      ...BlogOverviewEntryFragment
    }
  }
`)
