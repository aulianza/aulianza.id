import { gql } from '@apollo/client'

export const pagesDocumentEntry = gql(/* GraphQL */ `
  fragment PagesDocumentEntry on pages_Entry {
    id
    title
    slug
    doxterContent
  }
`)

export const getPageDetailDocument = gql/* GraphQL */ `
  ${pagesDocumentEntry}

  query GetPageDetail($slug: [String]) {
    pagesEntries(slug: $slug) {
      ...PagesDocumentEntry
    }
  }
`
