import { gql } from '@apollo/client'

export const blogOverviewFragment = gql(/* GraphQL */ `
  fragment BlogOverviewEntryFragment on blog_Entry {
    id
    title
    slug
    dateCreated
    description
    isFeatured
    featuredImage {
      url
    }
  }
`)

export const blogBlockFragment = gql(/* GraphQL */ `
  fragment BlogBlockFragment on blogSection_Entry {
    id
    title
    doxterContent
  }
`)

export const blogEntryFragment = gql(/* GraphQL */ `
  fragment BlogEntryFragment on blog_Entry {
    id
    title
    slug
    description
    dateCreated
    dateUpdated
    isFeatured
    blogBlock {
      ...BlogBlockFragment
    }
  }
`)

export const getBlogOverviewDocument = gql/* GraphQL */ `
  ${blogOverviewFragment}

  query GetBlogs {
    blogsEntries {
      ...BlogOverviewEntryFragment
    }
  }
`

export const getBlogDetailDocument = gql/* GraphQL */ `
  ${blogBlockFragment}
  ${blogEntryFragment}
  query GetBlogDetail($slug: [String]) {
    blogsEntries(slug: $slug) {
      ...BlogEntryFragment
    }
  }
`
