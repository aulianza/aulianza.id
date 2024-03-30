import { fetchPageInfo } from '@/services/graphql/data-fetching'
import Mdx from '@/common/components/elements/mdx/Mdx'

const TestPage = async () => {
  const data = await fetchPageInfo('blog')

  const dataMdx =
    '```js title="lib/test.tsx"\n' +
    "console.log('hi hallo bonkers 123')\n" +
    '```\n\n# Hello, world!'
  return (
    <>
      <h1>{new Date().toISOString()}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Mdx content={dataMdx} />
    </>
  )
}

export default TestPage

export const dynamic = 'force-dynamic'
