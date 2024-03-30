import { client } from '@/services/graphql/graphql'
import { getPageDetailDocument } from '@/services/graphql/documents.pages'
import { PagesDocumentEntryFragment } from '@/__generated__/graphql'

export const fetchPageInfo = async (
  slug: string,
): Promise<PagesDocumentEntryFragment | null> => {
  const data = await client.query({
    query: getPageDetailDocument,
    fetchPolicy: 'network-only',
    variables: { slug: ['blog'] },
  })

  return data.data.pagesEntries.length > 0 ? data.data.pagesEntries[0] : null
}
