import { fetchPageInfo } from '@/services/graphql/data-fetching'

const TestPage = async () => {
  const data = await fetchPageInfo('blog')
  return (
    <>
      <h1>{new Date().toISOString()}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default TestPage

export const dynamic = 'force-dynamic'
