import { useQuery } from '@apollo/client'

import { GQL_PROJECT_QUERY } from '@/services/graphql/documents'

export const useProjectQuery = () => {
  const { loading, data } = useQuery(GQL_PROJECT_QUERY)

  return {
    loading,
    data,
  }
}
