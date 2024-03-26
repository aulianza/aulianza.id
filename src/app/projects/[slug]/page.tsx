import { client } from '@/services/graphql/graphql'
import { getProjectDetailDocument } from '@/services/graphql/documents'
import { redirect } from 'next/navigation'

const ProjectDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const data = await client.query({
    query: getProjectDetailDocument,
    variables: {
      slug,
    },
  })

  if (data.data.projectsEntries.length == 0) {
    redirect('/404')
    return <></>
  }
  return <pre>{JSON.stringify(data.data)}</pre>
}

export default ProjectDetailPage
