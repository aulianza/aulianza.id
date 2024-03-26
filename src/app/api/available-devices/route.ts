import { getAvailableDevices } from '@/services/spotify'

export async function GET() {
  try {
    const response = await getAvailableDevices()

    return Response.json(response.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
      status: response.status,
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
