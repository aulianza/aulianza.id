import { getNowPlaying } from '@/services/spotify'

export async function GET() {
  try {
    const spotifyData = await getNowPlaying()

    return Response.json(spotifyData.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
      status: 200,
    })
  } catch (error) {
    return Response.json(
      { message: 'Internal Server Error' },
      {
        status: 500,
      },
    )
  }
}

export const dynamic = 'force-dynamic'
