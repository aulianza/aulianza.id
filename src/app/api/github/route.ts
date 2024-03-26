import { type NextRequest } from 'next/server'
import { getGithubUser } from '@/services/github'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  let type = ''
  if (typeof searchParams.get('type') === 'string') {
    type = searchParams.get('type') as string
  }

  const response = await getGithubUser(type)

  return Response.json(response.data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
    status: response.status,
  })
}
